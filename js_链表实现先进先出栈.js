/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2018/7/11
 * ======================================== */

const HEAD = new Node('head')

function Node(str){
    this.next = null
    this.content = str
}

function push(node){

    let last = HEAD
    while(last.next){
        last = last.next
    }

    last.next = node
}

function shift(){
    let node = HEAD.next

    if(node){
        HEAD.next = node.next
        node.next = null
    }

    return node
}

push(new Node('1'))
push(new Node('2'))
push(new Node('3'))


function printArr(){
    let curr = HEAD.next
    while(curr){
        console.log(curr.content)
        curr = curr.next
    }
}

printArr()

let n = shift()
console.log(n)

n = shift()
console.log(n)

n = shift()
console.log(n)

n = shift()
console.log(n)

printArr()


