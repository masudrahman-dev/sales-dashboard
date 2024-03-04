import { BellAlert, MagnifyingGlass } from "@medusajs/icons";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select, { StylesConfig } from "react-select";
import { ColourOption, colourOptions } from "./next-select/data";
import chroma from "chroma-js";
const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colorStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

const Navbar = () => {
  const { control, register, watch, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data :>> ", data);
  };

  return (
    <>
      <nav className="fixed left-0 md:left-72 bg-white right-0 top-0 p-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between items-center space-x-2"
        >
          <button type="submit" className="text-2xl font-bold">
            Dashboard
          </button>

          <div className="flex-grow">
            <label
              className="flex items-center justify-center space-x-1"
              htmlFor="search"
            >
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <MagnifyingGlass className="w-5 h-5 text-primary" />
                </span>
                <input
                  type="search"
                  placeholder="Search Here..."
                  className="block  pl-10 pr-3 py-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 bg-secondary focus:ring-primary "
                  name="search"
                  id="search"
                />
              </div>
            </label>
          </div>

          <div className="border">
            <div>
              <Controller
                control={control}
                name="firstName"
                defaultValue={""}
                render={({
                  field: { onChange, onBlur, value, ref },
                  formState,
                  fieldState,
                }) => (
                  <>
                    <Select
                      onChange={onChange}
                      onBlur={onBlur} // notify when input is touched
                      value={value} // return updated value
                      ref={ref} // set ref for focus management
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={colourOptions[0]}
                      isDisabled={false}
                      isClearable={true}
                      isSearchable={true}
                      name="color"
                      options={colourOptions}
                      styles={colorStyles}
                    />
                  </>
                )}
              />
            </div>
          </div>
          <div>
            <BellAlert />
          </div>

          <div>
            <div>
              <div className="flex gap-3">
                <img
                  className="rounded-lg w-10 h-10 "
                  src="https://picsum.photos/id/1/100/100"
                  alt=""
                />
                <div>
                  <p>Musfiq</p>
                  <p>Admin</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
