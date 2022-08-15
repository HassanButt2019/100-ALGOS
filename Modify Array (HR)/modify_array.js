function modifyArray(nums) {
    for(let i = 0 ; i < nums.length ; i++)
    {
        if(nums[i] % 2 == 0)
        {
            nums[i] = nums[i] *2;
        }else
        {
              nums[i] = nums[i] *3;
        }
     
    }
    return nums;
}

//Return the modified array where every even element is doubled and every odd element is tripled.
console.log(modifyArray[1 ,2 ,3, 4, 5])