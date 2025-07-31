import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";

import { Get } from "../../components/http.service";
import ImageComp from "../../components/ImageComp";

import "../login/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const userInput = useRef();
  const passInput = useRef();

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    Get("http://localhost:8888/logindata")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
      });
  }, []);

  const submitData = (e) => {
    e.preventDefault();
    const username = userInput.current.value.trim();
    const password = passInput.current.value;

    const currentUser = users.find(
      (user) => user.uname === username && user.pass === password
    );

    if (currentUser) {
      sessionStorage.setItem("isLogin", "true");
      sessionStorage.setItem("uname", currentUser.uname);
      sessionStorage.setItem("role", currentUser.role);

      alert("Login Successful!");

      currentUser.role === "admin"
        ? navigate("/sportworld-admin")
        : navigate("/");
    } else {
      setError("Invalid credentials");
      userInput.current.value = "";
      passInput.current.value = "";
    }
  };

  return (
    <div className="Login-container">
      {/* Left side image */}
      <div className="LoginImg">
        <img
          src={ImageComp.LoginFootball}
          alt="Login"
          className="LoginImg-style"
        />
      </div>

      {/* Right side login form using MUI */}
      <Box
        className="LoginForm"
        component="form"
        onSubmit={submitData}
        sx={{
          width: 400,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Login
        </Typography>

        <FormControl fullWidth margin="normal" error={!!error}>
          <InputLabel>Username</InputLabel>
          <OutlinedInput
            inputRef={userInput}
            name="uname"
            label="Username"
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal" error={!!error}>
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            inputRef={passInput}
            name="pass"
            type="password"
            label="Password"
            required
          />
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, backgroundColor: "darkblue" }}
        >
          Login
        </Button>

        <Typography sx={{ mt: 2 }} variant="body2" align="center">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </Typography>
      </Box>
    </div>
  );
};

export default LoginPage;
