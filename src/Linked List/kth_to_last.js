import { LinkedList } from './singlyLinkedList';

export function main(list, k) {
    const length = _getLength(list);
    if(k > length || k < 0) return null;
    for(let i = 1 ; i < length - k; i++) list = list.next;
    return list.value;
}

export function twoPointers(list, k){
    let follower = list;
    for(let i = 0; i<k; i++) list = list.next;
    while(list.next){
        list = list.next;
        follower = follower.next;
    }
    return follower.value;
}

function _getLength (list) {
    let length = 0;
    while (list.next) {
        length++;
        list = list.next;
    }
    return ++length;
}