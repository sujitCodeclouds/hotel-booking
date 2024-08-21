import React from "react";
import Navbar from "../Components/MenuBar/MenuBar";

const data = localStorage.getItem("data");
const userdata = JSON.parse(data);
//console.log(userdata);

function Hotels() {
  return (
    <>
      <Navbar />
      <div className="user-list">
        {userdata.length > 0 && (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Check In Date</th>
                  <th scope="col">Check Out Date</th>
                </tr>
              </thead>
              <tbody>
                {userdata.map((info, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{info.name}</td>
                      <td>{info.email}</td>
                      <td>{info.phoneNumber}</td>
                      <td>{info.checkedin}</td>
                      <td>{info.checkedout}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
        {userdata.length < 1 && (
          <div>
            <h2>No User info are added yet</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default Hotels;
