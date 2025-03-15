import React, { useState } from "react";
import { Button, Grid, TextField, Typography, Box } from "@mui/material";

const UserForm = ({ addUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !age) return;
        addUser({ name, email, age }); // Add user to the list
        setName("");
        setEmail("");
        setAge(""); // Reset form
    };

    return (
        <Box sx={{ backgroundColor: "#121212", padding: "30px", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}>
            <Typography variant="h4" sx={{ color: "#ffffff", fontWeight: "bold", textAlign: "center" }}>
                User Form
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField fullWidth label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}
                        sx={{ backgroundColor: "#1E1E1E", input: { color: "#ffffff" }, label: { color: "#AAAAAA" } }} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}
                        sx={{ backgroundColor: "#1E1E1E", input: { color: "#ffffff" }, label: { color: "#AAAAAA" } }} />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Age" type="number" variant="outlined" value={age} onChange={(e) => setAge(e.target.value)}
                        sx={{ backgroundColor: "#1E1E1E", input: { color: "#ffffff" }, label: { color: "#AAAAAA" } }} />
                </Grid>
                <Grid item xs={12}>
                    <Button fullWidth variant="contained" onClick={handleSubmit} sx={{ backgroundColor: "#1976d2", color: "#ffffff", padding: "12px", fontSize: "16px", fontWeight: "bold" }}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UserForm;
