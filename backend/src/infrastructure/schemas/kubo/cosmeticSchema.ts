import { model, Model, Schema } from "mongoose";
import { CosmeticTypeModel, cosmeticTypeSchema, ICosmeticType } from "./cosmeticTypeSchema";
import Cosmetic from "../../../domain/aggregates/kubo/cosmetic";

interface ICosmetic  {
    name: string;
    imagePath: string;
    type: ICosmeticType;
}

interface ICosmeticMethods {
    toCosmetic(): Cosmetic;
}

type CosmeticSchema = Model<ICosmetic, {}, ICosmeticMethods>;

const cosmeticSchema = new Schema<ICosmetic, CosmeticSchema, ICosmeticMethods>({
    name: { type: String },
    imagePath: { type: String },
    type: cosmeticTypeSchema
});

cosmeticSchema.method("toCosmetic",
    function toCosmetic(): Cosmetic {
        return Cosmetic.createNew({
            name: this.name,
            imagePath: this.imagePath,
            type: new CosmeticTypeModel(this.type).toCosmeticType(),
        });
    }
);

const CosmeticModel = model("Cosmetic", cosmeticSchema);

export { ICosmetic, cosmeticSchema, CosmeticModel };