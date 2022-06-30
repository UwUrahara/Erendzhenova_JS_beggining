let flag = true;
let arrSame=[1,1,1]
for (let i = 1; i < arrSame.length; i++){ 
    if (arrSame[i] !== arrSame[i-1]){
        flag=false;
    }
}
console.log(flag);