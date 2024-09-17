import ValueObject from "../../seed/valueObject";

type KuboStatProps = {
    description: "Health" | "Hunger" | "Happiness";
    minLevel: 0;
    maxLevel: 100;
    currentLevel: number;
};

class KuboStat extends ValueObject<KuboStatProps> {
    private constructor(props: KuboStatProps) {
        super(props);
    }

    public createNew = ({ currentLevel, ...props }: KuboStatProps): KuboStat => {
        if (currentLevel < props.minLevel || currentLevel > props.maxLevel)
            throw new Error("Stat out of bounds!");
    
        return new KuboStat({ currentLevel, ...props });
    }
}

export default KuboStat;