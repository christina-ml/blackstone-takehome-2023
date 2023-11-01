// YYYY-MM-DDTHH:MI:SS.000Z
const convertISOStringToDate = (dateToConvert) => {
    // specify data type to avoid Uncaught TypeError
    let day = String(dateToConvert).slice(8, 10);
    let month = String(dateToConvert).slice(5, 7);
    let year = String(dateToConvert).slice(0, 4);

    // if month starts with a zero, leave out the zero
    if (month[0] === '0'){
        month = month.slice(1);
    }

    let formattedDate = month + '/' + day + '/' + year;

    return formattedDate;
}

export default convertISOStringToDate;