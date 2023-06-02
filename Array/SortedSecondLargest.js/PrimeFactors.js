function findPrimeFactors(n) {
    const primeFactors = [];
    let divisor = 2;
  
    while (n > 2) {
      if (n % divisor === 0) {
        primeFactors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
  
    return primeFactors;
  }
  
  function displayPrimeFactors(n, primeFactors) {
    console.log(`Prime factors of ${n}: ${primeFactors.join(', ')}`);
  }
  
  const n = 56; 
  
  const primeFactors = findPrimeFactors(n);
  displayPrimeFactors(n, primeFactors);