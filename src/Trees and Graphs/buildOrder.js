export function buildOrder(input) {
    return getOrderedList(input);
}

function getOrderedList(input) {

    let tempMarked = new Set();
    let permMarked = new Set();

    for (let i = 0; i < input.length; ++i) {
        if (!permMarked.has(i)) {
            visit(i, input, tempMarked, permMarked);
        }
    }
    return [...permMarked];
}

function visit(current, input, tempMarked, permMarked) {

    if(input[current].length == 0){
        permMarked.add(current);
    }else if(tempMarked.has(current)){
        permMarked.add(current);
    }else{
        for (let i = 0; i < input[current].length; ++i) {
            tempMarked.add(current);
            visit(input[current][i], input, tempMarked, permMarked);
            permMarked.add(current);
            tempMarked.delete(current);
        }
    }
}