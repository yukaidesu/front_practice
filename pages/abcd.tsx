import React from "react";

type Props = {
  label: string;
  child2: JSX.Element;
};

const Abcd: React.FC<Props> = (props) => {
  const { label, child2 } = props;

  return (
    <div>
      {label}
      {child2}
    </div>
  );
};

export default Abcd;
