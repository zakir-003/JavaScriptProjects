import {add,mul} from "./export.js"

const result1=add(2,5);
const result2=mul(4,5);

document.getElementById("output").innerHTML=`addition= ${result1} multiply= ${result2}`