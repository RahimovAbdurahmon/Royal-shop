import { KeyboardBackspace } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveToken } from "../../utils/token";
import { axiosRequest } from "../../utils/axiosRequest";

const Login = () => {
  // navigate
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = {
      userName: event.target["userName"].value,
      password: event.target["password"].value,
    };
    try {
      const { data } = await axiosRequest.post("Account/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data.data);
      saveToken(data.data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="p-[20px] flex items-center justify-between">
        <Link to={"/"}>
          <Button variant="text" startIcon={<KeyboardBackspace />}>
            Back Home
          </Button>
        </Link>
      </div>
      <main>
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[20px] font-[600] lg:text-[50px] lg:font-[700]">
            Login in
          </h1>
          <img
            src="src/assets/images/LOGO.png"
            className="w-[150px] m-auto"
            alt=""
          />
        </div>
        <div className="m-auto">
          <form className="flex gap-[20px] flex-col w-[300px] m-auto" onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "300px" }}
              label="User name"
              name="userName"
              type="text"
              required
              id="userName"
              autoFocus
            />
            <TextField
              sx={{ width: "300px" }}
              label="Password"
              name="password"
              type="password"
              required
              id="password"
              autoFocus
            />
            <div className="flex items-center gap-[5px]">
              <input type="checkbox" className="w-[15px] h-[15px]" />
              <p className="text-[18px]">Remember me</p>
            </div>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
          <h1 className="text-[20px] font-[600] text-center mt-[20px]">
            I do not have an account <br />{" "}
            <span className="underline cursor-pointer">Registration</span>
          </h1>
        </div>
      </main>
    </>
  );
};

export default Login;
