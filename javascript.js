const showHiddenPass = (loginPass,loginEye) =>{

    const input = document.getElementById(loginPass);
    const iconEye =document.getElementById(loginEye);

    iconEye.addEventListener('click', ()=>{
        //change pass to text
        if(input.type === 'password'){

            //switch to text
            input.type = 'text'

            //change icon
            iconEye.classList.add("ri-eye-line");
            iconEye.classList.remove("ri-eye-off-line")
        }
        else{
            input.type = 'password'
            
            //change icon
            iconEye.classList.remove("ri-eye-line");
            iconEye.classList.add("ri-eye-off-line")

        }
    })
}

showHiddenPass('login-password','login-eye');