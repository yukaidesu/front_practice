import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import { useRecoilState } from "recoil";
import { Money, UserInfo } from "../components/atom";
import Input from "../components/Input2";

//入力画面
function Form() {
  const [moneyDetail, setMoneyDetail] = useRecoilState(Money);

  const [userDetail, setUserDetail] = useRecoilState(UserInfo);

  const router = useRouter(); //ルーターの取得
  const clickButton = () => {
    router.push({
      pathname: "/confirm", //URL
    });
  };

  return (
    <div className="test-box">
      <Header />
      <div className="test-content">
        <div className="page_title">
          <BorderColorIcon />
          キャッシングローンのお申し込み
        </div>
        <div className="explanation">お申し込み方法につきまして</div>
        <div className="e_content">
          記載内容を全てご確認いただき、入力内容に間違いがないようにお願いします。
          <br />
          入力方法にご不明点がある場合はお気軽にお問い合わせください。
        </div>
        <div className="form-box">
          <div className="form">申込金額</div>
          <table>
            <tbody>
              <tr>
                <td className="label" align="left">
                  希望限度額
                </td>
                <td align="left">
                  <Input
                    value={moneyDetail.howMuch}
                    onChange={(e) =>
                      setMoneyDetail({
                        ...moneyDetail,
                        howMuch: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="100~800"
                  />
                  万円
                  <br />
                  ※ご契約の際に変更できます。
                </td>
              </tr>
              <tr>
                <td className="label" align="left">
                  ご利用目的
                </td>
                <td align="left">
                  <input
                    type="radio"
                    value="生活費"
                    onChange={(e) =>
                      setMoneyDetail({ ...moneyDetail, why: e.target.value })
                    }
                    name="why"
                  />
                  生活費
                  <input
                    type="radio"
                    value="事業資金"
                    onChange={(e) =>
                      setMoneyDetail({ ...moneyDetail, why: e.target.value })
                    }
                    name="why"
                  />
                  事業資金
                </td>
              </tr>
            </tbody>
          </table>
          <div className="form">お客様情報</div>
          <table>
            <tbody>
              <tr>
                <td className="label" align="left">
                  漢字氏名
                </td>
                <td align="left">
                  姓
                  <Input
                    value={userDetail.lastName}
                    onChange={(e) =>
                      setUserDetail({ ...userDetail, lastName: e.target.value })
                    }
                    type="text"
                    placeholder="全角"
                  />
                  名
                  <Input
                    value={userDetail.firstName}
                    onChange={(e) =>
                      setUserDetail({
                        ...userDetail,
                        firstName: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="全角"
                  />
                </td>
              </tr>
              <tr>
                <td className="label" align="left">
                  カナ氏名
                </td>
                <td align="left">
                  セイ
                  <Input
                    value={userDetail.lastNameKana}
                    onChange={(e) =>
                      setUserDetail({
                        ...userDetail,
                        lastNameKana: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="カナ"
                  />
                  メイ
                  <Input
                    value={userDetail.firstNameKana}
                    onChange={(e) =>
                      setUserDetail({
                        ...userDetail,
                        firstNameKana: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="カナ"
                  />
                </td>
              </tr>
              <tr>
                <td className="label" align="left">
                  生年月日
                </td>
                <td align="left">
                  <input
                    type="date"
                    max="9999-12-31"
                    value={userDetail.birth}
                    onChange={(e) =>
                      setUserDetail({ ...userDetail, birth: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="label" align="left">
                  性別／結婚有無
                </td>
                <td align="left">
                  <select
                    placeholder="選択してください"
                    value={userDetail.genderMarriage}
                    onChange={(e) =>
                      setUserDetail({
                        ...userDetail,
                        genderMarriage: e.target.value,
                      })
                    }
                  >
                    <option value="男性／独身">男性／独身</option>
                    <option value="女性／独身">女性／独身</option>
                    <option value="男性／既婚">男性／既婚</option>
                    <option value="女性／既婚">女性／既婚</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="label" align="left">
                  扶養家族
                  <br />
                  （お客さまの収入で
                  <br />
                  　生活されている家族です。）
                </td>
                <td align="left">
                  <select
                    value={userDetail.family}
                    onChange={(e) =>
                      setUserDetail({ ...userDetail, family: e.target.value })
                    }
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  人　内子ども
                  <select
                    value={userDetail.kids}
                    onChange={(e) =>
                      setUserDetail({ ...userDetail, kids: e.target.value })
                    }
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  人
                </td>
              </tr>
              <tr>
                <td className="label" align="left">
                  メールアドレス
                </td>
                <td align="left">
                  ※ご本人様のみが使用されているメールアドレスをご登録ください
                  <br />
                  ※お申し込み後、お手続きに関するメールを送信いたします。
                  <br />
                  <Input
                    type="text"
                    placeholder="半角英数"
                    value={userDetail.email}
                    onChange={(e) =>
                      setUserDetail({ ...userDetail, email: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td className="label" align="left">
                  運転免許証
                </td>
                <td align="left">
                  <input
                    type="radio"
                    value="あり"
                    onChange={(e) =>
                      setUserDetail({ ...userDetail, license: e.target.value })
                    }
                    checked={userDetail.license === "あり"}
                  />
                  あり
                  <input
                    type="radio"
                    value="なし"
                    onChange={(e) =>
                      setUserDetail({ ...userDetail, license: e.target.value })
                    }
                    checked={userDetail.license === "なし"}
                  />
                  なし
                  <br />
                  免許証番号　
                  <Input
                    type="text"
                    placeholder="数字１２桁"
                    value={userDetail.licenseNumber}
                    onChange={(e) =>
                      setUserDetail({
                        ...userDetail,
                        licenseNumber: e.target.value,
                      })
                    }
                  />
                  <br />
                  ※運転免許証の交付を受けている方は免許証番号をご入力ください。
                </td>
              </tr>
            </tbody>
          </table>
          <div className="button-box">
            <button onClick={clickButton}>会員登録</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
