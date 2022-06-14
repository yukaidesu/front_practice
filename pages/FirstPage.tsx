import React, {useState} from 'react';
import { useRouter } from 'next/router';
import JustInput from '../components/justInput';
import PropsInput from '../components/PropsInput';

export const UserCount = React.createContext("");

// parentページ
function FirstPage() {
    const [input, setInput] = useState<string>("");
    let ans = input;

    const router = useRouter();  //ルーターの取得
    const clickButton = () => {
        router.push({
            pathname:"/SecondPage",   //URL
        });
    }
    return (
        <>
            <h1>parentページ</h1><br />
                <input value={input} onChange={(e) => setInput(e.target.value)}/>

            <br /><br /><br /><br />
            <div className='child'>
                <h1>①childコンポーネント1つめ</h1>
                <UserCount.Provider value={ans}>
                    <JustInput />
                </UserCount.Provider>
            </div>

            <br /><br /><br /><br />

            <div className='child'>
                <h1>②childコンポーネント2つめ</h1>
                <PropsInput title='入力してね' />
                <PropsInput title='入力してください' />
            </div>


            <br /><br /><br /><br />
            {/* <button onClick={clickButton}>
                次のページへ
            </button> */}
        </>
    )
}
export default FirstPage;