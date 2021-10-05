import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// const styling = document.querySelectorAll('.field');

// {
//     enableTime: true,
//     dateFormat: "Y-m-d H:i",
// }
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const inputNode = document.querySelector('#datetime-picker');
flatpickr(inputNode, options);
// const calculatedDate (startDate, endDate){
//     startDate = inputNode.Date()

// }
const today = new Date();
const selectedDate = inputNode.flatpickr(inputNode, options);
const calculateDate = new Date(inputNode.value);

console.log(defaultDate);
