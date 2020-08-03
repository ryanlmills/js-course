let johnBills = [124, 48, 268]
let johnTips = []
let johnAmts = []

function tipCalc() {
  let percentage
  for (let i = 0; i < johnBills.length; i++) {
    if (johnBills[i] < 50) {
      percentage = .2
    } else if (johnBills[i] >= 50 && johnBills[i] <= 200) {
      percentage = .15
    } else {
      percentage = .10
    }
    johnTips.push(percentage * johnBills[i])
    johnAmts.push(johnBills[i] + (percentage * johnBills[i]))
  }
}

tipCalc()
console.log(johnTips, johnAmts)