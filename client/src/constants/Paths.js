import Config from './Config';

const ROOT = `${Config.BASE_PATH}/`;
const LOGIN = `${Config.BASE_PATH}/login`;
const PROJECTS = `${Config.BASE_PATH}/projects/:id`;
const BOARDS = `${Config.BASE_PATH}/boards/:id`;
const CARDS = `${Config.BASE_PATH}/cards/:id`;
const SURVEY = `${Config.BASE_PATH}/survey/:id/:userId`;

export default {
  ROOT,
  LOGIN,
  PROJECTS,
  BOARDS,
  CARDS,
  SURVEY,
};
