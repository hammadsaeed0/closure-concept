var a = "I am Main Variable";
function closure() {
    var b = "I am Inner Fucntion Varaible";
    document.write(a) // Now i am Calling Main Variable in a function;
    // << Clousure is a function having access to the parents scope >>
}
closure();

    function one() {
        var a = "I am one";
        function two() {
            var b = "I am two"
            document.write(a + b);
        }
        two();
    }
    one();