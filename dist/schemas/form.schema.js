"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormSchema = void 0;
const mongoose = require("mongoose");
const GeneralSchema = new mongoose.Schema({
    question: String
});
const QuestionSchema = new mongoose.Schema({
    qr_question: [GeneralSchema]
});
exports.FormSchema = new mongoose.Schema({
    created_at: Date,
    updated_at: Date,
    title: String,
    enterprise_id: Number,
    status: Boolean,
    creation_user: String,
    update_user: String,
    active: Boolean,
    visible: Boolean,
    of_system: Boolean,
    questions: QuestionSchema
});
//# sourceMappingURL=form.schema.js.map