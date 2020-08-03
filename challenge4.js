// Mark Object with BMI Calculation
let mark = {
  fullName: 'Mark Summers',
  height: 1.8,
  mass: 68,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
}

// John Object with BMI Calculation
let john = {
  fullName: 'John Smith',
  height: 1.9,
  mass: 70,
  calcBmi: function() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
}

if (mark.calcBmi() > john.calcBmi()) {
  console.log(`Mark has the higher BMI at ` + mark.bmi)
} else if (mark.calcBmi() < john.calcBmi()) {
  console.log(`John has the higher BMI at ` + john.bmi)
} else {
  console.log(`John and Mark have the same BMI.`)
}