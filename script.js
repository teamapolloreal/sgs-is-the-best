let bannerMessageNum = "19"
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
    if(mode === "Dark" || mode === "Dark Themed" || mode === "Darker Dark"){
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

    // saveGameData();
    trackGameData(null, "stop")
    window.location.hash = `#`
}

function fullscreen(){
    document.getElementById("gameIframe").focus();
    if(window.location == window.parent.location){
        var elem = document.getElementById("fullscreenGame")
        if(elem.requestFullscreen){
            elem.requestFullscreen();
        } else if(elem.webkitRequestFullscreen){
            elem.webkitRequestFullscreen();
        } else if(elem.msRequestFullscreen){
            elem.msRequestFullscreen();
        }

        var iframe = document.getElementById("gameIframe")
        var fpscount = document.getElementById("FPSCount")


        elem.addEventListener("fullscreenchange", exitHandler, false)
        elem.addEventListener("mozfullscreenchange", exitHandler, false)
        elem.addEventListener("MSFullscreenChange", exitHandler, false)
        elem.addEventListener("webkitfullscreenchange", exitHandler, false)
        function exitHandler(){
            if(!document.webkitIsFullScreen && !document.MozFullScreen && !document.msFullscreenElement){
                iframe.classList = "gameIframe"
                fpscount.classList = "FPSCount"
                resizeWidth();
            } else {
                iframe.classList = "gameIframeFullscreen"
                fpscount.classList = "FPSCount FPSCountFullscreen"
            }
        }
    } else {
        // window.location = "gamepage-full.html"
    }
}

function exitFullscreen(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    } else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    } else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }
}

function windowedfullscreen (){
    var iframe = document.getElementById("gameIframe")
    iframe.classList = "gameIframeFull"
    document.body.style.overflow = "hidden"
    window.scrollTo(0, 0)
    iframe.focus()
    var fpscount = document.getElementById("FPSCount")
    fpscount.classList = "FPSCount FPSCountFull"
    document.getElementById("exitBtn").style.display = "block"
}

function exitWindowed(){
    var iframe = document.getElementById("gameIframe")
    var fpscount = document.getElementById("FPSCount")
    iframe.classList = "gameIframe"
    fpscount.classList = "FPSCount"
    document.body.style.overflow = "visible"
    document.getElementById("exitBtn").style.display = "none"
    resizeWidth();
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
    var gamebar = document.getElementById("gamebar")
    if(document.getElementById("gameIframe") !== null){
        let newHeight = `${document.querySelector("iframe").getBoundingClientRect().width / 1.778}px`
        document.getElementById("gameIframe").style.height = newHeight
        document.getElementById("iframeFocus").style.height = newHeight
        document.getElementById("playbtnoverlay").style.height = newHeight
    }
    for(let i = 0; i < container.length; i++){
      var x = window.innerWidth * 90 / 100
      var y = Math.trunc(x / 225)
      var z = x / y - 26

        container[i].style.width = `${z}px`
        // container[i].style.marginLeft = `${z}px`
        gamebar.style.width = `calc(90% + ${7 * y})`
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

    if(localStorage.getItem("bannerMessageNum") !== bannerMessageNum || localStorage.getItem("bannerMessageNum") === null){
        if(document.getElementById("bannerMessage")) document.getElementById("bannerMessage").style.display = "block"
    }

    if(window.location.pathname === "/games.html" || window.location.pathname === "/blog.html") checkHash(true);
}

// window.onbeforeunload = function() {
//     document.querySelector("html").style.backgroundColor = "var(--body-color)"
//     document.querySelector("body").style.display = "none";
// }

function hideBanner(){
    document.getElementById("bannerMessage").style.display = "none"
    localStorage.setItem("bannerMessageNum", bannerMessageNum)
}

function optionsMenu(dropdown) {
		e = document.getElementById(dropdown)
		if(e.style.display === "none" || (e.style.display !== "none" && e.style.display !== "block")){
			e.style.display = "block"
		} else {
			e.style.display = "none"
		}
	}

  const times = [];
  var updateTime = null
  var minimum = []
  var lastMin = { last: 0, num: 0 }
  let fps;

  function refreshLoop(){
      if(localStorage.getItem("FPSCount") !== "true") return;
      if(!document.getElementById("FPSCount")) return;
      document.getElementById("FPSCount").style.display = "block"
      window.requestAnimationFrame(() => {
          const now = performance.now();
          while (times.length > 0 && times[0] <= now - 1000){
              times.shift();
          }
          times.push(now);
          fps = times.length
          minimum.push(fps)
          if(updateTime === null || updateTime < Date.now()){
              if(lastMin.num === 4){
                  lastMin.last = minimum.sort((a, b) => a - b)[0]
                  lastMin.num = 0
                  minimum = []
              }
              document.getElementById("FPSCount").innerText = `${fps - 1}/${lastMin.last - 1} FPS`
              updateTime = Date.now() + 250
              lastMin.num++
          }
          refreshLoop()
      })
  }

  refreshLoop()

  function createAlertBox(info){
      if(document.getElementsByClassName("alertBox").length > 3) return;
      var color = "var(--primary-color)"
      if(info.color === "green") color = "#0ed929"
      if(info.color === "red") color = "#f6290e"
      var time = info.time || 2000

      let length = 10
      const characters = "abcdefghikjlmnopqrstuvwxyz"
      let result = ""
      for(let i = 0; i < length; i++){
          result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      if(info.id) result = info.id

      var alertBox = document.createElement("div")
      alertBox.className = "alertBox"
      alertBox.id = result
      alertBox.style.opacity = "1"
      alertBox.style.boxShadow = `0px 0px 10px ${color}`

      var text = document.createElement("span")
      text.innerText = info.text
      alertBox.appendChild(text)

      document.getElementById("alerts").appendChild(alertBox)

      if(time === "never") return;
      setTimeout(() => {
          document.getElementById(result).style.opacity = "0"
          setTimeout(() => {
              document.getElementById(result).remove()
          }, 550)
      }, time)
  }

function instantLaunch(event){
    if(!window.location.pathname === "/games.html") return;
    console.log(event)
    if(event.target.id === "container") playGame(event.target.firstChild.id);
    if(event.target.id === "title" || event.target.id === "genre") playGame(event.target.parentElement.id);
    if(event.target.id === "shadow") playGame(event.target.parentElement.id);
}

function toggleFPS(){
    if(window.location.pathname !== "/games.html") return;
    if(localStorage.getItem("FPSCount") !== "true"){
        localStorage.setItem("FPSCount", "true")
        document.getElementById("FPSCount").style.display = "block"
        refreshLoop();
        createAlertBox({ color: "green", text: "FPS Count Enabled" })
    } else {
        localStorage.setItem("FPSCount", "false")
        document.getElementById("FPSCount").style.display = "none"
        createAlertBox({ color: "red", text: "FPS Count Disabled" })
    }
}

function random_game(){
    if(!window.location.pathname === "/games.html") return; 
    clickcount = 1
    if(document.getElementById("gamepage").style.display === "none") viewGame(data[Math.floor(Math.random() * data.length)].id);
}
