const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require ('../models/userModel');
const createError = require('../utils/appError');

//REGISTER
exports.register = async (req, res, next) => {
    try {
        const user = await User.findOne({email:req.body.email});

        if (user) {
            return next(new createError('el usuario ya existe!',400));
        }

        const hashedPassword = await bcrypt.hash(req.body.password,12);
        
        const newUser = await User.create({
           ...req.body,
            password: hashedPassword,
        });

        //JWT token
        const token = jwt.sign({_id: newUser._id}, "SECRETKEY123", {
            expiresIn: '90d',  
        });

        res.status(201).json({
            status: 'success',
            message: 'Usuario creado satifactoriamente!!!',
            token,
            user:{
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            } 
        });
    } catch (error) {
       next(error); 
    }
};

//LOGIN
exports.login = async (req, res, next) => {
   try {
    const {email, password}= req.body;
    const user = await User.findOne({email})
    if (!user) return next(new createError('usuario no encontrado',404));

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return next(new createError('Email o contraseña incorrecta',401));
    }

    const token = jwt.sign({_id: user._id}, "SECRETKEY123", {
        expiresIn: '90d',  
    });

    res.status(200).json({
        status:'success',
        token,
        message: 'Login correcto',
        user:{
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }   
    });
   } catch (error) {
    next(error);
   }
};