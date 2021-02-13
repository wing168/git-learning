const strArr = ['a', 'b', 'c', 'd', 'e'];
let option = 'open';

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let temp = arr[j];

            if(arr[j] > arr[j+1]) {
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

const field = {name: 'Dave', age: 34};
const field2 = {name: 'John', age: 23};

