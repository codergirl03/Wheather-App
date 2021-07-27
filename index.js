let h1 = document.querySelector("#country")
let span = document.querySelector("#region")
let icon = document.querySelector(".icon")
let max = document.querySelector("#max")
let min = document.querySelector("#min")
let aboutW = document.querySelector(".about_w")
let img = document.querySelector("#img")
let nameCount = document.querySelector("#nameCountry")
let wWrap = document.querySelector(".w_wrap")
let btn = document.querySelector("#btn")

nameCount.onkeyup = (event) => {
    if(event.keyCode === 13){
        weather(event.target.value)
        event.target.value = ""
    }
}
btn.onclick = () => {
    if(nameCount.value === ""){
        wWrap.innerHTML = null
    }else{
        weather(nameCount.value)
        nameCount.value =""
    }
}

async function weather(x) {
    try{
        let response  = await fetch ( `http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=f8aadafcfd32a99c0a95c1e717e1b103` , {
            method: "GET"
        })
        let data = await response.json()
        span.textContent = data.name 
        h1.textContent = data.sys.country+ "/"
        h1.appendChild(span)
        aboutW.textContent = data.weather[0].main
        max.innerHTML = "max/" + Math.floor(data.main.temp_max -273) + "<sup>o</sup>"
        min.innerHTML = "min/" + Math.floor(data.main.temp_min - 273)+ "<sup>o</sup>"
        img.setAttribute("src" , ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        return data
    }catch(error){
        console.log(error);
        h1.textContent = "not found"
    }
       
}





