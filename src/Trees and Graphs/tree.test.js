import { Tree } from './tree';

it('Initialize data structure and insert data', () => {
    const tree =  new Tree();

    [3, 7, 43, 6, 4, 5].forEach((elem) =>{
        tree.add(elem);
    });
});