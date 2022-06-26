export const handleHero = (location, feed) => {
  let project = {};
  switch (location) {
    case "/project/instagram":
      project = feed?.instagram;
      break;
    case "/project/spotify":
      project = feed?.spotify;

      break;
    case "/project/netflix":
      project = feed?.netflix;

      break;

    case "/project/disneyplus":
      project = feed?.disney;

      break;
    default:
      project = feed?.shareme;

      break;
  }

  return project;
};
