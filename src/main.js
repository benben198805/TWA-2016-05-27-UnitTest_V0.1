function getGrade(score) {
    var result = String.fromCharCode(65);
    var reversedGrade = [60,80,90].sort().reverse();
    reversedGrade.forEach(function (element, index) {
        if (score < element) {
            result = String.fromCharCode(index + 1 + 65);
        }
    });
    return result;
}