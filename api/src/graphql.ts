
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    id: number;
    username: string;
    woofs?: Nullable<Nullable<Woof>[]>;
    followers?: Nullable<Nullable<User>[]>;
    follows?: Nullable<Nullable<User>[]>;
}

export class Woof {
    id: number;
    author?: Nullable<User>;
    content: string;
}

export abstract class IQuery {
    abstract woofs(): Nullable<Nullable<Woof>[]> | Promise<Nullable<Nullable<Woof>[]>>;
}

export abstract class IMutation {
    abstract newWoof(content: string): Woof | Promise<Woof>;

    abstract editWoof(id: number, content: string): Woof | Promise<Woof>;

    abstract deleteWoof(id: number): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
