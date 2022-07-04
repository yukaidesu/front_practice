import { atom } from "recoil";

export type TestUserInfo = {
  lastName?: string;
  firstName?: string;
  gender?: string;
};
export const TestUserInfo = atom<TestUserInfo>({
  key: "testUser",
  default: {},
});
