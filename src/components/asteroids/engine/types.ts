export enum CanvasItemTypes {
    ASTEROIDS = "ASTEROIDS"
}

export interface ICanvasObject {
    group: string,
    delete: boolean,
    position: {
        x: number,
        y: number,
    },
    render: Function,
}

export interface IAsteroids extends ICanvasObject{
    velocity: { x: number, y: number },
    score: number,
    radius: number,
    rotation: number,
    rotationSpeed: number,
    vertices: { x: number, y: number; }[],
    create: Function,
}



