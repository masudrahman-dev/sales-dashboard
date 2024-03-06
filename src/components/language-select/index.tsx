import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { countryOptions } from "../next-select/data";
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
const LanguageSelect = () => {
  const { control } = useForm();

  const onSubmit = (data) => {
    console.log("data :>> ", data);
  };

  return (
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
                    borderStyle: "none",
                    borderRadius: "8px",
                    boxShadow: "0px 2px 5px 0px #00000069",
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
  );
};

export default LanguageSelect;
