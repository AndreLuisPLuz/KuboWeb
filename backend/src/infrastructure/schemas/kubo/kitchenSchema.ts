import { Schema } from "mongoose";
import { foodSchema, IFood } from "./foodSchema";

interface IKitchen {
    availableFood: [IFood, IFood, IFood];
}

const kitchenSchema = new Schema<IKitchen>({
    availableFood: [foodSchema]
});

export { IKitchen, kitchenSchema };