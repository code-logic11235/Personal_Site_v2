function lengthOfLongestSubstring(s) {

    let dic={}
    let l =0;
    let r =0;
    let len =0;
    // z x y z x y z
    // 0 1 2 3 4 5 6
    while (r < s.length){
      debugger
        while(dic[s[r]] === 1){
            delete dic[s[l]]
            l++
        }
        dic[s[r]]= 1;
        r++
        if(Object.keys(dic).length > len){
        len = Object.keys(dic).length;

        }
    }
    return len;
  }
  // lengthOfLongestSubstring("thequthequjumps")
  function searchMatrix(matrix, target) {
    let l = 0;
    let r = matrix.length-1;
    let correctRow;
    debugger
    while(l <= r) {
        let h = l + Math.floor((r-l) / 2);
        if(matrix[h][0] > target) {
            r= h-1;
            correctRow= h;

        } else if(matrix[h][0] < target) {
            l= h+1;
            correctRow= h;
        } 
    }
    console.log(correctRow)
    l = 0;
    r = matrix[correctRow].length-1;
    // console.log(matrix[correctRow][l + Math.floor((r-l) / 2)])
    while(l <= r) {
        let h = l + Math.floor((r-l) / 2);
        // console.log(h)
        if(matrix[correctRow][h] > target) {
            r= h-1;
            correctRow= h;

        } else if(matrix[correctRow][h] < target) {
            l= h+1;
            correctRow= h;
        } else {
            return true
        }
    }
    return false
  }
// searchMatrix([[1,3,5]], 0)

/**
 * Definition for a binary tree node.
 * }
*/

 class TreeNode {
     constructor(val = 0, left = null, right = null) {
        this.val = val;
         this.left = left;
         this.right = right;
     }

  invertTree(root) {
      if (root === null) return null;

      const node = new TreeNode(root.val);

      node.right = this.invertTree(root.left);
      node.left = this.invertTree(root.right);

      return node;
  }

 
// invertTree([1,2,3,4,5,6,7]);
}
// console.log(new TreeNode.invertTree[1,2,3,4,5,6,7]);
function subsets(nums) {
  const res = [];
  const subset = [];

    function dfs(nums, i, subset, res) {
      debugger
      if (i >= nums.length) {
          res.push([...subset]);
          return;
      }
      subset.push(nums[i]);
      dfs(nums, i + 1, subset, res);
      subset.pop();
      dfs(nums, i + 1, subset, res);
    }

  dfs(nums, 0, subset, res);
  return res;
  }
  console.log(subsets([1,2,3]))