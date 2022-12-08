import type { NextPage } from "next";
import Layout from "../../components/layout";
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import MapButton from "../../components/mapButton";
import { useState } from "react";

const MarketPhycology: NextPage = () => {
  const monthData: any = [
    [
      { id: 11, name: "서울", value: 41.6 },
      { id: 26, name: "부산", value: 29.3 },
      { id: 27, name: "대구", value: 17.8 },
      { id: 28, name: "인천", value: 24.6 },
      { id: 29, name: "광주", value: 32.9 },
      { id: 30, name: "대전", value: 28 },
      { id: 31, name: "울산", value: 25 },
      { id: 36, name: "세종", value: 7.4 },
      { id: 41, name: "경기", value: 31.9 },
      { id: 42, name: "강원", value: 93.2 },
      { id: 43, name: "충북", value: 75.8 },
      { id: 44, name: "충남", value: 65 },
      { id: 45, name: "전북", value: 71.7 },
      { id: 46, name: "전남", value: 27 },
      { id: 47, name: "경북", value: 60 },
      { id: 48, name: "경남", value: 63.7 },
      { id: 50, name: "제주", value: 65.2 },
    ],
    [
      { id: 11, name: "서울", value: 33 },
      { id: 26, name: "부산", value: 23.6 },
      { id: 27, name: "대구", value: 16.4 },
      { id: 28, name: "인천", value: 18 },
      { id: 29, name: "광주", value: 37.1 },
      { id: 30, name: "대전", value: 16.2 },
      { id: 31, name: "울산", value: 28 },
      { id: 36, name: "세종", value: 11.1 },
      { id: 41, name: "경기", value: 25.8 },
      { id: 42, name: "강원", value: 72.8 },
      { id: 43, name: "충북", value: 64.5 },
      { id: 44, name: "충남", value: 54 },
      { id: 45, name: "전북", value: 40.9 },
      { id: 46, name: "전남", value: 27.4 },
      { id: 47, name: "경북", value: 35.5 },
      { id: 48, name: "경남", value: 54.3 },
      { id: 50, name: "제주", value: 76.5 },
    ],
    [
      { id: 11, name: "서울", value: 31.9 },
      { id: 26, name: "부산", value: 19.9 },
      { id: 27, name: "대구", value: 13.1 },
      { id: 28, name: "인천", value: 21.7 },
      { id: 29, name: "광주", value: 11.6 },
      { id: 30, name: "대전", value: 14.8 },
      { id: 31, name: "울산", value: 24.9 },
      { id: 36, name: "세종", value: 7.1 },
      { id: 41, name: "경기", value: 20.4 },
      { id: 42, name: "강원", value: 70.2 },
      { id: 43, name: "충북", value: 26.7 },
      { id: 44, name: "충남", value: 47.4 },
      { id: 45, name: "전북", value: 28.8 },
      { id: 46, name: "전남", value: 25.7 },
      { id: 47, name: "경북", value: 33.8 },
      { id: 48, name: "경남", value: 52.7 },
      { id: 50, name: "제주", value: 47.8 },
    ],
    [
      { id: 11, name: "서울", value: 24.9 },
      { id: 26, name: "부산", value: 15.5 },
      { id: 27, name: "대구", value: 7.8 },
      { id: 28, name: "인천", value: 19.9 },
      { id: 29, name: "광주", value: 16.5 },
      { id: 30, name: "대전", value: 12.8 },
      { id: 31, name: "울산", value: 19.8 },
      { id: 36, name: "세종", value: 14.8 },
      { id: 41, name: "경기", value: 16.5 },
      { id: 42, name: "강원", value: 59.1 },
      { id: 43, name: "충북", value: 21.6 },
      { id: 44, name: "충남", value: 33.7 },
      { id: 45, name: "전북", value: 28.3 },
      { id: 46, name: "전남", value: 32.8 },
      { id: 47, name: "경북", value: 30.6 },
      { id: 48, name: "경남", value: 38.6 },
      { id: 50, name: "제주", value: 32.2 },
    ],
    [
      { id: 11, name: "서울", value: 23 },
      { id: 26, name: "부산", value: 10.6 },
      { id: 27, name: "대구", value: 11.4 },
      { id: 28, name: "인천", value: 10.6 },
      { id: 29, name: "광주", value: 14.2 },
      { id: 30, name: "대전", value: 16.4 },
      { id: 31, name: "울산", value: 9.6 },
      { id: 36, name: "세종", value: 3.3 },
      { id: 41, name: "경기", value: 14.2 },
      { id: 42, name: "강원", value: 47.3 },
      { id: 43, name: "충북", value: 35.2 },
      { id: 44, name: "충남", value: 28.6 },
      { id: 45, name: "전북", value: 19.8 },
      { id: 46, name: "전남", value: 33.5 },
      { id: 47, name: "경북", value: 21.1 },
      { id: 48, name: "경남", value: 38.7 },
      { id: 50, name: "제주", value: 35.5 },
    ],
  ];
  const [month, setMonth] = useState([
    { id: 11, name: "서울", value: 23 },
    { id: 26, name: "부산", value: 10.6 },
    { id: 27, name: "대구", value: 11.4 },
    { id: 28, name: "인천", value: 10.6 },
    { id: 29, name: "광주", value: 14.2 },
    { id: 30, name: "대전", value: 16.4 },
    { id: 31, name: "울산", value: 9.6 },
    { id: 36, name: "세종", value: 3.3 },
    { id: 41, name: "경기", value: 14.2 },
    { id: 42, name: "강원", value: 47.3 },
    { id: 43, name: "충북", value: 35.2 },
    { id: 44, name: "충남", value: 28.6 },
    { id: 45, name: "전북", value: 19.8 },
    { id: 46, name: "전남", value: 33.5 },
    { id: 47, name: "경북", value: 21.1 },
    { id: 48, name: "경남", value: 38.7 },
    { id: 50, name: "제주", value: 35.5 },
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
    <Layout title="매수 심리" canGoBack>
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
              max: 100,
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
