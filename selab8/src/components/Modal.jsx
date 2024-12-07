// MyVerticallyCenteredModal.js
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate();
  const [state, setState] = useState(true);
  const [UserCred, setCred] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [logincred, setLogincred] = useState({
    email: "",
    password: "",
  });
  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLogincred({ ...logincred, [name]: value });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCred({ ...UserCred, [name]: value });
  };

  const HnadlLoginSubmitted = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://property-hub-backend.vercel.app/user/signin",
        logincred
      );
      if (response.status === 200) {
        localStorage.setItem("email", logincred.email);
        alert("Login Successful");
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log("Login failed:", error.message);
      alert("An error occurred during login");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://property-hub-backend.vercel.app/user/signup",
        UserCred
      );
      if (res.status === 400) {
        console.log("400 message error:", res.message);
      } else {
        console.log("response", res.data);
        alert("Registered successfully");
        setState(false);
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return state ? (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="bg-slate-300 rounded-md">
        <Modal.Header closeButton className="bg-slate-300"></Modal.Header>

        <div className="flex items-center justify-center gap-4 flex-col">
          <form
            onSubmit={handleSubmit}
            className="w-full text-black flex items-center justify-center flex-col gap-4 py-10 rounded-lg"
          >
            <h1 className="text-blue-500 text-2xl font-semibold py-2">
              Register yourself with us
              <span
                onClick={() => {
                  setState(false);
                }}
                className="text-sm text-gray-700 hover:cursor-pointer px-3"
              >
                Already Registered
              </span>
            </h1>
            <input
              type="text"
              className="w-2/3 rounded-md px-3 py-2 outline-green-500"
              placeholder="UserName"
              name="username"
              value={UserCred.username}
              onChange={handleChange}
            />
            <input
              type="email"
              className="w-2/3 rounded-md px-3 py-2 outline-green-500"
              placeholder="Email"
              name="email"
              value={UserCred.email}
              onChange={handleChange}
            />
            <input
              type="password"
              className="w-2/3 rounded-md px-3 py-2 outline-green-500"
              placeholder="Password"
              required
              name="password"
              value={UserCred.password}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-500 py-2 px-4 rounded-lg text-white w-2/3"
            >
              Sign Up
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  ) : (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="bg-slate-300 rounded-md">
        <Modal.Header
          closeButton
          onClick={() => {
            setState(true);
          }}
          className="bg-slate-300"
        ></Modal.Header>

        <div className="flex items-center justify-center gap-4 flex-col">
          <form
            className="w-full text-black flex items-center justify-center flex-col gap-4 py-10 rounded-lg"
            onSubmit={HnadlLoginSubmitted}
          >
            <h1 className="text-blue-500 text-2xl font-semibold py-2">
              SignIn Here
              <span
                onClick={() => {
                  setState(true);
                }}
                className="px-2 text-sm text-gray-700 cursor-pointer"
              >
                Register Yourself
              </span>
            </h1>

            <input
              type="email"
              className="w-2/3 rounded-md px-3 py-2 outline-green-500"
              placeholder="Email"
              name="email"
              value={logincred.email}
              onChange={handleLoginChange}
            />

            <input
              type="password"
              className="w-2/3 rounded-md px-3 py-2 outline-green-500"
              placeholder="Password"
              required
              name="password"
              value={logincred.password}
              onChange={handleLoginChange}
            />
            <button
              type="submit"
              className="bg-blue-500 py-2 px-4 rounded-lg text-white w-2/3"
            >
              SignIn
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
