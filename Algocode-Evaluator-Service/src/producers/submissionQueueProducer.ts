import submissionQueue from "../queues/submissionQueue";

export default async function(payload: Record<string, unknown>) {
    await submissionQueue.add("SubmissionJob", payload);
    console.log("Successfully added a new submission job");
}