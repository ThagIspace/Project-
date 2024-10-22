import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export async function logoutAction() {
  // Display a success message
  toast.success("User logged out");

  // Redirect to the homepage without deleting local storage data
  return redirect("/");
}
