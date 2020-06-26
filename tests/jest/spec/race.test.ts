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

describe('Race', () => {
    beforeEach(() => {
        document = document.documentElement.innerHTML = html;
    });
    
    it('should create an instance of each car', () => {

        let myAudi = new Car(
            "Audi",
            "A4",
            new Engine('v8'),
            "goodyear",
            new Track(document)
        );
        
        let myTesla = new Car(
            "Tesla",
            "models",
            new Engine('electric'),
            "goodyear",
            new Track(document)
        );

        let newAudi = new Audi(
            "Audi",
            "A6",
            new Engine('v8'),
            "goodyear",
            new Track(document)
        );

        let newTesla = new Tesla(
            "Tesla",
            "modelz",
            new Engine('electric'),
            "goodyear",
            new Track(document)
        );

        let thisEngine = new Engine('v8');

        let daytona500 = new Track(document);

        let myFormula = new FormulaOne(
            "FormulaOne",
            "Z360",
            new Engine('v8'),
            "goodyear",
            new Track(document)
        );
        
            // Car class Tests 
        expect(typeof newAudi).toBe('object');
        expect(newAudi.type).toBe('Audi');
        expect(newAudi.model).toBe('A6');
        expect(newAudi.engine.type).toBe('v8');

        expect(typeof myTesla).toBe('object');
        expect(myTesla.type).toBe('Tesla');
        expect(myTesla.model).toBe('models');
        expect(myTesla.engine.type).toBe('electric');

            // Engine Test 
        expect(thisEngine.type).toBe('v8');

            // Audi Test 
        expect(typeof myAudi).toBe('object');
        expect(myAudi.type).toBe('Audi');
        expect(myAudi.model).toBe('A4');
        expect(myAudi.engine.type).toBe('v8');

            // Tesla Test 
        expect(typeof newTesla).toBe('object');
        expect(newTesla.type).toBe('Tesla');
        expect(newTesla.model).toBe('modelz');
        expect(newTesla.engine.type).toBe('electric');

            // Track Test
        expect(typeof daytona500.dom).toBe('object');

            // FormulaOne Test
        expect(typeof myFormula).toBe('object');
        expect(myFormula.type).toBe('FormulaOne');
        expect(myFormula.model).toBe('Z360');
        expect(myFormula.engine.type).toBe('v8');

    }); 
});