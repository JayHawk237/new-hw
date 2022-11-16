

function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
 
  function compute(a, b, op) {
    return op(a, b);
  }
  
  let result1 = compute(10, 5, add);
  let result2 = compute(10, 5, subtract);
  
  console.log(result1); 
  console.log(result2); 
 
  
 
  const colors = ["red", "green", "blue"];
  
  console.log("BEFORE the forEach..."); 
  
  
  colors.forEach(function (color, idx) {
    
    console.log(`${idx + 1} - ${color}`);
  });
  
  console.log("AFTER the forEach..."); 
  
 
  
  console.log("Code before the asynchronous function call");
  
 
  setTimeout(function () {
    console.log("setTimeout code"); 
  });
  
  console.log("Code after the asynchronous function call"); 
  

  function getFriendsAsync(cb) {
    setTimeout(function () {
     
      cb(["Fred", "Barney"]);
    }, 0);
  }
  getFriendsAsync(function (friends) {
    friends.forEach(function (friend) {
      console.log(friend);
    });
  });