// YYYY-MM-DDTHH:MI:SS.000Z
const convertISOStringToDate = (dateToConvert) => {
    let day = dateToConvert.slice(8, 10);
    let month = dateToConvert.slice(5, 7);
    let year = dateToConvert.slice(0, 4);

    // if month starts with a zero, leave out the zero
    if (month[0] === '0'){
        month = month.slice(1);
    }

    let formattedDate = month + '/' + day + '/' + year;

    return formattedDate;
}

export default convertISOStringToDate;