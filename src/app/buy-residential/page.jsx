import BuyResidentialPage from "@/templates/BuyResidentialPage";

async function BuyResidential({ searchParams }) {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/profile`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    let finalData = await res.json();

    if (searchParams.category) {
      finalData = finalData.data.filter(
        (i) => i.category === searchParams.category
      );
    }

    return <BuyResidentialPage data={finalData.data} />;
  } catch (error) {
    return <h3>Error fetching data: {error.message}</h3>;
  }
}

export default BuyResidential;
