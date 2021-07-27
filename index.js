let h1 = document.querySelector("#country")
let span = document.querySelector("#region")
let icon = document.querySelector(".icon")
let max = document.querySelector("#max")
let min = document.querySelector("#min")
let aboutW = document.querySelector(".about_w")
let img = document.querySelector("#img")
let countrySel = document.querySelector("#countrySel")
let wWrap = document.querySelector(".w_wrap")

let database = ["Uzbekistan" , "Berlin" , "Australia" , "Russian" , "Spain" , "Roma" , "Turkey"
                ,"USA", "British", "Canada", "Austria" , "China"]

countrySel.addEventListener("change" , () => {
    if(countrySel.options[countrySel.selectedIndex].value === "select"){
        wWrap.innerHTML = null
    }else{
        weather( countrySel.options[countrySel.selectedIndex].textContent)
    }
})
 
async function weather(x) {
        let response  = await fetch ( `http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=f8aadafcfd32a99c0a95c1e717e1b103` , {
            method: "GET"
        })
        let data = await response.json()
        span.textContent = data.name 
        h1.textContent = data.sys.country+ "/"
        h1.appendChild(span)
        aboutW.textContent = data.weather[0].main
        max.textContent = "max/" + Math.floor(data.main.temp_max -273)
        min.textContent = "min/" + Math.floor(data.main.temp_min - 273)
        img.setAttribute("src" , ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
}

function renderCountry(database){
    for(let i in database){
        console.log(database[i]);
        let option = document.createElement("option")
        option.textContent = database[i]
        option.value = i
        countrySel.appendChild(option)
    }
}
renderCountry(database)




