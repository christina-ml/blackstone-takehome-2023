// YYYY-MM-DDTHH:MI:SS.000Z
const convertISOStringToTime = (timeToConvert) => {
    let hours = timeToConvert.slice(11, 13);
    let minutes = timeToConvert.slice(14, 16);

    // variable for AM or PM
    let amOrPm = "AM";

    // formattedTime for PM
    if (Number(hours) > 12){
        amOrPm = "PM";
        // convert 24hour clock to PM hours
        hours = Number(hours) - 12;
    }
    
    let formattedTime = hours + ':' + minutes + ` ${amOrPm}`;

    return formattedTime;
}

export default convertISOStringToTime;