import { useEffect, useRef } from "react";
import * as S from "./ChatPlaceItem.styles";

declare const window: typeof globalThis & {
  kakao: any;
};

interface ChatPlaceItemProps {
  dog: { id: string; name: string };
  data: { lat: number; lng: number };
}

export default function ChatPlaceItem({ dog, data }: ChatPlaceItemProps) {
  const staticMapRef = useRef<HTMLDivElement>(null);

  const onClickSeePlace = () => {
    console.log("onClickSeePlace", staticMapRef.current);
    staticMapRef.current?.firstChild?.click();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=d860e7570db760ac5d5ed92bbabf6e21&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const markerPosition = new window.kakao.maps.LatLng(data.lat, data.lng);

        const imageSrc = "/ic_marker.svg";
        const imageSize = new window.kakao.maps.Size(64, 69);

        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize
        );

        const marker = {
          position: markerPosition,
        };

        const staticMapOption = {
          center: markerPosition,
          level: 3,
          marker,
        };

        const staticMap = new window.kakao.maps.StaticMap(
          staticMapRef.current,
          staticMapOption
        );
      });
    };
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>{dog.name}님이 장소를 공유했습니다.</S.TitleWrapper>
        <S.MapWrapper ref={staticMapRef} />
        <S.ButtonWrapper type="button" onClick={onClickSeePlace}>
          장소보기
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}