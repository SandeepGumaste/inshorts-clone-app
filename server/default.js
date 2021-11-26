import { data } from "./constants/data.js";
import News from "./model/news.js";
const DefaultData = async () => {
  try {
    await News.deleteMany({});
    await News.insertMany(data, (err, res) => {
      if (err) return console.log(err);
    });
  } catch (error) {
    console.log(error);
  }
};

export default DefaultData;
