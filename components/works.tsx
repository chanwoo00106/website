import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground></TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => <span>Foo {progress}</span>}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => <span>Foo2 {progress}</span>}
      ></Tile>
    </TileContent>
    <TileContent>Bar</TileContent>
    <TileContent>Var</TileContent>
  </TileWrapper>
);

export default Works;
