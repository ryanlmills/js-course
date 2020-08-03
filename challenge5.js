// Calculating tip average and generating arrays within object containing tips and final paid amounts for John
let john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTip: function() {
    let percentage
    for (let i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 50) {
        percentage = .20
      } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
        percentage = .15
      } else {
        percentage = .10
      }
      this.tipAmts.push(this.bills[i] * percentage)
      this.paidAmts.push(this.bills[i] + (this.bills[i] * percentage))
    }
  },
  tipAmts: [],
  paidAmts: []
}

john.calcTip()
console.log(john)

// Calculating tip average and generating arrays within object containing tips and final paid amounts for Mark
let mark = {
  fullName: 'Mark Summers',
  bills: [77, 375, 110, 45],
  calcTip: function() {
    let percentage
    for (let i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 100) {
        percentage = .20
      } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
        percentage = .10
      } else {
        percentage = .25
      }
      this.tipAmts.push(this.bills[i] * percentage)
      this.paidAmts.push(this.bills[i] + (this.bills[i] * percentage))
    }
  },
  tipAmts: [],
  paidAmts: []
}
mark.calcTip()
console.log(mark)

// Function to calculate tip average
function tipAvg(name) {
  let sum = 0
  for (i = 0; i < name.tipAmts.length; i++) {
    sum += name.tipAmts[i]
  }
  return sum / name.tipAmts.length
}

// Comparing tip averages
let johnAvg = tipAvg(john)
let markAvg = tipAvg(mark)

if (johnAvg > markAvg) {
  console.log(`John paid the higher average tips at $` + johnAvg + `.`)
} else if (johnAvg < markAvg) {
  console.log(`Mark paid the higher average tips $` + markAvg + `.`)
} else {
  console.log(`They paid the same average tip amount.`)
}