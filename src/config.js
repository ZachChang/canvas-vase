export const vaseTemplate = [
    {
        baseX: 0,
        ellpise: [
            { y: 0, rx: 100, ry: 30, rotate: 0 },
            { y: -100, rx: 35, ry: 70, rotate: 0 },
            { y: -200, rx: 80, ry: 20, rotate: 0 },
            { y: -300, rx: 35, ry: 70, rotate: 0 }
        ],
        cube: { endY: 20, topR: 15, bottomR: 15, maxStartY: 200 }
    },
    {
        baseX: 0,
        ellpise: [
            { y: 0, rx: 120, ry: 50, rotate: 0 },
            { y: -140, rx: 100, ry: 70, rotate: 0 },
        ],
        cube: { endY: 20, topR: 40, bottomR: 50, maxStartY: 420 }
    },
    {
        baseX: 0,
        ellpise: [
            { y: 0, rx: 120, ry: 40, rotate: 0 },
            { y: -100, rx: 50, ry: 100, rotate: 0 },
            { y: -200, rx: 100, ry: 40, rotate: 0 },
            { y: -300, rx: 50, ry: 80, rotate: 0 }
        ],
        cube: { endY: 20, topR: 20, bottomR: 25, maxStartY: 230 }
    }
]

export const vaseBtn = {
    ellpise: [
        { x: 120, y: 5, rx: 35, ry: 25, rotate: 0, color: 'rgba(255, 141, 75, 0.9)' },
        { x: 120, y: -50, rx: 35, ry: 28, rotate: 0, color: 'rgba(255, 141, 75, 0.9)' },
    ],
    cube: { centerX: 120, endY: 20, topR: 10, bottomR: 10, color: 'rgba(255, 141, 75, 0.6)', maxStartY: 20 }
}
