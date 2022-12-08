import type { NextPage } from "next";
import Layout from "../../components/layout";
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import MapButton from "../../components/mapButton";
import { useState } from "react";

const MarketPhycology: NextPage = () => {
  const monthData: any = [
    [
      { id: 11, name: "서울", value: -2080 },
      { id: 28, name: "인천", value: 1899 },
      { id: 41, name: "경기", value: 4471 },
      { id: 26, name: "부산", value: -1430 },
      { id: 27, name: "대구", value: -1370 },
      { id: 30, name: "대전", value: -532 },
      { id: 29, name: "광주", value: -634 },
      { id: 31, name: "울산", value: -873 },
      { id: 36, name: "세종", value: 875 },
      { id: 48, name: "경남", value: -2401 },
      { id: 47, name: "경북", value: -2214 },
      { id: 44, name: "충남", value: 540 },
      { id: 46, name: "전남", value: -1234 },
      { id: 45, name: "전북", value: -951 },
      { id: 43, name: "충북", value: 85 },
      { id: 42, name: "강원", value: 59 },
      { id: 50, name: "제주", value: 246 },
    ],
    [
      { id: 11, name: "서울", value: -1596 },
      { id: 28, name: "인천", value: 3514 },
      { id: 41, name: "경기", value: 3395 },
      { id: 26, name: "부산", value: -2142 },
      { id: 27, name: "대구", value: -1186 },
      { id: 30, name: "대전", value: -219 },
      { id: 29, name: "광주", value: -675 },
      { id: 31, name: "울산", value: -856 },
      { id: 36, name: "세종", value: 674 },
      { id: 48, name: "경남", value: -1906 },
      { id: 47, name: "경북", value: -1947 },
      { id: 44, name: "충남", value: 810 },
      { id: 46, name: "전남", value: -906 },
      { id: 45, name: "전북", value: -1330 },
      { id: 43, name: "충북", value: 45 },
      { id: 42, name: "강원", value: 114 },
      { id: 50, name: "제주", value: 479 },
    ],
    [
      { id: 11, name: "서울", value: -4757 },
      { id: 28, name: "인천", value: 2537 },
      { id: 41, name: "경기", value: 694 },
      { id: 26, name: "부산", value: -3151 },
      { id: 27, name: "대구", value: -2184 },
      { id: 30, name: "대전", value: 58 },
      { id: 29, name: "광주", value: -306 },
      { id: 31, name: "울산", value: -1295 },
      { id: 36, name: "세종", value: 550 },
      { id: 48, name: "경남", value: -2718 },
      { id: 47, name: "경북", value: -2660 },
      { id: 44, name: "충남", value: 71 },
      { id: 46, name: "전남", value: -1430 },
      { id: 45, name: "전북", value: -1285 },
      { id: 43, name: "충북", value: -277 },
      { id: 42, name: "강원", value: -377 },
      { id: 50, name: "제주", value: 525 },
    ],
    [
      { id: 11, name: "서울", value: -37686 },
      { id: 28, name: "인천", value: -3020 },
      { id: 41, name: "경기", value: -15703 },
      { id: 26, name: "부산", value: -7618 },
      { id: 27, name: "대구", value: -4201 },
      { id: 30, name: "대전", value: -1638 },
      { id: 29, name: "광주", value: -1541 },
      { id: 31, name: "울산", value: -1267 },
      { id: 36, name: "세종", value: 486 },
      { id: 48, name: "경남", value: -4521 },
      { id: 47, name: "경북", value: -4290 },
      { id: 44, name: "충남", value: -813 },
      { id: 46, name: "전남", value: -3646 },
      { id: 45, name: "전북", value: -3068 },
      { id: 43, name: "충북", value: -1262 },
      { id: 42, name: "강원", value: -1405 },
      { id: 50, name: "제주", value: -590 },
    ],
    [
      { id: 11, name: "서울", value: -7046 },
      { id: 28, name: "인천", value: 2291 },
      { id: 41, name: "경기", value: 5155 },
      { id: 26, name: "부산", value: -1540 },
      { id: 27, name: "대구", value: -883 },
      { id: 30, name: "대전", value: 261 },
      { id: 29, name: "광주", value: -205 },
      { id: 31, name: "울산", value: -484 },
      { id: 36, name: "세종", value: 333 },
      { id: 48, name: "경남", value: -1975 },
      { id: 47, name: "경북", value: -1677 },
      { id: 44, name: "충남", value: 1064 },
      { id: 46, name: "전남", value: -1301 },
      { id: 45, name: "전북", value: -820 },
      { id: 43, name: "충북", value: -46 },
      { id: 42, name: "강원", value: -57 },
      { id: 50, name: "제주", value: -102 },
    ],
  ];
  const [month, setMonth] = useState([
    { id: 11, name: "서울", value: -7046 },
    { id: 28, name: "인천", value: 2291 },
    { id: 41, name: "경기", value: 5155 },
    { id: 26, name: "부산", value: -1540 },
    { id: 27, name: "대구", value: -883 },
    { id: 30, name: "대전", value: 261 },
    { id: 29, name: "광주", value: -205 },
    { id: 31, name: "울산", value: -484 },
    { id: 36, name: "세종", value: 333 },
    { id: 48, name: "경남", value: -1975 },
    { id: 47, name: "경북", value: -1677 },
    { id: 44, name: "충남", value: 1064 },
    { id: 46, name: "전남", value: -1301 },
    { id: 45, name: "전북", value: -820 },
    { id: 43, name: "충북", value: -46 },
    { id: 42, name: "강원", value: -57 },
    { id: 50, name: "제주", value: -102 },
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
    <Layout title="인구 증감" canGoBack>
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
              min: -5000,
              max: 5000,
              realtime: false,
              caculable: true,
              inRange: {
                color: ["RGB(0,100,200)", "RGB(255,255,255)", "rgb(255,0,100)"],
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
