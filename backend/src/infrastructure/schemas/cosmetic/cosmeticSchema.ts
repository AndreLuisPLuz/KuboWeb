import { model, Schema } from "mongoose";
import { cosmeticTypeSchema, ICosmeticType } from "./cosmeticTypeSchema";

interface ICosmetic  {
    name: string;
    imagePath: string;
    type: ICosmeticType;
}

const cosmeticSchema = new Schema<ICosmetic>({
    name: { type: String },
    imagePath: { type: String },
    type: cosmeticTypeSchema
});

const CosmeticModel = model("Cosmetic", cosmeticSchema);

export { ICosmetic, CosmeticModel };