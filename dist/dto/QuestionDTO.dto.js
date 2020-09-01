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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const MultipleOptionsDTO_dto_1 = require("./MultipleOptionsDTO.dto");
const DependantQuestionDTO_dto_1 = require("./DependantQuestionDTO.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class QuestionDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], QuestionDTO.prototype, "qr_question", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], QuestionDTO.prototype, "bar_code_question", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], QuestionDTO.prototype, "photo_question", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_transformer_1.Type(() => MultipleOptionsDTO_dto_1.MultipleOptionsDTO),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", Array)
], QuestionDTO.prototype, "multiple_options_question", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_transformer_1.Type(() => DependantQuestionDTO_dto_1.DependantQuestionDTO),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", Array)
], QuestionDTO.prototype, "dependant_question", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], QuestionDTO.prototype, "date_question", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], QuestionDTO.prototype, "hour_question", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], QuestionDTO.prototype, "open_question", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], QuestionDTO.prototype, "separator", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], QuestionDTO.prototype, "ranking_question", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], QuestionDTO.prototype, "true_or_false_question", void 0);
exports.QuestionDTO = QuestionDTO;
//# sourceMappingURL=QuestionDTO.dto.js.map