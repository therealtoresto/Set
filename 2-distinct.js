'use strict';

const distinct = dataset => {
    const keys = new Set();
    return dataset.filter(record => {
        const cols = Object.keys(record).sort();
        const key = cols.map(field => record[field]).join('\x00');
        const has = keys.has(key);
        if (!has) keys.add(key);
        return !has;
    });
    const 
};

// Usage 

const flights = [
    { from: 'Kyiv', to: 'Rome' },
    { from: 'Kyiv', to: 'Warsaw' },
    { from: 'Dublin', to: 'Riga' },
    { from: 'Riga', to: 'Dublin' },
    { from: 'Kyiv', to: 'Rome' },
    { from: 'Cairo', to: 'Paris' },
];

console.dir({ flights });

const objDistinct = new Set(flights);
console.dir({ objDistinct });

const directions = distinct(flights);
console.dir({ directions });