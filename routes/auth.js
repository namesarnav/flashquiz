import express from express

const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const validateMiddleware = require('../middleware/validateMiddleware');

// Public routes
router.post('/register',
    validateMiddleware.validateRegistration,
    userController.register
);

router.post('/login',
    validateMiddleware.validateLogin,
    userController.login
);

// Protected routes (require authentication)
router.get('/profile',
    // get user profile
    authMiddleware.verifyToken,
    userController.getProfile
);

router.put('/profile',
    // update user profile
    authMiddleware.verifyToken,
    validateMiddleware.validateProfileUpdate,
    userController.updateProfile
);

router.delete('/:id',
    authMiddleware.verifyToken,
    authMiddleware.isAdmin,
    userController.deleteUser
);


router.get('/',
    // get all users
    authMiddleware.verifyToken,
    authMiddleware.isAdmin,
    userController.getAllUsers
);


// private routes

router.get('/admin', 
    validateMiddleware.validateAdmin
)

module.exports = router;
