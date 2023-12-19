expenses = {
  "2023-01": {
    "01": {
        "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
        "fuel": [ 210.22 ]
    },
    "09": {
        "food": [ 11.9 ],
        "fuel": [ 190.22 ]
    }
  },
  "2023-03": {
    "07": {
        "food": [ 20, 11.9, 30.20, 11.9 ]
    },
    "04": {
        "food": [ 10.20, 11.50, 2.5 ],
        "fuel": []
    }
  },
  "2023-04": {},
  "2023-05": {
    "01": {
        "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
        "fuel": [ 210.22 ]
    },
    "05": {
      "food": [ 22.11, 49 ],
      "fuel": [ 180.20 ]
    },
    "17": {
        "food": [ 11.9, 2.20, 36.29 ],
        "fuel": [ 190.22, 3.20 ]
    }
  },
};

const findMedian = (arr) => {
  arr.sort((a, b) => a - b);
  const middleIndex = Math.floor(arr.length / 2);

  if(arr.length % 2 === 0) {
    return (arr[middleIndex] + arr[middleIndex - 1]) / 2;
  }
  else {
    return arr[middleIndex];
  }
};

const firstSundayInMonth = (date) => {
  const d = date.split('-');
  const year = parseInt(d[0]);
  const month = parseInt(d[1]) - 1;
  let sundays = [];

  for(let i = 0; i <= new Date(year, month, 0).getDate(); i++) {
    const date = new Date(year, month, i);
    if(date.getDay() === 0) {
      sundays.push(date);
    }
  }

  return sundays[0].getDate();
};

const getMedianOfFirstWeekExpenses = (object) => {
  let result = null;
  let sundays = [];
  let newMonths = [];
  let allExpenses = [];

  for(let date in object) {
    const sunday = firstSundayInMonth(date);
    sundays.push(sunday);
  }

  const months = Object.values(object);
  months.map((month, index) => {
    for(let key in month) {
      if(parseInt(key) <= sundays[index]) {
        newMonths.push(month[key]);
      }
    }
  });

  for(let days of newMonths) {
    const day = Object.values(days);
    const dayExpenses = day.flat();
    allExpenses.push(dayExpenses);
  }

  const flattedAllExpenses = allExpenses.flat();
  result = findMedian(flattedAllExpenses);

  console.log(result);
  return result;
};

getMedianOfFirstWeekExpenses(expenses);
