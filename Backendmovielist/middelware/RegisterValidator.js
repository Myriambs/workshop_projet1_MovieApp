const { body, validationResult } = require('express-validator');

exports.registerValidation =[
    body('email',"please enter or put a valid email type ").isEmail(),
    body('password',"please ur pawword must be at least 8 carts").isLength({min:8})
]

exports.loginValidtaion=[
    body('email',"please el email rahou @ w .com ou .fr ou .tn thebit")
]


exports.validation=(req,res,next)=>{
    const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
next()
}