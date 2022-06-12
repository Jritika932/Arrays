// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
// The problem statement is simple- given 
// N
//  elements, find the minimum and maximum numbers among those elements.

 
function arrayMin(arr) {
  
    let a=Math.min(...arr);
    return a;
    }
    
    function arrayMax(arr) {
     let b=Math.max(...arr);
    return b;
    
    }
    
    var arr=new Array(3,1,4,6,2,7);
    var n=arr.length; 
 
    var arr1=new Array(0,0,0,0,0,0)
    var n1=arr.length;
 console.log(arrayMin(arr,n),arrayMax(arr,n));
 console.log(arrayMin(arr1,n1),arrayMax(arr1,n1));  
       