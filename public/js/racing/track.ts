
import { Car } from './cars';

export class Track {
    public cars: Array<Car> = [];
    public carRefs: Array<any> = [];
    public raceTime  = 1;   //minutes
    public totalDistance: number = 5280;
    public trackWidth: number = 0;
    public trackProgressUnit = 1;       //How many sections to divide the track into. Bigger screen = more sections

    constructor (
        public dom:any ) {

        this.init();
    }

    init() {

        this.dom = (typeof this.dom !== 'undefined' && this.dom !== null) ? this.dom : document;

        if ( typeof this.dom === "undefined") return;

        const trackRef:any  = this.dom.querySelector('#track');
        
        this.setTrackWidth(trackRef);
        this.setTrackProgressUnit();
    }

    setTrackWidth(trackRef:any) {

        this.trackWidth = trackRef.scrollWidth;
    }

    //How big your track is / how many seconds the race is
    setTrackProgressUnit() {

        // console.log(`trackWidth: `, this.trackWidth);
        this.trackProgressUnit = this.trackWidth / (this.raceTime * 60);  //Converts racetime in minutes to seconds
    }

    loadTrack(cars:Array<Car>) {

        cars.forEach(car => {

            this.carRefs.push(car.carRef);
            console.log(`${car.type} is driving onto the track`)
        });

        this.cars = cars;
    }

    startRace() {

        console.log(`start your engines!!! Vroom vroom`);
        this.cars.forEach(car => car.race());

        let minutesPassed = 0;
        let secondsPassed = 0;
        
        window['track'] = window['setInterval'](() => {

            if(minutesPassed < this.raceTime){

                minutesPassed = (secondsPassed + 1) / 60;
                secondsPassed = secondsPassed + 1;
                
                // console.log('setting carRef: ', self.model);
                this.carRefs.forEach( (car) => {
                    const tick = Math.round(this.trackProgressUnit) * secondsPassed;
                    console.log('moving the car 1 tick of: ', tick);
                    car.dataset.distance = tick;
                });


                // console.log(`the ${this.type} is currently acceleratig by a factor of ${self.acceleration} to a current speed of ${this.currentSpeed}`);
            } else {
                console.log('Track:Race is over!!');
                window['clearInterval'](window['track']);
            }
            
            // console.log(`${minutesPassed} minute(s) passed`);
        }, 1000);
    }

}