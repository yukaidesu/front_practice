import React from 'react'

type Props = {
    value: string;
    placeholder: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = (props) => {
    const {value, placeholder, type} = props;

    return (
        <>
            <input
                value={value}
                placeholder={placeholder}
                type={type}
                onChange={e => props.onChange(e)} />
        </>
    )
}

export default Input;