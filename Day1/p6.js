const fs = require('fs');

const write = () => {
    /* const write =(data) => { */
    const data = "This is my new file ";
    /* fs.writeFile("./data.txt", "I am a new file", 'utf8', (err) => { */
    fs.writeFile("./mydir/data.txt", data, 'utf8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File has been written successfully!");
    }
  });
};

console.log('Before Writing');
write();
console.log('After Writing');
