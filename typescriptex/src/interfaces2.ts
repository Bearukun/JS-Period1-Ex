//a
interface myFunc {
    (a: string, b: string, c: string): Array<string>;
}

//b
let f1: myFunc = function (a: string, b: string, c: string) {

    let list: Array<string> = [a, b, c];

    return list;
}

console.log(f1("hello ", "world..", "!"));

//c
let f1Upper: myFunc = function (a: string, b: string, c: string) {

    let list: Array<string> = [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
    return list;

}

console.log(f1Upper("hello ", "world..", "!"));

//d
let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}

//e
f2(f1);
f2(f1Upper);

//f - For some reason it works?
let f3 = function (a: string, b: string) {
    
        let list: Array<string> = [a, b];
    
        return list;
    }

f2(f3);