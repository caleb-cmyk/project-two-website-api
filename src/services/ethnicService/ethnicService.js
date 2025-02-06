const API_KEY = "7d19b3b9e2fb";

const ethnicService = async ( peopleIndex ) => {
  const url = `https://api.joshuaproject.net/v1/people_groups/${peopleIndex}.json?api_key=${API_KEY}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json;
    //   console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  export default ethnicService;
