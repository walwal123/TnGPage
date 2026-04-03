"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  address: string;
  teamName: string;
}

export default function KakaoMap({ address, teamName }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // 카카오맵 SDK 로드
  useEffect(() => {
    const kakaoMapKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
    
    if (!kakaoMapKey) {
      console.error("[v0] 카카오맵 API 키가 설정되지 않았습니다.");
      return;
    }

    // 이미 로드되어 있는 경우
    if (window.kakao && window.kakao.maps) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapKey}&libraries=services&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        setIsLoaded(true);
      });
    };

    document.head.appendChild(script);

    return () => {
      // 스크립트가 아직 head에 있을 때만 제거
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // 지도 초기화
  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.kakao) return;

    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울 시청 기본 위치
      level: 3,
    };

    const newMap = new window.kakao.maps.Map(mapRef.current, options);
    const newMarker = new window.kakao.maps.Marker({
      position: options.center,
      map: newMap,
    });

    setMap(newMap);
    setMarker(newMarker);
  }, [isLoaded]);

  // 주소로 지도 이동
  useEffect(() => {
    if (!isLoaded || !map || !marker || !address || !window.kakao) return;

    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, (result: any[], status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        // 지도 중심 이동
        map.setCenter(coords);
        
        // 마커 위치 변경
        marker.setPosition(coords);

        // 인포윈도우 표시
        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:5px;font-size:12px;white-space:nowrap;">${teamName}</div>`,
        });
        infowindow.open(map, marker);
      }
    });
  }, [isLoaded, map, marker, address, teamName]);

  if (!process.env.NEXT_PUBLIC_KAKAO_MAP_KEY) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
        카카오맵 API 키가 필요합니다
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <div ref={mapRef} className="h-full w-full" />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-gray-500">지도 로딩중...</div>
        </div>
      )}
    </div>
  );
}
