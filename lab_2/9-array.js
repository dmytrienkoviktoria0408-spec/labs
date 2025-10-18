'use strict';
const phonebook = [
    {"name":"Viktoria","phone":"+380684520923"},
    {"name":"Sofia","phone":"+380976664210"}];

const findPhoneByName = (a) =>{
    for (const b of phonebook) {
        if (b.name === a) return b.phone;
      }
};

module.exports = { phonebook, findPhoneByName };
