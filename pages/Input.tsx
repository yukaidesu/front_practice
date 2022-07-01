type Props = {
  value: string;
  placeholder: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = (props) => {
  const { placeholder, type, value, onChange } = props;
  return (
    <>
      <input
        id="form"
        placeholder={placeholder}
        type={type}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};

export default Input;
