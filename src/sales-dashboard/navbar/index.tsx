import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select, { StylesConfig, components } from "react-select";
import { countryOptions } from "./next-select/data";

interface FormatOptionLabelProps {
  label: string;
  flagUrl: string;
}

const formatOptionLabel: React.FC<FormatOptionLabelProps> = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <div>
        <img src={props?.flagUrl} width="16" height="12" alt="Ukraine" />
      </div>
      {props.label}
    </div>
  );
};
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
          <div className="">
            <div>
              <Controller
                control={control}
                name="country"
                render={({ field: { onChange, value } }) => {
                  return (
                    <Select
                      value={value}
                      onChange={onChange}
                      options={countryOptions}
                      defaultValue={countryOptions[0]}
                      isSearchable={true}
                      classNamePrefix="react-select"
                      formatOptionLabel={formatOptionLabel}
                      styles={{
                        container(base, props) {
                          return {
                            ...base,
                            width: "200px",
                            borderStyle: "none",
                          };
                        },
                        control: (provided, state) => {
                          return {
                            ...provided,

                            borderColor: "#AFAFAF",
                            borderRadius: "8px",
                            boxShadow: "none",
                            "&:hover": {
                              borderColor: "#dddddd",
                            },
                          };
                        },

                        valueContainer: (provided, state) => ({
                          ...provided,
                        }),
                        input: (provided, state) => ({
                          ...provided,
                        }),
                        indicatorsContainer: (provided, state) => ({
                          ...provided,
                        }),
                        indicatorSeparator: (provided, state) => ({
                          ...provided,
                          display: "none",
                        }),
                        dropdownIndicator: (provided, state) => ({
                          ...provided,
                        }),
                        menu: (provided, state) => ({
                          ...provided,
                          paddingLeft: "4px",
                          paddingRight: "4px",
                        }),
                        option: (provided, state) => ({
                          ...provided,
                          borderRadius: "4px",
                          marginTop: "4px",
                          marginBottom: "4px",
                          color: "#4d4d4d",
                          backgroundColor: "transparent",
                          "&:hover": {
                            backgroundColor: "#eeeeee",
                          },
                        }),
                        menuList: (provided, state) => ({
                          ...provided,
                          "&::-webkit-scrollbar": {
                            width: "7.2px",
                            height: "0px",
                          },
                          "&::-webkit-scrollbar-track": {
                            background: "transparent",
                          },
                          "&::-webkit-scrollbar-thumb": {
                            background: "#ddddde",
                            borderRadius: "9999px",
                          },
                        }),
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
