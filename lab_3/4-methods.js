'use strict';
const methods = iface => {
  const api = [];
  for (const name in iface) {
    const hv = iface[name];
    if (typeof hv === 'function') {
      api.push([name, hv.length]);
    }
  }
  return api;
};
module.exports = { methods };
