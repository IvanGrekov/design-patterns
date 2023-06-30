interface IState {
    handleRequest(): void;
}

class State1 implements IState {
    public handleRequest(): void {
        console.log("State1 handles the request.");
    }
}

class State2 implements IState {
    public handleRequest(): void {
        console.log("State2 handles the request.");
    }
}

class Context {
    constructor(public state: IState) {}

    public handleRequest(): void {
        console.log("Context handles the request.");
        this.state.handleRequest();
    }
}

// Usage
const state1 = new State1();
const state2 = new State2();
const context1 = new Context(state1);
const context2 = new Context(state2);

context1.handleRequest();
console.log('-----------------');
context2.handleRequest();
