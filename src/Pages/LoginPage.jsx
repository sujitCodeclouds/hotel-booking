import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userName = "admin@admin.com";
  const userPassword = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === userName && password === userPassword) {
      toast.success("Login Successfully!");
      localStorage.setItem("isloggedin", "yes");
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };
  return (
    <>
      <div className="login-page container">
        <div className="login-form ">
          <form>
            <h4 className="form__heading">Login </h4>
            <hr />
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="exampleInputPassword1"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
