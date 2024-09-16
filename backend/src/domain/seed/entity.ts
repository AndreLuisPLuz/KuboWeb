import { v4 as uuid } from "uuid";

abstract class Entity {
    public _id: string;

    constructor(id: string | null = null) {
        this._id = id || uuid();
    }
}

export default Entity;