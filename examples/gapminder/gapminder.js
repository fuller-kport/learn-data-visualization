import embed from "vega-embed";
import * as vl from "vega-lite-api";
import gapminderData from "../../data/gapminder.json";

const years = gapminderData.map((item) => item.year);

const minYear = years.reduce((acc, v) => (acc < v ? acc : v));
const maxYear = years.reduce((acc, v) => (acc > v ? acc : v));

let selectedYear = 1955;

const yearRange = document.querySelector("#year-range");
const selectedYearView = document.querySelector("#selected-year");

yearRange.setAttribute("min", minYear);
yearRange.setAttribute("max", maxYear);
yearRange.setAttribute("step", 5);

yearRange.value = selectedYear;
selectedYearView.textContent = selectedYear;

renderBubbleChart(selectedYear, "#chart1");

yearRange.addEventListener("input", (ev) => {
  const year = Number(ev.target.value);
  selectedYearView.textContent = year;
  renderBubbleChart(year, "#chart1");
});

function renderBubbleChart(year, elementId) {
  const mainChart = vl
    .markCircle({ opacity: 0.6 })
    .transform(vl.filter(`datum["year"] == ${year}`))
    .encode(
      vl
        .x()
        .fieldQ("fertility")
        .axis({
          tickCount: 10,
          gridColor: "#d3d3d3",
          gridDash: [4, 4],
        })
        .scale({ domain: [0, 10] })
        .title("女性1人あたりの子供の数"),
      vl
        .y()
        .fieldQ("life_expect")
        .axis({
          tickCount: 5,
          gridColor: "#d3d3d3",
          gridDash: [4, 4],
        })
        .scale({ domain: [0, 100] })
        .title("平均寿命（年）"),
      vl
        .size()
        .fieldQ("pop")
        .scale({
          domain: [0, 1200_000_000],
          range: [10, 2000],
        })
        .title("人口"),
      vl.tooltip(["country", "fertility", "life_expect"]),
      vl.color().fieldN("cluster").scale({ scheme: "tableau10" }),
      vl.order().fieldQ("pop").sort("descending")
    );

  const textLayer = vl
    .markText({ fontSize: 64, color: "#c1c1c1" })
    .encode(vl.text().value(year));

  const spec = vl
    .layer(textLayer, mainChart)
    .title("女性1人当たりの出生数と平均寿命")
    .width(640)
    .height(480)
    .data(gapminderData)
    .toObject();

  embed(elementId, spec, { renderer: "svg" });
}
