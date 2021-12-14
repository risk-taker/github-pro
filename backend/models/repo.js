const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repoSchema = new Schema({
    ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
    repoName: { type: String, required: true, unique: true },
    repoDesc: { type: String, required: true },
}, { timestamps: false });

module.exports = mongoose.model('Repo', repoSchema, 'repos');
