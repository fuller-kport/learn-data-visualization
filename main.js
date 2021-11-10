import embed from "vega-embed";
import "./style.css";

const spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: 360,
  data: {
    values: [
      { a: "A", b: 28 },
      { a: "B", b: 55 },
      { a: "C", b: 43 },
      { a: "D", b: 91 },
      { a: "E", b: 81 },
      { a: "F", b: 53 },
      { a: "G", b: 19 },
      { a: "H", b: 87 },
      { a: "I", b: 52 },
    ],
    name: "source",
  },
  selection: {
    a: { type: "single" },
  },
  mark: "bar",
  encoding: {
    x: { field: "a", type: "ordinal", axis: { labelAngle: 0 } },
    y: { field: "b", type: "quantitative" },
    tooltip: { field: "b", type: "quantitative" },
    color: {
      condition: { selection: "a", value: "steelblue" },
      value: "grey",
    },
  },
  // pass options to Vega-Embed
  usermeta: {
    embedOptions: {
      renderer: "svg",
    },
  },
};

embed("#app", spec);
