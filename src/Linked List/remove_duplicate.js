import { LinkedList } from './singlyLinkedList';

export function main(array) {
    if(!array || !array.length ) return array;
    // LinkedList Constructor
    let list = new LinkedList(array.shift());
    list.arrayToLinkedList(array);
    // Seen Set
    const seen = new Set([list.value]);
    let node = list;
    while (node.next) {
        if (seen.has(node.next.value)) {
            // skip next node
            node.next = node.next.next;
        }
        else {
            seen.add(node.next.value);
            node = node.next;
        }
    }
    return list.linkedListToArray(list);
}