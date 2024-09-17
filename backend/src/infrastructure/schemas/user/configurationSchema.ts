import { Schema } from "mongoose";
import { ISoundOptions, soundOptionsSchema } from "./soundOptionsSchema";

interface IUserConfiguration {
    languageId: string;
    soundOptions: ISoundOptions;
}

const userConfigurationSchema = new Schema<IUserConfiguration>({
    languageId: { type: String, required: true },
    soundOptions: soundOptionsSchema
});

export { IUserConfiguration, userConfigurationSchema };