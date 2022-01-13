const csv = require('csv-parser');
const fs = require('fs');

let result = [];

fs.createReadStream('all_eai_error.csv')
  .pipe(csv())
  .on('data', (row) => {
    let splitRow = row.Body.split('\r\n');
    let transactionTime = null;
    let transactionNo = null;
    let service = null;
    let idocNo = null;
    for (let i=0; i<splitRow.length; i++){
        if((transactionTime===null) && (splitRow[i].includes("2022-01") || splitRow[i].includes("2021-12") || splitRow[i].includes("2021-11") || splitRow[i].includes("2021-10") || splitRow[i].includes("2021-09"))){
            transactionTime = splitRow[i];
        }
        else if(splitRow[i].includes("Transaction Id : ")){
            transactionNo = splitRow[i].split(':').pop();
        }
        else if(splitRow[i].includes("Service : ")){
            service = splitRow[i].split(':').pop();
        }
        else if(splitRow[i].includes("IDoc Number : ")){
            idocNo = splitRow[i].split(':').pop();
        }
    }
    if (transactionTime !== null && transactionTime !== null && service !== null && idocNo !== null){
        const obj = {transactionTime: transactionTime.trim(), transactionNo: transactionNo.trim(), service: service.trim(), idocNo: idocNo.trim()};
        result.push(obj);
    }
  })
  .on('end', () => {
        console.log('CSV file successfully processed');
        console.log(result);
    
        let csvContent ="transactionTime,transactionNo,service,idocNo";
        result.forEach(function(rowArray) {
            csvContent += "\r\n" + rowArray.transactionTime + "," + rowArray.transactionNo + "," + rowArray.service + "," + rowArray.idocNo;
        });
        
        console.log(csvContent);
        
        fs.writeFile('./all_eai_transformed.csv', csvContent, err => {
            if (err) {
                console.error(err);
                return 1;
            }
        //file written successfully
        });

    });