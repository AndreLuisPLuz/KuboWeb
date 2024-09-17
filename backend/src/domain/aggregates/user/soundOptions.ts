class SoundOptions {
    public status: "on" | "off";
    private _musicVolume: number;
    private _effectsVolume: number;

    public get musicVolume() { return this._musicVolume };
    public get effectsVolume() { return this._effectsVolume };

    public set musicVolume(value: number) {
        this.checkVolumeBounds(value);
        this._musicVolume = value;
    }

    public set effectsVolume(value: number) {
        this.checkVolumeBounds(value);
        this._effectsVolume = value;
    }

    constructor(
            status: "on" | "off",
            musicVolume: number,
            effectsVolume: number
    ) {
        this.checkVolumeBounds(musicVolume);
        this.checkVolumeBounds(effectsVolume);

        this.status = status;
        this._musicVolume = musicVolume;
        this._effectsVolume = effectsVolume;
    }

    private checkVolumeBounds(value: number): void {
        if (value < 0 || value > 100)
            throw new Error("Value out of bounds.");
    }
}

export default SoundOptions;