import { Schema } from "mongoose";

interface ISoundOptions  {
    status: "on" | "off";
    musicVolume: number;
    effectsVolume: number;
}

const soundOptionsSchema = new Schema<ISoundOptions>({
    status: { type: String, required: true },
    musicVolume: { type: Number, required: true },
    effectsVolume: { type: Number, required: true },
});

export { ISoundOptions, soundOptionsSchema };