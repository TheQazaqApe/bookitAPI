import { DateTime } from 'luxon';

enum Level {
    Info = "info",
    Error = "error",
    Warn = "warn"
}

class Logger {

    private file: string;

    constructor(file: string = 'badFilePath') {
        this.file = file;
    }

    action(title: string) {
        console.log(`----------------------- ${title} -----------------------`);
    }

    public start(title: string = 'title') {
        this.action(`Start ${title}`);
    }

    public end(title: string = 'title') {
        this.action(`End ${title}`);
    }

    public info(content: any = 'content', event: any = 'event') {
        console.log(this.format(this.file, Level.Info, content, event));
    }

    public warn(content: any = 'content', event: any = 'event') {
        console.error(this.format(this.file, Level.Warn, content, event));
    }

    public error(content: any = 'content', event: any = 'event') {
        console.error(this.format(this.file, Level.Error, content, event));
    }

    private format(file: string, level: Level, content: any, event: any) {
        const date = DateTime.local().toLocaleString;
        return `[${date}]-[${level}]-[${file}]-[${event}]-[${content}]`;
    }

    public print(obj: any, title = 'title') {
        try {
            console.log(`----------------------- Start print ${title} -----------------------`);
            console.log(JSON.stringify(obj, null, 2));
            console.log(`----------------------- End print ${title}  ------------------------`)

        } catch (e) {
            console.log(`Cannot print ${title}`);
        }
    }

    public event(event: any = 'event') {
        console.log(this.format(this.file, Level.Info, '', event));
    }
}
export default function GetLogger(file: string) {
    const log = new Logger(file);
    log.action(`Register logger for path ${file}`);
    return new Logger(file);
}