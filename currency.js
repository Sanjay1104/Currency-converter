let select=document.querySelectorAll('.currency')
let button=document.getElementById('btn')
let input=document.getElementById('input')
let error=document.getElementById('error')
fetch('https://api.frankfurter.app/currencies')
.then(res=>(res.json()))
.then(msg=>displaydropdown(msg))

function displaydropdown(msg){
  let unit=Object.entries(msg)  
  for(let i=0;i<unit.length;i++){
    let opt=`<option value="${unit[i][0]}">${unit[i][0]}</option>`
    select[0].innerHTML+=opt;
    select[1].innerHTML+=opt;  
}
}

button.addEventListener('click',()=>{
let currency1=select[0].value
let currency2=select[1].value
let inpt=input.value
 if(currency1==currency2){
     error.innerHTML="*Same currency value!!*"
  }
  else{
    currconvert(currency1,currency2,inpt)
  }
})

function currconvert(val1,val2,val3){
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${val3}&from=${val1}&to=${val2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById("result").value=(Object.values(data.rates)[0])
  });
}


