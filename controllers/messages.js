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

module.exports.getAll = getAll;