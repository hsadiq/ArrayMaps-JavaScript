function findTriplets(nums) {
    const triplets = [];
  
    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[i] + nums[j] + nums[k] === 0) {
            triplets.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
  
    return triplets;
  }
  
  const numbers = [1, -2, 3, 0, -1, 2, -3];
  const triplets = findTriplets(numbers);
  
  console.log('Triplets that add up to zero:');
  for (const triplet of triplets) {
    console.log(triplet);
  }
  