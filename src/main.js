import { randomColor } from './color';
import { defaultVase, vaseBtn } from './config';

const main = () => {
// Set up our canvas
let canvas = document.getElementById('vase_canvas');
let btnCanvas = document.getElementById('btn_canvas');
btnCanvas.addEventListener('click', function() { console.log('yo') }, false);
canvas.width = 0;
canvas.height = window.innerHeight;
btnCanvas.width = window.innerWidth;
btnCanvas.height = window.innerHeight
let ctx = canvas.getContext('2d');
let btnCtx = btnCanvas.getContext('2d');
let vaseSet = defaultVase;
const bottom = window.innerHeight/2 + 250;

// Animation function
const drawBtn = () => {
    const btnBottom = window.innerHeight/2 - 50;
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
    btnCtx.fillText("Click to add a vase!", 70, btnBottom+60);
    requestAnimationFrame(drawBtn);
}

const drawVase = () => {
    let ellPercent = 0;
    let cubePercent = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        vaseSet.forEach(vase => {
            vase.ellpise.forEach(ellpise => {
                drawEllipse({
                    ...ellpise,
                    y: bottom + ellpise.y,
                    aniEllipseR: ellPercent
                })
            })
            drawCube({
                ...vase.cube,
                endY: bottom + vase.cube.endY,
                startY: bottom + vase.cube.endY - cubePercent
            })
        })
        ellPercent ++;
        cubePercent += 5;
        const lastCube = vaseSet[vaseSet.length-1].cube;
        const currCubeTop = bottom + lastCube.endY - cubePercent
        if (lastCube.maxStartY <  currCubeTop) {
            requestAnimationFrame(render)
        }
    }
    render()
}
drawBtn()
// drawVase()
// function drawVase(x, height){
//   // clear the canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   // drawVase the vase
//   const bottom = window.innerHeight/2 + 250;
//   const cubeTop1 = 200;
//   const cubeTop2 = 350;
//   const cubeTop3 = 230;
//   const cubeEnd = bottom+20;
//   let aniEllipseR = 0;
//   let aniCube = cubeEnd;
//   const maxEllipseR = 100;
//   const vaseX1 = x+20;
//   const vaseX2 = x+200;
//   const vaseX3 = x+400;
//   const r1 = 255;
//   const g1 = 141;
//   const b1 = 75;
//   const r2 = 221
//   const g2 = 160;
//   const b2 = 221;
//   const r3 = 30;
//   const g3 = 144;
//   const b3 = 255;
//   function render() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawEllipse(
//         vaseX1,
//         bottom,
//         100,
//         30,
//         0,
//         `rgba(${r1}, ${g1}, ${b1}, 0.9)`,
//         aniEllipseR
//       );
//       drawEllipse(
//         vaseX1,
//         bottom - height/4,
//         35,
//         70,
//         0,
//         `rgba(${r1}, ${g1}, ${b1}, 0.9)`,
//         aniEllipseR
//       );
//       drawEllipse(
//         vaseX1,
//         bottom - height/2,
//         80,
//         20,
//         0,
//         `rgba(${r1}, ${g1}, ${b1}, 0.9)`,
//         aniEllipseR
//       );
//       drawEllipse(
//         vaseX1,
//         bottom - height/2 - 100,
//         35,
//         70,
//         0,
//         `rgba(${r1}, ${g1}, ${b1}, 0.9)`,
//         aniEllipseR
//       );
//       drawCube(vaseX1, aniCube, cubeEnd, 15, 15, `rgba(${r1}, ${g1}, ${b1}, 0.6)`, cubeTop1)



//       drawEllipse(
//         vaseX2,
//         bottom,
//         120,
//         50,
//         0,
//         `rgba(${r2}, ${g2}, ${b2}, 0.9)`,
//         aniEllipseR
//       );
//       drawEllipse(
//         vaseX2,
//         bottom - height/2 + 40,
//         100,
//         70,
//         0,
//         `rgba(${r2}, ${g2}, ${b2}, 0.9)`,
//         aniEllipseR
//       );
//       drawCube(vaseX2, aniCube, cubeEnd, 30, 40, `rgba(${r2}, ${g2}, ${b2}, 0.6)`, cubeTop2)

//       setTimeout(() => {
          
//       }, 2000);

//       drawEllipse(
//         vaseX3,
//         bottom,
//         120,
//         40,
//         0,
//         `rgba(${r3}, ${g3}, ${b3}, 0.9)`,
//         aniEllipseR
//       );
//       drawEllipse(
//         vaseX3,
//         bottom - height/4,
//         50,
//         100,
//         0,
//         `rgba(${r3}, ${g3}, ${b3}, 0.9)`,
//         aniEllipseR
//       );
//       drawEllipse(
//         vaseX3,
//         bottom - height/2,
//         100,
//         40,
//         0,
//         `rgba(${r3}, ${g3}, ${b3}, 0.9)`,
//         aniEllipseR
//       );
//       drawEllipse(
//         vaseX3,
//         bottom - height/2 - 100,
//         30,
//         80,
//         0,
//         `rgba(${r3}, ${g3}, ${b3}, 0.9)`,
//         aniEllipseR
//       );
//       drawCube(vaseX3, aniCube, cubeEnd, 20, 25, `rgba(${r3}, ${g3}, ${b3}, 0.6)`, cubeTop3)



//       aniEllipseR += 1;
//       aniCube -=2;
//       if (aniEllipseR < maxEllipseR || aniCube > cubeTop1 || aniCube > cubeTop2) {
//         requestAnimationFrame(render)
//       }
//   }
//   render()
// }
// drawVase(100, 400);

// Draw a cube to the specified specs
function drawTriangle({ ctx, color, wobble }) {
    ctx.beginPath();
    ctx.moveTo(125, 270+wobble);
    ctx.lineTo(140, 280+wobble);
    ctx.lineTo(125, 290+wobble);
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