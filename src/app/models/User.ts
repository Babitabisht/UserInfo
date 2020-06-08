export
interface User {
    firstName: string,
    lastName: string,
    age?: number,
    address?: {
        city: string,
        state: string
    },
    image?:string,
    active?:boolean,
    balance?:number,
    registered?:any
}