
import { Track } from "./racing";

import { Audi, Tesla } from "./racing";

import { V8, Electric } from './racing'

const engineAudi = new V8();
const engineTesla = new Electric();

console.log('Engine:engineAudi', engineAudi);
console.log('Engine:engineTesla', engineTesla);

// Track Instances
const daytona500    = new Track()

// Car Instances
const a4            = new Audi("Audi", "A4", engineAudi, 3000, "Firestone", daytona500);
const modelS        = new Tesla("Tesla", "ModelS", engineTesla, 4200, "Firestone", daytona500);

a4.turnOn();
modelS.turnOn();

daytona500.loadTrack([a4, modelS]); 

daytona500.startRace();



