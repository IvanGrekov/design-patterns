export interface IPlayer {
    play(fileName: string): void;
}

class AdvancedPlayer {
    playWebm(fileName: string): void {
        console.log(`Playing Webm file. Name: ${fileName}`)
    }

    playMp4(fileName: string): void {
        console.log(`Playing Mp4 file. Name: ${fileName}`)
    }
}

class Player implements IPlayer {
    private advancedPlayer: AdvancedPlayer;

    constructor() {
        this.advancedPlayer = new AdvancedPlayer();
    }

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

const player = new Player();

player.play('file.webm');
player.play('file.mp4');
player.play('file.avi');
