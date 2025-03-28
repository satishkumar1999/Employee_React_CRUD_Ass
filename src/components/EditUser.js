import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../services/api";

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state;

  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateUser(user.id, { first_name: firstName, last_name: lastName, email });
    navigate("/users");
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
