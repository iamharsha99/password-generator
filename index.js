document.getElementById("generate").onclick=()=>{

    let length=document.getElementById("length").value;
    let includeLowerCase = document.querySelector('input[name="includeLowerCase"]').checked;
    let includeUpperCase = document.querySelector('input[name="includeUpperCase"]').checked;
    let includeNumbers = document.querySelector('input[name="includeNumbers"]').checked;
    let includeSpecialSymbols = document.querySelector('input[name="includeSpecialSymbols"]').checked;
    
    let lowerCase="abcdefghijklmnopqrstuvwxyz";
    let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers="0123456789";
    let specialSymbols= "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let password ="";
    let allowedchars="";

    allowedchars+= includeLowerCase ? lowerCase :"";
    allowedchars+= includeUpperCase ? upperCase :"";
    allowedchars+= includeNumbers ? numbers :"";
    allowedchars+= includeSpecialSymbols ? specialSymbols :"";

    for(let i=0;i<length;i++)
    {
        password+=allowedchars.charAt(Math.floor(Math.random()*allowedchars.length));
    }

    document.getElementById("password").textContent=password;
}
