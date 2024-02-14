import { useContext } from "react";
import { NewsContext } from "../../../conext";
import { formatTime } from "../../../utils/formatTime";

export default function Left() {
  const { newsData } = useContext(NewsContext);

  const limitedNewsData = newsData.slice(0, 9);

  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {limitedNewsData.map((news, index) => {
        if (index === 0) {
          return (
            <div key={index} className="col-span-12 grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                    {news.title}
                  </h3>
                </a>
                <p className="text-base text-[#5C5955]">{news.description}</p>
                <p className="mt-5 text-base text-[#5C5955]">
                  {formatTime(news.publishedAt)}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-8">
                <img className="w-full" src={news.image} alt="thumb" />
                <p className="mt-5 text-base text-[#5C5955]">{news.author}</p>
              </div>
            </div>
          );
        } else if (index === 1) {
          return (
            <div
              key={index}
              className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8"
            >
              <div className="col-span-12 md:col-span-6">
                <a href="">
                  <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                    {news.title}
                  </h3>
                </a>
                <p className="text-base text-[#292219]">{news.description}</p>
                <p className="mt-5 text-base text-[#5C5955]">
                  {formatTime(news.publishedAt)}
                </p>
              </div>

              <div className="col-span-12 md:col-span-6">
                <img className="w-full" src={news.image} alt="thumb" />
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="col-span-12 md:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                    {news.title}
                  </h3>
                </a>
                <p className="text-base text-[#292219]">{news.description}</p>
                <p className="mt-5 text-base text-[#94908C]">
                  {formatTime(news.publishedAt)}
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
