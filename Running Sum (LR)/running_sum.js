function runningSum(nums) {
    let sum = nums[0] + nums[1];
    for(let i =1 ; i < nums.length ; i++)
    {
        nums[i] = sum;
        sum += nums[i+1] 
    }
    return nums;  
};



console.log(runningSum([3,1,2,10,1]));