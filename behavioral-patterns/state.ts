// https://refactoring.guru/design-patterns/state/typescript/example#example-0
interface IState {
    handleChange(): void;
}

class State1 implements IState {
    public handleChange(): void {
        console.log("State1 handles the change");
    }
}

class State2 implements IState {
    public handleChange(): void {
        console.log("State2 handles the change");
    }
}

class Context {
    constructor(protected state: IState) {}

    public setState(state: IState): void {
        console.log("Context sets the state.");
        this.state = state;
    }

    public handleChange(): void {
        console.group("Context handles the change");
        this.state.handleChange();
        console.groupEnd();
    }
}

// Usage
const state1 = new State1();
const state2 = new State2();
const context1 = new Context(state1);

context1.handleChange();
console.log('-----------------');
context1.setState(state2);
context1.handleChange();
