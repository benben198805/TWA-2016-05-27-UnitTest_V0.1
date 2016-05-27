describe('getGrade', function () {
    it('score =0 should return D', function () {
        var result = getGrade(0);
        expect(result).toBe("D");
    });

    it('score =55 should return D', function () {
        var result = getGrade(55);
        expect(result).toBe("D");
    });

    it('score =60 should return C', function () {
        var result = getGrade(60);
        expect(result).toBe("C");
    });

    it('score =70 should return C', function () {
        var result = getGrade(70);
        expect(result).toBe("C");
    });

    it('score =80 should return B', function () {
        var result = getGrade(80);
        expect(result).toBe("B");
    });

    it('score =85 should return B', function () {
        var result = getGrade(85);
        expect(result).toBe("B");
    });

    it('score =90 should return A', function () {
        var result = getGrade(90);
        expect(result).toBe("A");
    });

    it('score =95 should return A', function () {
        var result = getGrade(95);
        expect(result).toBe("A");
    });

    it('score =100 should return A', function () {
        var result = getGrade(100);
        expect(result).toBe("A");
    });
});
