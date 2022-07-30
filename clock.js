
function change(){
    let time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    let dt=time.getDate();
    let month=time.getMonth();
    let y=time.getFullYear();
    console.log(h);
    document.getElementById('samay').innerHTML="Date:"+dt+"/"+month+"/"+y+"   "+"  Time:"+h+":"+m+":"+s;
}
change();
setInterval(change,1000);
