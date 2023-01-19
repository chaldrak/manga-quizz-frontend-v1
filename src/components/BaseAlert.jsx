import { useState, Fragment } from "react";
import { Alert, Button } from "@material-tailwind/react";

export default function BaseAlert() {
  const [show, setShow] = useState(true);

  return (
    <Fragment>
      <Alert
        show={show}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        A dismissible alert with custom animation.
      </Alert>
    </Fragment>
  );
}
