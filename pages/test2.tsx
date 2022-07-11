import { useRecoilValue } from "recoil";
import { TestUserInfo } from "../components/store";

const Test2 = () => {
  const user = useRecoilValue(TestUserInfo);

  return (
    <>
      練習：仮確認ページです
      <br /> 姓：{user.lastName}
      <br /> 名：{user.firstName}
      <br /> 性別：
      {user.gender}
      <br /> 住所：
      {user.postalCode}
    </>
  );
};

export default Test2;
