/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2018/9/6
 * ======================================== */

function timeout() {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('end')
            // reject('eee')
        },2000)
    })
}

async function x() {
    let x = await timeout()

    if('end' === x){
        return 'success'
    }else {
        return 'failed'
    }

}

x().then(value => {
    console.log(value)
}).catch(reason => {
    console.error(reason)
})