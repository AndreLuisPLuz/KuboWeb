import Entity from "../../seed/entity";
import Cosmetic from "./cosmetic";
import Kitchen from "./kitchen";
import KuboStat from "./kuboStat";
import Nickname from "./nickname";

type KuboProps = {
    userId: string;
    nickname: Nickname;
    color: string;
    health: KuboStat;
    hunger: KuboStat;
    happiness: KuboStat;
    coins: number;
    hat: Cosmetic;
    eyes: Cosmetic;
    kitchen: Kitchen;
};

class Kubo extends Entity<KuboProps> {
    public get nickname() { return this.props.nickname };
    public get color() { return this.props.color };
    public get health() { return this.props.health };
    public get hunger() { return this.props.hunger };
    public get happiness() { return this.props.happiness };
    public get coins() { return this.props.coins };

    private constructor(
            props: KuboProps,
            id: string | null = null
    ) {
        super(props, id)
    }

    public static createNew = (props: KuboProps): Kubo => {
        return new Kubo(props);
    };
}

export default Kubo;