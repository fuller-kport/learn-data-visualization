import"./style.7f2dd081.js";import{a as u,f as b,x as p,y as G,e as v}from"./vendor.e2594164.js";fetch("/learn-data-visualization/vgsales.csv").then(e=>e.text()).then(j).then(P);function P(e){const a=u().width(640).height(400).data(e).transform(b('datum["Global_Sales"] <= 4')).encode(p().fieldQ("Global_Sales").bin({step:.1}).title("Global Sales (in millions)"),G().count()).toObject();v("#chart",a)}function j(e){const[,...a]=e.split(`
`),t=[];for(const s of a){if(s==="")continue;const[l,n,o,r,i,c,S,f,h,d,m]=s.split(","),_={Rank:+l,Name:n,Platform:o,Year:+r,Genre:i,Publisher:c,NA_Sales:+S,EU_Sales:+f,JP_Sales:+h,Other_Sales:+d,Global_Sales:+m};t.push(_)}return t}
