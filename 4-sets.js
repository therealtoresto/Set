'use strict';

const union = (s1, s2) => new Set([...s1, ...s2]);

const intersection = (s1, s2) => new Set(
    [...s1].filter(v => s2.has(v))
);

const difference = (s1, s2) => new Set(
    [...s1].filter(v => !s2.has(v))
);

const complement = (s1, s2) => difference(s2, s1);

// Usage

const cities1 = new Set(['Beijing', 'Kyiv']);
const cities2 = new Set(['Kyiv', 'London', 'Baghdad']);

const operations = [union, intersection, difference, complement];