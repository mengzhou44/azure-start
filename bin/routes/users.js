"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET users listing. */
router.get('/', function (req, res) {
    const users = [{
            id: 1,
            name: 'david'
        }, {
            id: 2,
            name: 'smith'
        }
    ];
    res.send(users);
});
exports.default = router;
//# sourceMappingURL=users.js.map