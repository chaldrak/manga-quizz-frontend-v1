import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

export default function BaseModal({
  children,
  onClick,
  description,
  title,
  open,
  setOpen,
  username,
  setUsername,
  onChange,
}) {
  const handleOpen = () => {
    setOpen(!open);
    setUsername("");
  };
  return (
    <Fragment>
      <button
        onClick={handleOpen}
        className="flex w-full items-center justify-center rounded-md bg-red-900 py-2 text-white hover:bg-red-600"
      >
        {children}
      </button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>{title}</DialogHeader>
        <DialogBody
          divider={title.includes("Reset")}
          className="border-t border-gray-300"
        >
          {description}
        </DialogBody>
        <DialogBody
          className={`items-center space-x-2 border-b border-gray-300 ${
            title.includes("Reset") ? "hidden" : "flex"
          }`}
        >
          <label className="whitespace-nowrap">Confirm your username :</label>
          <Input
            color="indigo"
            label="Username"
            value={username}
            onChange={onChange}
            onPaste={(e) => e.preventDefault()}
            className="font-black"
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={onClick}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
