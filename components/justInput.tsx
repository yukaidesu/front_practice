import React,{useContext} from 'react'
import { UserCount } from '../pages/FirstPage'

//　①childコンポーネント1つめ
function JustInput() {

    const ans = useContext(UserCount);

    return (
        <>
            単なるコンポーネント(useContextを使った)<br />
            入力値：{ans}
        </>
    )
}
export default JustInput;