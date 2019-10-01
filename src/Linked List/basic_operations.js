import { LinkedList } from './singlyLinkedList';
let list;

export function create(value) {
    list = new LinkedList(value);
}

export function insert(value) {
    list.insert(value);
}

export function read() {
    list.print();
}

export function removeByIndex(index) {
    list.removeByIndex(index);
}

export function removeByValue(value) {
    list.removeByValue(value);
}
export function arrayToLinkedList(array) {
    const first = array.shift();
    const list = new LinkedList(first);
    list.arrayToLinkedList(array);
}
export function linkedListToArray() {
    return list.linkedListToArray(list);
}