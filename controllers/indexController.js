const { messages } = require('../db.js');
const crypto = require('node:crypto');

async function getIndexPage(req, res) {
    const clone = structuredClone(messages);
    const reverseMessages = clone.reverse();
    res.render('index', { messages: reverseMessages });
}

async function getNewMessage(req, res) {
    res.render('form');
}

async function addMessage(req, res) {
    if (!req.body.authorName || !req.body.authorMessage) {
        res.render('form');
        return;
    }

    const message = {
        text: req.body.authorMessage,
        user: req.body.authorName,
        added: new Date(),
        id: crypto.randomUUID(),
    }

    messages.push(message);

    res.redirect('/');
}

async function get404Page(req, res) {
    res.render('404.ejs');
}

async function getMessagePage(req, res) {
    const messageID = req.params.messageID;
    const message = messages.find(message => message.id === messageID);

    if (!message) {
        res.render('404.ejs');
        return;
    }

    res.render('message', { message });
}

module.exports = {
    getIndexPage,
    getNewMessage,
    get404Page,
    addMessage,
    getMessagePage
}