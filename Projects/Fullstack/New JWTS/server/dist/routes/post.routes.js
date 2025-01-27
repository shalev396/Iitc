"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("../controllers/post.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = express_1.default.Router();
router.route("/").post(auth_middleware_1.protect, post_controller_1.createPost).get(auth_middleware_1.protect, post_controller_1.getPosts);
router.get("/user/:userId", auth_middleware_1.protect, post_controller_1.getUserPosts);
router.put("/:id/like", auth_middleware_1.protect, post_controller_1.toggleLike);
router.post("/:id/comments", auth_middleware_1.protect, post_controller_1.addComment);
router.put("/:id/share", auth_middleware_1.protect, post_controller_1.sharePost);
exports.default = router;
