
let i,j=0
let num=document.querySelectorAll('.num')
for(i=0;i<60;i++)
{
    j+=6
    num[i].style.transform='rotate('+j+'deg)'
}

updatetime()
setInterval(updatetime,1000)


function updatetime()
{
    let d=new Date
    let s=d.toLocaleTimeString()
    document.getElementById('digital').innerHTML=s
    
    let arr=s.split(' ').join(':').split(':')
    arr.pop()
    
    document.querySelector('.second-hand').style.transform='rotate('+parseInt(arr[2])*6+'deg)'
    let m=parseInt(arr[1])*6
    m+=(0.1*parseInt(arr[2]))
    document.querySelector('.minute-hand').style.transform='rotate('+m+'deg)'
    let h=parseInt(arr[0])*30
    h+=(0.5*parseInt(arr[1]))
    document.querySelector('.hour-hand').style.transform='rotate('+h+'deg)'
}