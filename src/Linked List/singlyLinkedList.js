export class LinkedList {

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    insert(value) {
        const node = new LinkedList(value);
        let current;

        if (this.next == null) {
            this.next = node;
        } else {
            current = this.next;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    print(){
        let current = this;
        while(current.next){
            // console.log(current);
            current = current.next;
        }
        // console.log(current);
    }

    removeByIndex(index){
        let position = 0;
        let current = this;
        let previous;
        while(current.next && index > position){
            position++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
    }

    removeByValue(value){
        let current = this;
        let previous;
        while(current.next && value !== current.value){
            previous = current;
            current = current.next;
        }
        if(current.next){
            previous.next = current.next;
        }
    }
}