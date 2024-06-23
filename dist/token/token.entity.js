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
exports.Token = void 0;
const typeorm_1 = require("typeorm");
let Token = class Token {
};
exports.Token = Token;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Token.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Token.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Token.prototype, "symbol", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Token.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Token.prototype, "supply", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Token.prototype, "checksum", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Token.prototype, "deployerWallet", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Token.prototype, "deployerInfo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Token.prototype, "deployerLabel", void 0);
exports.Token = Token = __decorate([
    (0, typeorm_1.Entity)()
], Token);
//# sourceMappingURL=token.entity.js.map