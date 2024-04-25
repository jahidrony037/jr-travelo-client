import { useContext } from "react";
import { auth } from "../firebase/firebase.config";

const useAuth = () => {
  const allInfo = useContext(auth);
  return allInfo;
};

export default useAuth;
