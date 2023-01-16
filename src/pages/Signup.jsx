import React from "react";
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
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="relative flex h-[100vh] items-center justify-center bg-[url('https://res.cloudinary.com/dumxkdcvd/image/upload/v1673853648/itachi_f14qwf.gif')] bg-cover bg-center bg-no-repeat">
      <div className="absolute h-full w-full bg-black bg-opacity-60" />
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Fullname" size="lg" />
          <Input label="Password" size="lg" />
          <Input label="Confirm Password" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth className="text-sm">
            Register
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
