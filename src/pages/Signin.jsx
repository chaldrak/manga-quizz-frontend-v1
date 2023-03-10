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
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import { BiLoaderAlt } from "react-icons/bi";
import { setItem } from "../services/localStorage";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const Signin = () => {
  const { auth, setAuth } = useAuth();
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  // Get user signed up data
  const location = useLocation();
  const data = location.state?.data;

  // Get the previous location
  const from = location.state?.from?.pathname;

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formData = {
      ...form,
      [name]: value,
    };
    setForm(data ? data : formData);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await login({
      username: form.fullname,
      password: form.password,
    });
    if (response?.error) {
      setError(response?.error);
      return setIsLoading(false);
    }
    const token = response?.accessToken;
    setItem({
      token: token,
    });
    setAuth({ token });
    setUser({});
    setError("");
    setForm({
      fullname: "",
      password: "",
    });
    setIsLoading(false);
    navigate(from ? from : "/", {
      replace: true,
    });
  };

  useEffect(() => {
    if (data) setForm(data);
    if (auth?.token) navigate("/", { replace: true });
  }, []);
  return (
    <div className="relative flex h-[100vh] items-center justify-center bg-[url('https://res.cloudinary.com/dumxkdcvd/image/upload/v1673853648/itachi_f14qwf.gif')] bg-cover bg-center bg-no-repeat">
      <div className="absolute h-full w-full bg-black bg-opacity-60" />
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color={error ? "red" : data ? "green" : "blue"}
          className="mb-4 grid h-28 place-items-center"
        >
          {data ? (
            <Typography variant="h5" color="white">
              Account created successfully !
            </Typography>
          ) : (
            <Typography variant={error ? "h5" : "h3"} color="white">
              {error ? error : "Sign In"}
            </Typography>
          )}
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Fullname"
            type="text"
            size="lg"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            size="lg"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
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
            <p>{isLoading ? "Loading" : "Login"}</p>
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <NavLink to="/signup">
              <Typography
                variant="small"
                color="blue"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </NavLink>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signin;
