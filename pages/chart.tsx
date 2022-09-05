import type { NextPage } from "next";

const Chart: NextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full min-w-[400px] max-w-2xl flex-col items-center justify-center space-y-20 divide-y">
        <div className="flex h-10 w-full flex-col items-center justify-center">
          <span className="p-4 font-bold">1.아파트 실거래가 추이</span>
          <div className=""></div>
        </div>
        <div className="flex h-10 w-full items-center justify-start">
          <span className="p-4 font-bold">2.아파트 거래량 추이</span>
        </div>
        <div className="flex h-10 w-full items-center justify-start">
          <span className="p-4 font-bold">3.아파트 가격동향(캔들차트)</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
