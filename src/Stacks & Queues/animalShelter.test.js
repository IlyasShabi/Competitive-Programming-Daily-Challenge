import { animalShelter, Animal } from './animalShelter';

it('Initialize data structure and push animals in the shelter', () => {
    const animals = [];
    for(let i = 0; i< 10; ++i){
        const animal = new Animal(i +1 , i% 3 ? 'dog' : 'cat');
        animals.push(animal);
    }

    const shelter = new animalShelter(animals);
    expect( shelter.enqueue(new Animal(11, 'cat')) ).toBeCalled;

    shelter.dequeueAny();
    expect( shelter.size() ).toEqual(10);


    const animals2 = [];
    for(let i = 0; i< 10; ++i){
        const animal = new Animal(i +1 , i% 3 ? 'dog' : 'cat');
        if(i != 3) animals2.push(animal);
    }

    const shelter2 = new animalShelter(animals2);
    expect( shelter2.enqueue(new Animal(11, 'cat')) ).toBeCalled;

    shelter2.dequeueAny();
    expect( shelter2.size() ).toEqual(9);

    
    expect( shelter.dequeueByType('cat')).toEqual(shelter2.shelter);
});