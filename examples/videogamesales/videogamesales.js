import embed from "vega-embed";
import * as vl from "vega-lite-api";

fetch("/learn-data-visualization/vgsales.csv")
  .then((response) => response.text())
  .then(parseVideoGameSalesCSV)
  .then(renderChart);

function renderChart(data) {
  const spec = vl
    .markBar()
    .width(640)
    .height(400)
    .data(data)
    .transform(vl.filter(`datum["Global_Sales"] <= 4`))
    .encode(
      vl
        .x()
        .fieldQ("Global_Sales")
        .bin({ step: 0.1 })
        .title("Global Sales (in millions)"),
      vl.y().count()
    )
    .toObject();

  embed("#chart", spec);
}

function parseVideoGameSalesCSV(text) {
  const [, ...rest] = text.split("\n");

  const results = [];

  for (const line of rest) {
    if (line === "") {
      continue;
    }

    const [
      Rank,
      Name,
      Platform,
      Year,
      Genre,
      Publisher,
      NA_Sales,
      EU_Sales,
      JP_Sales,
      Other_Sales,
      Global_Sales,
    ] = line.split(",");

    const item = {
      Rank: +Rank,
      Name,
      Platform,
      Year: +Year,
      Genre,
      Publisher,
      NA_Sales: +NA_Sales,
      EU_Sales: +EU_Sales,
      JP_Sales: +JP_Sales,
      Other_Sales: +Other_Sales,
      Global_Sales: +Global_Sales,
    };

    results.push(item);
  }

  return results;
}
