import Docker from 'dockerode';

async function createContainer(imageName: string, cmdExecutable: string[]) {
    const docker = new Docker();

    const container = await docker.createContainer({
        Image: imageName,
        Cmd: cmdExecutable,
        AttachStdin: true, // to enable input streams
        AttachStdout: true, // to enable output streams
        AttachStderr: true, // to enable error streams
        Tty: false,
        HostConfig: {
            Memory: 1024 * 1024 * 1024, // 2GB
        },
        OpenStdin: true // keep the input stream open even no interaction is there
    });

    return container;
}

export default createContainer;