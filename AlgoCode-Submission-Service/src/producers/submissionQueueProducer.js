const submissionQueue =  require("../queues/submissionQueue");

module.exports = async function(payload) {
    await submissionQueue.add("SubmissionJob", payload);
    console.log("Successfully added a new submission job");
}