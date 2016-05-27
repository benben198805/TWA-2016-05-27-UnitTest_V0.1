function getGrade(score) {
    var result = "A";
    var socres = [90, 80, 60];
    var grades = ["B", "C", "D"];
    socres.forEach(function (element, index) {
        if (score < element) {
            result = grades[index];
        }
    });
    return result;
}