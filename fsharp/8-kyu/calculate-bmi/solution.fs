let bmi weight height =
  match weight / height ** 2.0 with
    | i when i <= 18.5 -> "Underweight"
    | i when i <= 25.0 -> "Normal"
    | i when i <= 30.0 -> "Overweight"
    | _ -> "Obese"
