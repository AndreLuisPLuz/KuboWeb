import Entity from "../../seed/entity";

class Language extends Entity {
    public name: string;

    private constructor(name: string, id: string | null = null) {
        super(id);
        this.name = name;
    }

    public static createNew = (name: string): Language => {
        const newLanguage = new Language(name);
        return newLanguage;
    };
}

export default Language;