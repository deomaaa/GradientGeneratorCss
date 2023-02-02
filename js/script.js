function generateGradient(){
    let gradiantType = '';
    for(let but of document.querySelectorAll('.type_button')){
        if(but.classList.contains('selected')){
            gradiantType = but.textContent
        }
    }
    
    let colorStart = document.querySelector('.color_start').value
    let red1 = parseInt(colorStart.slice(1,3), 16)
    let green1 = parseInt(colorStart.slice(3,5), 16)
    let blue1 = parseInt(colorStart.slice(5,7), 16)
    
    let colorEnd = document.querySelector('.color_end').value
    let red2 = parseInt(colorEnd.slice(1,3), 16)
    let green2 = parseInt(colorEnd.slice(3,5), 16)
    let blue2 = parseInt(colorEnd.slice(5,7), 16)

    let opacity = document.querySelector('.opacity').value

    let deg = document.querySelector('.deg').value

    let str;
    if(gradiantType == "linear"){
        str = `${gradiantType}-gradient(${deg}deg, rgba(${red1},${green1},${blue1},${opacity}), rgba(${red2}, ${green2}, ${blue2}, ${opacity}))`
    } else {
        str = `${gradiantType}-gradient(rgba(${red1},${green1},${blue1},${opacity}), rgba(${red2}, ${green2}, ${blue2}, ${opacity}))`
    }

    cssCode.value = "background: " + str + ';'

    let result = document.querySelector('.gradientBlock__inner')
    result.style.background = str
    console.log(document.querySelector('.gradientBlock__inner'))
}

for(let but of document.querySelectorAll('.type_button')){
    but.onclick = function(e){
        if(e.target.classList.contains('selected')){
            return
        } else {
            document.querySelector('.selected').classList.remove('selected')
            e.target.classList.add('selected')
        }
    }
}

for(let elem of document.querySelectorAll('input')){
    elem.addEventListener("input", generateGradient)
}

document.querySelector('.buttonCopy__css').onclick = function(e){
    let copyCSS = document.getElementById('cssCode')

    navigator.clipboard.writeText(copyCSS.value)
    .then(() => {
    })
    .catch(err => {
    console.log('Something went wrong', err);
    });
}

generateGradient()
