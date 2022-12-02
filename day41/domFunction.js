const togleElmt = (domElmt) => {
    if(domElmt.style.display === 'none'){
        domElmt.style.display = 'block'
    }else{
        domElmt.style.display = 'none'
    }
}

const changeText = (domElmt, text) => {
    domElmt.innerHTML = text;
}

const colorTogle = (domElmt) =>{
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    domElmt.style.color = `rgb(${r}, ${g}, ${b})`
}

export {togleElmt, changeText, colorTogle};