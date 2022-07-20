import { useRecoilValue } from "recoil";
import { TestUserInfo } from "../components/store";

const Test2 = () => {
  const user = useRecoilValue(TestUserInfo);

  return (
    <main>
      練習：仮確認ページです
      <br /> 姓：{user.lastName}
      <br /> 名：{user.firstName}
      <br /> 性別：
      {user.gender}
      <br /> 郵便番号：{user.postalCode3}-{user.postalCode4}
      <br /> 住所：
      {user.address}
    </main>
  );
};

export default Test2;
