



let back = document.getElementById("sequer")
let backv = back
let btn = document.getElementById("btn-back")
document.getElementById("btn-click").addEventListener("click", ()=>{
    // let inputbg  = document.getElementById("input-bg-color").value
    let inputwidth  = document.getElementById("input-width").value
let inputheight = document.getElementById("input-height").value
let inputborder = document.getElementById("input-border").value
// document.getElementById("sequer").style.backgroundColor=`${inputbg}`
document.getElementById("sequer").style.height=`${inputwidth}%`
document.getElementById("sequer").style.width= `${inputheight}%`
document.getElementById("sequer").style.borderRadius= `${inputborder}rem`

})


btn.addEventListener("click",()=>{
    
})

