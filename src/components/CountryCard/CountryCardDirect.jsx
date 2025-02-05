const CountryCardDirect = ( props ) => {

console.log(props)

    // const fetchCountriesInfoTest = async () => {
    //     const data = await countryService(countrySelected);
    //     const newCountriesInfo = {
    //       countryName: data[0].Ctry,
    //       capital: data[0].Capital,
    //       population: data[0].Population,
    //       officialLanguage: data[0].ROL3OfficialLanguage,
    //       primaryReligion: data[0].ReligionPrimary,
    //     };
    //     return newCountriesInfo;
    //   };
    //   console.log(fetchCountriesInfoTest());
    
    return (
        <>
          <h1>{props.country}</h1>
          <button>Add to List</button>
          <p>
            Capital: <span>capital</span>
          </p>
          <p>
            Population: <span>population</span>
          </p>
          <p>
            Official Language: <span>official lang</span>
            {/* Languages: iso 639-3 standard */}
          </p>
          <p>
            Predominant Religion: <span>religion</span>
          </p>
          <div>
            Predominant Ethnic Groups
            <ul>
              <li>Group 1: #XXX</li>
              <li>Group 2: #XXX</li>
              <li>Group 3: #XXX</li>
            </ul>
          </div>
        </>
      );
}

export default CountryCardDirect;