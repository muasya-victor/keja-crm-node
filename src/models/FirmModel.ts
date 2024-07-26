const mongoose:any = require('mongoose')

const FirmModelSchema = new mongoose.Schema({
    name: { type: String, required: true },
})

export const FirmModel = mongoose.model('FirmModel', FirmModelSchema)
