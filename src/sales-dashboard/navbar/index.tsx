import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select, { StylesConfig, components } from "react-select";

import { colourOptions, countryOptions } from "./next-select/data";
import chroma from "chroma-js";
import { MagnifyingGlass, TriangleDownMini } from "@medusajs/icons";

const countryStyles: StylesConfig = {
  control: (baseStyle, state) => {
    return {
      ...baseStyle,
      fontSize: "16px",
      height: "64px",
      borderRadius: "8px",
      paddingLeft: "20px",
      paddingRight: "20px",
      borderColor: "#AFAFAF",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#dddddd",
      },
    };
  },
};
const CustomDropdownIndicator = (props) => {
  return (
    <CustomDropdownIndicator {...props}>
      <TriangleDownMini />
    </CustomDropdownIndicator>
  );
};

const formatOptionLabel = ({ label }: { label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <div>
      <img
        src="https://flagcdn.com/16x12/ua.png"
        srcSet="https://flagcdn.com/32x24/ua.png 2x,
    https://flagcdn.com/48x36/ua.png 3x"
        width="16"
        height="12"
        alt="Ukraine"
      />
    </div>
    {label}
  </div>
);
const Navbar = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data :>> ", data);
  };

  return (
    <>
      <nav className="fixed z-50 left-0 md:left-72 bg-white right-0 top-0 p-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between items-center space-x-2"
        >
          <div className="border">
            <div>
              <Controller
                control={control}
                name="country"
                render={({ field: { onChange, value } }) => {
                  return (
                    <Select
                      value={value}
                      onChange={onChange}
                      options={colourOptions}
                      defaultValue={countryOptions[0]}
                      isSearchable
                      classNamePrefix="react-select"
                      formatOptionLabel={formatOptionLabel}
                      components={{
                        DropdownIndicator: CustomDropdownIndicator,
                      }}
                    />
                  );
                }}
              />
            </div>
          </div>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
