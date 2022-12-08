import type { NextPage } from "next";
import Layout from "../../components/layout";
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import MapButton from "../../components/mapButton";
import { useState } from "react";

const MarketPhycology: NextPage = () => {
  const monthData: any = [
    [
      { id: 28, name: "인천", value: 3761 },
      { id: 50, name: "제주", value: 783 },
      { id: 11, name: "서울", value: 6617 },
      { id: 42, name: "강원", value: 2566 },
      { id: 43, name: "충북", value: 2350 },
      { id: 45, name: "전북", value: 2481 },
      { id: 46, name: "전남", value: 1918 },
      { id: 44, name: "충남", value: 3103 },
      { id: 47, name: "경북", value: 3203 },
      { id: 48, name: "경남", value: 3947 },
      { id: 36, name: "세종", value: 199 },
      { id: 31, name: "울산", value: 1111 },
      { id: 29, name: "광주", value: 1707 },
      { id: 30, name: "대전", value: 1104 },
      { id: 27, name: "대구", value: 1186 },
      { id: 26, name: "부산", value: 2942 },
      { id: 41, name: "경기", value: 11326 },
    ],
    [
      { id: 28, name: "인천", value: 2818 },
      { id: 50, name: "제주", value: 584 },
      { id: 11, name: "서울", value: 4858 },
      { id: 42, name: "강원", value: 1888 },
      { id: 43, name: "충북", value: 1859 },
      { id: 45, name: "전북", value: 1937 },
      { id: 46, name: "전남", value: 1728 },
      { id: 44, name: "충남", value: 2344 },
      { id: 47, name: "경북", value: 2454 },
      { id: 48, name: "경남", value: 3053 },
      { id: 36, name: "세종", value: 175 },
      { id: 31, name: "울산", value: 898 },
      { id: 29, name: "광주", value: 1279 },
      { id: 30, name: "대전", value: 1020 },
      { id: 27, name: "대구", value: 1224 },
      { id: 26, name: "부산", value: 2423 },
      { id: 41, name: "경기", value: 9058 },
    ],
    [
      { id: 28, name: "인천", value: 2445 },
      { id: 50, name: "제주", value: 773 },
      { id: 11, name: "서울", value: 4015 },
      { id: 42, name: "강원", value: 1841 },
      { id: 43, name: "충북", value: 1825 },
      { id: 45, name: "전북", value: 1729 },
      { id: 46, name: "전남", value: 1594 },
      { id: 44, name: "충남", value: 2396 },
      { id: 47, name: "경북", value: 2644 },
      { id: 48, name: "경남", value: 2743 },
      { id: 36, name: "세종", value: 182 },
      { id: 31, name: "울산", value: 731 },
      { id: 29, name: "광주", value: 991 },
      { id: 30, name: "대전", value: 930 },
      { id: 27, name: "대구", value: 1242 },
      { id: 26, name: "부산", value: 2027 },
      { id: 41, name: "경기", value: 7423 },
    ],
    [
      { id: 11, name: "서울", value: 3388 },
      { id: 28, name: "인천", value: 2292 },
      { id: 41, name: "경기", value: 6929 },
      { id: 26, name: "부산", value: 2073 },
      { id: 27, name: "대구", value: 1126 },
      { id: 30, name: "대전", value: 816 },
      { id: 29, name: "광주", value: 909 },
      { id: 31, name: "울산", value: 711 },
      { id: 36, name: "세종", value: 171 },
      { id: 48, name: "경남", value: 2534 },
      { id: 47, name: "경북", value: 2271 },
      { id: 44, name: "충남", value: 2189 },
      { id: 43, name: "충북", value: 1603 },
      { id: 45, name: "전북", value: 1565 },
      { id: 46, name: "전남", value: 1578 },
      { id: 42, name: "강원", value: 1612 },
      { id: 50, name: "제주", value: 636 },
    ],
    [
      { id: 11, name: "서울", value: 3388 },
      { id: 28, name: "인천", value: 2292 },
      { id: 41, name: "경기", value: 6929 },
      { id: 26, name: "부산", value: 2073 },
      { id: 27, name: "대구", value: 1126 },
      { id: 30, name: "대전", value: 816 },
      { id: 29, name: "광주", value: 909 },
      { id: 31, name: "울산", value: 711 },
      { id: 36, name: "세종", value: 171 },
      { id: 48, name: "경남", value: 2534 },
      { id: 47, name: "경북", value: 2271 },
      { id: 44, name: "충남", value: 2189 },
      { id: 43, name: "충북", value: 1603 },
      { id: 45, name: "전북", value: 1565 },
      { id: 46, name: "전남", value: 1578 },
      { id: 42, name: "강원", value: 1612 },
      { id: 50, name: "제주", value: 636 },
    ],
  ];
  const [month, setMonth] = useState([
    { id: 11, name: "서울", value: 3388 },
    { id: 28, name: "인천", value: 2292 },
    { id: 41, name: "경기", value: 6929 },
    { id: 26, name: "부산", value: 2073 },
    { id: 27, name: "대구", value: 1126 },
    { id: 30, name: "대전", value: 816 },
    { id: 29, name: "광주", value: 909 },
    { id: 31, name: "울산", value: 711 },
    { id: 36, name: "세종", value: 171 },
    { id: 48, name: "경남", value: 2534 },
    { id: 47, name: "경북", value: 2271 },
    { id: 44, name: "충남", value: 2189 },
    { id: 43, name: "충북", value: 1603 },
    { id: 45, name: "전북", value: 1565 },
    { id: 46, name: "전남", value: 1578 },
    { id: 42, name: "강원", value: 1612 },
    { id: 50, name: "제주", value: 636 },
  ]);
  function onClick(event: any) {
    if (event.currentTarget.id === "1") {
      console.log("1", monthData[0]);
      setMonth(monthData[0]);
    } else if (event.currentTarget.id === "2") {
      setMonth(monthData[1]);
    } else if (event.currentTarget.id === "3") {
      setMonth(monthData[2]);
    } else if (event.currentTarget.id === "4") {
      setMonth(monthData[3]);
    } else if (event.currentTarget.id === "5") {
      setMonth(monthData[4]);
    }
  }
  echarts.registerMap("KOREA", require("../api/geo/korea.json"));
  const onMapClick = (params: any) => {
    console.log("clicked! : ", params.data.id);
  };
  const onEvents = {
    click: onMapClick,
  };
  return (
    <Layout title="주택 거래량" canGoBack>
      <div className="flex items-center justify-around px-3">
        <MapButton id="1" onClick={onClick} text="06월"></MapButton>
        <MapButton id="2" onClick={onClick} text="07월"></MapButton>
        <MapButton id="3" onClick={onClick} text="08월"></MapButton>
        <MapButton id="4" onClick={onClick} text="09월"></MapButton>
        <MapButton id="5" onClick={onClick} text="10월"></MapButton>
      </div>
      <div className="h-[75vh] w-full">
        <ReactEcharts
          onEvents={onEvents}
          option={{
            title: {},
            tooltip: {},
            visualMap: {
              min: 0,
              max: 10000,
              realtime: false,
              caculable: true,
              inRange: {
                color: ["RGB(255,255,255)", "rgb(255,0,100)"],
              },
            },
            geo: {
              map: "KOREA",
              roam: false,
              zoom: 1.5,
              nameMap: {
                서울특별시: "서울",
                부산광역시: "부산",
                대구광역시: "대구",
                인천광역시: "인천",
                광주광역시: "광주",
                대전광역시: "대전",
                울산광역시: "울산",
                세종특별자치시: "세종",
                경기도: "경기",
                강원도: "강원",
                충청북도: "충북",
                충청남도: "충남",
                전라북도: "전북",
                전라남도: "전남",
                경상북도: "경북",
                경상남도: "경남",
                제주특별자치도: "제주",
              },
            },
            series: {
              name: "거래량",
              type: "map",
              geoIndex: 0,
              data: month,
              nameMap: {
                서울특별시: "서울",
                부산광역시: "부산",
                대구광역시: "대구",
                인천광역시: "인천",
                광주광역시: "광주",
                대전광역시: "대전",
                울산광역시: "울산",
                세종특별자치시: "세종",
                경기도: "경기",
                강원도: "강원",
                충청북도: "충북",
                충청남도: "충남",
                전라북도: "전북",
                전라남도: "전남",
                경상북도: "경북",
                경상남도: "경남",
                제주특별자치도: "제주",
              },
            },
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </Layout>
  );
};

export default MarketPhycology;
