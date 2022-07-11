import React from "react";
import { useForm } from "react-hook-form";
import { TestUserInfo } from "../components/store";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import InputTest from "./inputTest";
import { SELECT_GENDER } from "./LIST_select";
import Select from "./select";

interface Inputs {
  firstName: string;
  lastName: string;
  gender: string;
}

function Test() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
    criteriaMode: "all",
    shouldFocusError: false,
  });

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
        <input
          id="form"
          value={user.lastName}
          placeholder="姓"
          {...register("lastName", {
            required: true,
            maxLength: 4,
          })}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <span>
          {errors.lastName?.types?.required && "苗字の入力がありません"}
        </span>
        <span>
          {errors.lastName?.types?.maxLength &&
            "苗字は4文字以内で記入してください"}
        </span>
        <br />
        名：
        <InputTest
          value={user.firstName}
          placeholder="名"
          register={register("firstName", {
            required: true,
            maxLength: { value: 4, message: "名前も4文字以内な" },
          })}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <span>
          {errors.firstName?.types?.required && "名前入力できてないで"}
        </span>
        <span>{errors.firstName?.types?.maxLength && "名前も4文字以内な"}</span>
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
