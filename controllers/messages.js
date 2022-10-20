const Message = require('../models/message');

const getAll = (req, res) => {
    if(req.query.user) {
        const response = {
            status: "success",
            data: {
                "user": req.query.user,
                "message": `GETTING message with username ${req.query.user}`
            }
        };
        res.json(response);
    };
    
    const response = {
        status: "success",
        message: "GETTING messages",
        data: {
            messages: [
                {
                    "user": "Elon",
                    "message": "Hello"
                },
                {
                    "user": "Marianne",
                    "message": "Hi"
                }
            ]
        }
    };
    res.json(response);
};

const getId = (req, res) => {
    const id = req.params.id;

    const response = {
        status: "success",
        message: `GETTING message with id ${id}`,
        data: {
            messages: [
                {
                    "user" : "Marianne",
                    "message" : "Hi"
                }
            ]
        }
    };
    res.json(response);
};

const create = (req, res) => {
    const response = {
        status: "success",
        message: "POSTING a new message for user Marianne",
        data: {
            messages: [
                {
                    "user" : "Marianne",
                    "message" : "Hello person!"
                }
            ]
        }
    };
    res.json(response);
};

const update = (req, res) => {
    const id = req.params.id;

    const response = {
        status: "success",
        message: `UPDATING a message with id ${id}`,
        data: {
            messages: [
                {
                    "user" : "Mariane",
                    "message" : "I just love it here!"
                }
            ]
        }
    };
    res.json(response);
};

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;
module.exports.update = update;