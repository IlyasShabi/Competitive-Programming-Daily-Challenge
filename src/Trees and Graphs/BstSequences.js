export function getSequences(input) {
    const result = getArraysFromTree(input.root);

    return result ? result : [];
}

function getArraysFromTree(tree) {
    if(tree == null){
        return;
    }
    
    const leftResult = getArraysFromTree(tree.left);
    const rightResult = getArraysFromTree(tree.right);
    if(!leftResult &&  !rightResult){
        return [tree.val];
    }

    const result = [];
    
    for(let i = 0; i < leftResult.length; ++i){
        for(let j= 0; j < rightResult.length; ++j){
            
            const temp = [tree.val, ...toArray(leftResult[i]), ...toArray(rightResult[j])];
            result.push(temp);
        }
    }
    for(let i = 0; i < rightResult.length; ++i){
        for(let j= 0; j < leftResult.length; ++j){
            const temp = [tree.val, ...toArray(rightResult[i]), ...toArray(leftResult[j])];
            result.push(temp);
        }
    }
   return result;
}

function toArray(data){

    if(Array.isArray(data)){
        return data;
    }
    return [data]

}