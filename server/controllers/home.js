const { validationResult } = require('express-validator');

// Content for post method
exports.postData = async (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { name, number } = req.body; // Store data in variables

        const data = {
            name: name,
            number: number
        };

        try {
            res.status(200).json({ success: true, data: data }); // Send success message, and return the data received
        } catch(error) {
            res.status(500).json({ success: false, error: error.message });; // Internal server error
        }
    } else {
        return res.status(400).json({success: false, errors: errors.array() }); // Bad Request (Validation)
    }
};