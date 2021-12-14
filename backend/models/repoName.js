const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repoNameSchema = new Schema({
    ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
    branch: { type: String, required: true, unique: true }
}, { timestamps: false });

module.exports = mongoose.model('RepoName', repoNameSchema, 'reponames');
