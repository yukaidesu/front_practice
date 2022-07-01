import React from "react";

type Props = {
  value: string;
  placeholder: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = (props) => {
  const { value, placeholder, type, onChange } = props;

  return (
    <>
      <input
        id="form"
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={(e) => onChange(e)}
        required
      />
    </>
  );
};

export default Input;
