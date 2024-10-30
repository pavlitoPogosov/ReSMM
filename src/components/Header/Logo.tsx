import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  sticky: boolean;
  pathUrl: string;
}

export const Logo: React.FC<LogoProps> = ({ sticky, pathUrl }) => (
  <div className="w-60 max-w-full px-4">
    <Link
      href="/"
      className={`navbar-logo block w-full ${sticky ? "py-2" : "py-5"} `}
    >
      <Image
        src={"logo.svg"}
        alt="logo"
        width={140}
        height={30}
        className="header-logo w-full"
      />
    </Link>
  </div>
);
