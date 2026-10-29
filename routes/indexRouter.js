const { Router } = require('express');
const {
    getIndexPage,
    getNewMessage,
    get404Page,
    addMessage,
    getMessagePage
} = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', getIndexPage);
indexRouter.get('/new', getNewMessage);
indexRouter.post('/new', addMessage)
indexRouter.get('/message/:messageID', getMessagePage)
indexRouter.get("/{*splat}", get404Page);

module.exports = { indexRouter };