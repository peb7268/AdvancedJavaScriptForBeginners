
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

describe('Audi', () => {
    beforeEach(() => {
        document = document.documentElement.innerHTML = html;
    });

    it('should create an Audi', () => {
        let car = new Car(
            "Audi",
            "a4",
            new Engine('v8'),
            "goodyear",
            new Track(document)
       );
        
        expect(car.type).toBe('Audi');
        expect(car.model).toBe('a4');
        expect(car.engine.type).toBe('v8');
        expect(typeof car).toBe('object');
    });
});