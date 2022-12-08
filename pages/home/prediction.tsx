import type { NextPage } from "next";
import ReactEcharts from "echarts-for-react";
import Layout from "../../components/layout";
import MenuButton from "../../components/menuButton";
import { useState } from "react";

const Echart: NextPage = () => {
  const [detail, setDetail] = useState("1");
  function onClick(event: any) {
    console.log(event.currentTarget.id);
    setDetail(event.currentTarget.id);
  }
  let style = { width: "20%" };
  return (
    <Layout title="예측 모델" canGoBack>
      <div className="flex w-full max-w-2xl flex-col items-center justify-center">
        <div className="grid grid-cols-3 gap-3 border-b border-gray-600 pb-4">
          <MenuButton id="1" onClick={onClick} text="종합점수"></MenuButton>
          <MenuButton id="2" onClick={onClick} text="상승확률"></MenuButton>
          <MenuButton id="3" onClick={onClick} text="매수추천시기"></MenuButton>
        </div>
        {detail === "1" ? (
          <div className="mt-4 w-full">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-pink-500">강남지역</span>
                <span className="text-white"> 종합 점수</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-star-fill h-6 w-6 text-pink-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-star-fill h-6 w-6 text-pink-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-star-fill h-6 w-6 text-pink-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-star-fill h-6 w-6 text-pink-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-star h-6 w-6 text-pink-500"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />{" "}
                </svg>
              </div>
            </div>
            <div className="-mb-6 mt-7 flex flex-col text-sm font-semibold text-white">
              <div>
                <span>강남 지역의 종합 점수는</span>
                <span className="text-pink-400"> 4점</span>
                <span>으로 매우 높습니다.</span>
              </div>
              <span>가격이 비싼 것이 유일한 단점이며 그 외 학군/상권 등</span>
              <span>모든 부분에서 국내 최고의 인프라를 자랑합니다.</span>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <div className="flex h-96 w-full items-center justify-center p-5">
                <ReactEcharts
                  option={{
                    radar: {
                      //shape: "circle",
                      indicator: [
                        { name: "학군", max: 10 },
                        { name: "상권", max: 10 },
                        { name: "가격", max: 10 },
                        { name: "편의시설", max: 10 },
                        { name: "교통", max: 10 },
                      ],
                      radius: 100,
                      axisName: {
                        color: "rgb(255,255,255,0.8)",
                      },
                    },
                    series: [
                      {
                        type: "radar",
                        color: ["rgb(236, 72, 153)"],
                        data: [
                          {
                            value: [10, 9, 4, 9, 8],
                            symbolSize: 12,
                            areaStyle: {
                              color: "rgba(201, 47, 174, 0.5)",
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
          </div>
        ) : (
          ""
        )}
        {detail === "2" ? (
          <div className="mt-4 w-full">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-pink-500">강남지역</span>
                <span className="text-white"> 상승 확률</span>
              </div>
              <div className="h-6 w-1/2 rounded-full bg-gray-600">
                <div
                  className="flex h-6 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white"
                  style={style}
                >
                  3%
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <div className="flex h-96 w-full items-center justify-center p-5">
                <ReactEcharts
                  option={{
                    tooltip: {
                      trigger: "axis",
                      axisPointer: {
                        type: "shadow",
                      },
                    },
                    grid: {
                      top: 40,
                      bottom: 30,
                    },
                    xAxis: {
                      type: "value",
                      position: "top",
                      axisLabel: {
                        color: "white",
                      },
                      splitLine: {
                        lineStyle: {
                          type: "dashed",
                        },
                      },
                    },
                    yAxis: {
                      type: "category",
                      axisLine: { show: false },
                      axisLabel: { show: false },
                      axisTick: { show: false },
                      splitLine: { show: false },
                      data: [
                        "PIR상승률",
                        "미분양 숫자",
                        "금리 상승률",
                        "M2 상승률",
                        "입주물량",
                        "평균점수",
                      ],
                    },
                    series: [
                      {
                        name: "Cose",
                        color: "rgb(165, 61, 227, 0.8)",
                        type: "bar",
                        stack: "Total",
                        label: {
                          show: true,
                          color: "white",
                          formatter: "{b}",
                        },
                        data: [
                          -19.65,
                          -65.65,
                          -100,
                          -26.76,
                          -75.45,
                          {
                            value: -57.5,
                            itemStyle: {
                              color: "rgb(236, 72, 153)",
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
          </div>
        ) : (
          ""
        )}
        {detail === "3" ? (
          <div className="mt-4 w-full">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-pink-500">강남지역</span>
                <span className="text-white"> 매수 추천 시기</span>
              </div>
              <div className="rounded-full bg-pink-500 px-4 text-sm text-white">
                25년 2Q
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <div className="flex h-96 w-full items-center justify-center p-5">
                <ReactEcharts
                  option={{
                    tooltip: {
                      trigger: "axis",
                    },
                    grid: { top: 50 },
                    xAxis: {
                      axisLabel: { color: "white" },
                      type: "category",
                      data: [
                        "22년 3Q",
                        "22년 4Q",
                        "23년 1Q",
                        "23년 2Q",
                        "23년 3Q",
                        "23년 4Q",
                        "24년 1Q",
                        "24년 2Q",
                        "24년 3Q",
                        "24년 4Q",
                        "25년 1Q",
                        "25년 2Q",
                      ],
                    },
                    yAxis: {
                      axisLabel: { color: "white" },
                      type: "value",
                      min: "70",
                    },
                    visualMap: {
                      show: false,
                      dimension: 0,
                      pieces: [
                        { lte: 8, color: "rgba(255,255,255,0.6)" },
                        { gt: 8, lte: 13, color: "rgb(255, 0, 100)" },
                      ],
                    },
                    series: [
                      {
                        name: "강남 아파트 평균 가격 추이",
                        type: "line",
                        smooth: true,
                        data: [
                          101.63, 100.5, 98, 95, 91.4, 86.8, 84.8, 83.7, 82.9,
                          82.2, 80.1, 80.8,
                        ],
                        markArea: {
                          label: {
                            color: "rgba(255,0,100,0.9)",
                          },
                          itemStyle: {
                            color: "rgba(255, 0, 100, 0.35)",
                          },
                          data: [
                            [
                              { name: "추천 시기", xAxis: "25년 1Q" },
                              { xAxis: "25년 2Q" },
                            ],
                          ],
                        },
                        symbolSize: 10,
                      },
                    ],
                  }}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="-mt-8 flex w-full flex-col px-5 text-sm text-white">
                <div>
                  <span className="text-pink-400">25년 2Q</span>
                  <span>부터 입주물량 소화가 완료되고</span>
                </div>
                <span>금리가 하락 예상되며, 경기침체를 대비한</span>
                <span>긴축정책의 종료, PIR 감소가 예상됨</span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export default Echart;
