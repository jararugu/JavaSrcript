let a = prompt("Enter the value")
console.log(a)
console.log(typeof a);

// Implicit Typecasting

let b =10+"10";
console.log(b)
console.log(typeof b);

let c =100-"10";
console.log(c)
console.log(typeof c);

let d =100-"a";
console.log(d)  // NaN
console.log(typeof d);

let e = 10*"10"
console.log(e)
console.log(typeof e);

let f = 10/"2"
console.log(f)
console.log(typeof f);

let g = 10%"2"
console.log(g)
console.log(typeof g);

console.log(100+"10"-10)
console.log(100+"10")
console.log("100"-10)

// Explicit Typecasting

let  z = "11";
console.log(typeof z)
// number
let y = Number("10")
console.log(y)
console.log(typeof y)

// parseint()
let x  = parseInt("10")
console.log(x);
console.log(typeof x)


  //ParseFLoat()
  let w  = parseFloat("10")
console.log(w);
console.log(typeof w)

let v = "10web"
console.log(Number(v)); //Nan
console.log(parseInt(v)); // 10
console.log(parseFloat(v)); // 10

let u = 23.675;
console.log(Number(u)); // 23.675
console.log(parseInt(u)); // 23
console.log(parseFloat(u)); // 23.675
