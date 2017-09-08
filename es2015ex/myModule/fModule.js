export function f(...args) {
    let returnString = "";
    returnString += `Sum: ${args.length}`;
    for (var index = 0; index < args.length; index++) {
        returnString += "\nrest value " + index + " is a: " + args[index].constructor.name;
    }
    return returnString;
}