import Link from "next/link";

function Header() {
  return (
    <>
      <Link href="/">
        <div className="title">
          <span>愛</span>がいちばん
        </div>
      </Link>
    </>
  );
}

export default Header;
