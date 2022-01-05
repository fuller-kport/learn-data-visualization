import embed from "vega-embed";
import * as vl from "vega-lite-api";
import carsData from "../../data/cars.json";

// 燃費の推移
const spec1 = vl
  .markLine({ point: true })
  .width("container")
  .data(carsData)
  .encode(
    vl.x().fieldT("Year").title("年"),
    vl.y().average("Miles_per_Gallon").title("1ガロンあたりのマイル数")
  )
  .toObject();

embed("#chart1", spec1, { renderer: "svg" });

// 馬力の推移
const spec2 = vl
  .markLine({ point: true })
  .width("container")
  .data(carsData)
  .encode(
    vl.x().fieldT("Year").title("年"),
    vl.y().average("Horsepower").title("馬力")
  )
  .toObject();

embed("#chart2", spec2, { renderer: "svg" });

// 燃費の馬力の関係（地域ごと）

const spec3 = vl
  .markPoint()
  .width(400)
  .height(400)
  .data(carsData)
  .encode(
    vl.x().fieldQ("Horsepower").title("馬力"),
    vl.y().fieldQ("Miles_per_Gallon").title("マイル / ガロン"),
    vl.color().fieldN("Origin"),
    vl.tooltip(["Name", "Origin", "Year"])
  )
  .toObject();

embed("#chart3", spec3, { renderer: "svg" });
