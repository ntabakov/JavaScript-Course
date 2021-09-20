function radar(speed, area) {
    let isInLimits = true;
    let difference = 0;
    let speedLimitZone = 0;



    switch (area) {
        case "motorway":
            speedLimitZone = 130;
            if (speed > speedLimitZone) {
                difference += speed - speedLimitZone
                isInLimits = false;
            }
            break;
        case "interstate":
            speedLimitZone = 90;

            if (speed > speedLimitZone) {
                difference += speed - speedLimitZone
                isInLimits = false;
            }
            break;
        case "city":
            speedLimitZone = 50;

            if (speed > speedLimitZone) {
                difference += speed - speedLimitZone
                isInLimits = false;
            }
            break;
        case "residential":
            speedLimitZone = 20;

            if (speed > speedLimitZone) {
                difference += speed - speedLimitZone
                isInLimits = false;
            }
            break;

    }
    if (isInLimits) {
        console.log(`Driving ${speed} km/h in a ${speedLimitZone} zone`);
    }
    else{
        let status = "";
        if(difference>0 && difference <= 20){
            status = 'speeding';
        }
        else if (difference >20 && difference<=40){
            status = 'excessive speeding';
        }
        else if (difference>40){
            status='reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitZone} - ${status}`);

    }
}

radar(40,"city");
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');