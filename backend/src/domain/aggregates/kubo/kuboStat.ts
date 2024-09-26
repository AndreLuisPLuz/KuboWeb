import ValueObject from "../../seed/valueObject";

type KuboStatProps = {
    description: "Health" | "Hunger" | "Happiness";
    currentLevel: number;
};

class KuboStat extends ValueObject<KuboStatProps> {
    private static readonly minLevel = 0;
    private static readonly maxLevel = 100;

    public get description() { return this.props.description };
    public get level() { return this.props.currentLevel };

    private constructor(props: KuboStatProps) {
        super(props);
    }

    public static createNew = ({ currentLevel, ...props }: KuboStatProps): KuboStat => {
        if (currentLevel < this.minLevel || currentLevel > this.maxLevel)
            throw new Error("Stat out of bounds!");
    
        return new KuboStat({ currentLevel, ...props });
    }
}

export default KuboStat;