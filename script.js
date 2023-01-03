let bannerMessageNum = "11"
const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle"),
        //searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

        body.style.display = "block"

        // startup
        let mode = localStorage.getItem("mode")
        if(mode === null){
            mode === "Dark"
            localStorage.setItem("mode", "Dark")

            body.classList.toggle("dark");

            // if(body.classList.contains("dark")){
            //     modeText.innerText = "Light mode";
            // }else{
            //     modeText.innerText = "Dark mode";
            // }
        } else {
            if(mode === "Dark" || mode === "Dark Themed"){
                body.classList.toggle("dark");

                // if(body.classList.contains("dark")){
                //     modeText.innerText = "Light mode";
                // }else{
                //     modeText.innerText = "Dark mode";
                // }
            }
        }

        toggle.addEventListener("click" , () =>{
            sidebar.classList.toggle("close");

            if(sidebar.classList.value !== "sidebar close"){
                document.getElementById("linkOptions").style.transform = "translate(240px, 0px)"
            } else {
                document.getElementById("linkOptions").style.transform = "translate(75px, 0px)"
            }
        })

        if(localStorage.getItem("openSidebar") === "true"){
            sidebar.classList.toggle("close")
            document.getElementById("linkOptions").style.transform = "translate(240px, -75px)"
        }


        // searchBtn.addEventListener("click" , () =>{
        //     sidebar.classList.remove("close");
        // })

        // modeSwitch.addEventListener("click" , () =>{
        //     body.classList.toggle("dark");

        //     if(body.classList.contains("dark")){
        //         modeText.innerText = "Light mode";
        //         localStorage.setItem("mode", "dark")
        //     }else{
        //         modeText.innerText = "Dark mode";
        //         localStorage.setItem("mode", "light")
        //     }
        // });


function gamepage(){
    document.getElementById("gameViewFullscreen").style.display = "none"
    document.getElementById("gamepage").style.display = "none"
    document.getElementById("mainpage").style.display = "block"
    document.getElementById("gameIframe").src = ""
    document.body.style.overflow = "visible"
    document.getElementById("importantMessage").style.display = "none"

    if(localStorage.getItem("openSidebar") === "true" && body.querySelector('nav').classList.value === "sidebar close") body.querySelector('nav').classList.toggle("close")

    saveGameData();
}

function fullscreen(){
    document.getElementById("gameIframe").focus();
    if(window.location == window.parent.location){
        var elem = document.getElementById("gameIframe")
        if(elem.requestFullscreen){
            elem.requestFullscreen();
        } else if(elem.webkitRequestFullscreen){
            elem.webkitRequestFullscreen();
        } else if(elem.msRequestFullscreen){
            elem.requestFullscreen();
        }
    } else {
        window.location = "gamepage-full.html"
    }
}

setTimeout(() => {
    document.getElementById("loadingMessage").style.opacity = 1
}, 2000)

function resizeWidth(){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width

    if(width < 1242){ document.getElementById("horLogoText").style.display = "none" } else { document.getElementById("horLogoText").style.display = "block" }
    //Other
    var container = document.getElementsByClassName("container")
    var soundboard = document.getElementsByClassName("soundboard")
    if(document.getElementById("gameIframe") !== null){
        let newHeight = `${document.querySelector("iframe").getBoundingClientRect().width / 1.778}px`
        document.getElementById("gameIframe").style.height = newHeight
        document.getElementById("iframeFocus").style.height = newHeight
    }
    for(let i = 0; i < container.length; i++){
        var x = window.innerWidth * 90 / 100
        var y = Math.trunc(x / 225)
        var z = x / y - 26

        container[i].style.width = `${z}px`
        document.getElementById("randomSelector").style.width = `${z}px`
    }
    for(let i = 0; i < soundboard.length; i++){
        var x = window.innerWidth * 90 / 100
        var y = Math.trunc(x / 350)
        var z = x / y - 39
        soundboard[i].style.width = `${z}px`
    }

    if(document.getElementsByClassName("homeSection0").length !== 0){
        var section = document.querySelector(".homeSection0")
        var textBox = document.querySelector(".homeTextBox")
        var img = document.querySelector(".homeSectionImg")

        textBox.style.top = `${(section.offsetHeight - textBox.offsetHeight) / 2}px`
        img.style.top = `${(section.offsetHeight - img.offsetHeight) / 2}px`
    }
}

window.addEventListener("resize", function(){ resizeWidth(); })

window.onload = (event) => {
    resizeWidth();

    document.getElementById("loader-wrapper").style.opacity = 0;
    document.body.style.overflow = "visible";
    setTimeout(() => {
        document.getElementById("loader-wrapper").style.display = "none";
    }, 250)

    if(localStorage.getItem("bannerMessageNum") && localStorage.getItem("bannerMessageNum") !== bannerMessageNum || localStorage.getItem("bannerMessageNum") === null) document.getElementById("bannerMessage").style.display = "block"
}

window.onbeforeunload = function() {
    document.querySelector("html").style.backgroundColor = "#18191a"
    document.querySelector("body").style.display = "none";
}

function hideBanner(){
    document.getElementById("bannerMessage").style.display = "none"
    localStorage.setItem("bannerMessageNum", bannerMessageNum)
}

