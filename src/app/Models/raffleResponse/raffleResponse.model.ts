import { Donor } from "../donor/donor";
import { User } from "../user/user.model";

export class RaffleResponse {
    public id:number=0;
    public donor!:Donor;
    public user!:User;

}