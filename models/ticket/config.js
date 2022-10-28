const { Schema, model } = require('mongoose');

module.exports = model('ticketConfig', new Schema ({

Guild: String,
Channel: String,
Category: String

}));