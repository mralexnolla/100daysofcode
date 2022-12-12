const changeColor = () => {
    let newColor = '';
    let newFont = '';
    let x = Math.floor(Math.random()*7);
    

    switch(x){
        case 0:
            newColor = 'blue';
            newFont = 'Bradley Hand';
            break
        case 1:
            newColor = 'green';
            newFont = 'Brush Script MT';
            break
        case 2:
            newColor = 'red';
            newFont = 'Comic Sans MS';
            break
        case 3:
            newColor = 'yellow';
            newFont = 'Chalkduster';
            break
        case 4:
            newColor = 'orange';
            newFont = 'Jazz LET';
            break
        case 5:
            newColor = 'pink';
            newFont = 'Trattatello';
            break
        case 6:
            newColor = 'violet';
            newFont = 'Copperplate';
            break
        case 7:
            newColor = 'brown';
            newFont = 'papyrus';
            break

    }

    let elemt = document.getElementById('logo');
    elemt.style.color = newColor;
    elemt.style.fontFamily = newFont;
}