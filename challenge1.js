// Mass and height in kg and meters
markMass = 68
markHeight = 1.8
johnMass = 70
johnHeight = 1.9

// BMI calculation and comparison
markBmi = markMass / (markHeight * markHeight)
johnBmi = johnMass / (johnHeight * johnHeight)

bmiResult = markBmi > johnBmi

console.log(`Is Mark's BMI higher than John's? ` + bmiResult)