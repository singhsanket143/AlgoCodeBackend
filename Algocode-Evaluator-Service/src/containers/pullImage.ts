import Docker from 'dockerode';

export default async function pullImage(imageName: string) {
    try {
        const docker = new Docker();
        return new Promise((res, rej) => {
            docker.pull(imageName, (err: Error, stream: NodeJS.ReadableStream) => {
                if(err) throw err;
                docker.modem.followProgress(stream, (err, response) => err ? rej(err) : res(response), (event) => {
                    console.log(event.status);
                });
            });
        });
    } catch (error) {
        console.log(error);
    }
}