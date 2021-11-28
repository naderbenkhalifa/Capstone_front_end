import { PurchaseItem } from "./PurchaseItem";
import { User } from "./user";

export class Purchase {
      
	  id?: number;
	 user?:User;
	 dateOfPurchase?:string;
	 purchaseItems?:Array<PurchaseItem>;
	 totalcost?:number;


	  constructor()
	  {
		
	  }
}
