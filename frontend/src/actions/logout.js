import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";
export async function logoutAction() {
  //delete user name from local storage
  deleteItem({ 
        key: "userName" 
    });
    deleteItem({ 
      key: "budgets" 
  });
  deleteItem({ 
    key: "expenses" 
});
  toast.success("User deleted");

  return redirect("/");
}
