interface AdvancedPlayer {
    playWebm(fileName: string): void;
    playMp4(fileName: string): void;
}


class WebmPlayer implements AdvancedPlayer {
    public playWebm(fileName: string): void {
        console.log(`WebmPlayer. Playing webm file "${fileName}"`);
    }

    public playMp4(fileName: string): void {
        console.log(`WebmPlayer. Playing mp4 file "${fileName}"`);
    }
}

class Mp4Player implements AdvancedPlayer {
    public playWebm(fileName: string): void {
        console.log(`Mp4Player. Playing webm file "${fileName}"`);
    }

    public playMp4(fileName: string): void {
        console.log(`Mp4Player. Playing mp4 file "${fileName}"`);
    }
}

export interface IPlayer {
    play(fileName: string): void;
}

class Player implements IPlayer {
    constructor(private advancedPlayer: AdvancedPlayer) {}

    public play(fileName: string): void {
        const fileExtension = fileName.split('.').pop();

        switch (fileExtension) {
            case 'webm':
                this.advancedPlayer.playWebm(fileName);
                break;
            case 'mp4':
                this.advancedPlayer.playMp4(fileName);
                break;
            default:
                console.log('Unsupported file format');
        }
    }
}

const player1 = new Player(new WebmPlayer());
const player2 = new Player(new Mp4Player());

player1.play('file.webm');
player1.play('file.mp4');
player1.play('file.avi');

player2.play('file.webm');
player2.play('file.mp4');
player2.play('file.avi');
