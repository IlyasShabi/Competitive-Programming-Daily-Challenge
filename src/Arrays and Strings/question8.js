export function main(matrix) {
    const rows = [];
    const columns = [];

    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            if (matrix[i][j] == 0) {
                rows.push(i);
                columns.push(j);
            }
        }
    }

    for (let i = 0; i < rows.length; ++i) {
        matrix[rows[i]].fill(0);
    }

    for (let j = 0; j < columns.length; ++j) {
        for (let i = 0; i < matrix.length; ++i) {
            matrix[i][columns[j]] = 0;
        }
    }
    return matrix;
}
