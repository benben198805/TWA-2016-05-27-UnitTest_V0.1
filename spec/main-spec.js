describe('getGrade', function () {
    var score;

    beforeEach(function () {
        score = [0, 55, 60, 70, 80, 85, 90, 95, 100];
    });

    it('score =0 should return D', function () {
        var result = getGrade(score[0]);
        var expectText = "D";
        expect(result).toBe(expectText);
    });

    it('score =55 should return D', function () {
        var result = getGrade(score[1]);
        var expectText = "D";
        expect(result).toBe(expectText);
    });

    it('score =60 should return C', function () {
        var result = getGrade(score[2]);
        var expectText = "C";
        expect(result).toBe(expectText);
    });

    it('score =70 should return C', function () {
        var result = getGrade(score[3]);
        var expectText = "C";
        expect(result).toBe(expectText);
    });

    it('score =80 should return B', function () {
        var result = getGrade(score[4]);
        var expectText = "B";
        expect(result).toBe(expectText);
    });

    it('score =85 should return B', function () {
        var result = getGrade(score[5]);
        var expectText = "B";
        expect(result).toBe(expectText);
    });

    it('score =90 should return A', function () {
        var result = getGrade(score[6]);
        var expectText = "A";
        expect(result).toBe(expectText);
    });

    it('score =95 should return A', function () {
        var result = getGrade(score[7]);
        var expectText = "A";
        expect(result).toBe(expectText);
    });

    it('score =100 should return A', function () {
        var result = getGrade(score[8]);
        var expectText = "A";
        expect(result).toBe(expectText);
    });
});
