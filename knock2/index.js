var a = {
    a: 1,
    b: 'hello',
    c: undefined,
    d: 2,
    e: '2',
    g: null,
    h: '5',
    i: [1, 2, 3, 4, { a: { a: 'a' } }],
    f: {
        b: 1,
        a: null,
        c: {
            b: 2,
            a: 1,
            c: {
                a: 1
            }
        }
    }
};

// not equal to a
var b = {
    a: 1,
    b: 'hello',
    c: null,
    d: 2,
    e: '2',
    g: null,
    h: '5',
    i: [1, 2, 3, 4, { a: { a: 'a' } }],
    f: {
        b: 1,
        a: null,
        c: {
            b: 2,
            a: 1,
            c: {
                a: 1
            }
        }
    }
};

// not equal to a
var c = {
    a: 1,
    b: 'hello',
    c: undefined,
    d: 2,
    e: '2',
    g: null,
    h: '5',
    i: [1, 2, 3, 4, { a: { a: 'b' } }],
    f: {
        b: 1,
        a: null,
        c: {
            b: 2,
            a: 1,
            c: {
                a: 1
            }
        }
    },
};

// equal to a
var d = {
    c: undefined,
    a: 1,
    b: 'hello',
    d: 2,
    e: '2',
    g: null,
    h: '5',
    i: [1, 2, 3, 4, { a: { a: 'a' } }],
    f: {
        a: null,
        b: 1,
        c: {
            b: 2,
            a: 1,
            c: {
                a: 1
            }
        }
    }
};

// not equal to a
var e = {
    a: 1,
    b: 'hello',
    d: 2,
    c: undefined,
    e: '2',
    g: null,
    h: '5',
    i: [1, 2, 3, 4, { a: { a: 'a' } }],
    f: {
        b: 1,
        a: null,
        c: {
            b: null,
            a: 1,
            c: {
                a: 1
            }
        }
    }
};

// not equal to a (extra nested property)
var f = {
    a: 1,
    b: 'hello',
    c: undefined,
    d: 2,
    e: '2',
    g: null,
    h: '5',
    i: [1, 2, 3, 4, { a: { a: 'a' } }],
    f: {
        b: 1,
        a: null,
        c: {
            b: 2,
            a: 1,
            c: {
                a: 1
            },
            d: 3 // not in 'a'
        }
    }
};



/**
 * @param o1 {Object}
 * @param o2 {Object}
 * @return {Boolean}
 */
function isEqual(o1, o2) {

    let keys1 = Object.keys(o1);
    let keys2 = Object.keys(o2);

    // 1. Compare key lengths
    if (keys1.length !== keys2.length) {
        return false;
    }

    // 2. Make sure the keys in o1 match the keys in o2
    keys1.forEach((element) => {
        if (keys2.indexOf(element) === -1) {
            return false;
        }
    });

    // 3. Compare values
    for(let key of keys1) {
        let key1value = o1[key];
        let key2value = o2[key];

        // 3a. If the values are not equal
        if (key1value !== key2value) {
            // 3a-1. If typeof both === object, check recursively for equivalency
            if (typeof key1value === "object" && typeof key2value === "object") {
                if (!isEqual(key1value, key2value)) {
                    return false;
                }
            // 3a-2. All other schenarios, assume unequivalent
            } else {
                return false;
            }
        }
    }

    // If we haven't hit a `return false` yet, then objects must be equivalent
    return true;
}

console.log('Is a and a equal?', isEqual(a, a)); // true
console.log('Is a and b equal?', isEqual(a, b)); // false
console.log('Is a and c equal?', isEqual(a, c)); // false
console.log('Is a and d equal?', isEqual(a, d)); // true
console.log('Is a and e equal?', isEqual(a, e)); // false
console.log('Is a and f equal?', isEqual(a, f)); // false