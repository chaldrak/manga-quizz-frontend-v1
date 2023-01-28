import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function BaseModal({
  children,
  onClick,
  description,
  title,
  open,
  setOpen,
}) {
  const handleOpen = () => setOpen(!open);
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
        <DialogBody divider>{description}</DialogBody>
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
