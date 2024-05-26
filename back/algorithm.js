const algorithm = (data) => {
  const activities = [
    { activity: "basket ball", points: 0 },
    { activity: "football", points: 0 },
    { activity: "chess", points: 0 },
    { activity: "skating", points: 0 },
    { activity: "movies", points: 0 },
    { activity: "swimming", points: 0 },
  ];

  switch (data.sports) {
    case true:
      activities.forEach((element) => {
        if (element.activity === "movies" || element.activity === "chess") {
          return;
        }
        element.points += 1;
      });
      break;
    case false:
      activities[2].points += 1;
      activities[4].points += 1;
      break;
    default:
      break;
  }

  switch (data.home) {
    case true:
      activities.forEach((element) => {
        if (element.activity === "movies" || element.activity === "chess") {
          element.points += 1;
        }
        return;
      });
      break;
    case false:
      activities.forEach((element) => {
        if (element.activity === "movies" || element.activity === "chess") {
          return;
        }
        element.points += 1;
      });
      break;
    default:
      break;
  }

  switch (data.activities) {
    case true:
      activities.forEach((element) => {
        if (element.activity === "movies" || element.activity === "chess") {
          return;
        }
        element.points += 1;
      });
      break;
    case false:
      activities.forEach((element) => {
        if (element.activity === "movies" || element.activity === "chess") {
          element.points += 1;
        }
        return;
      });
      break;
    default:
      break;
  }

  switch (data.beach) {
    case 1:
      activities[5].points += 2;
      break;
    case 2:
      activities[5].points += 1;
      break;
    case 3:
      activities[5].points -= 1;
    default:
      break;
  }

  switch (data.strategy) {
    case 1:
      activities[2].points += 2;
      break;
    case 2:
      activities[2].points += 1;
    case 3:
      activities[2].points -= 1;
    default:
      break;
  }

  if (data.height >= 190) {
    activities[0].points += 2;
  }
  if (data.height < 190 && data.height >= 170) {
    activities[0].points += 1;
  }
  if (data.height < 170) {
    activities[0].points -= 1;
  }

  activities.sort((val1, val2) => {
    return val1.points > val2.points ? -1 : 1;
  });
  return activities;
};

module.exports = algorithm;
