import React from "react";
import Image from "next/image";
import SliderContainer from "./slider";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffSetX={0}>
      <Image
        src="https://github.com/GSM-MSG.png"
        width={150}
        height={50}
        alt="Audubon"
        objectFit="contain"
      />
      <Image
        src="https://github.com/themoment-team.png"
        width={150}
        height={50}
        alt="Audubon"
        objectFit="contain"
      />
    </SliderContainer>
  </>
);

export default ClientLogos;
