import Link from 'next/link';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import React, { useState } from "react";
import Header from '../components/Header'
import { useRecoilValue } from 'recoil'
import { UserAtom, lastNameAtom, firstNameAtom, lastNameKanaAtom, firstNameKanaAtom,
    birthAtom, genderMarriageAtom, familyAtom, kidsAtom, emailAtom, licenseAtom, licenseNumberAtom } from '../components/atom'


// 確認画面
function Confirm() {
    const money = useRecoilValue(UserAtom)
    const why = useRecoilValue(UserAtom)
    const lastName = useRecoilValue(lastNameAtom)
    const firstName = useRecoilValue(firstNameAtom)
    const lastNameKana = useRecoilValue(lastNameKanaAtom)
    const firstNameKana = useRecoilValue(firstNameKanaAtom)
    const birth = useRecoilValue(birthAtom)
    const genderMarriage = useRecoilValue(genderMarriageAtom)
    const family = useRecoilValue(familyAtom)
    const kids = useRecoilValue(kidsAtom)
    const email = useRecoilValue(emailAtom)
    const license = useRecoilValue(licenseAtom)
    const licenseNumber = useRecoilValue(licenseNumberAtom)

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
                                    {money}万円
                                </td>
                            </tr>
                            <tr>
                                <td className='label' align="left">ご利用目的</td>
                                <td align="left">{why}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='form'>お客様情報</div>
                    <table>
                        <tbody>
                            <tr>
                                <td className='label' align="left">漢字氏名</td>
                                <td align="left">
                                    姓：{lastName}
                                    　名：{firstName}
                                </td>
                            </tr>
                            <tr>
                                <td className='label' align="left">カナ氏名</td>
                                <td align="left">
                                    セイ：{lastNameKana}
                                    　メイ：{firstNameKana}
                                </td>
                            </tr>
                            <tr>
                                <td className='label' align="left">生年月日</td>
                                <td align="left">{birth}</td>
                            </tr>
                            <tr>
                            <td className='label' align="left">性別／結婚有無</td>
                                <td align="left">
                                {genderMarriage}
                                </td>
                            </tr>
                            <tr>
                            <td className='label' align="left">
                                扶養家族<br />
                                （お客さまの収入で<br />　生活されている家族です。）
                            </td>
                                <td align="left">{family}人　内子ども　{kids}人</td>
                            </tr>
                            <tr>
                                <td className='label' align="left">メールアドレス</td>
                                <td align="left">{email}</td>
                            </tr>
                            <tr>
                                <td className='label' align="left">運転免許証</td>
                                <td align="left">
                                    {license}<br />
                                    免許証番号　{licenseNumber}
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