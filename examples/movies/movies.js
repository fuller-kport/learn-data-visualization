import embed from "vega-embed";
import * as vl from "vega-lite-api";
import movieData from "../../data/movies.json";

const spec1 = vl
  .markCircle()
  .width(480)
  .height(480)
  .data(movieData)
  .encode(vl.x().fieldQ("Rotten Tomatoes Rating"), vl.y().fieldQ("IMDB Rating"))
  .toObject();

embed("#chart1", spec1, { renderer: "svg", actions: false });

const spec2 = vl
  .markBar({ color: "#E74628" })
  .width(480)
  .height(200)
  .data(movieData)
  .encode(
    vl.x().fieldQ("Rotten Tomatoes Rating").bin({ maxbins: 20 }),
    vl.y().count()
  )
  .toObject();

embed("#chart2", spec2, { renderer: "svg", actions: false });

const spec3 = vl
  .markBar({ color: "#9A802F" })
  .width(480)
  .height(200)
  .data(movieData)
  .encode(vl.x().fieldQ("IMDB Rating").bin({ maxbins: 20 }), vl.y().count())
  .toObject();

embed("#chart3", spec3, { renderer: "svg", actions: false });
