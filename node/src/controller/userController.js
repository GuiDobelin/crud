const User = require('../repositories/selectionRepository');


exports.create = async (req, res) => {
    try{
        const newUser = {
            email: req.body.email,
            password: req.body.password
        };
        const result = await User.createUser(newUser)
        res.status(200).json(result);
    } catch (error){
        res.status(500).json({ error:'erro no servidor '})
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        if(users.length === 0){
            return res.status(404).json({message : "usuario nao existe"});
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

exports.update = async (req , res) => {
    try {
        const user =  {
            email: req.body.email,
            password: req.body.password
        }
        result = await User.update(req.params.id, user)
        res.status(200).json(result)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
};

exports.deleteUser = async (req , res) => {
    try{
        const user = await User.deleteUser(req.params.id);
        res.status(201).json(user)
    } catch (error){
        res.status(500).json({ error:'erro ao deletar '})

    }
};

exports.login = async (req,res) => {
    try {
        const user = await User.findUser(req.body.user)
        if (user === null) {
            res.status(200).json({mensagem:'Usuario nao encontrado'})
        } else if (user.password != req.body.password) {
            res.status(200).json({mensagem:'Senha errada'})
        } else {
            res.status(200).json({mensagem:'Voce esta logado!'})
        }
    } catch(error) {
        res.status(400).json({message: error.message})
    }
};