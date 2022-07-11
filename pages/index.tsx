import { ChangeEvent, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import axios from "axios";
import { useRecoilState } from "recoil";
import { TestUserInfo } from "../components/store";

type Zipcode = {
  main: string;
  sub: string;
};

function Home() {
  const [zipcode, setZipcodeMain] = useState<Zipcode>({
    main: "",
    sub: "",
  });
  const [address, setAddress] = useState<string>("");
  const [trueAddress, setTrueAddress] = useState(address);

  const updateZipcodeMain = (e: ChangeEvent<HTMLInputElement>) => {
    setZipcodeMain({ ...zipcode, main: e.target.value });
  };
  const updateZipcodeSub = async (e: ChangeEvent<HTMLInputElement>) => {
    setZipcodeMain({ ...zipcode, sub: e.target.value });
    if (e.target.value.length === 4 && zipcode.main.length === 3) {
      try {
        const res = await axios.get(
          "https://zipcloud.ibsnet.co.jp/api/search",
          {
            params: {
              zipcode: zipcode.main + e.target.value,
            },
          }
        );
        if (res.data.results) {
          const result = res.data.results[0];
          setAddress(
            result["address1"] + result["address2"] + result["address3"]
          );
        }
      } catch {
        alert("住所の取得に失敗しました。");
      }
    }
  };
  const [user, setUser] = useRecoilState(TestUserInfo);
  return (
    <div>
      <Header />
      <div className="test-content">
        <div>
          <h2>郵便番号から住所の住所の自動入力</h2>
          <div>
            郵便番号：
            <input
              type="text"
              onChange={updateZipcodeMain}
              value={zipcode.main}
            />
            ー
            <input
              type="text"
              onChange={updateZipcodeSub}
              value={zipcode.sub}
            />
          </div>
          <div>
            住所：{address}
            <br />
            住所：
            <input
              className="postalInput"
              defaultValue={address}
              onChange={(e) => setUser({ ...user, postalCode: e.target.value })}
            />
          </div>
        </div>
        <div className="sign-box">
          <Link href="/test">
            <button>テストページへ！</button>
          </Link>
          <br />
          <br />
          <Link href="/formPage">
            <button>申込フォームへ！</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
