var p = 5;
function func() {
    var p = 9;
 
    function decl() {
        console.log(p);
    }
    var expr = function() {
        console.log(p);
    };
    var cons = new Function('\tconsole.log(p);');
 
    decl();
    expr();
    cons();
}
func();
let q = 3;
let func2 = new Function('console.log(q)');
func2();


let func3 = new Function('console.log(4)');
func3();
let func4 = new Function('console.log("5")');
func4();

let arrs = new Array();
arrs.push("hello");
arrs.push("world");
arrs.forEach(t => {
})