// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    if (location >= 42) {
        return location - 42;
    }
    if (location < 42) {
        return 42 - location;
    }
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, end) {
    if (start >= end) {
        return (start - end) * 264;
    }
    if (end > start) {
        return (end - start) * 264;
    }
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end);
    let fare;
    if (distance < 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        fare = (distance - 400) * 0.02;
        return fare;
    } else if (distance > 2000 && distance < 2500) {
        fare = 25;
        return fare;
    } else if (distance > 2500) {
        return "cannot travel that far";
    }
}