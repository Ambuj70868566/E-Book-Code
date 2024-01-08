function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random() * 10000);

    let emailbody = `<h2> your OTP is : </h2>${otp_val}`;
    Email.send({
        SecureToken : "41d870ba-b07a-4a98-9b0f-f49ac2a18ff4",
        To : email.value,
        From : "ambujkumar0206@gmail.com",
        Subject : "E-Book site OTP is here",
        Body : emailbody,
    }).then(
      message => {
        if(message === "OK"){
            alert("OTP sent to your email : " + email.value);

            otpverify.style.display = "flex";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener("click" , () => {
                if(otp_inp.value == otp_val){
                    alert("email addresss verified...");
                }
                else{
                    alert("Wrong OTP entered.. Please try again.");

                }
            })
        }
      }
    );
}