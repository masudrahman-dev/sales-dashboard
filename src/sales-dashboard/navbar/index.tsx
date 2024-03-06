import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { countryOptions } from "../../components/next-select/data";
import InputSearch from "../../components/input-search";
import { BellAlert } from "@medusajs/icons";
import Profile from "../../components/profile";

const Navbar = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data :>> ", data);
  };

  return (
    <>
      <nav className="fixed  z-50 left-0 md:left-72 bg-white right-0 top-0 p-6 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <h1 className=" text-2xl font-bold font-Poppins">Dashboard</h1>
            <InputSearch />
            <Profile />
          </div>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
