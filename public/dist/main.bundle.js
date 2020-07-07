/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/index.ts":
/*!****************************!*\
  !*** ./public/js/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var racing_1 = __webpack_require__(/*! ./racing */ "./public/js/racing/index.ts");
var racing_2 = __webpack_require__(/*! ./racing */ "./public/js/racing/index.ts");
var racing_3 = __webpack_require__(/*! ./racing */ "./public/js/racing/index.ts");
var engineAudi = new racing_3.V8();
var engineTesla = new racing_3.Electric();
console.log('Engine:engineAudi', engineAudi);
console.log('Engine:engineTesla', engineTesla);
// Track Instances
var daytona500 = new racing_1.Track();
// Car Instances
var a4 = new racing_2.Audi("Audi", "A4", engineAudi, 3000, "Firestone", daytona500);
var modelS = new racing_2.Tesla("Tesla", "ModelS", engineTesla, 4200, "Firestone", daytona500);
a4.turnOn();
modelS.turnOn();
daytona500.loadTrack([a4, modelS]);
daytona500.startRace();


/***/ }),

/***/ "./public/js/racing/cars/audi.ts":
/*!***************************************!*\
  !*** ./public/js/racing/cars/audi.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audi = void 0;
var car_1 = __webpack_require__(/*! ./car */ "./public/js/racing/cars/car.ts");
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(type, model, engine, tires, track) {
        var _this = _super.call(this, type, model, engine, tires, track) || this;
        _this.type = type;
        _this.model = model;
        _this.engine = engine;
        _this.tires = tires;
        _this.track = track;
        _this.init();
        return _this;
    }
    Audi.prototype.init = function () {
        this.getCarInfo();
    };
    return Audi;
}(car_1.Car));
exports.Audi = Audi;


/***/ }),

/***/ "./public/js/racing/cars/car.ts":
/*!**************************************!*\
  !*** ./public/js/racing/cars/car.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(type, model, engine, weight, tires, track) {
        this.type = type;
        this.model = model;
        this.engine = engine;
        this.weight = weight;
        this.tires = tires;
        this.track = track;
        this.maxSpeed = 100;
        this.horsePower = 100;
        this.acceleration = 1;
        this.torque = 1;
        this.currentSpeed = 0;
        this.carRef = null;
        this.time = 0;
        this.type = type;
        this.model = model;
        this.engine = engine;
        this.weight = weight;
        this.tires = tires;
        this.setCarRef(this.model.toLocaleLowerCase());
        // const time = this.getMinutesFromMilliseconds(track.raceTime);
        var mph = this.findQtrMileMPHxWtHP(this.weight, this.engine.getPower());
        this.time = this.findQtrMileETxWtHP(mph);
        // this.calculateSpeedVariables(time);
    }
    Car.prototype.setCarRef = function (selector) {
        // console.log(`setting carRef: ${selector}`);
        this.carRef = document.querySelector("#" + selector);
    };
    // pulled from: https://www.tciauto.com/racing-calculators
    Car.prototype.roundNumber = function (num) {
        var dec = 3;
        var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
        return result;
    };
    // pulled from: https://www.tciauto.com/racing-calculators
    Car.prototype.findQtrMileMPHxWtHP = function (weight, hp) {
        return this.roundNumber(Math.pow(hp / weight, 1 / 3) * 234);
    };
    // pulled from: https://www.tciauto.com/racing-calculators
    Car.prototype.findQtrMileETxWtHP = function (mph) {
        return this.roundNumber(1353 / mph);
    };
    Car.prototype.calculateSpeedVariables = function (time) {
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
    };
    Car.prototype.race = function () {
        var _this = this;
        console.log(this.type + " is taking off");
        var minutesPassed = 0;
        var secondsPassed = 0;
        window['race'] = window['setInterval'](function () {
            if (minutesPassed < _this.track.raceTime) {
                minutesPassed = (secondsPassed + 1) / 60;
                secondsPassed = secondsPassed + 1;
                var v1 = (secondsPassed === 0) ? 1 : secondsPassed + 1;
                if (v1 >= _this.maxSpeed)
                    v1 = _this.maxSpeed;
                var v2 = (secondsPassed === 0) ? 0 : v1 * _this.torque;
                if (v2 >= _this.maxSpeed)
                    v2 = _this.maxSpeed;
                _this.acceleration = _this.calculateAcceleration(v2, v1, secondsPassed);
                _this.currentSpeed = (_this.currentSpeed < _this.maxSpeed) ? _this.currentSpeed + _this.acceleration : _this.maxSpeed;
                console.log("the " + _this.type + " is currently acceleratig by a factor of " + _this.acceleration + " to a current speed of " + _this.currentSpeed);
            }
            else {
                console.log('Car: Race is over!!');
                window['clearInterval'](window['race']);
                return;
            }
        }, 1000);
    };
    /**
    * (v2 - v1) / time
    * @param v2 ending speed
    * @param v1: initial speed
    * @param time: seconds
    */
    Car.prototype.calculateAcceleration = function (v2, v1, time) {
        return (v2 - v1) / time;
    };
    // calculateCurrentSpeed(time:number, acceleration:number, maxSpeed:number){
    Car.prototype.calculateCurrentSpeed = function (distanceCovered, totalDistance, elapsedTime) {
        return ((totalDistance - distanceCovered) / elapsedTime);
    };
    /**
     * Returns X number of minutes
     * @param minutes
     */
    Car.prototype.getMinutesFromMilliseconds = function (minutes) {
        return ((1000 * minutes) * 10);
    };
    Car.prototype.getCarInfo = function () {
        console.log("Car of type " + this.type + " " + this.model + " with a " + this.engine.type + " engine and weighs " + this.weight + "lbs can run the quarter mile in: " + this.time + ".");
    };
    Car.prototype.turnOn = function () {
        console.log("turning on the " + this.type);
        this.engine.start();
    };
    Car.prototype.turnOff = function () {
        console.log("turning off the " + this.type);
        this.engine.stop();
    };
    return Car;
}());
exports.Car = Car;


