import React, { useContext, useRef } from "react";
import { SizeContext } from "./size-observer";

interface Props {
  children?: React.ReactNode;
  initialOffSetX: number;
  className: string;
  contentWidth: number;
}

const SliderContainer: React.FC<Props> = ({
  children,
  initialOffSetX,
  className,
  contentWidth,
}) => {
  const { innerWidth } = useContext(SizeContext);
  const refScrollX = useRef<number>(initialOffSetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const enabled = innerWidth < contentWidth;
  return (
    <div
      ref={refContent}
      className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}
    >
      <div ref={refContent} className="inline-block">
        {children}
      </div>
    </div>
  );
};
