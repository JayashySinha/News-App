// News model which expose the schema of news with it's respective fields

const mongoose = require('mongoose');

const NewsSchema = mongoose.Schema({
    category: String,
    title: String,
    content: String
}, {
    timeStamps: true
});

module.exports = mongoose.model('News', NewsSchema);