setclock()
updatetime()
setInterval(updatetime,1000)


function updatetime()
{
    let d=new Date()
    let str,h,m,s,apm;
    h=d.getHours()
    m=d.getMinutes()
    s=d.getSeconds()
    apm=(h<12)?'AM':'PM'
    h%=12
    str=((h>=10)?h:'0'+h)+':'+((m>=10)?m:'0'+m)+':'+((s>=10)?s:'0'+s)+' '+apm
    document.getElementById('digital').innerHTML=str
    
    document.querySelector('.second-hand').style.transform='rotate('+s*6+'deg)'
    document.querySelector('.minute-hand').style.transform='rotate('+((m*6)+(0.1*s))+'deg)'
    document.querySelector('.hour-hand').style.transform='rotate('+((h*30)+(0.5*m))+'deg)'
}

function setclock()
{
    let i,j=0
    let analog=document.querySelector('.analog')

    for(i=1;i<=60;i++)
    {
        let div=document.createElement('div')
        div.id=''+i
        if(i%5)
        {
            div.className='num dot'
            div.innerHTML='.'
        }
        else
        {
            div.className='num'
            div.innerHTML=i/5
        }
        analog.append(div)
    }
    let num=document.querySelectorAll('.num')
    for(i=0;i<60;i++)
    {
        j+=6
        num[i].style.transform='rotate('+j+'deg)'
    }
}