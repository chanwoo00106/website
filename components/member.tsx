import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  img: string;
  name: string;
  socialId: string;
  link: string;
}
const Member: React.FC<Props> = ({ img, link, name, socialId }) => (
  <div>
    <Image
      src={img}
      alt={name}
      width={150}
      height={150}
      className="rounded-full"
    />
    <div className="text-2xl xl:text-3xl">{name}</div>
    <div className="text-xl">
      <Link href={link}>
        <a target="_blank">{socialId}</a>
      </Link>
    </div>
  </div>
);

export default Member;
