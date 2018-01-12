describe("Util", function () {
    [[1, 1], [2, 2], [3, 6], [4, 24]].forEach(function (data) {
        it("should compute factorial of " + data[0] + " and find " + +data[1], function () {
            var result = Util.factorial(data[0]);
            expect(result).toEqual(data[1]);
        });
    });
});