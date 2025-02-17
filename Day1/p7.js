const fs=require('fs');
const data = "Plz append this data"
fs.appendFile("./data.txt",'this is append data',(err)=>{
    if (err)
        console.log(err);
    console.log("Data Appended");

});
console.log("data appended")
