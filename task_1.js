let xEvenOdd = +prompt("Введите число")
if (isNaN(xEvenOdd) === true) {
     console.log("Упс, кажется, вы ошиблись")
} else {
     if (xEvenOdd % 2 === 0) {
         console.log("Чётное")
     } else {
         console.log("Нечётное")
     }
}