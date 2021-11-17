const fs = require('fs')
const path = require('path')

// Creating DIR
fs.mkdir(
  path.join(__dirname, 'Training Details'), {},
  (err) => {
    throw err
  })


fs.writeFile(
  path.join(__dirname, 'Training Details', 'student details.txt'),
  'Name: Pavan A',
  (err, data) => {
    if (err) throw err;
    console.log('file written...');
  }
)

fs.readFile(
  path.join(__dirname, 'Training Details', 'student details.txt'),
  'utf8',
  (err, data) => {
    if (err) throw err
    console.log(data)
  }
)