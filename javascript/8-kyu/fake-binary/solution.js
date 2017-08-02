function fakeBin(x){
//   let digits = x.split('')
//   for (i = 0; i < digits.length; i++) {
//     if (digits[i] < 5) {
//       digits[i] = 0
//     } else {
//       digits[i] = 1
//     }
//   }
//   return digits.join('')

  return x.replace(/[43210]/g, 0).replace(/[5-9]/g, 1)
}