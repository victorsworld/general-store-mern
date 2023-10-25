const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register: async ( req, res) => {
        try {
            const {email, password, role} = req.body
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt)

            const user = {
                email: email,
                passwordHash: hash,
                role: role
            };

            const newUser = await new User(user)
            const savedUser = await newUser.save()
            res.status(200).json ({success: true, data: savedUser})
        } catch (error) {
            res.status(500).json({sucess:false, message: error.message})
        }
    },
    login: async (req,res) => {
        try {
            const { email, password } = req.body;
        
            const foundUser = await User.findOne({ email });
            if (!foundUser) { return res.status(401).json({success: false,message: 'User or Password not does not match up',});
            }
        
            const isPasswordValid = await bcrypt.compare(password,foundUser.passwordHash );
            console.log(isPasswordValid)
            if (!isPasswordValid) { return res.status(401).json({success: false, message: 'User or Password not does not match up',});
            }
        
            const token = jwt.sign({ userId: foundUser._id }, process.env.SECRET_KEY, {expiresIn: '1hr',
            });
            return res.status(200).json({ success: true, token: token });
        
          } catch (error) {

            console.log(error.message);
            return res.status(500).json({ success: false, message: 'error', error: error });

          }
    },
     validate:  async (req, res) =>{
        try {
            const decodeToken = res.locals.decodedToken
            console.log( decodeToken )
            const findUser = await User.findOne({_id: decodeToken.userId})
            if(!findUser){
                res.status(401).json({success: false,message:'error', error: { user: "user not found"}})
            }
            return res.status(200).json({ success: true, email: findUser.email });
        } catch (error) {
            console.log(error)
            return res.status(500).json({success: false,message:'error', error: error})
    
        }
    }
}