
function score(){
   
    let radio=document.querySelectorAll("input");
    let yes=0;
    let no = 0;
    radio.forEach(function(i) 
    {
        if(i.checked && i.value=="yes") 
        {
            yes++;
        }
         if(i.checked && i.value=="no")
        {
           no++;
        }
        
    });
    alert(`yes = ${yes} no = ${no}`);
}
