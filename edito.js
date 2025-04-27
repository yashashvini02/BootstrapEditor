  document.addEventListener("DOMContentLoaded",function(){
    let html1 = document.querySelector("#html-input") 
    let css = document.querySelector("#CSS-input")
    let js = document.querySelector("#Js-input")
    let runbt=document.querySelector("#runButton");
function updateOutput(){
    let out = document.querySelector("#Codeexce").contentDocument;
    out.open();
    out.write(`
        <html>
        <head>
            <style>${css.value}</style>
        </head>
        <body>
            ${html1.value}
          
        </body>
        </html>
    `);
    out.close();
    let scrp=out.createElement('script');
    scrp.text=js.value;
    out.body.appendChild(scrp);

}
  runbt.addEventListener("click",updateOutput); 
let tgle=document.querySelector(".form-check-input");
let ot=document.querySelector(".Out");
tgle.addEventListener("change",function(){
    if(tgle.checked){
      document.body.style.backgroundColor='black';
      html1.style.backgroundColor='black';
      css.style.backgroundColor='black'
      js.style.backgroundColor='black'
      js.style.color='white';
      css.style.color='white'
      html1.style.color='white';
      ot.style.color='white'
    }
    else{
        document.body.style.backgroundColor='white';
        html1.style.backgroundColor='white'
         css.style.backgroundColor='white'
      js.style.backgroundColor='white'
      js.style.color='black';
      css.style.color='black'
      html1.style.color='black';
      ot.style.color='black'
    }
  
})

}
);

