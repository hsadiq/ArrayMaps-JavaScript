function generateRandomNumbers() {
    const randomNumbers = [];
  
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 900) + 100; 
      randomNumbers.push(randomNumber); 
    }
  
    return randomNumbers;
  }
  
  function findSecondLargestAndSmallest(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (const number of numbers) {
      if (number > largest) {
        secondLargest = largest;
        largest = number;
      } else if (number > secondLargest && number < largest) {
        secondLargest = number;
      }
  
      if (number < smallest) {
        secondSmallest = smallest;
        smallest = number;
      } else if (number < secondSmallest && number > smallest) {
        secondSmallest = number;
      }
    }
  
    return { secondLargest, secondSmallest };
  }
  
  const randomNumbers = generateRandomNumbers();
  
  const { secondLargest, secondSmallest } = findSecondLargestAndSmallest(randomNumbers);
  
  console.log('Random Numbers:', randomNumbers);
  console.log('Second Largest:', secondLargest);
  console.log('Second Smallest:', secondSmallest);
  