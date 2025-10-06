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
    alert("Alredy Exit !!");
  } else {
    storeBD.push(id);
    const data = JSON.stringify(storeBD);
    localStorage.setItem("readList", data);
  }
};
export { addToStore, gatSB };
