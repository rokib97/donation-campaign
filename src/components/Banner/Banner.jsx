import { Button, Input } from "@material-tailwind/react";
import React from "react";

// eslint-disable-next-line react/prop-types
const Banner = ({ value, setValue, handleSearch }) => {
  const clearInput = () => {
    setValue("");
  };
  return (
    <div className="relative flex flex-col justify-center items-center  h-[450px]">
      <div className="absolute inset-0 bg-[url('/Resources/bg.png')] bg-cover bg-center bg-no-repeat opacity-10"></div>
      <h1 className="mb-4 text-4xl font-bold">
        I Grow By Helping People In Need
      </h1>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="text"
          label="Serach"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color="red"
          onClick={() => {
            handleSearch();
            clearInput();
          }}
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Banner;
