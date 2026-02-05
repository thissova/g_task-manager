import express from 'express';
import * as authController from '../controllers/authController.js';

const router = express.Router();

/**
 * @openapi
 * '/api/auth/register':
 *  post:
 *   tags:
 *   - Auth
 *   summary: Registration
 *   requestBody:
 *    required: true
 *    content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             role:
 *               type: string
 *               default: user
 *
 *   responses:
 *    201:
 *      description: Success
 *      content:
 *       application/json:
 *         items:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             _id:
 *               type: string
 *             email:
 *               string: string
 *             role:
 *               type: string
 *    400:
 *      description: Bad request
 */
router.post('/auth/register', authController.register);

/**
 * @openapi
 * '/api/auth/login':
 *  post:
 *   tags:
 *   - Auth
 *   summary: Login
 *   requestBody:
 *    required: true
 *    content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *
 *   responses:
 *    200:
 *      description: Success
 *      content:
 *       application/json:
 *         items:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             _id:
 *               type: string
 *             email:
 *               string: string
 *             role:
 *               type: string
 *    400:
 *      description: Bad request
 */
router.post('/auth/login', authController.login);

export default router;
