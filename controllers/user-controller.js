const { User } = require('../models')

const userController = {
    // find all users
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    // get user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user with this Id found' })
                    return
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err))
    },

    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user with this Id found' })
                    return
                }
                res.json(dbUserData)
            })
            .catch(err => res.status(400).json(err))
    },
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user with this Id found' })
                    return
                }
                res.json(dbUserData)
            })
            .catch(err => res.status(400).json(err))
    }
}

module.exports = userController