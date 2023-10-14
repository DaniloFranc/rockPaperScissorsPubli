const paper=document.getElementById("paper")
const scissors=document.getElementById("scissors")
const rock=document.getElementById("rock")
const main=document.getElementById("main")
const score = document.getElementById("score");
const zerar=document.getElementById("zerar")
const btnRules=document.getElementById("btnRules")
const rules=document.getElementById("rules")
const btnFecharPopup=document.getElementById("btnFecharPopup")
const body=document.getElementById("body")

btnRules.addEventListener("click",()=>{

    rules.removeAttribute("class","ocultarPopup")
    rules.setAttribute("class","popup")

})

btnFecharPopup.addEventListener("click",()=>{

    rules.removeAttribute("class","popup")
    rules.setAttribute("class","ocultarPopup")

})

zerar.addEventListener("click",()=>{

   localStorage.setItem('numero', 0); 
   score.innerHTML=0

})

let numeroAtual = parseInt(localStorage.getItem('numero'));
score.innerHTML=numeroAtual


paper.addEventListener("click",()=>{

    if (window.innerWidth >= 768) {

    
    } else {



        
        while (main.firstChild) {
                main.removeChild(main.firstChild);
        }     

        main.classList.remove("image-container")
        main.classList.add("caixaCentralStep")

        let val=1
        console.log(val)

        const divStep1=document.createElement("div")
        divStep1.setAttribute("class","alinhamentoCaixaCentral")
        main.prepend(divStep1)

        

        

        const botaoStep=document.createElement("button")
        botaoStep.setAttribute("class","circle-button1Step")
        botaoStep.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
        divStep1.appendChild(botaoStep)

        const divStepPri=document.createElement("div")
        divStepPri.setAttribute("class","textStep10")
        divStepPri.innerHTML="YOU PICKED"
        divStep1.appendChild(divStepPri)

        const divStepSpace=document.createElement("div")
        divStepSpace.setAttribute("class","espacoStep1")
        main.appendChild(divStepSpace)

        const divStepSec=document.createElement("div")
        main.appendChild(divStepSec)

    
        const divStepSecSec=document.createElement("div")
        divStepSecSec.setAttribute("class","circuloVazio")
        divStepSec.appendChild(divStepSecSec)

        const divStepSecPrin=document.createElement("div")
        divStepSecPrin.setAttribute("class","textStep11")
        divStepSecPrin.innerHTML="THE HOUSE PICKED"
        divStepSec.appendChild(divStepSecPrin)

       
               
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const minNumber = 1;
        const maxNumber = 3;       
        const randomNum = getRandomNumber(minNumber, maxNumber);

      

        

        if (randomNum==1){

            if (localStorage.getItem('numero',0)) {
               
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual += 0;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                
                localStorage.setItem('numero', numeroAtual);
              } else {
              
                localStorage.setItem('numero', 1);
            
            }
            

   
            
                            
            

           
            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)


                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button1Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
                divStepSec.prepend(botaoStepRes)
                
                
                

            }

            function afterTwoSecond(){

                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                } 



                
                main.setAttribute("class","caixaCentralStepRes")

            


                const div1=document.createElement("div")
                div1.setAttribute("class","buttonRes")
                main.prepend(div1)

                const div11=document.createElement("div")
                div1.appendChild(div11)
                
                const button1=document.createElement("button") // div111
                button1.setAttribute("class","circle-button1Step")
                button1.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
                div11.prepend(button1)

                const div112=document.createElement("div")
                div112.setAttribute("class","textStep10")
                div112.innerHTML=`YOU PICKED`
                div11.appendChild(div112)

                const div12=document.createElement("div")
                div12.setAttribute("class","espacoRes")
                div1.appendChild(div12)

                const div13=document.createElement("div")
                div1.appendChild(div13)
                
                const button2=document.createElement("button")
                button2.setAttribute("class","circle-button1Step")
                button2.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
                div13.appendChild(button2)

                const div131=document.createElement("div")
                div131.setAttribute("class","textStep11")
                div131.innerHTML=`THE HOUSE PICKED`
                div13.appendChild(div131)

                const div2=document.createElement("div")
                div2.setAttribute("class","espacoStep1Res")
                main.appendChild(div2)

                const div21=document.createElement("div")
                div21.setAttribute("class","textResRes")
                div21.innerHTML=`DRAW`
                div2.appendChild(div21)

                const button3=document.createElement("button")
                button3.setAttribute("class","botaoResRes")
                button3.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`
                button3.setAttribute("id","reiniciar")
                div2.appendChild(button3)

                
                btnRules.setAttribute("class","caixaRulesRes")
                
        


                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }

            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000);


        }

        if (randomNum==2){

            if (localStorage.getItem('numero',0)) {
        
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual -= 1;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                localStorage.setItem('numero', numeroAtual);
              } else {
                
                localStorage.setItem('numero', 1);
            
            }

        

            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button2Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
                divStepSec.prepend(botaoStepRes)

            }

            function afterTwoSecond(){

                
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                } 


                 
                main.setAttribute("class","caixaCentralStepRes")


                const div1=document.createElement("div")
                div1.setAttribute("class","buttonRes")
                main.prepend(div1)

                const div11=document.createElement("div")
                div1.appendChild(div11)
                
                const button1=document.createElement("button") 
                button1.setAttribute("class","circle-button1Step")
                button1.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
                div11.prepend(button1)

                const div112=document.createElement("div")
                div112.setAttribute("class","textStep10")
                div112.innerHTML=`YOU PICKED`
                div11.appendChild(div112)

                const div12=document.createElement("div")
                div12.setAttribute("class","espacoRes")
                div1.appendChild(div12)

                const div13=document.createElement("div")
                div1.appendChild(div13)
                
                const button2=document.createElement("button")
                button2.setAttribute("class","circle-button2Step")
                button2.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
                div13.appendChild(button2)

                const div131=document.createElement("div")
                div131.setAttribute("class","textStep11")
                div131.innerHTML=`THE HOUSE PICKED`
                div13.appendChild(div131)

                const div2=document.createElement("div")
                div2.setAttribute("class","espacoStep1Res")
                main.appendChild(div2)

                const div21=document.createElement("div")
                div21.setAttribute("class","textResRes")
                div21.innerHTML=`YOU LOSE`
                div2.appendChild(div21)

                const button3=document.createElement("button")
                button3.setAttribute("class","botaoResRes")
                button3.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`
                button3.setAttribute("id","reiniciar")
                div2.appendChild(button3)

                

                
                btnRules.setAttribute("class","caixaRulesRes")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }
            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000);


        }

        if (randomNum==3){

            if (localStorage.getItem('numero',0)) {
       
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual += 1;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                localStorage.setItem('numero', numeroAtual);
              } else {
                
                localStorage.setItem('numero', 1);
            
            }
            

            




            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button3Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
                divStepSec.prepend(botaoStepRes)


            }

            function afterTwoSecond() {

                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                } 


                 
                main.setAttribute("class","caixaCentralStepRes")

              


                const div1=document.createElement("div")
                div1.setAttribute("class","buttonRes")
                main.prepend(div1)

                const div11=document.createElement("div")
                div1.appendChild(div11)
                
                const button1=document.createElement("button") 
                button1.setAttribute("class","circle-button1Step")
                button1.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
                div11.prepend(button1)

                const div112=document.createElement("div")
                div112.setAttribute("class","textStep10")
                div112.innerHTML=`YOU PICKED`
                div11.appendChild(div112)

                const div12=document.createElement("div")
                div12.setAttribute("class","espacoRes")
                div1.appendChild(div12)

                const div13=document.createElement("div")
                div1.appendChild(div13)
                
                const button2=document.createElement("button")
                button2.setAttribute("class","circle-button3Step")
                button2.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
                div13.appendChild(button2)

                const div131=document.createElement("div")
                div131.setAttribute("class","textStep11")
                div131.innerHTML=`THE HOUSE PICKED`
                div13.appendChild(div131)

                const div2=document.createElement("div")
                div2.setAttribute("class","espacoStep1Res")
                main.appendChild(div2)

                const div21=document.createElement("div")
                div21.setAttribute("class","textResRes")
                div21.innerHTML=`YOU WIN`
                div2.appendChild(div21)

                const button3=document.createElement("button")
                button3.setAttribute("class","botaoResRes")
                button3.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`
                button3.setAttribute("id","reiniciar")
                div2.appendChild(button3)

                btnRules.setAttribute("class","caixaRulesRes")

                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })
            }
            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000);


        }
                
    }


    if (window.innerWidth <= 768) {

    
    } else {



        
        while (main.firstChild) {
                main.removeChild(main.firstChild);
        }     

        main.classList.remove("image-container")
        main.classList.add("caixaCentralStep")

        let val=1
        console.log(val)

        const divStep1=document.createElement("div")
        divStep1.setAttribute("class","alinhamentoCaixaCentral")
        main.prepend(divStep1)

        const divStepPri=document.createElement("div")
        divStepPri.setAttribute("class","textStep10")
        divStepPri.innerHTML="YOU PICKED"
        divStep1.appendChild(divStepPri)

        const botaoStep=document.createElement("button")
        botaoStep.setAttribute("class","circle-button1Step")
        botaoStep.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
        divStep1.appendChild(botaoStep)

        const divStepSpace=document.createElement("div")
        divStepSpace.setAttribute("class","espacoStep1")
        main.appendChild(divStepSpace)

        const divStepSec=document.createElement("div")
        main.appendChild(divStepSec)

        const divStepSecPrin=document.createElement("div")
        divStepSecPrin.setAttribute("class","textStep11")
        divStepSecPrin.innerHTML="THE HOUSE PICKED"
        divStepSec.appendChild(divStepSecPrin)

        const divStepSecSec=document.createElement("div")
        divStepSecSec.setAttribute("class","circuloVazio")
        divStepSec.appendChild(divStepSecSec)

 
               
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const minNumber = 1;
        const maxNumber = 3;       
        const randomNum = getRandomNumber(minNumber, maxNumber);

        

        if (randomNum==1){

            if (localStorage.getItem('numero',0)) {
              
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual += 0;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
               
                localStorage.setItem('numero', numeroAtual);
              } else {
                
                localStorage.setItem('numero', 1);
            
            }
            

            
            divStepSpace.removeAttribute("class","espacoStep1")
            divStepSpace.setAttribute("class","espacoStep1Res")

            
                            
            

           
            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button1Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
                divStepSec.appendChild(botaoStepRes)
                
                
                

            }

            function afterTwoSecond(){


                const divTextRes=document.createElement("div")
                divTextRes.setAttribute("class","textRes")
                divTextRes.innerHTML="DRAW"
                divStepSpace.appendChild(divTextRes)

                const divBotaoRes=document.createElement("button")
                divBotaoRes.setAttribute("class","botaoRes")
                divBotaoRes.setAttribute("id","reiniciar")
                divBotaoRes.innerHTML="PLAY AGAIN"
                divStepSpace.appendChild(divBotaoRes)
                
                const divResEspace1=document.createElement("div")
                divResEspace1.setAttribute("class","espaceBotaoRes")
                divBotaoRes.prepend(divResEspace1)

                const divResEspace2=document.createElement("div")
                divResEspace2.setAttribute("class","espaceBotaoRes")
                divBotaoRes.appendChild(divResEspace2)

                botaoStep.removeAttribute("class","circle-button1Step")
                botaoStep.setAttribute("class","circle-button1StepRes")


                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }

            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000);


        }

        if (randomNum==2){

            if (localStorage.getItem('numero',0)) {
            
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual -= 1;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                localStorage.setItem('numero', numeroAtual);
              } else {
            
                localStorage.setItem('numero', 1);
            
            }

           
            divStepSpace.removeAttribute("class","espacoStep1")
            divStepSpace.setAttribute("class","espacoStep1Res")


            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button2Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
                divStepSec.appendChild(botaoStepRes)

            }

            function afterTwoSecond(){

                const divTextRes=document.createElement("div")
                divTextRes.setAttribute("class","textRes")
                divTextRes.innerHTML="YOU LOSE"
                divStepSpace.appendChild(divTextRes)

                const divBotaoRes=document.createElement("button")
                divBotaoRes.setAttribute("class","botaoRes")
                divBotaoRes.setAttribute("id","reiniciar")
                divBotaoRes.innerHTML="PLAY AGAIN"
                divStepSpace.appendChild(divBotaoRes)
                
                const divResEspace1=document.createElement("div")
                divResEspace1.setAttribute("class","espaceBotaoRes")
                divBotaoRes.prepend(divResEspace1)

                const divResEspace2=document.createElement("div")
                divResEspace2.setAttribute("class","espaceBotaoRes")
                divBotaoRes.appendChild(divResEspace2)

                botaoStep.removeAttribute("class","circle-button2Step")
                botaoStep.setAttribute("class","circle-button1StepRes")


                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }
            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000);


        }

        if (randomNum==3){

            if (localStorage.getItem('numero',0)) {
              
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual += 1;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                localStorage.setItem('numero', numeroAtual);
              } else {
               
                localStorage.setItem('numero', 1);
            
            }
            

            

            
            divStepSpace.removeAttribute("class","espacoStep1")
            divStepSpace.setAttribute("class","espacoStep1Res")


            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button3Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
                divStepSec.appendChild(botaoStepRes)


            }

            function afterTwoSecond() {
                const divTextRes=document.createElement("div")
                divTextRes.setAttribute("class","textRes")
                divTextRes.innerHTML="YOU WIN"
                divStepSpace.appendChild(divTextRes)

                const divBotaoRes=document.createElement("button")
                divBotaoRes.setAttribute("class","botaoRes")
                divBotaoRes.setAttribute("id","reiniciar")
                divBotaoRes.innerHTML="PLAY AGAIN"
                divStepSpace.appendChild(divBotaoRes)
                
                const divResEspace1=document.createElement("div")
                divResEspace1.setAttribute("class","espaceBotaoRes")
                divBotaoRes.prepend(divResEspace1)

                const divResEspace2=document.createElement("div")
                divResEspace2.setAttribute("class","espaceBotaoRes")
                divBotaoRes.appendChild(divResEspace2)

                botaoStep.removeAttribute("class","circle-button3Step")
                botaoStep.setAttribute("class","circle-button1StepRes")


                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })
            }
            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000);


        }
                
    }

})


































scissors.addEventListener("click",()=>{

    if (window.innerWidth >= 768) {


    } else {

        
        while (main.firstChild) {
                main.removeChild(main.firstChild);
        }

        let val=2

        console.log(val)

        main.classList.remove("image-container")
        main.classList.add("caixaCentralStep")

        

        const divStep1=document.createElement("div")
        divStep1.setAttribute("class","alinhamentoCaixaCentral")
        main.prepend(divStep1)

        

    

        const botaoStep=document.createElement("button")
        botaoStep.setAttribute("class","circle-button2Step")
        botaoStep.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
        divStep1.appendChild(botaoStep)

        const divStepPri=document.createElement("div")
        divStepPri.setAttribute("class","textStep10")
        divStepPri.innerHTML="YOU PICKED"
        divStep1.appendChild(divStepPri)

        const divStepSpace=document.createElement("div")
        divStepSpace.setAttribute("class","espacoStep1")
        main.appendChild(divStepSpace)

        const divStepSec=document.createElement("div")
        main.appendChild(divStepSec)

        

        const divStepSecSec=document.createElement("div")
        divStepSecSec.setAttribute("class","circuloVazio")
        divStepSec.appendChild(divStepSecSec)

        const divStepSecPrin=document.createElement("div")
        divStepSecPrin.setAttribute("class","textStep11")
        divStepSecPrin.innerHTML="THE HOUSE PICKED"
        divStepSec.appendChild(divStepSecPrin)

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const minNumber = 1;
        const maxNumber = 3;       
        const randomNum = getRandomNumber(minNumber, maxNumber);
        
        // let randomNum=3

        console.log(randomNum); 


        if (randomNum==1){

            if (localStorage.getItem('numero',0)) {
               
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual += 1;
                setTimeout(function() {
                    score.innerHTML = numeroAtual;
                }, 1000);
                
                localStorage.setItem('numero', numeroAtual);
              } else {
            
                localStorage.setItem('numero', 1);
            
            }
            

        

            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button1Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
                divStepSec.prepend(botaoStepRes)
            }

            function afterTwoSecond(){

                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                } 



                
                main.setAttribute("class","caixaCentralStepRes")

           


                const div1=document.createElement("div")
                div1.setAttribute("class","buttonRes")
                main.prepend(div1)

                const div11=document.createElement("div")
                div1.appendChild(div11)
                
                const button1=document.createElement("button") 
                button1.setAttribute("class","circle-button2Step")
                button1.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
                div11.prepend(button1)

                const div112=document.createElement("div")
                div112.setAttribute("class","textStep10")
                div112.innerHTML=`YOU PICKED`
                div11.appendChild(div112)

                const div12=document.createElement("div")
                div12.setAttribute("class","espacoRes")
                div1.appendChild(div12)

                const div13=document.createElement("div")
                div1.appendChild(div13)
                
                const button2=document.createElement("button")
                button2.setAttribute("class","circle-button1Step")
                button2.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
                div13.appendChild(button2)

                const div131=document.createElement("div")
                div131.setAttribute("class","textStep11")
                div131.innerHTML=`THE HOUSE PICKED`
                div13.appendChild(div131)

                const div2=document.createElement("div")
                div2.setAttribute("class","espacoStep1Res")
                main.appendChild(div2)

                const div21=document.createElement("div")
                div21.setAttribute("class","textResRes")
                div21.innerHTML=`YOU WIN`
                div2.appendChild(div21)

                const button3=document.createElement("button")
                button3.setAttribute("class","botaoResRes")
                button3.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`
                button3.setAttribute("id","reiniciar")
                div2.appendChild(button3)

                
                btnRules.setAttribute("class","caixaRulesRes")


                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }

            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000);


        }

        if (randomNum==2){


            if (localStorage.getItem('numero',0)) {
             
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual += 0;
                setTimeout(function() {
                    score.innerHTML = numeroAtual;
                }, 1000);
                
                localStorage.setItem('numero', numeroAtual);
              } else {
                
                localStorage.setItem('numero', 1);
            
            }
            

         

            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button2Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
                divStepSec.prepend(botaoStepRes)
            }

            function afterTwoSecond(){

            

                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                } 



                
                main.setAttribute("class","caixaCentralStepRes")

              


                const div1=document.createElement("div")
                div1.setAttribute("class","buttonRes")
                main.prepend(div1)

                const div11=document.createElement("div")
                div1.appendChild(div11)
                
                const button1=document.createElement("button") // div111
                button1.setAttribute("class","circle-button2Step")
                button1.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
                div11.prepend(button1)

                const div112=document.createElement("div")
                div112.setAttribute("class","textStep10")
                div112.innerHTML=`YOU PICKED`
                div11.appendChild(div112)

                const div12=document.createElement("div")
                div12.setAttribute("class","espacoRes")
                div1.appendChild(div12)

                const div13=document.createElement("div")
                div1.appendChild(div13)
                
                const button2=document.createElement("button")
                button2.setAttribute("class","circle-button2Step")
                button2.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
                div13.appendChild(button2)

                const div131=document.createElement("div")
                div131.setAttribute("class","textStep11")
                div131.innerHTML=`THE HOUSE PICKED`
                div13.appendChild(div131)

                const div2=document.createElement("div")
                div2.setAttribute("class","espacoStep1Res")
                main.appendChild(div2)

                const div21=document.createElement("div")
                div21.setAttribute("class","textResRes")
                div21.innerHTML=`DRAW`
                div2.appendChild(div21)

                const button3=document.createElement("button")
                button3.setAttribute("class","botaoResRes")
                button3.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`
                button3.setAttribute("id","reiniciar")
                div2.appendChild(button3)

                
                btnRules.setAttribute("class","caixaRulesRes")

                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }
            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000)


        }

        if (randomNum==3){

            if (localStorage.getItem('numero',0)) {
            
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual -= 1;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                
                localStorage.setItem('numero', numeroAtual);
              } else {
               
                localStorage.setItem('numero', 1);
            
            }
            
           

            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button3Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
                divStepSec.prepend(botaoStepRes)
            }

            function afterTwoSecond(){

                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                } 


                
                main.setAttribute("class","caixaCentralStepRes")

                


                const div1=document.createElement("div")
                div1.setAttribute("class","buttonRes")
                main.prepend(div1)

                const div11=document.createElement("div")
                div1.appendChild(div11)
                
                const button1=document.createElement("button")
                button1.setAttribute("class","circle-button2Step")
                button1.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
                div11.prepend(button1)

                const div112=document.createElement("div")
                div112.setAttribute("class","textStep10")
                div112.innerHTML=`YOU PICKED`
                div11.appendChild(div112)

                const div12=document.createElement("div")
                div12.setAttribute("class","espacoRes")
                div1.appendChild(div12)

                const div13=document.createElement("div")
                div1.appendChild(div13)
                
                const button2=document.createElement("button")
                button2.setAttribute("class","circle-button3Step")
                button2.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
                div13.appendChild(button2)

                const div131=document.createElement("div")
                div131.setAttribute("class","textStep11")
                div131.innerHTML=`THE HOUSE PICKED`
                div13.appendChild(div131)

                const div2=document.createElement("div")
                div2.setAttribute("class","espacoStep1Res")
                main.appendChild(div2)

                const div21=document.createElement("div")
                div21.setAttribute("class","textResRes")
                div21.innerHTML=`YOU LOSE`
                div2.appendChild(div21)

                const button3=document.createElement("button")
                button3.setAttribute("class","botaoResRes")
                button3.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`
                button3.setAttribute("id","reiniciar")
                div2.appendChild(button3)

                
                btnRules.setAttribute("class","caixaRulesRes")


                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }
            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000)


        }


        
    }
        
    
    
    if (window.innerWidth <= 768) {


    } else {

        
        while (main.firstChild) {
                main.removeChild(main.firstChild);
        }

        let val=2

        console.log(val)

        main.classList.remove("image-container")
        main.classList.add("caixaCentralStep")

        

        const divStep1=document.createElement("div")
        divStep1.setAttribute("class","alinhamentoCaixaCentral")
        main.prepend(divStep1)

        const divStepPri=document.createElement("div")
        divStepPri.setAttribute("class","textStep10")
        divStepPri.innerHTML="YOU PICKED"
        divStep1.appendChild(divStepPri)

    
        const botaoStep=document.createElement("button")
        botaoStep.setAttribute("class","circle-button2Step")
        botaoStep.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
        divStep1.appendChild(botaoStep)

        const divStepSpace=document.createElement("div")
        divStepSpace.setAttribute("class","espacoStep1")
        main.appendChild(divStepSpace)

        const divStepSec=document.createElement("div")
        main.appendChild(divStepSec)

        const divStepSecPrin=document.createElement("div")
        divStepSecPrin.setAttribute("class","textStep11")
        divStepSecPrin.innerHTML="THE HOUSE PICKED"
        divStepSec.appendChild(divStepSecPrin)

        const divStepSecSec=document.createElement("div")
        divStepSecSec.setAttribute("class","circuloVazio")
        divStepSec.appendChild(divStepSecSec)


        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const minNumber = 1;
        const maxNumber = 3;       
        const randomNum = getRandomNumber(minNumber, maxNumber);
        
    

        console.log(randomNum); 


        if (randomNum==1){

            if (localStorage.getItem('numero',0)) {
               
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual += 1;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                
                localStorage.setItem('numero', numeroAtual);
              } else {
                
                localStorage.setItem('numero', 1);
            
            }
            

            
            divStepSpace.removeAttribute("class","espacoStep1")
            divStepSpace.setAttribute("class","espacoStep1Res")            


            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button1Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
                divStepSec.appendChild(botaoStepRes)
            }

            function afterTwoSecond(){

               

                const divTextRes=document.createElement("div")
                divTextRes.setAttribute("class","textRes")
                divTextRes.innerHTML="YOU WIN"
                divStepSpace.appendChild(divTextRes)

                const divBotaoRes=document.createElement("button")
                divBotaoRes.setAttribute("class","botaoRes")
                divBotaoRes.setAttribute("id","reiniciar")
                divBotaoRes.innerHTML="PLAY AGAIN"
                divStepSpace.appendChild(divBotaoRes)
                
                const divResEspace1=document.createElement("div")
                divResEspace1.setAttribute("class","espaceBotaoRes")
                divBotaoRes.prepend(divResEspace1)

                const divResEspace2=document.createElement("div")
                divResEspace2.setAttribute("class","espaceBotaoRes")
                divBotaoRes.appendChild(divResEspace2)

                botaoStep.removeAttribute("class","circle-button2Step")
                botaoStep.setAttribute("class","circle-button2StepRes")


                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }

            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000);


        }

        if (randomNum==2){


            if (localStorage.getItem('numero',0)) {
             
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual += 0;
                setTimeout(function() {
                    score.innerHTML = numeroAtual;
                }, 1000);
               
                localStorage.setItem('numero', numeroAtual);
              } else {
              
                localStorage.setItem('numero', 1);
            
            }
            

            
            divStepSpace.removeAttribute("class","espacoStep1")
            divStepSpace.setAttribute("class","espacoStep1Res")           


            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button2Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
                divStepSec.appendChild(botaoStepRes)
            }

            function afterTwoSecond(){

               

                const divTextRes=document.createElement("div")
                divTextRes.setAttribute("class","textRes")
                divTextRes.innerHTML="DRAW"
                divStepSpace.appendChild(divTextRes)

                const divBotaoRes=document.createElement("button")
                divBotaoRes.setAttribute("class","botaoRes")
                divBotaoRes.setAttribute("id","reiniciar")
                divBotaoRes.innerHTML="PLAY AGAIN"
                divStepSpace.appendChild(divBotaoRes)
                
                const divResEspace1=document.createElement("div")
                divResEspace1.setAttribute("class","espaceBotaoRes")
                divBotaoRes.prepend(divResEspace1)

                const divResEspace2=document.createElement("div")
                divResEspace2.setAttribute("class","espaceBotaoRes")
                divBotaoRes.appendChild(divResEspace2)

                botaoStep.removeAttribute("class","circle-button2Step")
                botaoStep.setAttribute("class","circle-button2StepRes")


                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }
            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000)


        }

        if (randomNum==3){

            if (localStorage.getItem('numero',0)) {
              
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual -= 1;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                
                localStorage.setItem('numero', numeroAtual);
              } else {
               
                localStorage.setItem('numero', 1);
            
            }
            
            
            divStepSpace.removeAttribute("class","espacoStep1")
            divStepSpace.setAttribute("class","espacoStep1Res") 
           


            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button3Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
                divStepSec.appendChild(botaoStepRes)
            }

            function afterTwoSecond(){

               

                const divTextRes=document.createElement("div")
                divTextRes.setAttribute("class","textRes")
                divTextRes.innerHTML="YOU LOSE"
                divStepSpace.appendChild(divTextRes)

                const divBotaoRes=document.createElement("button")
                divBotaoRes.setAttribute("class","botaoRes")
                divBotaoRes.setAttribute("id","reiniciar")
                divBotaoRes.innerHTML="PLAY AGAIN"
                divStepSpace.appendChild(divBotaoRes)
                
                const divResEspace1=document.createElement("div")
                divResEspace1.setAttribute("class","espaceBotaoRes")
                divBotaoRes.prepend(divResEspace1)

                const divResEspace2=document.createElement("div")
                divResEspace2.setAttribute("class","espaceBotaoRes")
                divBotaoRes.appendChild(divResEspace2)

                botaoStep.removeAttribute("class","circle-button2Step")
                botaoStep.setAttribute("class","circle-button2StepRes")


                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }
            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000)


        }


        
    }

})


