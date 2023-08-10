const fs = require("fs")
const Trains = require('./mergeTwoTrains')
const trains = new Trains();
// Defining class using es6
class Vehicle {
    constructor(data) {
        this.data = data;
        this.station_after_HYDERABAD = {
            "HYB": 0, "NGP": 400, "ITJ": 700, "BPL": 800,
            "AGA": 2500, "NDL": 2700, "PTA": 3800, "NJP": 4200, "GHY": 4700
        }
        this.DeptTrain = [];
        this.deptTrain1 = [];
        this.deptTrain2 = [];
    }
    main(data) {
        var inputLines = data.toString().split("\n")
        const filteredLines = inputLines.filter(s => {
            // Replace all whitespace characters with the empty string.
            const trimmedString = s.replace(/\s+/g, '');
            // Return true if the trimmed string is not empty.
            return trimmedString.length !== 0;
        });
        for (let i = 0; i < filteredLines.length; i++) {
            if (filteredLines) {
                let input = filteredLines[i].split(' ')
                switch (input[0]) {
                    case 'TRAIN_A':
                        this.deptTrain1 = trains.printTrainA(input)
                        break;
                    case 'TRAIN_B':
                        this.deptTrain2 = trains.printTrainB(input)
                        break;
                }
            }
        }
        let startBoggie = ['DEPARTURE', 'TRAIN_AB', 'ENGINE', 'ENGINE']
        this.DeptTrain = this.deptTrain1.concat(this.deptTrain2)
        this.DeptTrain = this.DeptTrain.sort((a, b) => b.id - a.id);
        let boggieListToArray = [];
        for (let i = 0; i < this.DeptTrain.length; i++) {
            if (this.DeptTrain[i].id != 0) {
                boggieListToArray.push(this.DeptTrain[i].name)
            }
        }
        let boggies = startBoggie.concat(boggieListToArray);
        let boggie = boggies.toString()
        const search = ',';
        const replaceWith = ' ';
        let result = boggie.split(search).join(replaceWith);
        result = result.replace("HYB", "");
        console.log(result.trim())

    }
}

const filename = process.argv[2];
data = fs.readFileSync(process.argv[2]).toString();
let train1 = new Vehicle();
train1.main(data)
