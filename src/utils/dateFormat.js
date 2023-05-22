const dayFormat = (day) => {
  let nth;

  switch (day % 10) {
    case 1: nth = day + 'st'; break;
    case 2: nth = day += 'nd'; break;
    case 3: nth = day += 'rd'; break;
    default: nth = day += 'th'; 
  }
  return nth;
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const dateFormat = (date) => {
  const formattedDate = new Date(date);

  return [
    months[formattedDate.getMonth()],
    dayFormat(formattedDate.getDate()),
    formattedDate.getFullYear(),
  ];
};