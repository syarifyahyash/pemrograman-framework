const {createTodo, getTodos, getTodosById} = require('../controllers/todo');

const router = require('express').Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.get('/:id', getTodosById);



module.exports = router;