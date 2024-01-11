import axios from "axios";
import { useEffect, useState } from "react";
import "./adminpage.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Adminpage() {
  const [data, setData] = useState([]);

  // navigate to home
  const navi = useNavigate();
  const toRegister = () => {
    navi("/");
  };

  // fetching and showing users login data
  const details = async () => {
    await axios
      .get("http://localhost:5050/adminData")
      .then((Response) => setData(Response.data));
  };
  useEffect(() => {
    details();
  }, []);

  // making a function for delete functionality
  const handleDelete = async (id) => {
    await axios.delete("http://localhost:5050/delete/" + id);
    details();
    toast.success("Removed", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      {/* top heading of users login page */}
      <div>
        <h3 className="heading">Employee login details</h3>
      </div>
      <div onClick={toRegister} id="back-to-Signup">
        <p>Back to Home</p>
      </div>
      {/* making a table in order to show all login user details */}
      <table className="table">
        <thead>
          <tr>
            <th className="e-name">Employee Names</th>
            <th>DOB</th>
            <th>Gmail</th>
            <th>Encrypted Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr className="details" key={index}>
                <td>{item.name}</td>
                <td>{item.dob}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(item._id)}
                >
                  <TiDeleteOutline size="1.5rem" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* react toaster for notifications */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      ;
    </div>
  );
}

export default Adminpage;
