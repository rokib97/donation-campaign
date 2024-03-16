import { Spinner } from "@material-tailwind/react";
import React from "react";

const CustomSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <Spinner className="h-16 w-16" color="green" />
    </div>
  );
};

export default CustomSpinner;
