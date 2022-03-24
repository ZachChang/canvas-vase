import { randomColor, getRandomInt } from './helper';
import { vaseTemplate, vaseBtn } from './config';

const main = () => {
// Set up our canvas
let canvas = document.getElementById('vase_canvas');
let btnCanvas = document.getElementById('btn_canvas');
btnCanvas.addEventListener('click', function() { drawVase() }, false);
canvas.width = 50;
canvas.height = window.innerHeight;
btnCanvas.width = 250;
btnCanvas.height = window.innerHeight
let ctx = canvas.getContext('2d');
let btnCtx = btnCanvas.getContext('2d');
let vaseSet = [];
const bottom = window.innerHeight/2 + 250;
let increaseX = 100;

// Animation function
const drawBtn = () => {
    const btnBottom = 120;
    btnCtx.clearRect(0, 0, btnCanvas.width, btnCanvas.height);
    let wobble = Math.sin(Date.now()/250)*window.innerHeight/50;
    
    vaseBtn.ellpise.forEach(ellpise => {
        drawEllipse({
            ctx: btnCtx,
            ...ellpise,
            y: btnBottom + ellpise.y + wobble,
            aniEllipseR: ellpise.rx
        })
    })
    drawTriangle({ ctx: btnCtx, color: vaseBtn.cube.color, wobble})
    drawCube({
        ctx: btnCtx,
        ...vaseBtn.cube,
        endY: btnBottom + vaseBtn.cube.endY + wobble,
        startY: vaseBtn.cube.maxStartY + wobble,
        maxStartY: vaseBtn.cube.maxStartY + wobble
    })
    btnCtx.fillStyle = 'black';
    btnCtx.font = "16px Georgia";
    btnCtx.fillText("Click to plant a vase!", 70, btnBottom+60);
    requestAnimationFrame(drawBtn);
}

const drawVase = () => {
    const randomTemplate = vaseTemplate[getRandomInt(3)];
    vaseSet.push({
        ...randomTemplate,
        baseX: increaseX,
        color: randomColor(),
        randomInt: getRandomInt(10)
    })
    canvas.width += 180;
    let ellPercent = 0;
    let cubePercent = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        vaseSet.forEach(vase => {
            vase.ellpise.forEach(ellpise => {
                drawEllipse({
                    ctx,
                    ...ellpise,
                    x: vase.baseX,
                    color: vase.color,
                    y: bottom + ellpise.y + vase.randomInt,
                    rx: ellpise.rx + vase.randomInt*1.5,
                    ry: ellpise.ry + vase.randomInt*1.5,
                    aniEllipseR: ellPercent,
                })
            })
            drawCube({
                ctx,
                ...vase.cube,
                color: vase.color,
                centerX: vase.baseX,
                endY: bottom + vase.cube.endY + vase.randomInt,
                topR: vase.cube.topR + vase.randomInt*1.5,
                bottomR: vase.cube.bottomR + vase.randomInt*1.5,
                maxStartY: vase.cube.maxStartY + vase.randomInt*5,
                startY: bottom + vase.cube.endY - cubePercent
            })
            const currDate = new Date()
            ctx.fillStyle = 'black';
            ctx.font = "12px Georgia";
            ctx.fillText(
                `${currDate.getMonth()}/${currDate.getDate()} - ${currDate.getHours()}:${currDate.getMinutes()}`,
                vase.baseX - 30,
                bottom + 50
            );
        })
        ellPercent ++;
        cubePercent += 5;
        if (cubePercent < 1000) {
            requestAnimationFrame(render)
        }
    }
    render()
    increaseX += (100 + getRandomInt(100)) ;
}

drawBtn()

// Draw a cube to the specified specs
function drawTriangle({ ctx, color, wobble }) {
    ctx.beginPath();
    ctx.moveTo(125, 20+wobble);
    ctx.lineTo(140, 30+wobble);
    ctx.lineTo(125, 40+wobble);
    ctx.fillStyle = color
    ctx.fill();
}

function drawCube({ ctx, centerX, startY, endY, topR, bottomR, color, maxStartY }) {
    let aniY = 0;
    if (startY > maxStartY) {
        aniY = startY;
    } else {
        aniY = maxStartY
    }
    let grd = ctx.createLinearGradient(centerX-bottomR, aniY, centerX+bottomR, aniY);
    grd.addColorStop(0, color);
    grd.addColorStop(1, 'rgba(255, 215, 191, 0.4');
    ctx.beginPath();
    ctx.moveTo(centerX - topR, aniY);
    ctx.lineTo(centerX - bottomR, endY);
    ctx.lineTo(centerX + bottomR, endY);
    ctx.lineTo(centerX + topR, aniY);
    ctx.closePath();
    ctx.fillStyle = grd;
    ctx.fill();
}
function drawEllipse ({ ctx, x, y, rx, ry, rotate, color, aniEllipseR}) {
    let grd = ctx.createRadialGradient(x-70, y, 8, x, y, 130);
    let currR = 0;
    if (aniEllipseR < rx) {
        currR = aniEllipseR
    } else {
        currR = rx
    }
    grd.addColorStop(0, color);
    grd.addColorStop(1, "white");
    ctx.beginPath();
    ctx.ellipse(x, y, currR, ry, rotate, 0, 2 * Math.PI);
    ctx.fillStyle = grd;
    ctx.fill();
  }
}

main()