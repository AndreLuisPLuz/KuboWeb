import SoundOptions from "./soundOptions";

class UserConfiguration {
    public languagueId: string;
    public soundOptions: SoundOptions;

    constructor(languageId: string, soundOptions: SoundOptions) {
        this.languagueId = languageId;
        this.soundOptions = soundOptions;
    }
}

export default UserConfiguration;