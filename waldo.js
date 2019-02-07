// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
    arr.forEach(function(person,i){
        if (person === "Waldo"){
          found(person,i);
        }
    });
  }
  
  function actionWhenFound(person,index) {
    console.log(`Found ${person} at index ${index}!`);
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);