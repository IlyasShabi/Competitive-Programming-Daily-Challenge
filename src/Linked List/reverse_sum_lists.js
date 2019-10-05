//https://leetcode.com/submissions/detail/267028737/
import { LinkedList } from './singlyLinkedList';

export function addTwoNumbers(list1, list2) {
    let sum = list1.value + list2.value;
    let rest = sum / 10 >= 1 ?  1 : 0;

    let result = new LinkedList(sum % 10);
    let node = result;

    list1 = list1.next;
    list2 = list2.next;

    while (list1 || list2) {
        
        sum = rest;
        if(list1){
            sum += list1.value;
            list1 = list1.next;
        }
        if(list2){
            sum += list2.value;
            list2 =  list2.next;
        }
        rest = sum / 10 >= 1 ?  1 : 0;
        node.next = new LinkedList(sum % 10);
        node = node.next;
    }
    if(rest){
        node.next = new LinkedList(rest);
        node = node.next;
    }
    return result;
}