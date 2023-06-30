class ComplexLogic {
    doSomething(request: string): void {
        console.log(`ComplexLogic: doing something on (${request}.)`);
    }

    doSomethingElse(request: string): void {
        console.log(`ComplexLogic: doing something else on (${request}.)`);
    }
}

interface ICommand {
    command(): void;
}

class SimpleCommand implements ICommand {
    constructor(private payload: string) {}

    public command() {
        console.log(`SimpleCommand: printing (${this.payload})`);
    }
}

class ComplexCommand implements ICommand {
    constructor(
        private complexLogic: ComplexLogic,
        private payload1: string,
        private payload2: string,
    ) {}

    public command() {
        console.group(`ComplexCommand: operation with help of ComplexLogic`);
        this.complexLogic.doSomething(this.payload1);
        this.complexLogic.doSomethingElse(this.payload2);
        console.groupEnd();
    }
}

class Invoker {
    protected before: ICommand | null = null;
    protected finally: ICommand | null = null;

    public setBefore(command: ICommand): void {
        this.before = command;
    }
    public setFinally(command: ICommand): void {
        this.finally = command;
    }

    public doSomeOperation(): void {
        console.group('Invoker: some operation');
        this.before?.command();
        console.log('------------');
        console.log('Body of some operation');
        console.log('------------');
        this.finally?.command();
        console.groupEnd();
    }
}

const invoker = new Invoker();
invoker.setBefore(new SimpleCommand('Say Hi!'));
invoker.setFinally(new ComplexCommand(new ComplexLogic(), 'Send email', 'Save report'));

invoker.doSomeOperation();
