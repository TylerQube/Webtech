var expression = prompt("Enter a mathematical expression:", "2+2");
    try {
        if(!expression) { expression = "2+2" }
        var result = eval(expression);
        // check if result is a decimal
        if(result % 1 != 0) {
            result = eval(expression).toFixed(2);
        }
        document.getElementById('math-output').textContent = expression + " =   " + result;
    // catch error if user enters invalid expression
    } catch (err) {
        console.log(err);
        document.getElementById('math-output').textContent = "'" + expression + "'" + " isn't a valid expression!";
    }
