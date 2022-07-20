import { atom } from "recoil";

export type TestUserInfo = {
  lastName?: string;
  firstName?: string;
  gender?: string;
  postalCode3?: string;
  postalCode4?: string;
  address?: string;
};
export const TestUserInfo = atom<TestUserInfo>({
  key: "testUser",
  default: {},
});
