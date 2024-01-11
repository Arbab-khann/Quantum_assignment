import "./loginStyle.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const navi = useNavigate();

  //when user not filled required data sending notification to fill.
  async function submit(e) {
    e.preventDefault();
    if (name === "") {
      toast.error("Fill all details", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      //when user not filled required data sending notification to fill.
    } else if (email === "") {
      toast.error("Fill all details", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      //when user not filled required data sending notification to fill.
    } else if (password === "") {
      toast.error("Fill all details", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      // after successful register sending data from frontend to backend in order to store in backend by POST method
      try {
        const response = await axios.post(
          "http://localhost:5050/user/register",
          { name, email, password, dob }
        );
        //when user register successfull showing notification
        if (response.data.msg === "user successfull register") {
          toast.success("successfull successful", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          // adding settimeout to show full toaster notification and move to login page
          setTimeout(() => {
            navi("/login");
          }, 2000);
          const data = response.data;
          localStorage.setItem("token", data.token);
        } else {
          toast.error("email alredy exist try new", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div>
      {/* making register form  */}
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="register">
          <form className="form">
            <p
              onClick={() => {
                navi("/login");
              }}
              className="log-in"
            >
              Login?
            </p>
            <label htmlFor="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
              required=""
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className="input"
              type="date"
              name="dob"
              placeholder="DOB"
              required=""
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="input"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
            />
            <button onClick={submit}>Register</button>
          </form>
        </div>
      </div>

      {/* react toaster for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default Register;
