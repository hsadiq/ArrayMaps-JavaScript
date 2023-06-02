function findRepeatedDigits() {
    const repeatedDigits = [];
  
    for (let i = 0; i <= 100; i++) {
      const tensDigit = Math.floor(i / 10);
      const onesDigit = i % 10;
  
      if (tensDigit === onesDigit) {
        repeatedDigits.push(i);
      }
    }
  
    return repeatedDigits;
  }
  
  const repeatedDigitsArray = findRepeatedDigits();
  console.log('Digits repeated twice:', repeatedDigitsArray);
  