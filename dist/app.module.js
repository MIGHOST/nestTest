"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const app_controller_1 = require("./app.controller");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const dotenv_1 = require("dotenv");
const app_service_1 = require("./app.service");
const product_module_1 = require("./product/product.module");
dotenv_1.config();
const { TYPEORM_PORT, TYPEORM_PASSWORD, TYPEORM_DATABASE } = process.env;
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
        imports: [
            product_module_1.ProductModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: Number(TYPEORM_PORT),
                username: `${TYPEORM_DATABASE}`,
                password: `${TYPEORM_PASSWORD}`,
                database: 'testNest',
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map