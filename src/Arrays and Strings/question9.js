export function main(A, B) {
    if(!A || !B || A.length === B.length) return false;
    return (A + A).includes(B);
}
