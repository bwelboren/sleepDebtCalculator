const getSleepHours = day => {
   switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 7;
      case 'thursday':
        return 7.5;
      case 'friday':
        return 9;
      case 'saturday':
        return 9;
      case 'sunday':
        return 8;
      default:
        return 0;
   }
}

const getActualSleepHours = () => {
    let hoursSlept = getSleepHours('monday');
    hoursSlept += getSleepHours('tuesday');
    hoursSlept += getSleepHours('wednesday');
    hoursSlept += getSleepHours('thursday');
    hoursSlept += getSleepHours('friday');
    hoursSlept += getSleepHours('saturday');
    hoursSlept += getSleepHours('sunday');
    return hoursSlept;
}

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const idealSleepHours = getIdealSleepHours(8);
  const actualSleepHours = getActualSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("User got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("User got more sleep than needed.");
  } else {
    console.log("User should get some rest.");
  }
  console.log("Sleep hours surplus/deficit:", actualSleepHours - idealSleepHours);
}

console.log("Slept hours per week:", getActualSleepHours());
console.log("Ideal hours per week:", getIdealSleepHours(8));
calculateSleepDebt();
