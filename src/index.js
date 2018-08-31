  
 import {$, cr} from './help';

 let jumbotron=$('jumbotron');
 let h1= $('h1'); 
 let p= $('pt')
 let btnlogin=$('btnLogin')
 let modal= $('exampleModal')
 let input=cr('input'); 
 input.setAttribute('id','txtbox1')  
 input.className='form-control'
 h1.style.fontStyle='bold'
 
 let info=[
     {name: 'Information Team', color: 'green'},{name:'Technology Team', color: 'yellow'}
 ]
 let intervalid
 jumbotron.addEventListener('mouseenter', function() {
     clearInterval(intervalid)
 })
 
 jumbotron.addEventListener('mouseleave', function() {
    intervalid=start()
})
 
btnlogin.addEventListener('click', function(){
   
})
console.dir(modal)
 let flag=true;
intervalid= start()     

function start(){
    let intervalid= setInterval(() => {
        if(flag){
           h1.innerHTML= info[0].name
           h1.style.color=info[0].color
           jumbotron.style.background=getRandomColor()
           flag=false
        }
        else{h1.innerHTML=info[1].name
            h1.style.color= info[1].color
        jumbotron.style.background=getRandomColor()
        flag=true
       }
       
    }, 1000);
    return intervalid
}

 function getRandomColor() {
    var letters = '0123456789ABCDEFGHIJKLMNOPQRSSTUVWXYZ';
    var color = '#';
    for (var i = 0; i <8; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
 
  p.addEventListener('click',function(){
    p.hidden=true
    input.hidden=false
    h1.appendChild(input) 
  
  })
  
   input.addEventListener('change', function(){
      p.innerHTML=$('txtbox1').value.toUpperCase()
       $('txtbox1').value=""
      input.hidden=true
      p.hidden=false 
  
   })
  
    


 
 
 

 




