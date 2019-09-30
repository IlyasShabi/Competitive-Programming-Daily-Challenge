export function main(matrix){
    const length = matrix.length;
    matrix = [...matrix].map(matrix.pop,matrix);
    for(let i = 0 ; i< length ; ++i){
        for(let j = i+1; j< matrix[i].length ; ++j){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix;
}
