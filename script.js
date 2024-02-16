const btn = document.getElementById('btn');

const positions = ['top', 'bottom', 'left', 'right'];

let prevPosition = NaN

btn.addEventListener('mousemove', function(){
    let position

    do {
        position = Math.round(Math.random()*100); 
    } while (prevPosition === position);

    prevPosition = position

    const positionIndex = Math.round(Math.random()*positions.length);
    
    const positionProperty = positions[positionIndex]
    
    btn.style[positionProperty] = `${position}%`
    
})



