const operations = [
    function(a, b) { return a + b; },
    function(a, b) { return a - b; },
    function(a, b) { return a * b; }
];

for (let op of operations) {
    console.log(op(4, 2));
}
