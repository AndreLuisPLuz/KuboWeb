import { Schema } from "mongoose";

interface IKuboStat {
    description: string;
    currentLevel: number;
}

const kuboStatSchema = new Schema<IKuboStat>({
    description: { type: String, required: true },
    currentLevel: { type: Number, required: true }
});

export { IKuboStat, kuboStatSchema };