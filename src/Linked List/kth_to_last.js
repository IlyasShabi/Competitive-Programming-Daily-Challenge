import { LinkedList } from './singlyLinkedList';

export function main(list, k) {
    const length = _getLength(list);
    if(k > length || k < 0) return null;
    for(let i = 1 ; i < length - k; i++) list = list.next;
    return list.value;
}

function _getLength (list) {
    let length = 0;
    while (list.next) {
        length++;
        list = list.next;
    }
    return ++length;
}