const { Console } = require('console');
const csv = require('csv-parser');
const fs = require('fs');

let result = [];
let lineNumber = 0;
let logNextLine = false;
let previousSqlNo = '';

const allFileContents = fs.readFileSync('log.log', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
    //console.log(line);
    lineNumber++;

    if (logNextLine){
        previousSqlNo = line;
        const obj = {'lineNumber': lineNumber, 'type': 'soqlCount', 'info' : line, 'previousSoqlCount': previousSqlNo};
        result.push(obj);
    }

    if (line.includes('|LIMIT_USAGE_FOR_NS|(default)|')) {
        logNextLine = true;
    } else if (line.includes('CODE_UNIT_STARTED')) {
        logNextLine = false;
        const obj = {'lineNumber': lineNumber, 'type': 'Started', 'info' : line, 'previousSoqlCount': previousSqlNo};
        result.push(obj);
    }else if (line.includes('CODE_UNIT_FINISHED')) {
        logNextLine = false;
        const obj = {'lineNumber': lineNumber, 'type': 'Finished', 'info' : line, 'previousSoqlCount': previousSqlNo};
        result.push(obj);
    }else if (line.includes('SOQL_EXECUTE_BEGIN')) {
        logNextLine = false;
        const obj = {'lineNumber': lineNumber, 'type': 'ListSoql', 'info' : line, 'previousSoqlCount': previousSqlNo};
        result.push(obj);
    }else if (line.includes('FLOW_CREATE_INTERVIEW_END')) {
        logNextLine = false;
        const obj = {'lineNumber': lineNumber, 'type': 'FlowCreateEnd', 'info' : line, 'previousSoqlCount': previousSqlNo};
        result.push(obj);
    }else {
        logNextLine = false;
    }
    
});


let csvContent ="lineNumber,type,what,when,beforeSoqlCount,afterSoqlCount,numberSoqlCount";
const cleanUpResult = [];

for (let i = 0; i < result.length; i++){
    const rowArray = result[i];
    if (rowArray.type === 'Started' || rowArray.type === 'Finished' || rowArray.type === 'FlowCreateEnd'){
        let info = rowArray.info.split('|')[4];
        let what = '';
        let when = '';
        if(rowArray.type === 'FlowCreateEnd') {
            info = 'FlowCreateEnd';
            what = rowArray.info.split('|')[3];
            when = 'created';
        }else if (info === undefined) {
            if(rowArray.info.split('|').length === 4) {
                info = rowArray.info.split('|')[2];
                what = info.split(' ')[0];    
                when = info.split(' ')[5];   
            } else {
                info = rowArray.info.split('|')[rowArray.info.split('|').length-1];
                what = info;
                when = '';
            }
        }else {
            what = info.split(' ')[0];    
            when = info.split(' ')[5];        
        }
        if (when === undefined){
            when = '';
        }
        console.log('test');
        console.log(rowArray.previousSoqlCount);
        console.log('test');
        if (rowArray.previousSoqlCount !== ''){
            const beforeSoqlCount = rowArray.previousSoqlCount.split(':')[1].trimStart().split(' ')[0] * 1;    
            cleanUpResult.push({
                'lineNumber':rowArray.lineNumber,
                'type':rowArray.type,
                'what':what,
                'when':when,
                'beforeSoqlCount':beforeSoqlCount
            });
        }
        
        //csvContent += "\r\n" + rowArray.lineNumber + ',' + rowArray.type + ',' + what + ',' + when + ',' + beforeSoqlCount+ ',' + afterSoqlCount+ ',' + numberSoqlCount;
    }
}
console.log(cleanUpResult);

for(let i=0; i<cleanUpResult.length; i++){
    const rowArray = cleanUpResult[i];
    console.log(rowArray)
    const beforeSoqlCount = rowArray.beforeSoqlCount * 1;
    let afterSoqlCount = 0;
    let numberSoqlCount = 0;
    if ((i+2) < cleanUpResult.length){
        console.log('i + 1 ' + (i+1));
        console.log('cleanUpResult[(i+1)] ' + cleanUpResult[(i+1)]);
        console.log('cleanUpResult[(i+1)].beforeSoqlCount : ' + cleanUpResult[(i+1)].beforeSoqlCount);
        afterSoqlCount = cleanUpResult[(i+1)].beforeSoqlCount * 1;
        numberSoqlCount = afterSoqlCount - beforeSoqlCount;
    }  
    csvContent += "\r\n" + rowArray.lineNumber + ',' + rowArray.type + ',' + rowArray.what + ',' + rowArray.when + ',' + beforeSoqlCount+ ',' + afterSoqlCount+ ',' + numberSoqlCount;
}

//Z:\Documents
fs.writeFile('./logMassaged.csv', csvContent, err => {
    if (err) {
        console.error(err);
        return 1;
    }
//file written successfully
});