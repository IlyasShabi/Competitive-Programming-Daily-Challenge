import { Stack } from './stack';

export function stackSort(array) {
    this._array = array;
}

stackSort.prototype.sort = function(){
    let original = new Stack(this._array);
    let copy = new Stack();
    const originalSize = original.size();
    
    let temp = original.peek();
    original.remove();
    
    while (original.size() != 0 || copy.size() != originalSize) {
        if(copy.isEmpty()){
            copy.add(temp);
            temp = original.peek();
            original.remove();
        }else{
            const copyTop = copy.peek();
            if(copyTop < temp){
                copy.remove();
                original.add(copyTop);
            }else{
                copy.add(temp);
                temp = original.peek();
                original.remove();
            }
        }
    }
    return copy;
}

