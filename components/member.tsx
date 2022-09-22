import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  socialId: string;
}
const Member: React.FC<Props> = ({ name, socialId }) => (
  <div>
    <Image
      src={`https://github.com/${socialId}.png`}
      alt={name}
      width={150}
      height={150}
      className="rounded-full"
    />
    <div className="text-2xl xl:text-3xl">{name}</div>
    <div className="text-xl">
      <Link href={`https://github.com/${socialId}`}>
        <a target="_blank">{socialId}</a>
      </Link>
    </div>
  </div>
);

export default Member;
