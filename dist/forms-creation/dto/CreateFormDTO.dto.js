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
exports.CreateFormDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const QuestionDTO_dto_1 = require("./QuestionDTO.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateFormDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateFormDTO.prototype, "created_at", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateFormDTO.prototype, "updated_at", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateFormDTO.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({ required: true }),
    __metadata("design:type", Number)
], CreateFormDTO.prototype, "enterprise_id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], CreateFormDTO.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsDefined(),
    class_validator_1.IsNumber(),
    __metadata("design:type", String)
], CreateFormDTO.prototype, "creation_user", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateFormDTO.prototype, "update_user", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], CreateFormDTO.prototype, "active", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], CreateFormDTO.prototype, "visible", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], CreateFormDTO.prototype, "of_system", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => QuestionDTO_dto_1.QuestionDTO),
    class_validator_1.IsDefined(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.IsObject(),
    __metadata("design:type", QuestionDTO_dto_1.QuestionDTO)
], CreateFormDTO.prototype, "questions", void 0);
exports.CreateFormDTO = CreateFormDTO;
//# sourceMappingURL=CreateFormDTO.dto.js.map