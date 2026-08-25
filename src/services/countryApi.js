const COUNTRY_API =
  "https://restcountries.com/v3.1";

export const getCountry = async (country) => {
  const response = await fetch(
    `${COUNTRY_API}/name/${country}`
  );

  if (!response.ok) {
    throw new Error("Country not found");
  }

  const data = await response.json();

  return data[0];
};