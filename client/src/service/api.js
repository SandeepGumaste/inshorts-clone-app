import axios from "axios";

export const getNews = async (page, size = 5) => {
  try {
    return await axios.get(
      `https://inshorts-clone-app.herokuapp.com/news?page=${page}&size=${size}`
    );
  } catch (error) {
    console.log(error);
  }
};
