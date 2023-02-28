function generateRandomArray() {
    let input_Number;
    do {
        input_Number = Math.round(prompt("Please enter a valid number input"));
    }
    while (isNaN(input_Number) === true);
    const arrayConstruction = (input_Number) => {
        let arr = [];
        for (i = 0; i <= input_Number - 1; i++) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            arr[i] = randomNumber;
        }

        return `Array with random numbers with given size of array: ${input_Number} is ` + arr;
    }

    console.log(arrayConstruction(input_Number));
}
