let blog1={
    name: "Aditya Stha",
    addedat: "2023/28/09",
    readby: 500,
    comments: 45,
    status: 'Thank you for watching',
    addComment: function(){
        this.comments++ 
        load1()
    },
    Readby: function(){
        this.readby++
        load1()

    },

}
let blog2={
    name: "Aaryash Shakya",
    addedat: "2023/28/10",
    readby: 100,
    comments: 90,
    status: 'Thank you for watching',
    addComment: function(){
        this.comments++ 
        load2()
    },
    Readby: function(){
        this.readby++
        load2()

    },
}
load1()
function load1(){
    document.getElementById('by1').innerText=blog1.name
    document.getElementById('Added-at1').innerText=blog1.addedat
    document.getElementById('Read-by1').innerText=blog1.readby
    document.getElementById('Received-comment1').innerText=blog1.comments
    document.getElementById('Status1').innerText=blog1.status
}
document.getElementById('comment-btn1').addEventListener('click',()=>{
    blog1.addComment()
})

document.getElementById('read-btn1').addEventListener('click',()=>{
    blog1.Readby()
})

load2()
function load2(){
document.getElementById('by2').innerText=blog2.name
document.getElementById('Added-at2').innerText=blog2.addedat
document.getElementById('Read-by2').innerText=blog2.readby
document.getElementById('Received-comment2').innerText=blog2.comments
document.getElementById('Status2').innerText=blog2.status
}
document.getElementById('comment-btn2').addEventListener('click',()=>{
    blog2.addComment()
})
document.getElementById('read-btn2').addEventListener('click',()=>{
    blog2.Readby()
})   
load1()
load2()


