import React, { useState } from "react";
import axios from "axios";
import "./addevent.css";
import ScriptTag from "react-script-tag";
import { ToastContainer, toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const notify = () => {
  toast.info("The event has been added succesfully!", {
    autoClose: false,
  });
};

const AddEvent = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [venue, setVenue] = useState("");
  const [link, setLink] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  let history = useHistory();

  let currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + 5);
  currentDate.setMinutes(currentDate.getMinutes() + 30);
  currentDate = currentDate.toISOString();
  let currentDateFormat = currentDate.replace(/:[^:]*$/, "");

  let newStartDate = new Date(startDate);
  newStartDate.setHours(newStartDate.getHours() + 5);
  newStartDate.setMinutes(newStartDate.getMinutes() + 30);
  newStartDate = newStartDate.toISOString();
  let newStartDateFormat = newStartDate.replace(/:[^:]*$/, "");

  const submit = (e) => {
    let data = JSON.parse(localStorage.getItem("data"));
    e.preventDefault();
    history.push("/user");
    axios
      .post("/newevent", {
        id: data.id,
        name,
        num,
        venue,
        startDate,
        endDate,
        link,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setName("");
    setNum("");
    notify();
    setVenue("");
  };

  return (
    <div>
      <ScriptTag type='text/javascript' src='script.js' />
      <div className='form-body'>
        <a href='/user'>
          <p className='backtoprofile'>
            <FaArrowLeft className='icon1' /> Back to Profile
          </p>
        </a>
        <h1 className='header-form'>Let's get your event setup</h1>
        <p className='form-subtext'>Fill in the details to get started!</p>
        <div className='form-container'>
          <form onSubmit={submit}>
            <div className='input-div'>
              <h5 className='label'>Event Name</h5>
              <input
                required
                className='input'
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
              ></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Maximum Attendance</h5>
              <input
                required
                className='input'
                value={num}
                onChange={(e) => setNum(e.target.value)}
                type='number'
              ></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Venue</h5>
              <input
                required
                className='input'
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                type='text'
              ></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Link</h5>
              <input
                required
                className='input'
                value={link}
                onChange={(e) => setLink(e.target.value)}
                type='text'
              ></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Event Start Date</h5>
              <input
                required
                min={currentDateFormat}
                className='input'
                onChange={(e) => setStartDate(e.target.value)}
                type='datetime-local'
              ></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Event End Date</h5>
              <input
                required
                min={newStartDateFormat}
                className='input'
                onChange={(e) => setEndDate(e.target.value)}
                type='datetime-local'
              ></input>
            </div>
            {/* <div className='input-div'>
              <h5 className='label'>Event Start Time</h5>
              <input className='input' type='time'></input>
            </div>
            <div className='input-div'>
              <h5 className='label'>Event End Time</h5>
              <input className='input' type='time'></input>
            </div> */}
            <input className='button' type='submit'></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
