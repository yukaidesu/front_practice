import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  placeholder: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegisterReturn;
  // errors: FieldError | undefined;
  // errorMessage: string;
};

const InputTest: React.FC<Props> = (props) => {
  return (
    <>
      <input
        {...props.register}
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e)}
        value={props.value}
      />
      {/* {props.errors && <span>{props.errorMessage}</span>} */}
    </>
  );
};
export default InputTest;
