window.addEventListener('keydown',(e)=>{

    document.getElementById('show').innerHTML=`
    Key name: ${e.key} <br>
    Key code: ${e.keyCode}`
})