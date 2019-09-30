import { LinkedList } from './singlyLinkedList';
var list;

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