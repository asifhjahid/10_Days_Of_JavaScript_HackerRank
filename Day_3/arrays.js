/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
      let largestNum = nums[0];
      let secondLargestNum = nums[0];
      
        for(let i=0;i<nums.length;i++){
        if(nums[i]>largestNum){
            secondLargestNum = largestNum;
            largestNum=nums[i];
            
        }else if(nums[i]>secondLargestNum && nums[i]<largestNum){
            secondLargestNum = nums[i];
        }
        
    }
    return secondLargestNum;
}


function main() {
    const n = +(readLine());
    // const n = 5;
    const nums = readLine().split(' ').map(Number);
    // const nums = [2,3,6,6,5];
    
    console.log(getSecondLargest(nums));
}
// main();