function id<T>(item: T): T {  // towa <T> e tipizirane 
    return item;
}

interface IMyDTO {
    prop: string;
    prop1: number;
}

type MyDTOOrNumber = IMyDTO | number;
type BooleanArray = Array<boolean>;

let num = id<MyDTOOrNumber | BooleanArray>({ prop: '2', prop1: 44 });


class MyClass {
    constructor(public name:string, private age:number) { }
}

const pesho = new MyClass('Pesho', 25);

(pesho as any).age = 100000000 // Sneaky way to get an access to a private prop 


enum UserRole {
    Admin = 1, 
    User,
}
