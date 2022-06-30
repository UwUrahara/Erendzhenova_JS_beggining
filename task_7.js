let nEven = 0, nOdd=0, nZero=0;
let arrEvenOdd=[1 , 2 , 3 , null , 0 , "apple" , 12]
for (let i = 0; i < arrEvenOdd.length; i++){ 
    if ((arrEvenOdd[i] === null)||(arrEvenOdd[i] === 0)){
          nZero++;
    } else if ((typeof(arrEvenOdd[i])==="number")&&(isNaN(arrEvenOdd[i])===false)){
        if (arrEvenOdd[i]%2 === 0){
            nEven++;
        } else {nOdd++}
    }
}
if (nZero===0){ nZero="нет" }
console.log(`В данном массиве ${nEven} четных элементов, ${nOdd} нечетных и ${nZero} нулевых`);