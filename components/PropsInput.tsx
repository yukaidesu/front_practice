import React,{ useContext, useState } from 'react'
import { UserCount } from '../pages/FirstPage'

type Props = {
    title: string;
};

//子ページ２
const PropsInput: React.FC<Props> = (props) => {

    const {title} = props;
    const [input, setInput] = useState<string>("");
    let ans = input;


    return (
        <div>
            Inputタグ、入力値表示をpropsで表示
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={title}/>
            <UserCount.Provider value={ans}>
                入力値：{ans}
            </UserCount.Provider>
        </div>
    )
}

export default PropsInput