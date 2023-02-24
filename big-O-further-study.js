function pairSumNSquared(arr) {
    let highest = 0;
    for (let i = 0; i < arr.length; i++)
    {
      for (let j = i+1; j < arr.length; j++)
      {
        if (arr[i] + arr[j] > highest)
        {
          highest = arr[i] + arr[j];
        }
      }
    }
    return highest
  }
  
  function pairSumNLogN(arr)
  {
    arr.sort((a, b) => a - b);
    return arr.pop() + arr.pop();
  }
  
  
  function pairSumN(arr) {
    let highest = 0;
    let secondHighest = 0;
    for (let x of arr) {
      if (x > highest) {
        secondHighest = highest;
        highest = x;
      }
    }
    return highest + secondHighest;
  }
  let arr = [4, 8, 5, 9, 1];