import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  register: UseFormRegisterReturn;
  placeholder: string;
  value: string | undefined;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FieldError | undefined;
  errorMessage: string;
};

const InputTest: React.FC<Props> = (props) => {
  return (
    <>
      <input
        {...props.register}
        id={props.id}
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e)}
        value={props.value}
      />
      {props.errors && <span>{props.errorMessage}</span>}
    </>
  );
};
export default InputTest;
