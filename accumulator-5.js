let a = [1,2,3,4,5,6,7,8,9,10]
let accumulatorEven =[]
for(let i=0;i<a.length;i++){
    if(a[i]%2===0)
    accumulatorEven.push(a[i])
}
console.log(accumulatorEven)