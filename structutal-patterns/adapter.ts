interface IRequester {
    request(): string;
}

class Requester implements IRequester {
    public request(): string {
        return 'Hello';
    }
}

class SpecificRequester {
    public specificRequest(): string {
        return 'olleH';
    }
}

class SpecificRequesterAdapter implements IRequester {
    constructor(protected specificRequester: SpecificRequester) {}

    public request(): string {
        const specificRequesterResult = this.specificRequester.specificRequest().split('').reverse().join('');

        return `ADAPTED: ${specificRequesterResult}`;
    }
}


const requester = new Requester();
console.log(`Requester: ${requester.request()}`);

console.log('------------------');

const specificRequester = new SpecificRequester();
console.log(`SpecificRequester: ${specificRequester.specificRequest()}`);

console.log('------------------');

const specificRequestAdapter = new SpecificRequesterAdapter(specificRequester);
console.log(`SpecificRequesterAdapter: ${specificRequestAdapter.request()}`);
