import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Layout from "../../components/layout";
import SearchBar from "../../components/searchBar";
import * as echarts from "echarts";
import Link from "next/link";

const Search: NextPage = () => {
  echarts.registerMap("KOREA", require("../api/geo/korea.json"));
  const onMapClick = (params: any) => {
    console.log("clicked! : ", params.data.id);
  };
  const onEvents = {
    click: onMapClick,
  };
  return (
    <Layout title="조회" hasTabBar>
      <div className="mt-6">
        <SearchBar large text="검색 바"></SearchBar>
      </div>
      <div className="mt-10 grid grid-cols-4">
        <div className="flex items-center justify-center">
          <Link href="/search/map">
            <a className="flex flex-col items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>지도</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/search/list">
            <a className="flex flex-col items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                />
              </svg>
              <span>리스트</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/search/rank">
            <a className="flex flex-col items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>랭킹</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center">4</div>
        <div className="flex items-center justify-center">5</div>
        <div className="flex items-center justify-center">6</div>
        <div className="flex items-center justify-center">7</div>
        <div className="flex items-center justify-center">8</div>
      </div>
    </Layout>
  );
};

export default Search;
