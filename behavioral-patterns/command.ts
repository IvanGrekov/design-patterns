// https://refactoring.guru/design-patterns/command/typescript/example#example-0

interface Command {
    command(commandAttr: string): void;
}

class SimpleCommand implements Command {
    constructor(private payload: string) {}

    public command(commandAttr: string) {
        console.log(`"${commandAttr}" - SimpleCommand: printing (${this.payload})`);
    }
}

class ComplexCommand implements Command {
    constructor(private payload1: string, private payload2: string) {}

    public command(commandAttr: string) {
        console.group(`"${commandAttr}" - ComplexCommand`);
        console.log(`ComplexCommand: doing something on (${this.payload1})`);
        console.log(`ComplexCommand: doing something else on (${this.payload2})`);
        console.groupEnd();
    }
}

class Invoker {
    private before: Command | null = null;
    private finally: Command | null = null;

    public setBefore(command: Command): void {
        this.before = command;
    }

    public setFinally(command: Command): void {
        this.finally = command;
    }

    public doSomeOperation(): void {
        console.group('Invoker: some operation');
        this.before?.command('before');
        console.log('------------');
        console.log('Body of some operation');
        console.log('------------');
        this.finally?.command('finally');
        console.groupEnd();
    }
}

const invoker = new Invoker();
invoker.setBefore(new SimpleCommand('Say Hi!'));
invoker.setFinally(new ComplexCommand('Send email', 'Save report'));

invoker.doSomeOperation();
