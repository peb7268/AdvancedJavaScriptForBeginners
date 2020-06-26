
import { Car, Audi, Engine, Tesla, FormulaOne, Track } from "./racing";

const engine = new Engine('V8');
const electricEngine = new Engine('electric');

//Instances
const daytona500    = new Track()
const a4            = new Audi("Audi", "A4", engine, "Firestone", daytona500);
const modelS        = new Tesla("Tesla", "ModelS", electricEngine, "Firestone", daytona500);


a4.turnOn();
modelS.turnOn();

daytona500.loadTrack([a4, modelS]); 

daytona500.startRace();



