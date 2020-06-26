
export default class Login {
    constructor(){}

    init(){                                                                         //function signature
        console.log("Login:init");                                       // lines 15-28 are function definitions.
        this.updateLogin();                                                      //using SRP here
        function updateLogin(); 
        const login:any = document.querySelector('#login');                     //gets refference for the DOM element.
        const usernameInput = login.querySelectorAll('input')[0];               //DOM - is your HTML after it's interpreted by the browser.
        const passwordInput = login.querySelectorAll('input')[1];
        debugger;
        usernameInput.value = "Vio"                                             // Setting the value
        passwordInput.value = "Bulbuk"
    
    }

        login(usernameVal:any, passwordVal:any) {                              // method(parameter) 
        const usernameRef:any   = this.getSingleRef('#username')
        const passwordRef:any   = this.getSingleRef('#password')
        const submitRef:any     = this.getSingleRef('#login')

        this.set(usernameRef, usernameVal);                                 // method & class
        this.set(passwordRef, passwordVal);

        submitRef.click();
    }

    getSingleRef(cssIdSelector:string){                                   // method
        return document.querySelector(cssIdSelector);                   
    }

    set(elem:any, value:any){
        elem.value = value;
    }
}
