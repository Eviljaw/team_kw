import type { NextPage } from "next";
import ReactEcharts from "echarts-for-react";

const Echart: NextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full min-w-[400px] max-w-2xl flex-col items-center justify-center space-y-14 divide-y">
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            1.아파트 실거래가 추이(월)
          </span>
          <div className="flex h-96 w-full items-center justify-center p-5">
            <ReactEcharts
              option={{
                title: { text: "아파트 실거래가 추이", left: "center" },
                tooltip: {
                  trigger: "axis",
                },
                legend: {
                  data: ["잠실 리센츠", "반포 자이"],
                  padding: 50,
                },
                grid: { top: 80 },
                xAxis: {
                  type: "category",
                  data: [
                    "2022년 5월",
                    "2022년 6월",
                    "2022년 7월",
                    "2022년 8월",
                    "2022년 9월",
                    "2022년 10월",
                  ],
                },
                yAxis: {
                  type: "value",
                },
                toolbox: {
                  feature: {
                    saveAsImage: {},
                  },
                },
                series: [
                  {
                    data: [8, 9, 10.5, 12, 11, 9.5],
                    type: "line",
                    smooth: true,
                    symbolSize: 12,
                    lineStyle: {
                      color: "rgb(34, 197, 94)",
                      width: 3,
                    },
                    itemStyle: {
                      width: 6,
                      borderColor: "black",
                      color: "rgb(34, 197, 94)",
                    },
                    name: "잠실 리센츠",
                  },
                  {
                    data: [11.5, 11, 13, 14, 16, 14.5],
                    type: "line",
                    smooth: true,
                    symbolSize: 12,
                    lineStyle: {
                      color: "rgb(255, 118, 118)",
                      width: 3,
                    },
                    itemStyle: {
                      width: 6,
                      borderColor: "black",
                      color: "rgb(255, 118, 118)",
                    },
                    name: "반포 자이",
                  },
                ],
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            2.아파트 실거래가 추이(월) + 캔들차트
          </span>
          <div className="flex h-96 w-full items-center justify-center p-5">
            <span>작업중</span>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            3.아파트 종합평가(레이더차트)
          </span>
          <div className="flex h-96 w-full items-center justify-center p-5">
            <ReactEcharts
              option={{
                title: {
                  text: "반포자이 종합평가",
                  left: "center",
                },
                radar: {
                  //shape: "circle",
                  indicator: [
                    { name: "학군", max: 10 },
                    { name: "상권", max: 10 },
                    { name: "ㅁㅁㅁㅁ", max: 10 },
                    { name: "ㅇㅇㅇㅇ", max: 10 },
                    { name: "편의시설", max: 10 },
                    { name: "역세권", max: 10 },
                  ],
                  radius: 100,
                  axisName: {
                    color: "black",
                  },
                },
                series: [
                  {
                    type: "radar",
                    color: ["rgb(34, 197, 94)"],
                    data: [
                      {
                        value: [7, 7, 5, 3, 9, 8],
                        symbolSize: 12,
                        areaStyle: {
                          color: "rgba(34, 197, 94, 0.3)",
                        },
                      },
                    ],
                  },
                ],
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            4. 아파트 랭킹차트(거래량)
          </span>
          <div className="flex h-96 w-full items-center justify-center p-5">
            <ReactEcharts
              option={{
                title: {
                  text: "아파트 랭킹차트(거래량)",
                  left: "center",
                },
                tooltip: {
                  trigger: "axis",
                  axisPointer: {
                    type: "shadow",
                  },
                },
                legend: {
                  padding: 50,
                },
                grid: {
                  left: "3%",
                  right: "4%",
                  bottom: "3%",
                  top: 80,
                  containLabel: true,
                },
                xAxis: {
                  type: "value",
                },
                yAxis: {
                  type: "category",
                  data: ["반포자이", "마래푸", "리센츠"],
                },
                series: [
                  {
                    name: "2022년 10월",
                    type: "bar",
                    data: [2, 8, 11],
                    color: "rgb(34, 197, 94)",
                  },
                ],
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            5.1 분석 지도 - 거래량 지도
          </span>
          <div className="flex h-96 w-full items-center justify-center p-5"></div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            5.2 분석 지도 - 미분양 지도
          </span>
          <div className="flex h-96 w-full items-center justify-center p-5"></div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            5.3 분석 지도 - 인구 지도(전출입)
          </span>
          <div className="flex h-96 w-full items-center justify-center p-5"></div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            5.4 분석 지도 - 가구 지도(연령 / 가구원 수)
          </span>
          <div className="flex h-96 w-full items-center justify-center p-5"></div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            6.1 심리 지표 - 매수심리 (게이지)
          </span>
          <div className="flex h-96 w-full items-center justify-center p-5">
            <ReactEcharts
              option={{
                series: [
                  {
                    type: "gauge",
                    startAngle: 180,
                    endAngle: 0,
                    min: 0,
                    max: 100,
                    splitNumber: 5,
                    pointer: {
                      icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
                      length: "60%",
                      width: 18,
                      offsetCenter: [0, "5%"],
                      itemStyle: {
                        color: "auto",
                      },
                    },
                    axisLine: {
                      lineStyle: {
                        width: 35,
                        color: [
                          [0.2, "rgb(255, 104, 104)"],
                          [0.4, "rgb(255, 239, 88)"],
                          [0.6, "rgb(196, 196, 196)"],
                          [0.8, "#58D9F9"],
                          [1, "rgb(34, 197, 94)"],
                        ],
                      },
                    },
                    axisTick: {
                      distance: -35,
                      length: 8,
                      lineStyle: {
                        color: "#fff",
                        width: 3,
                      },
                    },
                    splitLine: {
                      distance: -35,
                      length: 35,
                      lineStyle: {
                        width: 4,
                        color: "#fff",
                      },
                    },
                    axisLabel: {
                      show: false,
                    },
                    title: {
                      show: false,
                    },
                    detail: {
                      valueAnimation: true,
                      color: "auto",
                      offsetCenter: [0, "20%"],
                      formatter: function (value: number) {
                        if (value <= 20) {
                          return (
                            "{value|" +
                            value.toFixed(0) +
                            "}{unit|\n(Extreme Fear)}"
                          );
                        } else if (value <= 40) {
                          return (
                            "{value|" + value.toFixed(0) + "}{unit|\n(Fear)}"
                          );
                        } else if (value <= 60) {
                          return (
                            "{value|" + value.toFixed(0) + "}{unit|\n(Neutral)}"
                          );
                        } else if (value <= 80) {
                          return (
                            "{value|" + value.toFixed(0) + "}{unit|\n(Greed)}"
                          );
                        } else if (value <= 100) {
                          return (
                            "{value|" +
                            value.toFixed(0) +
                            "}{unit|\n(Extreme Greed)}"
                          );
                        }
                        return "Value Error";
                      },
                      rich: {
                        value: {
                          fontSize: 40,
                          fontWeight: "bolder",
                          color: "auto",
                          padding: [0, 0, -70, 0],
                        },
                        unit: {
                          fontSize: 25,
                          color: "auto",
                          padding: [0, 0, -80, 0],
                        },
                      },
                    },
                    data: [
                      {
                        value: 15,
                      },
                    ],
                  },
                ],
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
