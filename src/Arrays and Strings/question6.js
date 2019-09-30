export function main(str){
    if(!str) return str;
    let occurs = 1;
    let last = str[0];
    let result = "";
    for(let i = 1; i< str.length ; i++){
        if(last === str[i]){
            occurs++;
        }else{
            result = result + occurs + last;
            last = str[i];
            occurs = 1;
        }
    }
    result = result + occurs + last;
    return result.length >= str.length ? str : result;
}