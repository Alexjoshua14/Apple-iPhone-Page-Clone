
import { savingsData } from "../constants/data";
import CardSection from "./cardSection";

const Savings = () => {
  return (
    <CardSection data={savingsData} header="Ways to save on iPhone." />
  );
}

export default Savings;