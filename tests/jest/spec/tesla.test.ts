

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

describe('Tesla', () => {
    beforeEach(() => {
        document = document.documentElement.innerHTML = html;
    });

    it('should create a track ', () => {
        let track = new Track(document);
        let car = new Car(
            "tesla",
            "models",
            new Engine ('electric'),
            "goodyear",
            new Track(document)
        );

        expect(car.type).toBe('tesla');
        expect(car.model).toBe('models');
        expect(car.engine.type).toBe('electric');
        expect(typeof car).toBe('object');
    });
});