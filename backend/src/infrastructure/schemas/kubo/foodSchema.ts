import { Schema } from "mongoose";

interface IFood {
    foodId: string | null;
    quantity: number;
}

const foodSchema = new Schema<IFood>({
    foodId: { type: String, required: false },
    quantity: { type: Number, required: true }
});

export { IFood, foodSchema };