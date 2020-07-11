

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../mocks/dom/index.html'), 'utf8');

//Import our dependencies
const Track = require('racing/track').Track;
const Engine = require('racing/cars/engine').Engine;
const Car = require('racing/cars/car').Car;
const Audi = require('racing/cars/audi').Audi;
const Tesla = require('racing/cars/tesla').Tesla;
const FormulaOne = require('racing/cars/formulaone').FormulaOne;


describe('Car', () => {
    beforeEach(() => {
        document = document.documentElement.innerHTML = html;
    });

    it('should create a gas car ', () => {
        let car = new Car(
            'audi',
            'A4',
            new Engine('V8'),
            'goodyear',
            new Track(document)
        );

        expect(typeof car).toBe('object');
        expect(car.type).toBe('audi');
        expect(car.model).toBe('A4');
        expect(car.tires).toBe('goodyear');
        expect(typeof car.track).toBe('object');
    });
});