/***/ }),

/***/ "./public/js/racing/cars/engine.ts":
/*!*****************************************!*\
  !*** ./public/js/racing/cars/engine.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electric = exports.V8 = void 0;
// -----
// TQ measured in FT/LBS
// Power measured in HP
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        console.log("the is starting a " + this.type + " engine");
    };
    Engine.prototype.stop = function () {
        console.log("turning off the " + this.type + " engine");
    };
    Engine.prototype.getPower = function () {
        return this.power;
    };
    Engine.prototype.getToqrue = function () {
        return this.torque;
    };
    return Engine;
}());
// ------
var V8 = /** @class */ (function (_super) {
    __extends(V8, _super);
    function V8() {
        var _this = _super.call(this) || this;
        _this.power = 400;
        _this.torque = 400;
        _this.type = 'V8';
        return _this;
    }
    return V8;
}(Engine));
exports.V8 = V8;
// ------
var Electric = /** @class */ (function (_super) {
    __extends(Electric, _super);
    function Electric() {
        var _this = _super.call(this) || this;
        _this.power = 400;
        _this.torque = 500;
        _this.type = 'Electric';
        return _this;
    }
    return Electric;
}(Engine));
exports.Electric = Electric;


/***/ }),

/***/ "./public/js/racing/cars/formulaone.ts":
/*!*********************************************!*\
  !*** ./public/js/racing/cars/formulaone.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaOne = void 0;
var car_1 = __webpack_require__(/*! ./car */ "./public/js/racing/cars/car.ts");
var FormulaOne = /** @class */ (function (_super) {
    __extends(FormulaOne, _super);
    function FormulaOne(type, model, engine, tires, track) {
        var _this = _super.call(this, type, model, engine, tires, track) || this;
        _this.type = type;
        _this.model = model;
        _this.engine = engine;
        _this.tires = tires;
        _this.track = track;
        _this.init();
        return _this;
    }
    FormulaOne.prototype.init = function () {
        this.getCarInfo();
    };
    return FormulaOne;
}(car_1.Car));
exports.FormulaOne = FormulaOne;


/***/ }),

/***/ "./public/js/racing/cars/index.ts":
/*!****************************************!*\
  !*** ./public/js/racing/cars/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./car */ "./public/js/racing/cars/car.ts"), exports);
__exportStar(__webpack_require__(/*! ./engine */ "./public/js/racing/cars/engine.ts"), exports);
__exportStar(__webpack_require__(/*! ./formulaone */ "./public/js/racing/cars/formulaone.ts"), exports);
__exportStar(__webpack_require__(/*! ./audi */ "./public/js/racing/cars/audi.ts"), exports);
__exportStar(__webpack_require__(/*! ./tesla */ "./public/js/racing/cars/tesla.ts"), exports);


