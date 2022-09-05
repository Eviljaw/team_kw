import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full min-w-[400px] max-w-2xl flex-col items-center justify-center space-y-14 divide-y">
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            1.아파트 실거래가 추이
          </span>
          <div className="flex items-center justify-center">
            <Plot
              data={[
                {
                  x: ["2022년 8월", "2022년 9월", "2022년 10월"],
                  y: [20, 23, 30],
                  mode: "scatter",
                  line: { shape: "spline", color: "rgb(34, 197, 94)", size: 3 },
                  marker: { size: 15 },
                },
              ]}
              layout={{ title: "반포자이 실거래가" }}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            2.아파트 거래량 추이
          </span>
          <div className="flex items-center justify-center">
            <Plot
              data={[
                {
                  x: ["2022년 8월", "2022년 9월", "2022년 10월"],
                  y: [20, 23, 30],
                  type: "bar",
                  opacity: 0.5,
                  width: 0.5,
                  marker: {
                    color: "rgb(34, 197, 94)",
                    line: {
                      color: "rgb(21, 128, 61)",
                      width: 3,
                    },
                  },
                },
              ]}
              layout={{ title: "반포자이 거래량" }}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            3.아파트 가격동향(캔들차트)
          </span>
          <div className="flex items-center justify-center bg-green-300">
            <Plot
              data={[
                {
                  x: ["2022년 8월", "2022년 9월", "2022년 10월"],
                  open: [18, 25, 24],
                  high: [23, 27, 30],
                  low: [15, 18, 22],
                  close: [20, 21, 27],
                  type: "candlestick",
                  decreasing: { line: { color: "rgb(248,113,113)" } },
                  increasing: { line: { color: "rgb(134,239,172)" } },
                  xaxis: "x",
                  yaxis: "y",
                  width: 0.5,
                  marker: {
                    color: "rgb(34, 197, 94)",
                    line: {
                      color: "rgb(21, 128, 61)",
                      width: 3,
                    },
                  },
                },
              ]}
              layout={{ title: "반포자이 실거래가 차트(캔들차트)" }}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            4.아파트 종합평가(레이더차트)
          </span>
          <div className="flex items-center justify-center">
            <Plot
              data={[
                {
                  r: [5, 7, 8, 6, 3, 9, 5],
                  theta: [
                    "상권",
                    "학군",
                    "역세권",
                    "편의시설",
                    "ㅇㅇㅇㅇ",
                    "ㅁㅁㅁㅁ",
                    "상권",
                  ],
                  type: "scatterpolar",
                  fill: "toself",
                  line: {
                    color: "rgb(34, 197, 94)",
                  },
                  marker: {
                    size: 12,
                  },
                },
              ]}
              layout={{
                title: "반포자이 종합점수",
                polar: {
                  radialaxis: {
                    visible: false,
                    range: [0, 10],
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
