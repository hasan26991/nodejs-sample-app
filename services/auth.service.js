const User = require("../models/User");
const bcrypt = require("bcrypt");

class AuthService{
    constructor()
    {

    }
    async login(inputUsername,password)
    {
    
        try{
            const user = await User.findOne({ username:inputUsername });
            if(!user)
            {
                throw new Error('Wrong User');
            }
            const validated = await bcrypt.compare(password, user.password);
            if(!validated)
            {
                throw new Error('Wrong Password');
            }
            delete user._doc.password
            return user._doc

        }catch(e)
        {
           throw e; 
        }
        
    
    }


    register()
    {

    }

    logout()
    {

    }
}

module.exports=AuthService;