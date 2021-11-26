import getNews from "../controller/news-controller.js";
import express from "express";

const route = express.Router();

route.get("/news", getNews);

export default route;
