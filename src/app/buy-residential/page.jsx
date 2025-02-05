import BuyResidentialPage from "@/templates/BuyResidentialPage";
import axios from "axios";

async function BuyResidential({ searchParams }) {
  const res = await axios
    .get("http://localhost:3000/api/profile", { cache: "no-store" })
    .then((res) => res.data)
    .catch((err) => err.response.data);

  if (res.error) return <h3>{res.error}</h3>;

  let finalData = res.data;
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialPage data={JSON.parse(JSON.stringify(finalData))} />;
}

export default BuyResidential;
