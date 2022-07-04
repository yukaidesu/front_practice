import { ChangeEvent, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import axios from "axios";

type Zipcode = {
  main: string;
  sub: string;
};
type Address = {
  address1: string;
  address2: string;
  address3: string;
};

function Home() {
  const [zipcode, setZipcodeMain] = useState<Zipcode>({
    main: "",
    sub: "",
  });
  const [address, setAddress] = useState<Address>({
    address1: "",
    address2: "",
    address3: "",
  });

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
          setAddress({
            ...address,
            address1: result["address1"],
            address2: result["address2"],
            address3: result["address3"],
          });
        }
      } catch {
        alert("住所の取得に失敗しました。");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="test-content">
        <div>
          <h2>郵便番号から住所の住所の自動入力</h2>
          <div>
            <span>郵便番号：</span>
            <input
              type="text"
              onChange={updateZipcodeMain}
              value={zipcode.main}
            />
            <span> - </span>
            <input
              type="text"
              onChange={updateZipcodeSub}
              value={zipcode.sub}
            />
          </div>
          <div>
            <p>住所を入力してください</p>
            <div>
              住所は：
              <input
                value={address.address1 + address.address2 + address.address3}
              />
            </div>
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
