import { model, Model, Schema } from "mongoose";
import { FoodModel, foodSchema, IFood } from "./foodSchema";
import Kitchen from "../../../domain/aggregates/kubo/kitchen";

interface IKitchen {
    availableFood: [IFood, IFood, IFood];
}

interface IKitchenMethods {
    toKitchen(): Kitchen;
}

type KitchenSchema = Model<IKitchen, {}, IKitchenMethods>;

const kitchenSchema = new Schema<IKitchen, KitchenSchema, IKitchenMethods>({
    availableFood: [foodSchema]
});

kitchenSchema.method("toKitchen", 
    function toKitchen(): Kitchen {
        return Kitchen.createNew({
            availableFood: this.availableFood.map(
                f => new FoodModel(f).toFood()
            )
        });
    }
)

const KitchenModel = model("Kitchen", kitchenSchema);

export { IKitchen, kitchenSchema, KitchenModel };