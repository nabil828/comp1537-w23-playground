for (let i = 1; i <= 5; i++) {
  row = "";
  for (let j = 1; j <= (2 * i) - 1; j++)
    row = row + "*";
  console.log(row);
}