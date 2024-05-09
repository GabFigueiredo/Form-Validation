const { validationResult } = require('express-validator');

exports.postData = async (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { name, number } = req.body;

        try {
            const data = {
                name: name,
                number: number
            };
            res.status(200).send('success');
        } catch(error) {
            res.status(500).send('Error on sending data');
        }
    } else {
        return res.status(400).json({ errors: errors.array() });
    }
};