// 1) odd or even
let odd = function(f){
    if(f%2===0){
        return 'even';
    }
    else{
        return 'odd';   
    }
}
let ff = odd(86);
console.log(ff);


// 2) minimum
function two (b,c){
    if(b<c){
        return(b);
    } else {
        return (c);
    }
}console.log(two (4,9));


// 3) minchev ayd tivy bolory tveri artadryaly
let one = (k) =>{
    let a = 1;
    for (let i = 1; i <= k; i++){
        a*=i
        
    }
    return (a);
}   
console.log(one(9));


// 4)tvi mej bolor zuyg tveri gumary
function mimi(L) {
  let r = 0;  
  for (let t = 2; t <= L; t += 2) {
    r += t;
  }
  return r;
} 
let o = mimi(10);
console.log(o); 


// 5) school marks
function getMarks(M) {
    if (getMarks = 10 || getMarks == 9){
        return 'Excellent';
    }
    else if(getMarks = 8 || getMarks == 7){
        return 'Good';
    }
    else {
        return 'Enough';
    }
}
let j = getMarks(9);
console.log(j);


// 6) maximum
function three (b,c,d){
    if(b>c && b>d){
        return(b);
    } else if(c>b && c>d) {
        return (c);
    } else {
        return (d);
    }
}
console.log(three(77, 8, 96));

// 7) parz ?
let parz = function(h){
    if(h%1===h && h%h===1){
        return 'parz';
    }
    else{
        return 'voch parz';   
    }
}
let hh = parz(5);
console.log(hh);    //tpum a voch parz 😭



//8) mini calculator
let calculator = function(y,j,w){
    if (w === "+"){
        return y+j;
    }
    else if (w === "-"){
        return y-j;
    }
    else if (w === "*"){
        return y*j;
    }
    else if (w === "/"){
        return y / j;
    }
} 
console.log(calculator(5,8,"*"));