document.addEventListener('DOMContentLoaded', () => {
    const cubeEl = document.getElementById('cube');
    const pieces = [];
    let isAnimating = false;

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
                
                pieceEl.style.transform = `translate3d(${x * 62}px, ${y * 62}px, ${z * 62}px)`;

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

            const piecesToRotate = pieces.filter(p => p.pos[axis] === value);
            
            const pivot = document.createElement('div');
            pivot.className = 'pivot';
            pivot.style.transformStyle = 'preserve-3d';
            pivot.style.position = 'absolute';
            pivot.style.width = '100%';
            pivot.style.height = '100%';
            cubeEl.appendChild(pivot);

            piecesToRotate.forEach(p => pivot.appendChild(p.element));

            // Force browser reflow to apply the DOM structure before animating
            pivot.offsetHeight;

            pivot.style.transition = `transform ${speed}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
            pivot.style.transform = `rotate${axis.toUpperCase()}(${dir * 90}deg)`;

            const onEnd = () => {
                // Compute final local transforms using DOMMatrix
                const pivotMatrix = new DOMMatrix(getComputedStyle(pivot).transform);
                
                piecesToRotate.forEach(p => {
                    const pieceMatrix = new DOMMatrix(getComputedStyle(p.element).transform);
                    const finalMatrix = pivotMatrix.multiply(pieceMatrix);
                    p.element.style.transform = finalMatrix.toString();
                    cubeEl.appendChild(p.element);
                    
                    // Update logical positions based on rotation matrix
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
                    
                    // Round to avoid accumulation of floating point errors
                    p.pos.x = Math.round(p.pos.x);
                    p.pos.y = Math.round(p.pos.y);
                    p.pos.z = Math.round(p.pos.z);
                });
                
                pivot.remove();
                isAnimating = false;
                resolve();
            };

            if (speed === 0) {
                onEnd();
            } else {
                pivot.addEventListener('transitionend', onEnd, {once: true});
            }
        });
    };

    // Shuffle feature
    window.shuffleCube = async function(numMoves = 20) {
        if (isAnimating) return;
        const moves = [
            ['x', 1, 1], ['x', 1, -1], ['x', -1, 1], ['x', -1, -1],
            ['y', 1, 1], ['y', 1, -1], ['y', -1, 1], ['y', -1, -1],
            ['z', 1, 1], ['z', 1, -1], ['z', -1, 1], ['z', -1, -1],
        ];
        for (let i = 0; i < numMoves; i++) {
            const move = moves[Math.floor(Math.random() * moves.length)];
            await rotateSlice(move[0], move[1], move[2], 60);
        }
    };

    // Camera and Slice interaction
    let isDragging = false;
    let sliceDragInfo = null;
    let prevX = 0, prevY = 0;
    let rotX = -35.264, rotY = -45;

    function getFaceNormal(element) {
        if (element.classList.contains('face-right') || element.classList.contains('face-left')) return 'x';
        if (element.classList.contains('face-top') || element.classList.contains('face-bottom')) return 'y';
        if (element.classList.contains('face-front') || element.classList.contains('face-back')) return 'z';
        return null;
    }

    function startDrag(x, y, target) {
        if (target.tagName === 'BUTTON') return;
        
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
            
            if (Math.sqrt(dx * dx + dy * dy) > 10) {
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
