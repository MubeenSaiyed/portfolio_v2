export const handleHero = (location, feed) => {
  let project = {};
  switch (location) {
    case "/project/instagram":
      project.id = feed?.instagram[0].id;
      project.image = feed?.instagram[0].src;
      break;
    case "/project/spotify":
      project.id = feed?.spotify[0].id;
      project.image = feed?.spotify[0].src;
      break;
    case "/project/netflix":
      project.id = feed?.netflix[0].id;
      project.image = feed?.netflix[0].src;
      break;

    case "/project/disneyplus":
      project.id = feed?.disney[0].id;
      project.image = feed?.disney[0].src;
      break;
    default:
      project.id = feed?.shareme[0].id;
      project.image = feed?.shareme[0].src;
      break;
  }

  return project;
};
