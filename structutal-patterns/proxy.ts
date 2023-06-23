interface IRemoteFile {
    filepath: string;
    getFile(): Promise<string>;
}

export class RemoteFile implements IRemoteFile {
    constructor(public filepath: string) {}

    public async getFile(): Promise<string> {
        return await new Promise((resolve) => {
            console.log('Loading file');
            setTimeout(() => {
                const result = `File loaded - ${this.filepath}`;
                console.log(result);
                resolve((result));
            }, 1000);
        });
    }
}

export class RemoteCacheableFile implements IRemoteFile {
    private remoteFile: RemoteFile;
    private cachedFile: string | null = null;

    constructor(public filepath: string) {
        this.remoteFile = new RemoteFile(filepath);
    }

    public async getFile(): Promise<string> {
        if (!this.cachedFile) {
            this.cachedFile = await this.remoteFile.getFile();
        } else {
            console.log(`File from cache - ${this.filepath}`);
        }

        return this.cachedFile;
    }
}

const file = new RemoteFile('https://www.fefwwef.com/file.txt');

// (async () => {
//     await file.getFile();
//     await file.getFile();
// })();

const fileProxy = new RemoteCacheableFile('https://www.fefwwef.com/file.txt');

(async () => {
    await fileProxy.getFile();
    await fileProxy.getFile();
})();
