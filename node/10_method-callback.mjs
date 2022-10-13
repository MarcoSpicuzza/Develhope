import { writeFile, readFile } from 'node:fs';

writeFile('message.txt', "TEXT THAT WILL BE SAVED IN THE FILE", 'utf8', err => {
  if (err) throw err
  console.log('The file has been saved!');

  readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err
    console.log(`File Content: ${data}`);
  })

})
