// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.


const Inc_Arr = (array,N) => 
{
let arr = []
let j = 0
let temp = ""
for(i = 0; i <N; i++){
  arr[j] = array[i]+1
  temp = temp + " " + arr[j]
  j++
  
}
 console.log(temp);

};
 
let arr=[1,2,4,5,6,8,2,3];
let n=arr.length;
Inc_Arr(arr,n);