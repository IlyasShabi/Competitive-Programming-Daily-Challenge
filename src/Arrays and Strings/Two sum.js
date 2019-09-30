/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++){
        let cp = target - nums[i];
        if(cp in map){
            return [i, map[cp]]
        }
        map[nums[i]] = i
    }
};