const { Schema, model } = require('mongoose')

const ThoughtSchema = new Schema({
        thoughtText: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        reactions: [{

        }]
    },
    // allows for use of virtual properties
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        //set to false to avoid return of unneeded virtual
        id: false
    })

ThoughtSchema.virtual('reactionCount').get(function() {
        return this.reactions.length
    })
    // create thought using thought Schema
const Thought = model('Thought', ThoughtSchema)

module.exports = Thought