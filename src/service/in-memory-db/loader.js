const fs = require("fs");

module.exports = function loader(fileName, recordHandler) {
    let data = JSON.parse(fs.readFileSync(fileName).toString());

    console.log(fileName);
    console.log(data);

    data = data.employees || data.roles;

    let dbname = fileName.split('.')[0];

    data.forEach((record) => recordHandler.addRecord(record, dbname));
}
