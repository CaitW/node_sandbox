const sources = [
// source 1
[{
    homeId: 11,
    city: "Atlanta",
    neighborhood: "Buckhead"
}, {
    homeId: 211,
    city: "Boston",
    neighborhood: "Charlestown"
}, {
    homeId: 111,
    city: "Nashville",
    neighborhood: "Brentwood"
}, {
    homeId: 311,
    city: "Chicago",
    neighborhood: "Wrigleyville"
}, {
    homeId: 411,
    city: "New York",
    neighborhood: "Melrose"
}],

// source 2
[{
    homeId: 12,
    city: "Atlanta",
    neighborhood: "Inman Park"
}, {
    homeId: 212,
    city: "Boston",
    neighborhood: "Back Bay"
}, {
    homeId: 112,
    city: "Nashville",
    neighborhood: "Buena Vista"
}, {
    homeId: 312,
    city: "Chicago",
    neighborhood: "Hyde Park"
}, {
    homeId: 412,
    city: "New York",
    neighborhood: "Williamsburg"
}],

// source 3
[{
    homeId: 13,
    city: "Atlanta",
    neighborhood: "Lakewood"
}, {
    homeId: 213,
    city: "Boston",
    neighborhood: "Dudley Square"
}, {
    homeId: 113,
    city: "Nashville",
    neighborhood: "Germantown"
}, {
    homeId: 313,
    city: "Chicago",
    neighborhood: "Avondale"
}, {
    homeId: 413,
    city: "New York",
    neighborhood: "Crown Heights"
}]];

const output = [[[{
    "homeId": 413,
    "city": "New York",
    "neighborhood": "Crown Heights"
}], [{
    "homeId": 411,
    "city": "New York",
    "neighborhood": "Melrose"
}], [{
    "homeId": 412,
    "city": "New York",
    "neighborhood": "Williamsburg"
}], [{
    "homeId": 212,
    "city": "Boston",
    "neighborhood": "Back Bay"
}], [{
    "homeId": 211,
    "city": "Boston",
    "neighborhood": "Charlestown"
}]], [[{
    "homeId": 213,
    "city": "Boston",
    "neighborhood": "Dudley Square"
}], [{
    "homeId": 313,
    "city": "Chicago",
    "neighborhood": "Avondale"
}], [{
    "homeId": 312,
    "city": "Chicago",
    "neighborhood": "Hyde Park"
}], [{
    "homeId": 311,
    "city": "Chicago",
    "neighborhood": "Wrigleyville"
}], [{
    "homeId": 11,
    "city": "Atlanta",
    "neighborhood": "Buckhead"
}]], [[{
    "homeId": 12,
    "city": "Atlanta",
    "neighborhood": "Inman Park"
}], [{
    "homeId": 13,
    "city": "Atlanta",
    "neighborhood": "Lakewood"
}], [{
    "homeId": 111,
    "city": "Nashville",
    "neighborhood": "Brentwood"
}], [{
    "homeId": 112,
    "city": "Nashville",
    "neighborhood": "Buena Vista"
}], [{
    "homeId": 113,
    "city": "Nashville",
    "neighborhood": "Germantown"
}]]];
/**
 * @param source1 {Array}
 * @param source2 {Array}
 * @param source3 {Array}
 * @returns {Array}
 */
const combineLists = (source1, source2, source3) => {
    const homesById = {};

    // Get combined list of unique houses
    const combined = [...source1, ...source2, ...source3].filter(home => {
        const homeId = home.homeId;
        if (!homesById[homeId]) {
            homesById[homeId] = home;
            return true;
        }
        return false;
    });

    const getCityPriority = cityName => {
        let citySort = 4;
        switch (cityName) {
            case "New York":
                citySort = 1;
                break;
            case "Boston":
                citySort = 2;
                break;
            case "Chicago":
                citySort = 3;
                break;
        }
        return citySort;
    };

    combined.sort((a, b) => {
        let cityAPriority = getCityPriority(a.city);
        let cityBPriority = getCityPriority(b.city);
        if (cityAPriority === cityBPriority) {
            if (a.city < b.city) return -1;
            if (a.city > b.city) return 1;
            if (a.neighborhood < b.neighborhood) return -1;
            if (a.neighborhood > b.neighborhood) return 1;
            return 0;
        }
        return cityAPriority - cityBPriority;
    });

    const splitGroups = combined.reduce((previousValue, currentValue, currentIndex, array) => {
        let groupNumber = Math.floor(currentIndex / 5);
        if (!previousValue[groupNumber]) {
            previousValue.push([]);
        }
        previousValue[groupNumber].push(currentValue);
        return previousValue;
    }, [[]]);

    return splitGroups;
};

const myOutput = combineLists(sources[0], sources[1], sources[2]);

console.log(JSON.stringify(myOutput));
