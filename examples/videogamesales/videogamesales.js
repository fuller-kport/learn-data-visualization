fetch("/vgsales.csv")
  .then((response) => response.text())
  .then(parseVideoGameSalesCSV)
  .then((results) => {
    console.log(results);
  });

function parseVideoGameSalesCSV(text) {
  const [, ...rest] = text.split("\n");

  const results = [];

  for (const line of rest) {
    if (line === "") {
      continue;
    }

    const [
      rank,
      name,
      platform,
      year,
      genre,
      publisher,
      naSales,
      euSales,
      jpSales,
      otherSales,
      globalSales,
    ] = line.split(",");

    const item = {
      rank: +rank,
      name,
      platform,
      year: +year,
      genre,
      publisher,
      naSales: +naSales,
      euSales: +euSales,
      jpSales: +jpSales,
      otherSales: +otherSales,
      globalSales: +globalSales,
    };

    results.push(item);
  }

  return results;
}
