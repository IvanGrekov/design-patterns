interface IRemoteFile {
    path: string;
    getFile(): Promise<string>;
}

class RemoteFile implements IRemoteFile {
    constructor(public path: string) {}

    public getFile(): Promise<string> {
        return new Promise((resolve) => {
            console.log('Loading file');
            setTimeout(() => {
                const result = `File loaded - ${this.path}`;
                console.log(result);
                resolve(result);
            }, 2000);
        });
    }
}

class RemoteCacheableFile implements IRemoteFile {
    protected remoteFile: RemoteFile;
    protected cachedFile: string | null = null;

    constructor(public path: string) {
        this.remoteFile = new RemoteFile(path);
    }

    public async getFile(): Promise<string> {
        if (!this.cachedFile) {
            this.cachedFile = await this.remoteFile.getFile();
        } else {
            console.log(`File from cache - ${this.cachedFile}`);
        }

        return this.cachedFile;
    }
}

const file = new RemoteFile('https://www.fefwwef.com/file.txt');

// (async () => {
//     await file.getFile();
//     await file.getFile();
// })();

// console.log('------------------');

const fileProxy = new RemoteCacheableFile('https://www.fefwwef.com/file.txt');

(async () => {
    await fileProxy.getFile();
    await fileProxy.getFile();
})();
