import React from "react";
import { useForm } from "react-hook-form";
import { TestUserInfo } from "../components/atom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

function Test() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useRecoilState(TestUserInfo);
  const router = useRouter();
  const onSubmit = () => {
    router.push("/test2");
  };

  return (
    <>
      練習：申し込みページです。
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        姓：
        <input
          value={user.lastName}
          {...register("LastName", { required: true })}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <p>
          {errors.LastName?.type === "required" && "苗字の入力がありません。"}
        </p>
        <br />
        名：
        <input
          value={user.firstName}
          {...register("firstName", { required: true })}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <p>
          {errors.firstName?.type === "required" && "名前の入力がありません。"}
        </p>
        <br />
        性別：
        <select
          value={user.gender}
          {...register("gender", { required: true })}
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
        >
          <option value="" hidden>
            choose
          </option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <p>{errors.gender?.type === "required" && "選択してください"}</p>
        <br />
        <button type="submit">送信</button>
      </form>
    </>
  );
}
export default Test;
