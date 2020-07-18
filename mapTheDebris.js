function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(function({ name, avgAlt}) {
    let a = avgAlt + earthRadius;
    let orbitalPeriod = Math.round(2 * Math.PI * (Math.sqrt(Math.pow(a, 3)/GM)));
    return { name, orbitalPeriod };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
