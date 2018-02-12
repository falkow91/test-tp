describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)
    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});



describe("Interval - including", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(15, 16),
        new Interval(12, 19),
        new Interval(10, 20)
    ].forEach(function (interval) {
        it("should includes " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 12),
        new Interval(17, 22),
        new Interval(8, 9),
        new Interval(8, 21),
        new Interval(21, 22)
    ].forEach(function (interval) {
        it("should not includes " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeFalsy();
        });
    });
});



describe("Interval - union", function () {
    testedInterval = new Interval(10, 20);

    [
        {
            interval : new Interval(8, 12),
            result : new Interval(8,20)
        },
        {
            interval : new Interval(17, 22),
            result : new Interval(10,22)
        },
        {
            interval : new Interval(8, 9),
            result : [testedInterval, new Interval(8,20)]
        },
        {
            interval : new Interval(8, 21),
            result : new Interval(8,21)
        },
        {
            interval : new Interval(21, 22),
            result : [testedInterval, new Interval(10,22)]
        },
        {
            interval : new Interval(15, 16),
            result : new Interval(10,20)
        },
        {
            interval : new Interval(12, 19),
            result : new Interval(10,20)
        },
        {
            interval : new Interval(10, 20),
            result : new Interval(10,20)
        }
    ].forEach(function (interval) {
        it("should returns Interval[" + interval.result.start + ", " + interval.result.end + "] when union of " + testedInterval.toString() + " and " + interval.interval.toString(), function () {
            var result = testedInterval.union(interval.interval);
            expect(result.start).toEqual(interval.result.start);
            expect(result.end).toEqual(interval.result.end);
        });
    });
});



describe("Interval - intersection", function () {
    testedInterval = new Interval(10, 20);

    [
        {
            interval : new Interval(8, 12),
            result : new Interval(10,12)
        },
        {
            interval : new Interval(17, 22),
            result : new Interval(17,20)
        },
        {
            interval : new Interval(8, 9),
            result : null
        },
        {
            interval : new Interval(8, 21),
            result : new Interval(10,20)
        },
        {
            interval : new Interval(21, 22),
            result : null
        },
        {
            interval : new Interval(15, 16),
            result : new Interval(15,16)
        },
        {
            interval : new Interval(12, 19),
            result : new Interval(12,19)
        },
        {
            interval : new Interval(10, 20),
            result : new Interval(10,20)
        }
    ].forEach(function (interval) {
        var msg;
        var expectNull = false;
        if (interval.result === null) {
            msg = "should returns null when doing intersection of " + testedInterval.toString() + " and " + interval.interval.toString();
            expectNull = true;
        } else
            msg = "should returns Interval[" + interval.result.start + ", " + interval.result.end + "] when doing intersection of " + testedInterval.toString() + " and " + interval.interval.toString();
        it(msg, function () {
            var result = testedInterval.intersection(interval.interval);
            if (expectNull)
                expect(result).toEqual(interval.result);
            else {
                expect(result.start).toEqual(interval.result.start);
                expect(result.end).toEqual(interval.result.end);
            }
        });
    });
});