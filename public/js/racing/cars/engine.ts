import { Car } from "./car";

export class Engine {
    public car: Car;

    constructor(
        public type: string
    ){}

    start() {
        console.log(`the is starting a ${this.type} engine`);
    }

    stop(){
        console.log(`turning off the ${this.type} engine`);
    }
}