// loadAccountData()
// function loadAccountData(){
//         var hash = window.location.hash.slice(1)
//         var decode = atob(hash)
//         var values = decode.split("_")
//         if(values[0] === "login"){
//         if(parseInt(values[1]) + 20000 < Date.now()) return;
//         localStorage.setItem("loggedIn", true)
//         localStorage.setItem("lastLoggedIn", Date.now())
//         localStorage.setItem("username", values[2])
//         localStorage.setItem("id", values[3])
//
//         document.getElementById("loggedIn").style.display = "block"
//         document.getElementById("notLoggedIn").style.display = "none"
//     }
// }
//
// function getGameData(){
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "/gameData", true);
//     xhr.send(JSON.stringify({
//         value: "helo"
//     }))
//
//     xhr.onreadystatechange = function(){
//         if(this.readyState != 4) return;
//
//         if(this.status == 200){
//             var data = JSON.parse(this.responseText);
//
//             console.log(data)
//         }
//     }
// }
//
// getAccountData()
// function getAccountData(){
//     var xhr = new XMLHttpRequest();
//
//     xhr.onreadystatechange = function(){
//         if(this.readyState != 4) return;
//
//         if(this.status == 201){
//             var data = JSON.parse(this.responseText);
//
//             console.log(data)
//         }
//     }
//
//     xhr.open("GET", "/login", true)
//     xhr.send();
// }
//
// function // saveSiteData(){
//     var values = [],
//     keys = Object.keys(localStorage),
//     i = 0, keys;
//
//     for(; key = keys[i]; i++){
//         values.push({key: key, data: localStorage.getItem(key)});
//     }
//
//     console.log(values)
//
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "/// saveSiteData", true);
//     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
//     xhr.send(JSON.stringify(values))
//     // xhr.send(JSON.stringify({ text: "hello" }))
//
//     xhr.onreadystatechange = function(){
//         if(this.readyState != 4) return;
//
//         if(this.status == 205){
//             // var data = JSON.parse(this.responseText);
//             console.log(this.responseText)
//             document.getElementById("overlays").style.display = "block"
//             setTimeout(() => { document.getElementById("savedOverlay").style.opacity = 100 }, 500)
//
//             setTimeout(() => { document.getElementById("savedOverlay").style.opacity = 0 }, 5500)
//             setTimeout(() => { document.getElementById("overlays").style.display = "none" }, 6000)
//             return;
//         } else {
//             console.log(`error saving site settings`)
//         }
//     }
// }
//
// setInterval(() => {
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "/saveStats", true);
//     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
//     xhr.send(JSON.stringify({ "gamesPlayed": "90" }))
//     // xhr.send(JSON.stringify({ text: "hello" }))
//
//     xhr.onreadystatechange = function(){
//         if(this.readyState != 4) return;
//
//         if(this.status == 205){
//             // var data = JSON.parse(this.responseText);
//             count++
//             console.log(this.responseText)
//             saveData();
//         } else {
//             console.log(`error saving ${values[count].key}`)
//             count++
//             saveData();
//         }
//     }
// }, 60000)
//
// function setFormMessage(formElement, type, message) {
//     const messageElement = formElement.querySelector(".form__message");
//
//     messageElement.textContent = message;
//     messageElement.classList.remove("form__message--success", "form__message--error");
//     messageElement.classList.add(`form__message--${type}`);
// }
//
// function setInputError(inputElement, message) {
//     inputElement.classList.add("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
// }
//
// function clearInputError(inputElement) {
//     inputElement.classList.remove("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
// }
//
// document.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.querySelector("#login");
//     const createAccountForm = document.querySelector("#createAccount");
//
//     document.querySelector("#linkCreateAccount").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.add("form--hidden");
//         createAccountForm.classList.remove("form--hidden");
//     });
//
//     document.querySelector("#linkLogin").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.remove("form--hidden");
//         createAccountForm.classList.add("form--hidden");
//     });
//
//     // loginForm.addEventListener("submit", e => {
//     //     e.preventDefault();
//
//     //     // Perform your AJAX/Fetch login
//
//     //     // setFormMessage(loginForm, "error", "Invalid username/password combination");
//     // });
//
//     document.querySelectorAll(".form__input").forEach(inputElement => {
//         inputElement.addEventListener("blur", e => {
//             if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
//                 setInputError(inputElement, "Username must be at least 10 characters in length");
//             }
//         });
//
//         inputElement.addEventListener("input", e => {
//             clearInputError(inputElement);
//         });
//     });
// });
//
// function toggleLoginPage(){
//     let page = document.getElementById("loginPage")
//     if(page.style.display === "block"){
//         page.style.display = "none"
//         document.body.style.overflow = "visible"
//         var newlink = document.createElement("link").herf = "#hello"
//         document.getElementsByTagName("head")[0].appendChild(newlink)
//     } else {
//         page.style.display = "block"
//         page.style.position = "fixed"
//         document.body.style.overflow = "hidden"
//         var newlink = document.createElement("link").herf = "#login"
//         document.getElementsByTagName("head")[0].appendChild(newlink)
//     }
// }
//
// function toggleLoginSidebar(){
//     if(document.getElementById("loggedIn").style.display === "block"){
//         document.getElementById("notLoggedIn").style.display = "block"
//         document.getElementById("loggedIn").style.display = "none"
//     } else {
//         document.getElementById("notLoggedIn").style.display = "none"
//         document.getElementById("loggedIn").style.display = "block"
//     }
// }

function optionsMenu(dropdown) {
		e = document.getElementById(dropdown)
		if(e.style.display === "none" || (e.style.display !== "none" && e.style.display !== "block")){
			e.style.display = "block"
		} else {
			e.style.display = "none"
		}
	}
