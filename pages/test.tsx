import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TestUserInfo } from "../components/store";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import InputTest from "./inputTest";
import { SELECT_GENDER } from "./LIST_select";
import Select from "./select";
import { Grid, Item } from "../styles/components/test.styled.module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
  const [isRevealPassword, setIsRevealPassword] = useState(false);

  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  };

  return (
    <>
      <main>
        <Grid>
          <Item>姓：</Item>
          <Item>
            <InputTest
              value={user.lastName}
              placeholder="姓"
              register={register("lastName", {
                required: true,
                maxLength: 4,
              })}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
            <span>
              {errors.lastName?.types?.required && "苗字の入力がありません"}
              {errors.lastName?.types?.maxLength &&
                "苗字は4文字以内で記入してください"}
            </span>
          </Item>
        </Grid>
        <Grid>
          <Item>名：</Item>
          <Item>
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
            <span>
              {errors.firstName?.types?.maxLength && "名前も4文字以内な"}
            </span>
          </Item>
        </Grid>
        <Grid>
          <Item>性別：</Item>
          <Item>
            <Select
              errors={errors.gender}
              errorMessage="選択されていません。"
              selectList={SELECT_GENDER}
              register={register("gender", {
                required: true,
              })}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            />
          </Item>
        </Grid>
        <div>
          <input
            className="pass"
            placeholder="Password"
            type={isRevealPassword ? "text" : "password"}
          />
          <span className="eye" onClick={togglePassword}>
            {isRevealPassword ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </span>
        </div>
        <button onClick={handleSubmit(onSubmit)}>送信</button>
      </main>
    </>
  );
}
export default Test;
