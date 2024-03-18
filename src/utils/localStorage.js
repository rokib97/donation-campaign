import { toast } from "react-toastify";

export const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("donate")) || [];
  return data;
};

export const saveToLocalStorage = (data) => {
  const savedData = JSON.parse(localStorage.getItem("donate")) || [];
  const existedData = savedData.find((item) => item.id == data.id);
  if (!existedData) {
    savedData.push(data);
    localStorage.setItem("donate", JSON.stringify(savedData));
    toast.success("Donation Added Successfully!");
  } else {
    toast.error("Already exits!");
  }
};
