import React from "react";
import {
  Tile,
  TileBackground,
  TileContent,
  TileWrapper,
} from "@/components/tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";
import Image from "next/image";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>
                <strong>3種の火薬の秘密</strong>
              </div>
              <div className="text-base md:text-xl py-4 tracking-tight">
                ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/firework-01.jpg"
                layout="responsive"
                width={840}
                height={1620}
                alt="Pink Panda"
              />
              <div>こんな感じでテキストを入れることはできる</div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>
                <strong>炎の色の秘密</strong>
              </div>
              <div className="text-base md:text-xl py-4 tracking-tight">
                ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/firework-02.jpg"
                layout="responsive"
                width={840}
                height={1620}
                alt="Steakwallet"
              />
              <div>こんな感じでテキストを入れることはできる</div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>
                <strong>まごころの秘密</strong>
              </div>
              <div className="text-base md:text-xl py-4 tracking-tight">
                ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/firework-03.jpg"
                layout="responsive"
                width={840}
                height={1620}
                alt="Showtime"
              />
              <div>こんな感じでテキストを入れることはできる</div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
