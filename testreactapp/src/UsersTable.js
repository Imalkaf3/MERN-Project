import React, { useState } from "react";
import { Paper, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Button, TextField } from "@mui/material";

const UsersTable = ({ users, deleteUser, updateUser }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editedUser, setEditedUser] = useState({ name: "", email: "", age: "" });

    const handleEditClick = (index, user) => {
        setEditIndex(index);
        setEditedUser(user);
    };

    const handleSaveClick = () => {
        updateUser(editIndex, editedUser);
        setEditIndex(null);
    };

    return (
        <TableContainer component={Paper} sx={{ backgroundColor: "#121212", borderRadius: "10px" }}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Age</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#2c2c2c" }, "&:hover": { backgroundColor: "#444" } }}>
                            {editIndex === index ? (
                                <>
                                    <TableCell>
                                        <TextField value={editedUser.name} onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })} />
                                    </TableCell>
                                    <TableCell>
                                        <TextField value={editedUser.email} onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} />
                                    </TableCell>
                                    <TableCell>
                                        <TextField value={editedUser.age} type="number" onChange={(e) => setEditedUser({ ...editedUser, age: e.target.value })} />
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={handleSaveClick} sx={{ color: "white", backgroundColor: "green", marginRight: "5px" }}>
                                            Save
                                        </Button>
                                        <Button onClick={() => setEditIndex(null)} sx={{ color: "white", backgroundColor: "gray" }}>
                                            Cancel
                                        </Button>
                                    </TableCell>
                                </>
                            ) : (
                                <>
                                    <TableCell sx={{ color: "white" }}>{user.name}</TableCell>
                                    <TableCell sx={{ color: "white" }}>{user.email}</TableCell>
                                    <TableCell sx={{ color: "white" }}>{user.age}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleEditClick(index, user)} sx={{ color: "white", backgroundColor: "blue", marginRight: "5px" }}>
                                            Edit
                                        </Button>
                                        <Button onClick={() => deleteUser(index)} sx={{ color: "white", backgroundColor: "red" }}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;
