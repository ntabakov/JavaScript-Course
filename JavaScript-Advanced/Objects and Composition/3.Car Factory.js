function factory(obj) {
    let engine = {};
    if (obj.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        }
    } else if (obj.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        }
    } else {
        engine = {
            power: 200,
            volume: 3500
        }
    }
    const wheelsSize = obj.wheelsize % 2 == 0 ? obj.wheelsize-1 : obj.wheelsize;

    const car = {
        model: obj.model,
        engine: engine,
        carriage: {
            type: obj.carriage,
            color: obj.color,
        },
        wheels : new Array(4).fill(wheelsSize,0,4)

    }

    return car;
}

factory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});