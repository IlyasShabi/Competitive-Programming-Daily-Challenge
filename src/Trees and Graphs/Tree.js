export class Tree {
    constructor(value){
        this.value = value;
        this.chidren = [];i
    }

    insert(value){
        const node = new Tree(value);
        this.chidren.push(node);
    }
}