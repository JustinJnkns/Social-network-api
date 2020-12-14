const { Schema, model, } = require('mongoose')

const UserSchema = new Schema({
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,

        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "friends?"
        }]
    },
    // allows for use of virtual properies
    {
        toJSON: {
            virtuals: true,
            getter: true
        },
        id: false
    })

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

// create user model using UserSchema
const User = model('User', UserSchema)

module.exports = User