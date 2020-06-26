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


const fs    = require('fs');
const path  = require('path');
const html  = fs.readFileSync(path.resolve(__dirname, '../mocks/dom/index.html'), 'utf8');

//Import our dependencies
const Track         =   require('racing/track').Track;
const Engine        =   require('racing/cars/engine').Engine;
const Car           =   require('racing/cars/car').Car;
const Audi          =   require('racing/cars/audi').Audi;
const Tesla         =   require('racing/cars/tesla').Tesla;
const FormulaOne    =   require('racing/cars/formulaone').FormulaOne;

describe('Engine', () => {
    beforeEach(() => {
        document = document.documentElement.innerHTML = html;
    });

    it('should create an engine ', () => {
        
        let engine = new Engine('v6')

        expect(typeof engine).toBe('object');
    });
});