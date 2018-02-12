describe("Util - Factorial", function() {
    var testCases = [
        {
            n : 0,
            factorial : 1
        },
        {
            n : 1,
            factorial : 1
        },
        {
            n : 2,
            factorial : 2
        },
        {
            n : 3,
            factorial : 6
        },
        {
            n : 4,
            factorial : 24
        },     
    ];
   
    testCases.forEach(function(testCase) {
        it("should returns " + testCase.factorial + " when n = " + testCase.n, function() {
            var result = Util.factorial(testCase.n);
            expect(result).toEqual(testCase.factorial);
        })
    })
});



describe("Util - Arrangement", function() {
    var testCases = [
        {
            r : 0,
            n : 0,
            arrangement : -9999
        },
        {
            r : 0,
            n : 1,
            arrangement : 1
        },
        {
            r : 1,
            n : 2,
            arrangement : 2
        },
        {
            r : 2,
            n : 4,
            arrangement : 12
        },
        {
            r : 3,
            n : 4,
            arrangement : 24
        }
    ];
   
    testCases.forEach(function(testCase) {
        it("should returns " + testCase.arrangement + " when n = " + testCase.n + " and r = " + testCase.r, function() {
            var result = Util.arrangement(testCase.n, testCase.r);
            expect(result).toEqual(testCase.arrangement);
        })
    })
});



describe("Util - Combination", function() {
    var testCases = [
        {
            r : 0,
            n : 0,
            combination : 1
        },
        {
            r : 0,
            n : 1,
            combination : 1
        },
        {
            r : 1,
            n : 2,
            combination : 2
        },
        {
            r : 2,
            n : 4,
            combination : 6
        },
        {
            r : 3,
            n : 4,
            combination : 4
        }
    ];
   
    testCases.forEach(function(testCase) {
        it("should returns " + testCase.combination + " when n=" + testCase.n + " and r=" + testCase.r, function() {
            var result = Util.combination(testCase.n, testCase.r);
            expect(result).toEqual(testCase.combination);
        })
    })
});