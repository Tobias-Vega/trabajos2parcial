const elAccept = document.getElementById("accept")

elAccept.addEventListener("click", () => {
    let elUsername = document.getElementById("username")

    let elEmail = document.getElementById('email')

    let check = document.getElementById('check')

    let password = document.getElementById('password')
    let passwordConfirm = document.getElementById('confirmpassword')

    let file = document.getElementById('avatar')

    console.log(elUsername.value)
    console.log(elEmail.value)
    console.log(check.checked)
    console.log(password.value)
    console.log(passwordConfirm.value)
    console.log(file.value)

    if(password.value === confirmpassword.value) {
        console.log('igual')
    }else {
        console.log('No coinciden')
    }
})
