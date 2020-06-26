

import { Car } from './car';
import { Engine } from './engine';
import { Track } from '../track';

export class Audi extends Car {
    constructor(
        public type: string,
        public model:string,
        public engine:Engine,
        public tires: string,
        public track: Track
        
    ){
        super(type, model, engine, tires, track);
        this.init();
    }

    init(){
        this.getCarInfo();
    }   
}