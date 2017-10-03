var _ = {
    map: function(array, iteratee) {
        let newArray = [];
        for (let i =0; i < arr.length; i+=1){
            newArray.push(iteratee(array[i]));
        }
        return newArray;
    },
    reduce: function(array, iteratee, memo) { 
        let sum = 0
        for (let i=0; i<array.length; i+=1){
            sum += iteratee(memo, array[i]);
        }
        return sum;
    },
    find: function(array, iteratee) {
        for (let i=0; i<array.length; i+=1){
            if (interatee(array[i])){
                return array[i];
            }
        }
    },
    filter: function(array, iteratee) {; 
        let newArray = []
        for(let i=0; i<array.length; i+=1){
            if (iteratee(array[i])){
                newArray.push(array[i]);
            }
        }
        return newArray;
    },
    reject: function(array, iteratee) { 
        let newArray =[];
        for(let i=0; i<array.length; i+=1){
            if (!iteratee(array[i])){
                newArray.push(array[i]);
            }
        }
    }
  }
 // you just created a library with 5 methods!
 