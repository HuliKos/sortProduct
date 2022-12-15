// function sort (arr) {
//     let outArr =[]
    
//     for(i=0; i<arr.length; i++){
//         let product = {}
//         product[`arrInput`] = arr[i]
//         product[`product`] = arr[i]*(i+1)
//         outArr.push(product)
//     }
//     let sorted = outArr.sort(
//         (el1,el2) => (el1.product<el2.product)?1:(el1.product>el2.product)?-1:0).reverse()
//     // console.log(sorted)

//     let finalRes =[]
//     sorted.forEach(el => finalRes.push(el.arrInput))

//     console.log(finalRes)}

// let arr = [23, 2, 3, 4, 5]
// sort(arr)

//SOLUTION 1
// function sortByValueAndIndex(array) {
//     let totals = []
//     array.forEach((e, i) => {
//       let totalObj = {
//         total: e*(i+1),
//         i: i
//       }
//       totals.push(totalObj)
//     })
//     totals.sort((a, b) => a.total - b.total)
//     console.log(totals)
//     let newArr = []
//     totals.forEach(e => newArr.push(array[e.i]))
//     return newArr
//   }
  
  
  //SOLUTION 2
  function sortByValueAndIndex(array){
  //declared vars
    var arr = [];
    var counter = 1;
    var newArr = [];
  //constructor function
    function obj(orig, newNum){
      this.orig = orig,
      this.new = newNum
    }
  //pushing original number and new number * counter
    for(var i = 0; i < array.length; i++){
      arr.push(new obj(array[i], array[i]*counter))
      counter++;
    }
  //bubble sort by the new property in the object
     for (var o = 0; o < arr.length; o++) { 
      for (var j = 0; j < (arr.length - o - 1); j++) { 
        if(arr[j].new > arr[j+1].new) {
          var tmp = arr[j]; 
          arr[j] = arr[j+1];
          arr[j+1] = tmp; 
        }
      }        
    }
  //pushing original values in the correct order to a new array    
    for(var k = 0; k < arr.length; k++){
      newArr.push(arr[k].orig);
    }
    return newArr;
  }
  
  console.log(sortByValueAndIndex([9, 5, 1, 4, 3]))

  //1, 9, 5, 3, 4 
  