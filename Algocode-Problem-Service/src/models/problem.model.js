const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty']
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: [true, 'Difficulty cannot be empty'],
        default: 'easy'
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    codeStubs: [
        {
            language: {
                type: String,
                enum: ["CPP", "JAVA", "PYTHON"],
                required: true
            },
            startSnippet: {
                type: String,
            },
            endSnippet: {
                type: String,
            },
            userSnippet: {
                type: String,
            }
        }
    ],
    editorial: {
        type: String
    }
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;

/**
 * 
 * [{input: '5', output: '10'}, {input: '2', output: '20'}]
 * 
 * 
 * 5
 * 2 3 4 5 6
 * 8
 * 
 * 1 3
 * 
 */