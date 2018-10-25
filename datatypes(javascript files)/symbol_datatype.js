const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

document.writeln(typeof symbol1);
document.writeln(symbol3.toString());
document.write(Symbol('foo') === Symbol('foo'));