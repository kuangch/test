/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2018/9/6
 * ======================================== */

try{
    console.log(a)
}catch (e){
    console.error(e)
}

try{
    console.log(b)
}catch (e){
    console.error(e)
}

try{
    console.log(c)
}catch (e){
    console.error(e)
}

try{
    console.log(x())
}catch (e){
    console.error(e)
}

try{
    console.log(y())
}catch (e){
    console.error(e)
}

try{
    console.log(z())
}catch (e){
    console.error(e)
}

var a = 0;
let b = 1;
const c = 2;


function x() {
   return 'x'
}

var y = function () {
    return 'y'
}

let z = function () {
    return 'z'
}