
function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback) {
        if (!callback) return;
        let direction = null;
        let x = left;
        let y = bottom;
        element.style.bottom = y + 'px'
        element.style.left = x + 'px'
    
        setInterval(function() {
                move(character).to(100, 250)
                if(y < 250){
                    character.style.zIndex = 1;
                }
                if(y > 250){
                    character.style.zIndex = 0;
                }

                if(direction === 'west' && x > 0) {
                    x -= 1
                }
                if(direction === 'north' && y + 75 < window.innerHeight) {
                    y += 1
                }
                if(direction === 'east' && x + 50 < window.innerWidth) {
                    x += 1
                }
                if(direction === 'south' && y - 100 > 0) {
                    y -= 1
                }
                element.style.bottom = y + 'px'
                element.style.left = x + 'px'
            }
        , 1)
        
        document.addEventListener('keydown', function(e) {
            if(e.repeat) return;
        
            if(e.key === 'ArrowUp') {
                direction = 'north'
            }
            if(e.key === 'ArrowLeft') {
                direction = 'west'
            }
            if(e.key === 'ArrowRight') {
                direction = 'east'
            }
            if(e.key === 'ArrowDown') {
                direction = 'south'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}
