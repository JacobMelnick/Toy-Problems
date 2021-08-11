const pathSum = (tree, target) => {

    const innerFunc = (tree, target, resultSum = 0) => {
        if (!tree) {
            return false
        }
        resultSum += tree.val
        if (!tree.left && !tree.right && resultSum === target) {
            return true
        } else if (!tree.left && !tree.right) {
            return false
        }
        
        let left = pathSum(tree.left, target, resultSum)
        if (left) {
            return true
        }
        let right = pathSum(tree.right, target, resultSum)
        if (right) {
            return true
        }
    }
    let result = innerFunc(tree, target)
    return result ? true : false
}


console.log(pathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 22));