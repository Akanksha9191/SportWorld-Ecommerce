import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Box,
  Typography,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";

import { Post, Get } from "../../components/http.service";

const RegisterComp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [addUser, setAddUser] = useState({
    uname: "",
    email: "",
    pass: "",
    cpass: "",
    role: "user",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddUser({ ...addUser, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };



  const checkEmailExists = async (email) => {
    try {
      const res = await Get("http://localhost:8888/logindata");
      console.log("User list:", res.data);
      if (!Array.isArray(res.data)) return false;
      return res.data.some(
      (user) => user.email.toLowerCase().trim() === email.toLowerCase().trim()
    );
    } catch (err) {
      console.error("Email check failed", err);
      return false;
    }
  };

  const validateForm = () => {
    const { uname, email, pass, cpass } = addUser;
    const newErrors = {};

    if (!/^[A-Z][a-zA-Z ]+$/.test(uname)) {
      newErrors.uname = "Username must start with a capital letter and contain only letters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass)) {
      newErrors.pass = "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
    }

    if (pass !== cpass) {
      newErrors.cpass = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const emailExists = await checkEmailExists(addUser.email);
    if (emailExists) {
      setErrors({ email: "Email already registered." });
      return;
    }

    Post("http://localhost:8888/logindata", addUser)
      .then(() => {
        alert("Registration Successful!");
        navigate("/login");
      })
      .catch((err) => {
        console.error("Registration failed:", err);
        alert("Something went wrong.");
      });
  };

  return (
    <Box
      sx={{
        width: 400,
        margin: "50px auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <form onSubmit={handleRegister}>
        <Typography variant="h5" gutterBottom align="center">
          Register
        </Typography>

        {/* Username */}
        <FormControl fullWidth margin="normal" error={!!errors.uname}>
          <InputLabel>Username</InputLabel>
          <OutlinedInput
            name="uname"
            label="Username"
            value={addUser.uname}
            onChange={handleChange}
            required
          />
          {errors.uname && <FormHelperText>{errors.uname}</FormHelperText>}
        </FormControl>

        {/* Email */}
        <FormControl fullWidth margin="normal" error={!!errors.email}>
          <InputLabel>Email</InputLabel>
          <OutlinedInput
            name="email"
            label="Email"
            type="email"
            value={addUser.email}
            onChange={handleChange}
            required
          />
          {errors.email && <FormHelperText>{errors.email}</FormHelperText>}
        </FormControl>

        {/* Password */}
        <FormControl fullWidth margin="normal" error={!!errors.pass}>
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            name="pass"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={addUser.pass}
            onChange={handleChange}
            required
          />
          {errors.pass && <FormHelperText>{errors.pass}</FormHelperText>}
        </FormControl>

        {/* Confirm Password */}
        <FormControl fullWidth margin="normal" error={!!errors.cpass}>
          <InputLabel>Confirm Password</InputLabel>
          <OutlinedInput
            name="cpass"
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            value={addUser.cpass}
            onChange={handleChange}
            required
          />
          {errors.cpass && <FormHelperText>{errors.cpass}</FormHelperText>}
        </FormControl>

        {/* Role */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select
            name="role"
            value={addUser.role}
            onChange={handleChange}
            label="Role"
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, backgroundColor: "darkblue" }}
        >
          Register
        </Button>

        <Typography sx={{ mt: 2 }} variant="body2">
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </form>
    </Box>
  );
};

export default RegisterComp;
