import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type List = {
  option: string;
  value: number;
};

type Props = {
  selectList: List[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  register: UseFormRegisterReturn;
  errors: FieldError | undefined;
  errorMessage: string;
};

const Select: React.FC<Props> = (props) => {
  return (
    <>
      <select {...props.register} onChange={(e) => props.onChange(e)}>
        <option value="" selected hidden>
          選択してください
        </option>
        {props.selectList.map((item, index) => (
          <option key={`option-no-${index}`} value={item.value}>
            {item.option}
          </option>
        ))}
      </select>
      {props.errors && <span>{props.errorMessage}</span>}
    </>
  );
};

export default Select;
