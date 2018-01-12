Util = {};
Util.factorial = function(number) {
    if (1 === number) {
        return 1;
    }

    return number * Util.factorial(number - 1);
};