function getGrade(grade, score) {
    var result = String.fromCharCode(65);
    var reversedGrade = grade.sort().reverse();
    reversedGrade.forEach(function (element, index) {
        if (score < element) {
            result = String.fromCharCode(index + 1 + 65);
        }
    });
    return result;
}