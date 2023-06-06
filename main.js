let numbers = [12, 32, 11, 97, 56, 83, 44];
y = numbers.filter(function (number) {
    if (number % 2 != 0) {
        return number;
    }
})
document.write("Odd Numbers" + " " + y);