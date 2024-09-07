function calculate() {
    const expression = document.getElementById('expression').value;

    // Mengganti format seperti 5a menjadi 5*a agar math.js bisa mengenali
    const formattedExpression = expression.replace(/(\d)([a-zA-Z])/g, '$1*$2');

    try {
        // Menyederhanakan ekspresi aljabar
        const simplifiedExpression = math.simplify(formattedExpression);
        const result = simplifiedExpression.toString();
        document.getElementById('result').innerText = result;
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
}
