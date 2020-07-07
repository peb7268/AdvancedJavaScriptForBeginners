import { Car } from "./car";


export class FormulaOne extends Car {

    constructor(
        public type:string,
        public model:string,
        public engine:Engine,
        public tires:string,
        public track:Track ) {

        super(type, model, engine, tires, track);
        this.init();
    }

    init() {

        this.getCarInfo();
    }   

}
