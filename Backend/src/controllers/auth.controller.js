import userModel from "../models/user.model.js"

async function registerUser(req, res) {

    const { username, email, password } = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    })

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"User with the same email or username already exists"
        })
    }


}

export default registerUser