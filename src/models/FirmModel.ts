const mongoose:any = require('mongoose')

const FirmModelSchema = new mongoose.Schema({
    name: { type: String, required: true },
})

const FirmModel = mongoose.model('FirmModel', FirmModelSchema)

module.exports = FirmModel;