interface IHandler {
    setNextHandler(handler: IHandler): IHandler;
    handle(request: string): string;
}

abstract class AbstractHandler implements IHandler {
    protected nextHandler: IHandler | null = null;

    public setNextHandler(handler: IHandler): IHandler {
        this.nextHandler = handler;

        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return 'No one can handle this request';
    }
}

class PmHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Meeting') {
            return `PM will handle a "${request}" task`;
        } else {
            return super.handle(request);
        }
    }
}

class FeHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'UI/UX') {
            return `FE will handle a "${request}" task`;
        } else {
            return super.handle(request);
        }
    }
}

class BeHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'API') {
            return `BE will handle a "${request}" task`;
        } else {
            return super.handle(request);
        }
    }
}

const tasks = ['Meeting', 'UI/UX', 'API', 'Deployment'];

const pm = new PmHandler();
const fe = new FeHandler();
const be = new BeHandler();

pm.setNextHandler(fe).setNextHandler(be);

for (const task of tasks) {
    console.group(`Who will do a "${task}" task?`);
    console.log(pm.handle(task));
    console.groupEnd();
}
