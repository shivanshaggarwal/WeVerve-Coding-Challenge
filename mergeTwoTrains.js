module.exports = class Trains {
    constructor(data) {
      this.data = data;
     this.station_after_HYDERABAD = {"HYB": 0, "NGP": 400, "ITJ": 700, "BPL": 800,
                         "AGA": 2500, "NDL": 2700, "PTA": 3800, "NJP": 4200, "GHY": 4700}
     this.DeptTrain =[];
    }
    
    printTrainA(input){
        let arr=[];
        let temp=[];
        let arrA = ['ARRIVAL' ,'TRAIN_A' ,'ENGINE']
        for(let i=2;i<input.length;i++){
            if(this.station_after_HYDERABAD.hasOwnProperty(input[i].trim())){
                arr.push(input[i]);
                let trainObj = new Object();
                trainObj ={name:input[i].trim(),
                 id:this.station_after_HYDERABAD[input[i].trim()]
                }
                
                temp.push(trainObj);
            }
        }
        let boggieList = arrA.concat(arr); 
        let boggie = boggieList.toString() 
        const search = ',';
        const replaceWith = ' ';
        const result = boggie.split(search).join(replaceWith);
        console.log(result.trim())
        return temp;
    }
    printTrainB(input){
        let arr=[];
        let temp=[];
        let arrA = ['ARRIVAL','TRAIN_B' ,'ENGINE']
        for(let i=2;i<input.length;i++){
            if(this.station_after_HYDERABAD.hasOwnProperty(input[i].trim())){
                arr.push(input[i]);
                let trainObj = new Object();
                trainObj ={name:input[i].trim(),
                    id:this.station_after_HYDERABAD[input[i].trim()]
                   }
                   temp.push(trainObj);
            }
        }
        let boggies = arrA.concat(arr); 
        let boggie = boggies.toString() 
        const search = ',';
        const replaceWith = ' ';
        const result = boggie.split(search).join(replaceWith);
        console.log(result.trim())
        return temp;
    }
  }