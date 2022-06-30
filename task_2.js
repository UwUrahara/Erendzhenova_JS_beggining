let xTypeOf
xTypeOf = 2
switch (typeof(xTypeOf)){
    case "number" :
        console.log("X — число");
        break;
    case "boolean" :
        console.log("X — логического типа");
        break;
    case "string" :
        console.log("X — строка");
        break;
    default :
        console.log("Тип X не определён");
}