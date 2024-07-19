let arr = [123,345,321,789];
let res = reverseElement(arr);
console.log("..output: "+res)
//..output: 321,543,123,987

 function reverseElement(arr){
    return arr.map(num=>{
        return reverseEachElement(num.toString());
    })
 }
function reverseEachElement(arr){
    let newArr ='';
    for(let i=arr.length-1;i>=0;i--){
        newArr += arr[i];
    }
    return newArr;
}

