export class UserInfo{
    constructor(
    public id: number,
    public first_name?: string,
    public last_name?: string,
    public email?: string,
    public avatar?: string,
    public following?: boolean
    ){}
}