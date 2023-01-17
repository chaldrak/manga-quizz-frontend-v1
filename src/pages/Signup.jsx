import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";
import { register } from "../services/auth";
import useAuth from "../hooks/useAuth";

const Signup = () => {
  const { auth } = useAuth();

  const [form, setForm] = useState({
    fullname: "",
    password: "",
    confirmPass: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formData = {
      ...form,
      [name]: value,
    };
    setForm(formData);
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    const response = await register({
      username: form.fullname,
      password: form.password,
      confirmPass: form.confirmPass,
    });
    if (response?.error) {
      setError(
        response?.error.includes("users_username_key")
          ? "Username already used"
          : response?.error
      );
      return setIsLoading(false);
    }
    setError("");
    setIsLoading(false);
    const data = { fullname: form.fullname, password: form.password };
    navigate("/signin", { replace: true, state: { data: data } });
  };
  useEffect(() => {
    if (auth?.token) navigate("/", { replace: true });
  }, []);
  return (
    <div className="relative flex h-[100vh] items-center justify-center bg-[url('https://res.cloudinary.com/dumxkdcvd/image/upload/v1673853648/itachi_f14qwf.gif')] bg-cover bg-center bg-no-repeat">
      <div className="absolute h-full w-full bg-black bg-opacity-60" />
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color={error ? "red" : "blue"}
          className="mb-4 grid h-28 place-items-center text-center"
        >
          <Typography variant={error ? "h5" : "h3"} color="white">
            {error ? error : "Sign Up"}
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Fullname"
            size="lg"
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <Input
            label="Confirm Password"
            size="lg"
            type="password"
            name="confirmPass"
            value={form.confirmPass}
            onChange={handleChange}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            className="flex items-center justify-center space-x-2 text-sm"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <BiLoaderAlt
              size={20}
              className={`animate-spin ${!isLoading && "hidden"}`}
            />
            <p>{isLoading ? "Loading" : "Register"}</p>
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <NavLink to="/signin">
              <Typography
                variant="small"
                color="blue"
                className="ml-1 font-bold"
              >
                Sign in
              </Typography>
            </NavLink>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
