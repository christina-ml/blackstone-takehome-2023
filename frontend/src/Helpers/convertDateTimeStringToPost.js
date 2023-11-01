/*
    I need to convert 
    YYYY-MM-DDTHH:MI
    to
    YYYY-MM-DD HH:MI:SS 
    format using javascript
*/
const convertDateTimeStrToPOST = (dateTimeToConvert) => {
    // specify data type to avoid Uncaught TypeError
    // split date and time
    let dateAndTime = String(dateTimeToConvert).split("T");

    // add seconds to time
    dateAndTime[1] += ':00';

    // reasssign variable - back to string
    dateAndTime = dateAndTime.join(" ");

    // return formatted date and time as string
    return dateAndTime;
}

export default convertDateTimeStrToPOST;