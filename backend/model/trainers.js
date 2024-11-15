const mongoose = require('mongoose');
const trainerSchema = new mongoose.Schema({
	trainer_name: { type: String, required: true },
	trainer_location: { type: String, required:true },
	trainer_skills: { type: String, required: true },
    trainer_phone: {type: String, required:true}
});

module.exports = mongoose.model('Trainer', trainerSchema);