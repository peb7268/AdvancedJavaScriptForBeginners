
import { Engine } from "./engine";
import { Track } from "../track";



export class Car {
    public maxSpeed = 100;
    public horsePower = 100;
    public acceleration = 1;
    public torque = 1;
    public currentSpeed: number = 0;
    public carRef: any;

    constructor(
        public type: string,
        public model: string,
        public engine: Engine,
        public tires: string,
        public track: Track
    ) {
        this.type = type;
        this.model = model;
        this.engine = engine;
        this.tires = tires;

        const time = this.getMinutesFromMilliseconds(track.raceTime);
        this.calculateSpeedVariables(time);
        this.setCarRef(this.model.toLocaleLowerCase());
    }

    setCarRef(selector: string) {
        // console.log(`setting carRef: ${selector}`);
        this.carRef = document.querySelector(`#${selector}`);
    }

    calculateSpeedVariables(time: number) {
        switch (this.engine.type) {
            case "V6":
                this.maxSpeed = 165;
                this.torque = 1.4;
                break;
            case "V8":
                this.maxSpeed = 198;
                this.torque = 2;
                break;
            case "electric":
                this.maxSpeed = 155;
                this.torque = 3.5;
                break;
        }
    }

    race() {
        console.log(`${this.type} is taking off`);
        let minutesPassed = 0;
        let secondsPassed = 0;

        window['race'] = window['setInterval'](() => {
            if (minutesPassed < this.track.raceTime) {
                minutesPassed = (secondsPassed + 1) / 60;
                secondsPassed = secondsPassed + 1;

                let v1 = (secondsPassed === 0) ? 1 : secondsPassed + 1;
                if (v1 >= this.maxSpeed) v1 = this.maxSpeed;

                let v2 = (secondsPassed === 0) ? 0 : v1 * this.torque;
                if (v2 >= this.maxSpeed) v2 = this.maxSpeed;

                this.acceleration = this.calculateAcceleration(v2, v1, secondsPassed);
                this.currentSpeed = (this.currentSpeed < this.maxSpeed) ? this.currentSpeed + this.acceleration : this.maxSpeed;

                console.log(`the ${this.type} is currently acceleratig by a factor of ${this.acceleration} to a current speed of ${this.currentSpeed}`);
            } else {
                console.log('Car: Race is over!!');
                window['clearInterval'](window['race']);
                return;
            }
        }, 1000);
    }

    /**
    * (v2 - v1) / time
    * @param v2 ending speed
    * @param v1: initial speed
    * @param time: seconds 
    */
    calculateAcceleration(v2: number, v1: number, time: number) {
        return (v2 - v1) / time;
    }

    // calculateCurrentSpeed(time:number, acceleration:number, maxSpeed:number){
    calculateCurrentSpeed(distanceCovered: number, totalDistance: number, elapsedTime: number) {
        return ((totalDistance - distanceCovered) / elapsedTime);
    }

    /**
     * Returns X number of minutes
     * @param minutes 
     */
    getMinutesFromMilliseconds(minutes: number) {
        return ((1000 * minutes) * 10);
    }

    getCarInfo() {
        console.log(`car of type ${this.type} ${this.model} with a ${this.engine.type} engine and ${this.tires} tires and a max speed of ${this.maxSpeed}.`);
    }

    turnOn() {
        console.log(`turning on the ${this.type}`);
        this.engine.start();
    }

    turnOff() {
        console.log(`turning off the ${this.type}`);
        this.engine.stop();
    }
}