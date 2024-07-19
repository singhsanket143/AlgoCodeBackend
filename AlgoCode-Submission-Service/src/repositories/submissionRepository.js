const { createSubmission } = require('../controllers/submissionController');
const Submission = require('../models/submissionModel');

class SubmissionRepository {
    constructor() {
        this.submissionModel = Submission;
    }

    async createSubmission(submission) {
        const response = await this.submissionModel.create(submission);
        return response;
    }
    
}

module.exports = SubmissionRepository;