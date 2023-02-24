/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 || !root2) return root1 || root2;

  let node = new TreeNode(root1.val + root2.val);

  node.left = mergeTrees(root1.left, root2.left);
  node.right = mergeTrees(root1.right, root2.right);

  return node;
};

// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]

// Input: root1 = [], root2 = [2,1,3,null,4,null,7]
// Output: [2,1,3,null,4,null,7]

// Input: root1 = [1,3,2,5], root2 = []
// Output: [1,3,2,5]

// mergeTrees(root1, root2);
