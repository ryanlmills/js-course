johnAvg = (89 + 120 + 103) / 3
mikeAvg = (116 + 94 + 123) / 3
maryAvg = (97 + 134 + 105) / 3

if (johnAvg > mikeAvg) {
  console.log(`John's team had a higher average score than Mike's with ` + johnAvg + ` points.`)
} else if (johnAvg < mikeAvg) {
  console.log(`Mike's team had a higher average score than John's with ` + mikeAvg + ` points.`)
} else {
  console.log(`Mike's team and John's team tied.`)
}

if (johnAvg > mikeAvg && johnAvg > maryAvg) {
  console.log(`John's team had the highest average score with ` + johnAvg + ` points.`)
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
  console.log(`Mike's team had the highest average score with ` + mikeAvg + ` points.`)
} else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
  console.log(`Mary's team had the highest average score with ` + maryAvg + ` points.`)
} else if (johnAvg === mikeAvg && johnAvg > maryAvg) {
  console.log(`John and Mike tied with the highest average score of ` + johnAvg + ` points.`)
} else if (mikeAvg === maryAvg && mikeAvg > johnAvg) {
  console.log(`Mike and Mary tied with the highest average score of ` + mikeAvg + ` points.`)
} else {
  console.log(`They tied.`)
}