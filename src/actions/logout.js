import { redirect } from "react-router-dom";

//helpers
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";

export async function logoutAction() {

    //delete the user
    deleteItem("userName")
    
    toast.success("You've deleted the account!")

    //return redirect
    return redirect("/")

}