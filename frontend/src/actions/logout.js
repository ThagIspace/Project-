import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // Display a success message
  toast.success("User logged out");

  deleteItem({
    key: "userName"
  });
  return redirect("/");
}
