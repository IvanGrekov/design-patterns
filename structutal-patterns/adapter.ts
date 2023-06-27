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
    constructor(protected specificAdapter: SpecificRequester) {}

    public request(): string {
        const specificAdapterResult = this.specificAdapter.specificRequest().split('').reverse().join('');

        return `ADAPTED: ${specificAdapterResult}`;
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
