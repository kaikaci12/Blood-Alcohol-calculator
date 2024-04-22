

const weight= prompt("Enter your weight in pounds");
const gender= prompt("Enter gender");

const alcohol= prompt("Enter the Alcohol in oz")
const hours=prompt("Enter the time period after the final cup")
function calculate(W, A, H) {
    if (gender === "male") {
        let r =  0.73;
        let BAC = (A * 5.14 / W * r) - 0.15 * H
        alert(`Your BAC is ${BAC.toFixed(2)}`);
     if(BAC>= 0.08){
        alert("Its not legal to drive")
    }
}
if(gender==="female"){
    let  r2= 0.66
 let BAC2= (A * 5.14 / W * r2) - 0.15 * H
alert(`Your BAC is ${BAC2.toFixed(2)}`)
}
if(BAC>=0.08){
    alert("Its not leagal to drive")
}
}

console.log(calculate(weight,alcohol,hours))