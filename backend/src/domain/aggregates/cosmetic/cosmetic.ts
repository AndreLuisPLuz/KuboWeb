import Entity from "../../seed/entity";
import { CosmeticType } from "./cosmeticType";

type CosmeticProps = {
    name: string;
    imagePath: string;
    type: CosmeticType;
};

class Cosmetic extends Entity<CosmeticProps> {
    private constructor(
            props: CosmeticProps,
            id: string | null = null
    ) {
        super(props, id);
    }

    public static createNew = (props: CosmeticProps): Cosmetic => {
        return new Cosmetic(props);
    };
}

export default Cosmetic;    