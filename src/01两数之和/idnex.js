
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {[]}
   * 我的做法
   */
  let  twoSum1 = function(nums, target) {
    let result = []
    for(let i=0;i<nums.length;i++){
      for(let j=i+1;j<nums.length;j++){
        let res = nums[i]+nums[j]
        if(res===target){
          result[0] =i
          result[1] = j

        }
      }
    }
      return result
  };
/*大佬的写法 52ms*/
  let twoSum2 = function(nums, target) {
    const diff = {};
    const len = nums.length;
    for (let i = 0; i < len; i++) {

        // 两个数的和 - 减去其中一个数(循环) = 等于另外一个数
      if (diff[target - nums[i]] !== undefined) {
          console.log(target- nums[i])

          return [diff[target - nums[i]],i]
      }

        // 如果、两个数的和 - 减去其中一个数(循环) ！= 等于另外一个数 则会返回undefined
      //   把相关信息存储 数组的[nums[i] 值作为对象的K index 作为value
   //      obj 为模拟循环过程
   let obj=     {
            // 2:target-nums[0]
            2:0,
            7:1,
            11:2,
            15:3,
            3:4
        }
      diff[nums[i]] = i;

    }

  };


  let twoSum3 = function (nums,target){
      let diff = {}
      for(let i = 0; i<nums.length;i++){

          diff[nums[i]] = i
       let   objDiff = {
              // 2:target-nums[0]
              2:0,
              7:1,
              11:2,
              15:3,
              3:4
          }
          // console.log(diff)
          // console.log(i,diff[target - nums[i]] )
          if(diff[target - nums[i]] !==undefined){
              console.log(diff[target - nums[i]])
             return  [diff[target-nums[i]],i]
          }
      }

  }



  let nums = [2,7,11,15,3]
  let target = 10
  console.log(twoSum3(nums, target));

