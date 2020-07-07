import { Car } from "./car";

// -----
export interface IEngine {
    car: Car;
    power: number;
    torque: number;
    type: string;

    start(): void;
    stop(): void;
    getPower(): number;
    getTorque(): number;
}

// -----
// TQ measured in FT/LBS
// Power measured in HP
class Engine {
    public car: Car;
    public power: number;
    public torque: number;
    public type: string;

    public start() {
        console.log(`the is starting a ${this.type} engine`);
    }

    public stop() {
        console.log(`turning off the ${this.type} engine`);
    }

    public getPower() {
        return this.power;
    }

    public getToqrue() {
        return this.torque;
    }

}

// ------
export class V8 extends Engine { 

    constructor() {
        super();
        this.power = 400;
        this.torque = 400;
        this.type = 'V8';
    }

}

// ------
export class Electric extends Engine { 

    constructor() {
        super();
        this.power = 400;
        this.torque = 500;
        this.type = 'Electric';
    }

}