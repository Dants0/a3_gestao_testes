import crypto from 'crypto';

export default abstract class Entity<T> {
    protected _id: string;
    public props: T;
    
    constructor(props: T, id?: string) {
        this.props = props;
        this._id = id as string ?? crypto.randomUUID; 
    }

    get id() {
        return this._id;
    }
}