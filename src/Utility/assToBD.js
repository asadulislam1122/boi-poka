import { GiToaster } from "react-icons/gi";
import { toast } from "react-toastify";

const gatSB = () => {
  const storeBSTR = localStorage.getItem("readList");
  if (storeBSTR) {
    const storeBData = JSON.parse(storeBSTR);
    return storeBData;
  } else {
    return [];
  }
};
const addToStore = (id) => {
  const storeBD = gatSB();
  if (storeBD.includes(id)) {
    toast("Already Exists!", {
      style: {
        border: "1px solid #ff4d4d",
        background: "#ffe6e6",
        color: "#b30000",
        fontWeight: "bold",
      },
      icon: "⚠️",
    });
  } else {
    storeBD.push(id);
    const data = JSON.stringify(storeBD);
    localStorage.setItem("readList", data);
  }
};
export { addToStore, gatSB };
