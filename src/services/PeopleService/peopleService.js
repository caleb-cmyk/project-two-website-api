const API_KEY = "7d19b3b9e2fb";
// const BASE_URL = "https://api.joshuaproject.net/v1/people_groups.json?api_key=7d19b3b9e2fb&countries=IR&limit=1&page=1";

const peopleService = async ( countryCode ) => {
  const url = `https://api.joshuaproject.net/v1/people_groups.json?api_key=${API_KEY}&countries=${countryCode}&page=1`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json;
      // console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  export default peopleService;