rock.addEventListener("click",()=>{

    if (window.innerWidth >= 768) {


    } else {

        
        while (main.firstChild) {
                main.removeChild(main.firstChild);
        }

        let val=3

        console.log(val)

        main.classList.remove("image-container")
        main.classList.add("caixaCentralStep")

        

        const divStep1=document.createElement("div")
        divStep1.setAttribute("class","alinhamentoCaixaCentral")
        main.prepend(divStep1)

        

      

        const botaoStep=document.createElement("button")
        botaoStep.setAttribute("class","circle-button3Step")
        botaoStep.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
        divStep1.appendChild(botaoStep)

        const divStepPri=document.createElement("div")
        divStepPri.setAttribute("class","textStep10")
        divStepPri.innerHTML="YOU PICKED"
        divStep1.appendChild(divStepPri)

        const divStepSpace=document.createElement("div")
        divStepSpace.setAttribute("class","espacoStep1")
        main.appendChild(divStepSpace)

        const divStepSec=document.createElement("div")
        main.appendChild(divStepSec)

        

        const divStepSecSec=document.createElement("div")
        divStepSecSec.setAttribute("class","circuloVazio")
        divStepSec.appendChild(divStepSecSec)

        const divStepSecPrin=document.createElement("div")
        divStepSecPrin.setAttribute("class","textStep11")
        divStepSecPrin.innerHTML="THE HOUSE PICKED"
        divStepSec.appendChild(divStepSecPrin)



        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const minNumber = 1;
        const maxNumber = 3;       
        const randomNum = getRandomNumber(minNumber, maxNumber);

      

        if (randomNum==1){

            if (localStorage.getItem('numero',0)) {
              
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual -= 1;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                
                localStorage.setItem('numero', numeroAtual);
              } else {
               
                localStorage.setItem('numero', 1);
            
            }
            
            
           
            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button1Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
                divStepSec.prepend(botaoStepRes)

            }

            function afterTwoSecond(){

                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }



                
                main.setAttribute("class","caixaCentralStepRes")

               


                const div1=document.createElement("div")
                div1.setAttribute("class","buttonRes")
                main.prepend(div1)

                const div11=document.createElement("div")
                div1.appendChild(div11)
                
                const button1=document.createElement("button") 
                button1.setAttribute("class","circle-button3Step")
                button1.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
                div11.prepend(button1)

                const div112=document.createElement("div")
                div112.setAttribute("class","textStep10")
                div112.innerHTML=`YOU PICKED`
                div11.appendChild(div112)

                const div12=document.createElement("div")
                div12.setAttribute("class","espacoRes")
                div1.appendChild(div12)

                const div13=document.createElement("div")
                div1.appendChild(div13)
                
                const button2=document.createElement("button")
                button2.setAttribute("class","circle-button1Step")
                button2.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
                div13.appendChild(button2)

                const div131=document.createElement("div")
                div131.setAttribute("class","textStep11")
                div131.innerHTML=`THE HOUSE PICKED`
                div13.appendChild(div131)

                const div2=document.createElement("div")
                div2.setAttribute("class","espacoStep1Res")
                main.appendChild(div2)

                const div21=document.createElement("div")
                div21.setAttribute("class","textResRes")
                div21.innerHTML=`YOU LOSE`
                div2.appendChild(div21)

                const button3=document.createElement("button")
                button3.setAttribute("class","botaoResRes")
                button3.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`
                button3.setAttribute("id","reiniciar")
                div2.appendChild(button3)

                
                btnRules.setAttribute("class","caixaRulesRes")



                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }
            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000)

        }

        if (randomNum==2){

            if (localStorage.getItem('numero',0)) {
                
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual += 1;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                
                localStorage.setItem('numero', numeroAtual);
              } else {
                
                localStorage.setItem('numero', 1);
            
            }
            

            
            

            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button2Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
                divStepSec.prepend(botaoStepRes)
            }

            function afterTwoSecond(){

                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                } 



                
                main.setAttribute("class","caixaCentralStepRes")

                


                const div1=document.createElement("div")
                div1.setAttribute("class","buttonRes")
                main.prepend(div1)

                const div11=document.createElement("div")
                div1.appendChild(div11)
                
                const button1=document.createElement("button") 
                button1.setAttribute("class","circle-button3Step")
                button1.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
                div11.prepend(button1)

                const div112=document.createElement("div")
                div112.setAttribute("class","textStep10")
                div112.innerHTML=`YOU PICKED`
                div11.appendChild(div112)

                const div12=document.createElement("div")
                div12.setAttribute("class","espacoRes")
                div1.appendChild(div12)

                const div13=document.createElement("div")
                div1.appendChild(div13)
                
                const button2=document.createElement("button")
                button2.setAttribute("class","circle-button2Step")
                button2.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
                div13.appendChild(button2)

                const div131=document.createElement("div")
                div131.setAttribute("class","textStep11")
                div131.innerHTML=`THE HOUSE PICKED`
                div13.appendChild(div131)

                const div2=document.createElement("div")
                div2.setAttribute("class","espacoStep1Res")
                main.appendChild(div2)

                const div21=document.createElement("div")
                div21.setAttribute("class","textResRes")
                div21.innerHTML=`YOU WIN`
                div2.appendChild(div21)

                const button3=document.createElement("button")
                button3.setAttribute("class","botaoResRes")
                button3.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`
                button3.setAttribute("id","reiniciar")
                div2.appendChild(button3)

                
                btnRules.setAttribute("class","caixaRulesRes")

                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }
            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000);


        }

        if (randomNum==3){

            if (localStorage.getItem('numero',0)) {
                
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual += 0;
                setTimeout(function() {
                    score.innerHTML = numeroAtual;
                }, 1000);
                
                localStorage.setItem('numero', numeroAtual);
              } else {
                
                localStorage.setItem('numero', 1);
            
            }
            

        

            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button3Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
                divStepSec.prepend(botaoStepRes)
            }

            function afterTwoSecond(){

                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }



                
                main.setAttribute("class","caixaCentralStepRes")

                


                const div1=document.createElement("div")
                div1.setAttribute("class","buttonRes")
                main.prepend(div1)

                const div11=document.createElement("div")
                div1.appendChild(div11)
                
                const button1=document.createElement("button") 
                button1.setAttribute("class","circle-button3Step")
                button1.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
                div11.prepend(button1)

                const div112=document.createElement("div")
                div112.setAttribute("class","textStep10")
                div112.innerHTML=`YOU PICKED`
                div11.appendChild(div112)

                const div12=document.createElement("div")
                div12.setAttribute("class","espacoRes")
                div1.appendChild(div12)

                const div13=document.createElement("div")
                div1.appendChild(div13)
                
                const button2=document.createElement("button")
                button2.setAttribute("class","circle-button3Step")
                button2.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
                div13.appendChild(button2)

                const div131=document.createElement("div")
                div131.setAttribute("class","textStep11")
                div131.innerHTML=`THE HOUSE PICKED`
                div13.appendChild(div131)

                const div2=document.createElement("div")
                div2.setAttribute("class","espacoStep1Res")
                main.appendChild(div2)

                const div21=document.createElement("div")
                div21.setAttribute("class","textResRes")
                div21.innerHTML=`DRAW`
                div2.appendChild(div21)

                const button3=document.createElement("button")
                button3.setAttribute("class","botaoResRes")
                button3.innerHTML=`<div class="espaceBotaoResRes"></div>PLAY AGAIN<div class="espaceBotaoResRes"></div>`
                button3.setAttribute("id","reiniciar")
                div2.appendChild(button3)

                btnRules.setAttribute("class","caixaRulesRes")

                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }
                        
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000);


        }

        
    }


    if (window.innerWidth <= 768) {


    } else {

        
        while (main.firstChild) {
                main.removeChild(main.firstChild);
        }

        let val=3

        console.log(val)

        main.classList.remove("image-container")
        main.classList.add("caixaCentralStep")

        

        const divStep1=document.createElement("div")
        divStep1.setAttribute("class","alinhamentoCaixaCentral")
        main.prepend(divStep1)

        const divStepPri=document.createElement("div")
        divStepPri.setAttribute("class","textStep10")
        divStepPri.innerHTML="YOU PICKED"
        divStep1.appendChild(divStepPri)


        const botaoStep=document.createElement("button")
        botaoStep.setAttribute("class","circle-button3Step")
        botaoStep.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
        divStep1.appendChild(botaoStep)

        const divStepSpace=document.createElement("div")
        divStepSpace.setAttribute("class","espacoStep1")
        main.appendChild(divStepSpace)

        const divStepSec=document.createElement("div")
        main.appendChild(divStepSec)

        const divStepSecPrin=document.createElement("div")
        divStepSecPrin.setAttribute("class","textStep11")
        divStepSecPrin.innerHTML="THE HOUSE PICKED"
        divStepSec.appendChild(divStepSecPrin)

        const divStepSecSec=document.createElement("div")
        divStepSecSec.setAttribute("class","circuloVazio")
        divStepSec.appendChild(divStepSecSec)



        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const minNumber = 1;
        const maxNumber = 3;       
        const randomNum = getRandomNumber(minNumber, maxNumber);

        console.log(randomNum); 
        // let randomNum=3

        if (randomNum==1){

            if (localStorage.getItem('numero',0)) {
                
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual -= 1;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                
                localStorage.setItem('numero', numeroAtual);
              } else {
                
                localStorage.setItem('numero', 1);
            
            }
            
            
            divStepSpace.removeAttribute("class","espacoStep1")
            divStepSpace.setAttribute("class","espacoStep1Res")


            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button1Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-paper.svg" alt="Imagem no botão">`
                divStepSec.appendChild(botaoStepRes)

            }

            function afterTwoSecond(){

              

                const divTextRes=document.createElement("div")
                divTextRes.setAttribute("class","textRes")
                divTextRes.innerHTML="YOU LOSE"
                divStepSpace.appendChild(divTextRes)

                const divBotaoRes=document.createElement("button")
                divBotaoRes.setAttribute("class","botaoRes")
                divBotaoRes.setAttribute("id","reiniciar")
                divBotaoRes.innerHTML="PLAY AGAIN"
                divStepSpace.appendChild(divBotaoRes)
                
                const divResEspace1=document.createElement("div")
                divResEspace1.setAttribute("class","espaceBotaoRes")
                divBotaoRes.prepend(divResEspace1)

                const divResEspace2=document.createElement("div")
                divResEspace2.setAttribute("class","espaceBotaoRes")
                divBotaoRes.appendChild(divResEspace2)

                botaoStep.removeAttribute("class","circle-button3Step")
                botaoStep.setAttribute("class","circle-button3StepRes")


                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }
            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000)

        }

        if (randomNum==2){

            if (localStorage.getItem('numero',0)) {
                
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual += 1;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                
                localStorage.setItem('numero', numeroAtual);
              } else {
                
                localStorage.setItem('numero', 1);
            
            }
            

            
            divStepSpace.removeAttribute("class","espacoStep1")
            divStepSpace.setAttribute("class","espacoStep1Res")            


            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button2Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-scissors.svg" alt="Imagem no botão">`
                divStepSec.appendChild(botaoStepRes)
            }

            function afterTwoSecond(){

                

                const divTextRes=document.createElement("div")
                divTextRes.setAttribute("class","textRes")
                divTextRes.innerHTML="YOU WIN"
                divStepSpace.appendChild(divTextRes)

                const divBotaoRes=document.createElement("button")
                divBotaoRes.setAttribute("class","botaoRes")
                divBotaoRes.setAttribute("id","reiniciar")
                divBotaoRes.innerHTML="PLAY AGAIN"
                divStepSpace.appendChild(divBotaoRes)
                
                const divResEspace1=document.createElement("div")
                divResEspace1.setAttribute("class","espaceBotaoRes")
                divBotaoRes.prepend(divResEspace1)

                const divResEspace2=document.createElement("div")
                divResEspace2.setAttribute("class","espaceBotaoRes")
                divBotaoRes.appendChild(divResEspace2)

                botaoStep.removeAttribute("class","circle-button3Step")
                botaoStep.setAttribute("class","circle-button3StepRes")


                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }
            
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000);


        }

        if (randomNum==3){

            if (localStorage.getItem('numero',0)) {
                
                let numeroAtual = parseInt(localStorage.getItem('numero'));
                numeroAtual += 0;
                setTimeout(function() {
                    score.innerHTML = numeroAtual; 
                }, 1000);
                
                localStorage.setItem('numero', numeroAtual);
              } else {
                
                localStorage.setItem('numero', 1);
            
            }
            

            
            divStepSpace.removeAttribute("class","espacoStep1")
            divStepSpace.setAttribute("class","espacoStep1Res")

            


            function afterOneSecond() {

                divStepSec.removeChild(divStepSecSec)

                const botaoStepRes=document.createElement("button")
                botaoStepRes.setAttribute("class","circle-button3Step")
                botaoStepRes.innerHTML=`<img class="imagem" src="img/icon-rock.svg" alt="Imagem no botão">`
                divStepSec.appendChild(botaoStepRes)
            }

            function afterTwoSecond(){

                

                const divTextRes=document.createElement("div")
                divTextRes.setAttribute("class","textRes")
                divTextRes.innerHTML="DRAW"
                divStepSpace.appendChild(divTextRes)

                const divBotaoRes=document.createElement("button")
                divBotaoRes.setAttribute("class","botaoRes")
                divBotaoRes.setAttribute("id","reiniciar")
                divBotaoRes.innerHTML="PLAY AGAIN"
                divStepSpace.appendChild(divBotaoRes)
                
                const divResEspace1=document.createElement("div")
                divResEspace1.setAttribute("class","espaceBotaoRes")
                divBotaoRes.prepend(divResEspace1)

                const divResEspace2=document.createElement("div")
                divResEspace2.setAttribute("class","espaceBotaoRes")
                divBotaoRes.appendChild(divResEspace2)

                botaoStep.removeAttribute("class","circle-button3Step")
                botaoStep.setAttribute("class","circle-button3StepRes")


                const reiniciar=document.getElementById("reiniciar")
                
                reiniciar.addEventListener("click",()=>{

                    location.reload();
                                                                        
                })

            }
                        
            setTimeout(afterOneSecond, 1000);
            setTimeout(afterTwoSecond, 2000);


        }

        
    }

})