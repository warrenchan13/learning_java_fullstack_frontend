import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setName(result.data.name);
    setUsername(result.data.username);
    setEmail(result.data.email);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of user id: {id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: {name}</b>
                </li>
                <li className="list-group-item">
                  <b>Username: {username}</b>
                </li>
                <li className="list-group-item">
                  <b>Email: {email}</b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
