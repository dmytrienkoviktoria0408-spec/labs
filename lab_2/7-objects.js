"use strict";
const fn = () => {
  const constobj = {
    name: "Viktoria",
  };
  let letobj = {
    name: "Sofia",
  };
  constobj.name = "Sofia";
  letobj.name = "Viktoria";
  letobj = { name : "Vika" };
  console.dir ({constobj, letobj});
};
fn();
module.exports = {fn};
