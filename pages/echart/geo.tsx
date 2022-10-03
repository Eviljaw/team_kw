import type { NextPage } from "next";
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import Korea from "../api/geo/korea.json";

const Echart: NextPage = () => {
  console.log(Korea);
  echarts.registerMap("KOREA", Korea);
  const onMapClick = (params) => {
    console.log("clicked! : ", params.data.id);
  };
  const onEvents = {
    click: onMapClick,
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-full w-full min-w-[400px] max-w-2xl flex-col items-center justify-center space-y-14 divide-y">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            4.1 분석 지도 - 거래량 지도
          </span>
          <div className="flex h-full w-full items-center justify-center p-5">
            <ReactEcharts
              onEvents={onEvents}
              option={{
                title: {
                  text: "geoJson",
                },
                tooltip: {},
                visualMap: {
                  min: 0,
                  max: 9058,
                  realtime: false,
                  caculable: true,
                  inRange: {
                    color: ["RGB(255,255,255)", "rgb(34, 197, 94)"],
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
                  data: [
                    { id: 11, name: "서울", value: 4858 },
                    { id: 26, name: "부산", value: 2423 },
                    { id: 27, name: "대구", value: 1224 },
                    { id: 28, name: "인천", value: 2818 },
                    { id: 29, name: "광주", value: 1279 },
                    { id: 30, name: "대전", value: 1020 },
                    { id: 31, name: "울산", value: 898 },
                    { id: 36, name: "세종", value: 175 },
                    { id: 41, name: "경기", value: 9058 },
                    { id: 42, name: "강원", value: 1888 },
                    { id: 43, name: "충북", value: 1859 },
                    { id: 44, name: "충남", value: 2344 },
                    { id: 45, name: "전북", value: 1937 },
                    { id: 46, name: "전남", value: 1728 },
                    { id: 47, name: "경북", value: 2454 },
                    { id: 48, name: "경남", value: 3053 },
                    { id: 50, name: "제주", value: 584 },
                  ],
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
        </div>
      </div>
    </div>
  );
};

export default Echart;
