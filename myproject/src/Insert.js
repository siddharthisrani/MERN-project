import { useState, useEffect } from "react";
import axios from "axios";
import {NavLink} from  'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Insert = () => {
  const [myval, setVal] = useState({
    email: "",
    name: "",
    password: "",
    punchin: null,
    punchout: null,
  });
  const [recordCreated, setRecordCreated] = useState(false);

  useEffect(() => {
    if (recordCreated) {
      handlePunchOut();
    }
  }, [recordCreated]);

  const handlePunchIn = () => {
    setVal((values) => ({
      ...values,
      punchin: new Date().toLocaleTimeString("en-US", { hour12: false }),
      punchout: null,
    }));
    setRecordCreated(true);
  };

  const handlePunchOut = async () => {
    try {
      const existingData = await axios.get("http://localhost:4000/stuDisplay");
      const punchinTime = existingData.data[0].punchin;
  
      // Update the state values before making the POST request
      setVal((values) => ({
        ...values,
        punchin: punchinTime,
        punchout: new Date().toLocaleTimeString("en-US", { hour12: false }),
      }));
  
      // Make the POST request with the updated state values
      await axios.post("http://localhost:4000/stuinsert", {
        email: myval.email,
        name: myval.name,
        password: myval.password,
        punchin: punchinTime,
        punchout: new Date().toLocaleTimeString("en-US", { hour12: false }),
      });
  
      toast.success("Success Notification !");
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("Error during submission");
    }
  };


  return (
    <>
      <div style={{ width: "500px", margin: "auto" }}>
        <h1>Insert Records</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" style={{ color: "white" }}>Email address</label>
          <input type="email" name="email" value={myval.email} onChange={(e) => setVal((prevValues) => ({ ...prevValues, email: e.target.value }))} className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" style={{ color: "white" }}>Name</label>
          <input type="text" name="name" value={myval.name} onChange={(e) => setVal((prevValues) => ({ ...prevValues, name: e.target.value }))} className="form-control" id="exampleInputPassword1" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" style={{ color: "white" }}>Password</label>
          <input type="password" name="password" value={myval.password} onChange={(e) => setVal((prevValues) => ({ ...prevValues, password: e.target.value }))} className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <NavLink to="/home">
        <button type="submit" className="btn btn-primary" onClick={handlePunchIn}>Submit</button></NavLink>
       
      </div>
    </>
  );
};

export default Insert;
