import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
function BookForm({ title }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkedin, setCheckedin] = useState(new Date());
  const [checkedout, setCheckedout] = useState(new Date());
  const [errors, setErrors] = useState({});
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [startDate, setStartDate] = useState(new Date());
  let isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const isValidPhone =
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isLoggedIn =
      localStorage.getItem("isloggedin") === "yes" ? true : false;
    if (formValidation()) {
      if (!isLoggedIn) {
        navigate("/login");
        return false;
      }
      setUsers([
        ...users,
        {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          checkedin: checkedin,
          checkedout: checkedout,
        },
      ]);
      toast.success("Your Booking has been completed!!");
      handleClose();
      //navigate("/hotels");
      setEmail("");
      setName("");
      setPhoneNumber("");
      setCheckedin("");
      setCheckedout("");
      //handleClose();
    }
  };

  const formValidation = () => {
    let newErrors = {};
    if (name === "") {
      newErrors.name = <span className="text-red-800">Name Is Required</span>;
    }
    if (checkedin === "") {
      newErrors.checkedin = (
        <span className="text-red-800">Check In Date Is Required</span>
      );
    }
    if (checkedout === "") {
      newErrors.checkedout = (
        <span className="text-red-800">Check Out date Is Required</span>
      );
    }
    if (email === "") {
      newErrors.email = (
        <span className="text-red-800">Email Address Is Required</span>
      );
    } else if (!isValidEmail.test(email)) {
      newErrors.email = (
        <span className="text-red-800">Email address is invalid</span>
      );
    }
    // else {
    //   newErrors.email = <span className="text-green-800">Email is Valid</span>;
    // }
    if (phoneNumber === "") {
      newErrors.phoneNumber = (
        <span className="text-red-800">Phone Number Is Required</span>
      );
    } else if (!isValidPhone.test(phoneNumber)) {
      newErrors.phoneNumber = (
        <span className="text-red-800">Phone Number is invalid</span>
      );
    } else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      newErrors.phoneNumber = (
        <span className="text-red-800">Invalid Mobile Number Length</span>
      );
    }

    setErrors(newErrors);
    //console.log(newErrors);
    if (Object.keys(newErrors).length !== 0) {
      return false;
    }
    return true;
  };

  const [users, setUsers] = useState(() => {
    const data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
  });
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(users));
    // setIsLoggedIn(true);
    // console.log(isLoggedIn);
  }, [users]);

  // const loginCheck = (e) => {
  //   if (isLoggedIn) {
  //     navigate("/login");
  //     console.log(isLoggedIn, "Please Login");
  //   ¸}
  // };

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
        }}
      >
        {title}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Check In</label>
                  {/* <input
                    type="date"
                    className="form-control"
                    value={checkedin}
                    placeholder=""
                    onChange={(e) => setCheckedin(e.target.value)}
                  /> */}
                  <DatePicker
                    dateFormat="yyyy/MM/dd"
                    showIcon
                    className="form-control"
                    selected={checkedin}
                    onChange={(date) => setCheckedin(date)}
                    minDate={new Date()}
                  />

                  {errors.checkedin}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Check Out</label>
                  <DatePicker
                    dateFormat="yyyy/MM/dd"
                    showIcon
                    className="form-control"
                    selected={checkedout}
                    onChange={(date) => setCheckedout(date)}
                    minDate={new Date()}
                  />
                  {/* <input
                    type="date"
                    className="form-control"
                    value={checkedout}
                    placeholder=""
                    onChange={(e) => setCheckedout(e.target.value)}
                  /> */}
                  {errors.checkedout}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email}
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={phoneNumber}
                    placeholder="Phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  {errors.phoneNumber}
                </div>
              </div>

              <div className="col-md-12">
                <button type="submit" className="btn btn-primary">
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookForm;
