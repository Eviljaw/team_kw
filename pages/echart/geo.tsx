import type { NextPage } from "next";
import ReactEcharts from "echarts-for-react";

const Echart: NextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full min-w-[400px] max-w-2xl flex-col items-center justify-center space-y-14 divide-y">
        <div className="flex w-full flex-col items-center justify-center">
          <span className="w-full p-4 text-left font-bold">
            4.1 분석 지도 - 거래량 지도
          </span>
          <div className="flex h-96 w-full items-center justify-center p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Echart;
