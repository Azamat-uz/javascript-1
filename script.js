// console.log("prompt = ism, fam, yosh")
// // alert("Ismingiz: " + ism + " Familyangiz: " + fam + " Yoshingiz: " + yosh)
// let ism = prompt("Ismingiz")
// let fam = prompt("Familyangiz")
// let yosh = prompt("Yoshingiz")
// let login = prompt("Login")
// let parol = prompt("Parol")

// console.log("Ismingiz: " + ism + ' ' +"Familyangiz: " + fam + ' ' + "Yoshingiz: " + yosh + ' ' + "Login: " + login + ' ' + "Parol: " + parol)
// alert("Ismingiz: " + ism + " Familyangiz: " + fam + " Yoshingiz: " + yosh + " Login: " + login + " Parol: " + parol)


// == teng
// > yoki <
// >= yoki <=
// =| teng emas

let yosh = prompt("Yoshingiz")

if (yosh > 15) {
    let login = prompt("Login kiriting: ");
    let parol = prompt("Parolni kiriting: ");
    if ( (login == "azamat") == (parol == "123")){
        let savol = prompt("15+15=?")
        if (savol = 30){
            alert(("to'g'ri") == ("Saytga xush kelibsiz"))
        }
        else{
            alert("xato")
        }
    }
    else{
        alert("Login yoki parol xato")
    }
}    
else{
    alert("yoshingiz kichkina!!!")
}



// if (yosh <= 15)  
//     alert("Sizning yoshingiz to'g'ri kelmaydi")
// if (yosh >= 15)
//     alert = prompt("Login"), prompt("Parol")
//     // else if (prompt = ("azamat") == prompt("123456"))
//     alert("Saytga xush kelibsiz")