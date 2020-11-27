const fs = require('fs');

const path = './Files/';

fs.watch(path, {encoding: 'buffer'}, (eventType, fileName) => {

    if (fileName && !fileName.toString().endsWith('~')) {
        console.log(eventType.toString());
        fs.readFile(path.concat(fileName), (err, data) => {
            if (err) {
                console.error(err);
            } else {
                console.log("\nFile " + fileName + "\n" + data.toString());
            }
        });
    }
});

