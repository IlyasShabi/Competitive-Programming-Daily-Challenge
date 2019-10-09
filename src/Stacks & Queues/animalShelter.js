import { Queue } from './queue';
import { LinkedList } from '../Linked List/singlyLinkedList';

export class Animal {
    constructor(number = 0, type = "dog") {
        this.number = number;
        this.type = type;
    }
}

export function animalShelter(array) {
    this.shelter = new Queue(array);
}

animalShelter.prototype.enqueue = function (animal) {
    this.shelter.add(animal);
}

animalShelter.prototype.dequeueAny = function () {
    this.shelter.remove();
}

animalShelter.prototype.dequeueByType = function (type) {
    let currentAnimal = this.shelter.peek();
    this.shelter.remove();

    if (currentAnimal.type == type) {
        return this.shelter;
    }
    let notPicked = true;
    let temp = new LinkedList(currentAnimal);

    while (this.shelter.size() != 0) {

        currentAnimal = this.shelter.peek();
        this.shelter.remove();

        if (currentAnimal.type == type && notPicked) {
            notPicked = false;

        } else {
            temp.insert(currentAnimal);
        }
    }

    while(temp){
        this.shelter.add(temp.value);
        temp = temp.next;
    }

    return this.shelter;
}
animalShelter.prototype.size = function () {
    return this.shelter.size();
}

