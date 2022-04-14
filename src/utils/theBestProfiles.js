/* eslint-disable no-param-reassign */
// there must be a better way to do it, but i don't have time, refactor this later
export default function theBestProfiles(mentors) {
  const firstPlace = mentors.reduce(
    (acc, curr) => {
      if (curr.tags.length > acc.tags) acc = curr;
      return acc;
    },
    { tags: 0 },
  );

  const filterOne = mentors.filter((mentor) => mentor.id !== firstPlace.id);

  const secoundPlace = filterOne.reduce(
    (acc, curr) => {
      if (curr.tags.length > acc.tags) acc = curr;
      return acc;
    },
    { tags: 0 },
  );

  return [firstPlace, secoundPlace];
}
