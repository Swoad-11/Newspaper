import { useContext } from "react";
import { NewsContext } from "../../../conext";
import { formatTime } from "../../../utils/formatTime";
export default function Right() {
  const { newsData } = useContext(NewsContext);

  const limitedNewsData = newsData.slice(9, 14);

  return (
    <>
      <div className="col-span-12 self-start xl:col-span-4">
        <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
          {limitedNewsData.map((news, index) => {
            if (index === 0) {
              return (
                <div key={index} className="col-span-12 mb-6 md:col-span-8">
                  <img className="w-full" src={news.urlToImage} alt="thumb" />

                  <div className="col-span-12 mt-6 md:col-span-4">
                    <a href="#">
                      <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                        {news.title}
                      </h3>
                    </a>
                    <p className="text-base text-[#292219]">
                      {news.description}
                    </p>
                    <p className="mt-5 text-base text-[#94908C]">
                      {formatTime(news.publishedAt)}
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="col-span-12 md:col-span-8">
                  <div className="col-span-12 md:col-span-4">
                    <a href="#">
                      <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                        {news.title}
                      </h3>
                    </a>
                    <p className="text-base text-[#292219]">
                      {news.description}
                    </p>
                    <p className="mt-5 text-base text-[#94908C]">
                      {formatTime(news.publishedAt)}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
