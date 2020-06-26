
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

describe('Track', () => {
    beforeEach(() => {
        document = document.documentElement.innerHTML = html;
    });

    it('should create a track ', () => {
        let track = new Track(document);
        expect(typeof track).toBe('object');
    });
});


const fs    = require('fs');
const path  = require('path');
const html  = fs.readFileSync(path.resolve(__dirname, '../mocks/dom/index.html'), 'utf8');

//Import our dependencies
const Track         =   require('racing/track').Track;
const Engine        =   require('racing/cars/engine');
const Car           =   require('racing/cars/car');
const Audi          =   require('racing/cars/audi');
const Tesla         =   require('racing/cars/tesla');
const FormulaOne    =   require('racing/cars/formulaone');

describe('Track', () => {
    beforeEach(() => {
        document = document.documentElement.innerHTML = html;
    });

    it('should create a track ', () => {
       let track = new Track(
           document
       )
    });
});
