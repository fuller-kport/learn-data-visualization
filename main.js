import embed from "vega-embed";
import * as vl from "vega-lite-api";
import movieData from "./data/movies.json";
import "./style.css";

const spec = vl
  .markBar()
  .data(movieData)
  .encode(vl.x().fieldQ("IMDB Rating").bin(true), vl.y().count())
  .toObject();

embed("#app", spec, { renderer: "svg" });
