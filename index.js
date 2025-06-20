const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}
returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier) {
    return function (fare) {
        return fare * multiplier
    }
}
createFareMultiplier()

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectedDrivers) {
    return selectedDrivers(arrayOfDrivers)
}

