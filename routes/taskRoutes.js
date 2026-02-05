import express from 'express';
import * as taskController from '../controllers/taskController.js';
import checkAdmin from '../middlewares/checkAdmin.js';
import { checkAuth } from '../middlewares/checkAuth.js';

const router = express.Router();

router.use(checkAuth);

/**
 * @openapi
 * '/api/task':
 *  post:
 *   tags:
 *   - Task
 *   summary: Create a task
 *   security:
 *    - basicAuth: []
 *   requestBody:
 *    required: true
 *    content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             description:
 *               type: string
 *               default: Buy a book
 *   responses:
 *    201:
 *      description: Created
 *    400:
 *      description: Bad request
 */
router.post('/task', taskController.createTask);

/**
 * @openapi
 * '/api/task':
 *  get:
 *   tags:
 *   - Task
 *   summary: Get user tasks
 *   security:
 *    - basicAuth: []
 *   responses:
 *    200:
 *      description: Success
 *      content:
 *       application/json:
 *         items:
 *           type: object
 *           properties:
 *             description:
 *               type: string
 *             id:
 *               type: string
 *               default: Buy a
 *             completed:
 *               type: boolean
 *             createdBy:
 *               type: string
 *    400:
 *      description: Bad request
 */
router.get('/task', taskController.getTasksByUserId);

/**
 * @openapi
 * '/api/task/all':
 *  get:
 *   tags:
 *   - Task
 *   summary: Get all users tasks (admin)
 *   security:
 *    - basicAuth: []
 *   responses:
 *    200:
 *      description: Success
 *      content:
 *       application/json:
 *         items:
 *           type: object
 *           properties:
 *             description:
 *               type: string
 *             id:
 *               type: string
 *               default: Buy a
 *             completed:
 *               type: boolean
 *             createdBy:
 *               type: string
 *    400:
 *      description: Bad request
 */
router.get('/task/all', checkAdmin, taskController.getAllTasks);

/**
 * @openapi
 * '/api/task/{id}':
 *  get:
 *   tags:
 *   - Task
 *   summary: Get a single user task
 *   security:
 *    - basicAuth: []
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The ID of the task
 *      schema:
 *        type: string
 *      style: simple
 *      explode: true
 *
 *   responses:
 *    200:
 *      description: Success
 *      content:
 *       application/json:
 *         items:
 *           type: object
 *           properties:
 *             description:
 *               type: string
 *             id:
 *               type: string
 *               default: Buy a
 *             completed:
 *               type: boolean
 *             createdBy:
 *               type: string
 *    400:
 *      description: Bad request
 */
router.get('/task/:id', taskController.getTask);

/**
 * @openapi
 * '/api/task/{id}':
 *  put:
 *   tags:
 *   - Task
 *   summary: Update a user task
 *   security:
 *    - basicAuth: []
 *   requestBody:
 *    required: true
 *    content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             description:
 *               type: string
 *               default: Buy a phone
 *             completed:
 *               type: boolean
 *               default: true
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The ID of the task
 *      schema:
 *        type: string
 *      style: simple
 *      explode: true
 *
 *   responses:
 *    200:
 *      description: Success
 *      content:
 *       application/json:
 *         items:
 *           type: object
 *           properties:
 *             description:
 *               type: string
 *             id:
 *               type: string
 *               default: Buy a
 *             completed:
 *               type: boolean
 *             createdBy:
 *               type: string
 *    400:
 *      description: Bad request
 */
router.put('/task/:id', taskController.updateTask);

/**
 * @openapi
 * '/api/task/{id}':
 *  delete:
 *   tags:
 *   - Task
 *   summary: Delete a user task
 *   security:
 *    - basicAuth: []
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The ID of the task
 *      schema:
 *        type: string
 *      style: simple
 *      explode: true
 *
 *   responses:
 *    204:
 *      description: Success
 *    400:
 *      description: Bad request
 */
router.delete('/task/:id', taskController.deleteTask);

export default router;
