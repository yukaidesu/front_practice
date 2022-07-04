import React from "react";
import { useForm } from "react-hook-form";
import { TestUserInfo } from "../components/store";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import InputTest from "./inputTest";
import { SELECT_GENDER } from "./LIST_select";
import Select from "./select";

interface IFormInputs {
  firstName: string;
  lastName: string;
  gender: string;
}
function Test() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const [user, setUser] = useRecoilState(TestUserInfo);
  const router = useRouter();
  const onSubmit = () => {
    router.push("/test2");
  };

  return (
    <>
      練習：申し込みページです。
      <br />
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        姓：
        <InputTest
          errors={errors.lastName}
          errorMessage="苗字の入力がありません。"
          id="form"
          value={user.lastName}
          placeholder="姓"
          register={register("lastName", {
            required: true,
          })}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <br />
        名：
        <InputTest
          errors={errors.firstName}
          errorMessage="名前の入力がありません。"
          id="form"
          value={user.firstName}
          placeholder="名"
          register={register("firstName", {
            required: true,
          })}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <br />
        性別：
        <Select
          errors={errors.gender}
          errorMessage="選択されていません。"
          id="form"
          selectList={SELECT_GENDER}
          register={register("gender", {
            required: true,
          })}
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
        />
        <br />
        <button id="form" type="submit">
          送信
        </button>
      </form>
    </>
  );
}
export default Test;
