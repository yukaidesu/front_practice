import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Styled from "styled-components";

const Input = Styled.input`
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;

type Props = {
  placeholder: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegisterReturn;
};

const InputTest: React.FC<Props> = (props) => {
  return (
    <>
      <Input
        {...props.register}
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e)}
        value={props.value}
      />
    </>
  );
};
export default InputTest;
