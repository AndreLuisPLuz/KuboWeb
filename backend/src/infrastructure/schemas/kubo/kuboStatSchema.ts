import { model, Model, Schema } from "mongoose";
import KuboStat from "../../../domain/aggregates/kubo/kuboStat";

interface IKuboStat {
    description: "Health" | "Hunger" | "Happiness";
    currentLevel: number;
}

interface IKuboStatMethods {
    toKuboStat(): KuboStat;
}

type KuboStatSchema = Model<IKuboStat, {}, IKuboStatMethods>;

const kuboStatSchema = new Schema<IKuboStat, KuboStatSchema, IKuboStatMethods>({
    description: { type: String, required: true },
    currentLevel: { type: Number, required: true }
});

kuboStatSchema.method("toKuboStat",
    function toKuboStat(): KuboStat {
        return KuboStat.createNew({
            description: this.description,
            currentLevel: this.currentLevel
        });
    }
);

const KuboStatModel = model("KuboStat", kuboStatSchema);

export { IKuboStat, kuboStatSchema, KuboStatModel };