/***/ }),

/***/ "./public/js/racing/cars/tesla.ts":
/*!****************************************!*\
  !*** ./public/js/racing/cars/tesla.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tesla = void 0;
var car_1 = __webpack_require__(/*! ./car */ "./public/js/racing/cars/car.ts");
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(type, model, engine, tires, track) {
        var _this = _super.call(this, type, model, engine, tires, track) || this;
        _this.type = type;
        _this.model = model;
        _this.engine = engine;
        _this.tires = tires;
        _this.track = track;
        _this.init();
        return _this;
    }
    Tesla.prototype.init = function () {
        this.getCarInfo();
    };
    return Tesla;
}(car_1.Car));
exports.Tesla = Tesla;


/***/ }),

/***/ "./public/js/racing/index.ts":
/*!***********************************!*\
  !*** ./public/js/racing/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Homework:
 * Alone:
 * 1. Create subclasses from the Car class
 * 2. Confirm all exports and imports work afterwards.
 * 3. Define default, common methods and attributes, that all cars should have in the parent class.
 * 4. Each car's dependencies ( engine:object, tires, ect.. ) should be injectible through the constructor.
 *      - required properties: type (car type)
 *
 * Together:
 * - We will create a velocity method to determine how fast each car goes
 * - We will start the race and race each car
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./cars */ "./public/js/racing/cars/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./track */ "./public/js/racing/track.ts"), exports);
/**
 * Questions:
 *
 * 1) What is a barrel in typescript?
 * 2) What is delegation?
 * 3) What is a subclass?
 * 4) How do you define the return type in a function signature with typescript?
 * 5) What is a parent class?
 * 6) What is a method signature?
 * 7) How do you add types to the method signature?
 * 8) What is string interpolation? How did you combine strings before that?
 */ 


/***/ }),

/***/ "./public/js/racing/track.ts":
/*!***********************************!*\
  !*** ./public/js/racing/track.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
var Track = /** @class */ (function () {
    function Track(dom) {
        this.dom = dom;
        this.cars = [];
        this.carRefs = [];
        this.raceTime = 1; //minutes
        this.totalDistance = 5280;
        this.trackWidth = 0;
        this.trackProgressUnit = 1; //How many sections to divide the track into. Bigger screen = more sections
        this.init();
    }
    Track.prototype.init = function () {
        this.dom = (typeof this.dom !== 'undefined' && this.dom !== null) ? this.dom : document;
        if (typeof this.dom === "undefined")
            return;
        var trackRef = this.dom.querySelector('#track');
        this.setTrackWidth(trackRef);
        this.setTrackProgressUnit();
    };
    Track.prototype.setTrackWidth = function (trackRef) {
        this.trackWidth = trackRef.scrollWidth;
    };
    //How big your track is / how many seconds the race is
    Track.prototype.setTrackProgressUnit = function () {
        // console.log(`trackWidth: `, this.trackWidth);
        this.trackProgressUnit = this.trackWidth / (this.raceTime * 60); //Converts racetime in minutes to seconds
    };
    Track.prototype.loadTrack = function (cars) {
        var _this = this;
        cars.forEach(function (car) {
            _this.carRefs.push(car.carRef);
            console.log(car.type + " is driving onto the track");
        });
        this.cars = cars;
    };
    Track.prototype.startRace = function () {
        var _this = this;
        console.log("start your engines!!! Vroom vroom");
        this.cars.forEach(function (car) { return car.race(); });
        var minutesPassed = 0;
        var secondsPassed = 0;
        window['track'] = window['setInterval'](function () {
            if (minutesPassed < _this.raceTime) {
                minutesPassed = (secondsPassed + 1) / 60;
                secondsPassed = secondsPassed + 1;
                // console.log('setting carRef: ', self.model);
                _this.carRefs.forEach(function (car) {
                    var tick = Math.round(_this.trackProgressUnit) * secondsPassed;
                    console.log('moving the car 1 tick of: ', tick);
                    car.dataset.distance = tick;
                });
                // console.log(`the ${this.type} is currently acceleratig by a factor of ${self.acceleration} to a current speed of ${this.currentSpeed}`);
            }
            else {
                console.log('Track:Race is over!!');
                window['clearInterval'](window['track']);
            }
            // console.log(`${minutesPassed} minute(s) passed`);
        }, 1000);
    };
    return Track;
}());
exports.Track = Track;


/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map