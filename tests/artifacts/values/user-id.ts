import { Value } from './../../../src/value/value/value';
import { Identifier } from './../../../src/common/common.module';
import { UUID } from 'swindle';

export class UserId extends Value implements Identifier {

    private readonly _id: string;

    constructor(value: string) {
        super();
        this._id = value;
    }

    public static Generate(): UserId {
        return new UserId(UUID.V4().id());
    }

    public id(): string {
        return this._id;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof UserId) {
            const other = suspect as UserId;
            isEqual = this.id() === other.id();
        }
        return isEqual;
    }

    public serialize(): string {
        return this.id();
    }
}