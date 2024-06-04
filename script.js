/* eslint-disable no-unused-vars */

let pass = document.querySelector("#password")
let confPass = document.querySelector("#confirmPassword")
let matchInvalid = document.querySelector("#match-invalid")


pass.addEventListener("change",checkPassword)
confPass.addEventListener("change",checkPassword)




function checkPassword(e){
    console.log("Triggered")
    console.log(`Current pass value ${pass.value} `)
    if(pass.value != "" && confPass.value != ""){
        if( pass.value!=confPass.value){
            console.log("Setting red")
            confPass.style.outline="solid 1px Red"
            pass.style.outline="solid 1px Red"
            matchInvalid.style.color="Red"
            matchInvalid.textContent = "Passwords do not match"
        }
        else{
            confPass.style.outline="solid 1px Green"
            pass.style.outline="solid 1px Green"
            matchInvalid.style.color="Green"
            matchInvalid.textContent = "Passwords match!"
        }
    }
    else if(pass.value == "" && confPass.value == ""){
        confPass.style.outline="unset"
        pass.style.outline="unset"
        matchInvalid.textContent = ""
    }

}