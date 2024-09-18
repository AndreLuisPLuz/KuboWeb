import { Schema } from "mongoose";

interface ICosmeticType {
    type: string;
}

const cosmeticTypeSchema = new Schema<ICosmeticType>({
    type: { type: String, required: true }
});

export { ICosmeticType, cosmeticTypeSchema };