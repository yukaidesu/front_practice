import Link from 'next/link';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import React from "react";
import Header from '../components/Header'
import { useRecoilValue } from 'recoil'
import { Money, UserInfo } from '../components/atom'


// 確認画面
function Confirm() {
    const moneyDetail =useRecoilValue(Money)
    const userDetail = useRecoilValue(UserInfo)

    return (
        <div className='test-box'>
            <Header />
            <div className='test-content'>
                <div className='page_title'><CheckBoxIcon />お申込み情報の確認</div>
                <div className='form-box'>
                    <div className='form'>申込金額</div>
                    <table>
                        <tbody>
                            <tr>
                                <td className='label' align="left">希望限度額</td>
                                <td align="left">
                                    {moneyDetail.howMuch}万円
                                </td>
                            </tr>
                            <tr>
                                <td className='label' align="left">ご利用目的</td>
                                <td align="left">{moneyDetail.why}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='form'>お客様情報</div>
                    <table>
                        <tbody>
                            <tr>
                                <td className='label' align="left">漢字氏名</td>
                                <td align="left">
                                    姓：{userDetail.lastName}
                                    　名：{userDetail.firstName}
                                </td>
                            </tr>
                            <tr>
                                <td className='label' align="left">カナ氏名</td>
                                <td align="left">
                                    セイ：{userDetail.lastNameKana}
                                    　メイ：{userDetail.firstNameKana}
                                </td>
                            </tr>
                            <tr>
                                <td className='label' align="left">生年月日</td>
                                <td align="left">{userDetail.birth}</td>
                            </tr>
                            <tr>
                            <td className='label' align="left">性別／結婚有無</td>
                                <td align="left">
                                {userDetail.genderMarriage}
                                </td>
                            </tr>
                            <tr>
                            <td className='label' align="left">
                                扶養家族<br />
                                （お客さまの収入で<br />　生活されている家族です。）
                            </td>
                                <td align="left">{userDetail.family}人　内子ども　{userDetail.kids}人</td>
                            </tr>
                            <tr>
                                <td className='label' align="left">メールアドレス</td>
                                <td align="left">{userDetail.email}</td>
                            </tr>
                            <tr>
                                <td className='label' align="left">運転免許証</td>
                                <td align="left">
                                    {userDetail.license}<br />
                                    免許証番号　{userDetail.licenseNumber}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='button-box'>
                        <Link href="/form">
                            <button>申込画面へ戻る</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirm;