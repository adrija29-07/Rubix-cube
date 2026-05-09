document.addEventListener('DOMContentLoaded', () => {
    const cubeEl = document.getElementById('cube');
    const pieces = [];
    let isAnimating = false;

    // Timer and state
    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval = null;
    let isTimerRunning = false;
    let isScrambled = false;

    function updateTimer() {
        const totalElapsed = elapsedTime + (isTimerRunning ? (Date.now() - startTime) : 0);
        const minutes = Math.floor(totalElapsed / 60000);
        const seconds = Math.floor((totalElapsed % 60000) / 1000);
        const millis = totalElapsed % 1000;
        document.getElementById('timer').innerText = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${millis.toString().padStart(3, '0')}`;
    }

    window.startTimer = function() {
        if (!isTimerRunning) {
            startTime = Date.now();
            timerInterval = setInterval(updateTimer, 10);
            isTimerRunning = true;
        }
    };

    window.pauseTimer = function() {
        if (isTimerRunning) {
            elapsedTime += Date.now() - startTime;
            clearInterval(timerInterval);
            isTimerRunning = false;
            updateTimer();
        }
    };

    function resetTimer() {
        if (isTimerRunning) {
            clearInterval(timerInterval);
            isTimerRunning = false;
        }
        elapsedTime = 0;
        updateTimer();
    }

    const faceNormals = {
        'face-right': {x: 1, y: 0, z: 0},
        'face-left': {x: -1, y: 0, z: 0},
        'face-top': {x: 0, y: -1, z: 0},
        'face-bottom': {x: 0, y: 1, z: 0},
        'face-front': {x: 0, y: 0, z: 1},
        'face-back': {x: 0, y: 0, z: -1}
    };

    function getSolvedState() {
        const colorNormals = {};
        for (const p of pieces) {
            const matrixStr = getComputedStyle(p.element).transform;
            if (matrixStr === 'none') continue;
            const matrix = new DOMMatrix(matrixStr);
            const faces = p.element.children;
            for (let i = 0; i < faces.length; i++) {
                const face = faces[i];
                const colorClass = Array.from(face.classList).find(c => c.startsWith('color-') && c !== 'color-none');
                if (!colorClass) continue;
                
                const faceClass = Array.from(face.classList).find(c => c.startsWith('face-'));
                const initialNormal = faceNormals[faceClass];
                
                let nx = matrix.m11 * initialNormal.x + matrix.m21 * initialNormal.y + matrix.m31 * initialNormal.z;
                let ny = matrix.m12 * initialNormal.x + matrix.m22 * initialNormal.y + matrix.m32 * initialNormal.z;
                let nz = matrix.m13 * initialNormal.x + matrix.m23 * initialNormal.y + matrix.m33 * initialNormal.z;
                
                nx = Math.round(nx);
                ny = Math.round(ny);
                nz = Math.round(nz);
                
                const normalKey = `${nx},${ny},${nz}`;
                
                if (!colorNormals[colorClass]) {
                    colorNormals[colorClass] = normalKey;
                } else if (colorNormals[colorClass] !== normalKey) {
                    return false;
                }
            }
        }
        return true;
    }

    // Build the cube
    function getFaceColor(x, y, z, face) {
        if (face === 'right' && x === 1) return 'color-r';
        if (face === 'left' && x === -1) return 'color-l';
        if (face === 'top' && y === -1) return 'color-u';
        if (face === 'bottom' && y === 1) return 'color-d';
        if (face === 'front' && z === 1) return 'color-f';
        if (face === 'back' && z === -1) return 'color-b';
        return 'color-none';
    }

    const faces = ['right', 'left', 'top', 'bottom', 'front', 'back'];

    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                const pieceEl = document.createElement('div');
                pieceEl.className = 'piece';
                
                // Adjusted spacing for 80px pieces
                pieceEl.style.transform = `translate3d(${x * 82}px, ${y * 82}px, ${z * 82}px)`;

                faces.forEach(face => {
                    const faceEl = document.createElement('div');
                    faceEl.className = `face face-${face} ${getFaceColor(x, y, z, face)}`;
                    pieceEl.appendChild(faceEl);
                });

                cubeEl.appendChild(pieceEl);

                pieces.push({
                    element: pieceEl,
                    pos: {x, y, z}
                });
            }
        }
    }

    // Logic for rotating a slice
    window.rotateSlice = function(axis, value, dir, speed = 300) {
        return new Promise(resolve => {
            if (isAnimating) return resolve();
            isAnimating = true;

            if (speed !== 60 && isScrambled && !isTimerRunning) {
                window.startTimer();
            }

            const piecesToRotate = pieces.filter(p => p.pos[axis] === value);
            
            const pivot = document.createElement('div');
            pivot.className = 'pivot';
            pivot.style.transformStyle = 'preserve-3d';
            pivot.style.position = 'absolute';
            pivot.style.width = '100%';
            pivot.style.height = '100%';
            cubeEl.appendChild(pivot);

            piecesToRotate.forEach(p => pivot.appendChild(p.element));

            // Force browser reflow
            pivot.offsetHeight;

            pivot.style.transition = `transform ${speed}ms cubic-bezier(0.4, 0, 0.2, 1)`;
            pivot.style.transform = `rotate${axis.toUpperCase()}(${dir * 90}deg)`;

            const onEnd = () => {
                const pivotMatrix = new DOMMatrix(getComputedStyle(pivot).transform);
                
                piecesToRotate.forEach(p => {
                    const pieceMatrix = new DOMMatrix(getComputedStyle(p.element).transform);
                    const finalMatrix = pivotMatrix.multiply(pieceMatrix);
                    p.element.style.transform = finalMatrix.toString();
                    cubeEl.appendChild(p.element);
                    
                    let {x, y, z} = p.pos;
                    if (axis === 'x') {
                        p.pos.y = dir > 0 ? -z : z;
                        p.pos.z = dir > 0 ? y : -y;
                    } else if (axis === 'y') {
                        p.pos.x = dir > 0 ? z : -z;
                        p.pos.z = dir > 0 ? -x : x;
                    } else if (axis === 'z') {
                        p.pos.x = dir > 0 ? -y : y;
                        p.pos.y = dir > 0 ? x : -x;
                    }
                    
                    p.pos.x = Math.round(p.pos.x);
                    p.pos.y = Math.round(p.pos.y);
                    p.pos.z = Math.round(p.pos.z);
                });
                
                pivot.remove();
                isAnimating = false;
                
                if (speed !== 60 && isScrambled) {
                    if (getSolvedState()) {
                        window.pauseTimer();
                        isScrambled = false;
                        cubeEl.classList.add('solved');
                        setTimeout(() => {
                            alert(`🌟 SOLVED! 🌟\nTime: ${document.getElementById('timer').innerText}`);
                        }, 100);
                    }
                }
                
                resolve();
            };

            if (speed === 0) {
                onEnd();
            } else {
                pivot.addEventListener('transitionend', onEnd, {once: true});
            }
        });
    };

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (isAnimating) return;
        const key = e.key.toUpperCase();
        const dir = e.shiftKey ? -1 : 1;
        
        switch(key) {
            case 'R': rotateSlice('x', 1, dir); break;
            case 'L': rotateSlice('x', -1, -dir); break; // L is opposite of R
            case 'U': rotateSlice('y', -1, -dir); break; // U is opposite of D
            case 'D': rotateSlice('y', 1, dir); break;
            case 'F': rotateSlice('z', 1, dir); break;
            case 'B': rotateSlice('z', -1, -dir); break; // B is opposite of F
        }
    });

    // Shuffle feature
    window.shuffleCube = async function(numMoves = 20) {
        if (isAnimating) return;
        
        resetTimer();
        isScrambled = false;
        cubeEl.classList.remove('solved');
        
        const moves = [
            ['x', 1, 1], ['x', 1, -1], ['x', -1, 1], ['x', -1, -1],
            ['y', 1, 1], ['y', 1, -1], ['y', -1, 1], ['y', -1, -1],
            ['z', 1, 1], ['z', 1, -1], ['z', -1, 1], ['z', -1, -1],
        ];
        for (let i = 0; i < numMoves; i++) {
            const move = moves[Math.floor(Math.random() * moves.length)];
            await rotateSlice(move[0], move[1], move[2], 60);
        }
        
        isScrambled = true;
    };

    // Camera and Slice interaction
    let isDragging = false;
    let sliceDragInfo = null;
    let prevX = 0, prevY = 0;
    let rotX = -25, rotY = -45; // Slightly flatter starting angle

    cubeEl.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    function getFaceNormal(element) {
        if (element.classList.contains('face-right') || element.classList.contains('face-left')) return 'x';
        if (element.classList.contains('face-top') || element.classList.contains('face-bottom')) return 'y';
        if (element.classList.contains('face-front') || element.classList.contains('face-back')) return 'z';
        return null;
    }

    function startDrag(x, y, target) {
        if (target.tagName === 'BUTTON' || target.closest('button')) return;
        
        if (target.classList.contains('face')) {
            const pieceEl = target.parentElement;
            const pieceData = pieces.find(p => p.element === pieceEl);
            const normal = getFaceNormal(target);
            if (pieceData && normal) {
                sliceDragInfo = {
                    startX: x,
                    startY: y,
                    piece: pieceData,
                    faceNormal: normal
                };
            }
        }
        
        isDragging = true;
        prevX = x;
        prevY = y;
    }

    function moveDrag(x, y) {
        if (!isDragging) return;
        
        if (sliceDragInfo && !isAnimating) {
            const dx = x - sliceDragInfo.startX;
            const dy = y - sliceDragInfo.startY;
            
            if (Math.sqrt(dx * dx + dy * dy) > 20) { // Increased threshold for stability
                const N = sliceDragInfo.faceNormal;
                const P = sliceDragInfo.piece.pos;
                
                const possibleRotations = [];
                ['x', 'y', 'z'].forEach(axis => {
                    if (axis !== N) {
                        possibleRotations.push({axis, dir: 1});
                        possibleRotations.push({axis, dir: -1});
                    }
                });
                
                const matrixStr = getComputedStyle(cubeEl).transform;
                const matrix = new DOMMatrix(matrixStr !== 'none' ? matrixStr : undefined);
                
                let bestRot = null;
                let maxDot = -Infinity;
                
                possibleRotations.forEach(rot => {
                    let v3d = {x: 0, y: 0, z: 0};
                    if (rot.axis === 'x') {
                        v3d.y = -P.z * rot.dir;
                        v3d.z = P.y * rot.dir;
                    } else if (rot.axis === 'y') {
                        v3d.x = P.z * rot.dir;
                        v3d.z = -P.x * rot.dir;
                    } else if (rot.axis === 'z') {
                        v3d.x = -P.y * rot.dir;
                        v3d.y = P.x * rot.dir;
                    }
                    
                    const vx_screen = matrix.m11 * v3d.x + matrix.m21 * v3d.y + matrix.m31 * v3d.z;
                    const vy_screen = matrix.m12 * v3d.x + matrix.m22 * v3d.y + matrix.m32 * v3d.z;
                    
                    const dot = vx_screen * dx + vy_screen * dy;
                    
                    if (dot > maxDot) {
                        maxDot = dot;
                        bestRot = rot;
                    }
                });
                
                if (bestRot) {
                    rotateSlice(bestRot.axis, P[bestRot.axis], bestRot.dir, 300);
                    isDragging = false;
                    sliceDragInfo = null;
                }
            }
        } else if (!sliceDragInfo) {
            const dx = x - prevX;
            const dy = y - prevY;
            
            rotY += dx * 0.5;
            rotX -= dy * 0.5;
            
            cubeEl.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
            
            prevX = x;
            prevY = y;
        }
    }

    function endDrag() {
        isDragging = false;
        sliceDragInfo = null;
    }

    document.addEventListener('mousedown', (e) => startDrag(e.clientX, e.clientY, e.target));
    document.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY));
    document.addEventListener('mouseup', endDrag);
    
    document.addEventListener('touchstart', (e) => startDrag(e.touches[0].clientX, e.touches[0].clientY, e.target), {passive: false});
    document.addEventListener('touchmove', (e) => {
        if (isDragging) e.preventDefault();
        moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, {passive: false});
    document.addEventListener('touchend', endDrag);
});
