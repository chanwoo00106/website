import React from "react";

interface WrapperProps {
  children: any;
  numofPages: number;
}

interface TileContextValue {
  numOfPages: number;
  currentPagea: number;
}

export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPagea: 0,
});

export const TileWrapper: React.FC<WrapperProps> = ({
  children,
  numofPages,
}) => {
  return <div className="relative bg-black text-white">Tile Wrapper</div>;
};
