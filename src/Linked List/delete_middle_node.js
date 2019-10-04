export function twoPointers(list){
    let follower = list;
    let runner = follower, previous = follower;
    let odd = true;
    while(list.next){
        if(odd){
            list = list.next;
        }else{
            list = list.next;
            previous = runner;
            runner = runner.next;
        }
        odd = !odd;
    }
    previous.next = runner.next;

    return follower;
}