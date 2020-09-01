"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionSchema = exports.Question = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const general_schema_1 = require("./general.schema");
const mongoose_2 = require("mongoose");
let Question = class Question extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop({ type: general_schema_1.GeneralSchema }),
    __metadata("design:type", typeof (_a = typeof general_schema_1.General !== "undefined" && general_schema_1.General) === "function" ? _a : Object)
], Question.prototype, "qr_question", void 0);
__decorate([
    mongoose_1.Prop({ type: general_schema_1.GeneralSchema }),
    __metadata("design:type", Array)
], Question.prototype, "photo_question", void 0);
Question = __decorate([
    mongoose_1.Schema()
], Question);
exports.Question = Question;
exports.QuestionSchema = mongoose_1.SchemaFactory.createForClass(Question);
//# sourceMappingURL=questions.schema.js.map