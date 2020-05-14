'use strict'

const cities = new Set();

cities.add('Beijing');

['Kyiv', 'London', 'Baghdad'].forEach(city => cities.add(city));

cities.delete('Baghdad');

console.dir({ cities });

if (cities.has('Kyiv')) {
    console.log('cities contains Kyiv');
}

console.dir({ keys: cities.keys() });
console.dir({ values: cities.values() });
console.dir({ entries: cities.entries() });

cities.clear();