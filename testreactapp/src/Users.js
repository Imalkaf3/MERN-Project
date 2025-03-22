import React, { useState } from "react";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    // Function to add a user
    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    };

    // Function to delete a user
    const deleteUser = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    // Function to update a user
    const updateUser = (index, updatedUser) => {
        const updatedUsers = [...users];
        updatedUsers[index] = updatedUser;
        setUsers(updatedUsers);
    };

    return (
        <div>
            <h1>User Form</h1>
            <UserForm addUser={addUser} />
            <h1>User List</h1>
            <UsersTable users={users} deleteUser={deleteUser} updateUser={updateUser} />
        </div>
    );
};

export default Users;
