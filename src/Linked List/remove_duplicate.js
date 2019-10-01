import { LinkedList } from './singlyLinkedList';

export function main(array){
    let list = new LinkedList(array.shift());

    list.arrayToLinkedList(array);
    let set = new Set();
    let table = [];

    while(list.next){
        set.add(list.value);
        table.push(list.value);
        list = list.next;
    }
    set.add(list.value);
    table.push(list.value);
    console.log(set);
    console.log(table);
}