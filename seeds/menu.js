const xlsx = require('xlsx');
const fs = require('fs');

exports.seed = function (knex, Promise) {
  const workbook = xlsx.readFile('C:/Anushka/FSD/HomeFoodApp/HomeFoodApp_dbdata/Chef_Info.xlsx');
  const sheetName = workbook.SheetNames[1];
  const sheet = workbook.Sheets[sheetName];

  const data = xlsx.utils.sheet_to_json(sheet);

  return knex('menu').del()
    .then(function () {
      return knex('menu').insert(data);
    });
};