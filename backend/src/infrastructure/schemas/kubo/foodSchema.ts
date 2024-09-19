import { model, Model, Schema } from "mongoose";
import Food from "../../../domain/aggregates/kubo/food";

interface IFood {
    foodId: string | null;
    quantity: number;
}

interface IFoodMethods {
    toFood(): Food;
}

type FoodSchema = Model<IFood, {}, IFoodMethods>;

const foodSchema = new Schema<IFood, FoodSchema, IFoodMethods>({
    foodId: { type: String, required: false },
    quantity: { type: Number, required: true }
});

foodSchema.method("toFood",
    function toFood(): Food {
        return Food.createNew({
            foodId: this.foodId,
            quantity: this.quantity
        });
    }
)

const FoodModel = model("Food", foodSchema);

export { IFood, foodSchema, FoodModel };