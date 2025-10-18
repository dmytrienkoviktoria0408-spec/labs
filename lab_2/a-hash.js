'use strict';
const phonebook = {
  Viktoria: '+380684520923',
  Sofia: '+380976664210',
};
const findPhoneByName = (name) => phonebook[name];
console.log(findPhoneByName('Viktoria'))
module.exports = { phonebook, findPhoneByName };
