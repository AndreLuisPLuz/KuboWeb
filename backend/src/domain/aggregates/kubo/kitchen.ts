import ValueObject from "../../seed/valueObject";
import Food from "./food";

type FoodOrNull = Food | null;

type KitchenProps = {
    availableFood: [FoodOrNull, FoodOrNull, FoodOrNull];
};

class Kitchen extends ValueObject<KitchenProps> {
    public get availableFood() { return this.props.availableFood };

    private constructor(props: KitchenProps) {
        super(props);
    }
}

export default Kitchen;