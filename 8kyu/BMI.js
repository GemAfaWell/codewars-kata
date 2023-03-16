function bmi(weight, height) {
    // calculate BMI based on weight, height, and store it
    let bodyMass = (weight) / (Math.pow(height, 2));
    // conditional statement to return based on calculated value stored in variable
    if (bodyMass <= 18.5) {
      return `Underweight`;
    } else if (bodyMass > 18.5 && bodyMass <= 25.0) {
      return `Normal`;
    } else if (bodyMass > 25.0 && bodyMass <= 30.0) {
      return `Overweight`;
    } else if (bodyMass > 30) {
      return `Obese`;
    }
  }
  