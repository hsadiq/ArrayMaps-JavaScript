function genrateBirthdayMonth(){

    const birthdayMonth = [];

    for (let i = 0; i< 50; i++){
        const randomYear = Math.floor(Math.random() * 2) + 1992;
        const randomMonth = Math.floor(Math.random() * 12) + 1;

        const date = new Date("randomYear-" + "randomMonth-" + "01");
        const month = date.toLocaleString('defualt', {month: 'long'});

        birthdayMonth.push({person: i + 1, month });
    }
    return birthdayMonth;
}

function findSameMonthBirthdays(birthMonths) {
    const sameMonthBirthdays = {};
  
    for (const { person, month } of birthMonths) {
      if (sameMonthBirthdays[month]) {
        sameMonthBirthdays[month].push(person);
      } else {
        sameMonthBirthdays[month] = [person];
      }
    }
  
    return sameMonthBirthdays;
  }

  function printSameMonthBirthdays(sameMonthBirthdays) {
    for (const [month, persons] of Object.entries(sameMonthBirthdays)) {
      console.log(`Month: ${month}`);
      console.log(`Persons: ${persons.join(', ')}`);
      console.log('---------------------');
    }
  }

  const birthMonths = genrateBirthdayMonth()

  const sameMonthBirthdays = findSameMonthBirthdays(birthMonths);

  printSameMonthBirthdays(sameMonthBirthdays);