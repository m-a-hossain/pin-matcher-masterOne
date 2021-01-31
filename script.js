     // onclick function for getting input element from calculator button

        document.getElementById('numbers').addEventListener('click', function(event){
          let digit=event.target.innerText
          
         if(isNaN(digit)){
          
            if(digit === 'C'){
               let showInput =document.getElementById('getInput')
               showInput.value = ''
             }
         }else{
              let showInput =document.getElementById('getInput')
              showInput.value = showInput.value + digit  
         }
        })
    // generating pin from getPin() & from button 
        function generatePin(){
            let showPin = document.getElementById('showPin')
            showPin.value =getPin()
        } 

        function getPin(){ 
            let random = (Math.random() *10000)
        let pin = (random +"").split('.')[0]
        if(pin.length == 4){
            return pin
            }else{
            return getPin() 
                } 
            } 
    // getting numbers from numbers div
          function getNumbers(){
            document.getElementById('numbers').addEventListener('click', function(event){
              let digit=event.target.innerText
             
             if(isNaN(digit)){
                
                if(digit === 'C'){
                   let showInput =document.getElementById('getInput')
                   showInput.value = ''
                 }
             }else{
                  let showInput =document.getElementById('getInput')
                  showInput.value = showInput.value + digit  
             }
            })
          }

  
            function comparePin(){
        
                const pin = getInput('showPin')
                const digit= getInput('getInput')

                if(pin === digit){
                    getCorrctValue('correct','block')
                    getCorrctValue('wrong','none')
                
                }else{
                    getCorrctValue('correct','none')
                    getCorrctValue('wrong','block')
            
                }


            }
          function getInput(pinValue){
            const getPinValue = document.getElementById(pinValue).value
            return getPinValue
          
          }

          function getCorrctValue(right,display){
            const getInputEle = document.getElementById(right)
            getInputEle.style.display=display
                
           
          }


    
// row coding
/* document.getElementById('generate-btn').addEventListener('click', function(){
let random = (Math.random() *10000)
let pin = (random +"").split('.')[0]
if(pin.length == 4){
let showPin= document.getElementById('showPin').value =pin
}else{
console.log('not found')
}

})
*/     
/* function generatePin(){
    let showPin = document.getElementById('showPin')
    showPin.value =getPin()
  
} 
function getPin(){ 
    let random = (Math.random() *10000)
   let pin = (random +"").split('.')[0]
   if(pin.length == 4){
      return pin
    }else{
      return getPin() 
         } 
     } 


let numbers =document.getElementById('numbers')

numbers.addEventListener('click', function(event){
  let digit=event.target.innerText
  console.log(digit)
 if(isNaN(digit)){
     //console.log('digit')
    if(digit === 'C'){
       let showInput =document.getElementById('getInput')
       showInput.value = ''
     }
 }else{
      let showInput =document.getElementById('getInput')
      showInput.value = showInput.value + digit  
 }
})
 
document.getElementById('submit').addEventListener('click', function(){
    comparePin();
})

function comparePin(){
    const pin = document.getElementById('showPin').value
    const digit = document.getElementById('getInput').value

    if(pin === digit){
       const correct = document.getElementById('correct').style.display='block'
       const wrong = document.getElementById('wrong').style.display='none'
    }else{
     const correct = document.getElementById('correct').style.display='none'
       const wrong = document.getElementById('wrong').style.display='block'
    }


}
 */
 /*  let numbers =document.getElementById('numbers')

    numbers.addEventListener('click', function(event){
      let digit=event.target.innerText
      console.log(digit)
     if(isNaN(digit)){
         //console.log('digit')
        if(digit === 'C'){
           let showInput =document.getElementById('getInput')
           showInput.value = ''
         }
     }else{
          let showInput =document.getElementById('getInput')
          showInput.value = showInput.value + digit  
     }
    }) */
     
    /* document.getElementById('submit').addEventListener('click', function(){
        comparePin();
    }) */
