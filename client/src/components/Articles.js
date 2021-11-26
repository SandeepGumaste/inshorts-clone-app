import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getNews } from "../service/api";
import Article from "./Article";

const Articles = () => {
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const dailyNews = async () => {
      let response = await getNews(page);
      setInfo([...info, ...response.data]);
    };
    dailyNews();
  }, [page]);
  return (
    <InfiniteScroll
      dataLength={info.length}
      next={() => setPage((page) => page + 1)}
      hasMore={true}
    >
      {info.map((article) => (
        <Article article={article} key={info.indexOf(article)} />
      ))}
    </InfiniteScroll>
  );
};

export default Articles;
