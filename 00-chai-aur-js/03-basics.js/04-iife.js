// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai() {
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Connected ${name}`);
})('dexter');