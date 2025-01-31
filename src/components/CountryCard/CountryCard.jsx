const CountryCard = ( props ) => {
  return (
    <>
      <img
        src="https://media.cntraveler.com/photos/6124643cc9e624849c7a44bd/16:9/w_2240,c_limit/LICENSE_Mehrdad-Mzadeh-Tehran_(c)-Getty-Images_CNT-UK_Sophie-Knight.jpg"
        alt="Iran"
        //replace with CSS style module
        style={{ maxWidth: "30%", height: "auto" }}
      />
      <h1>{props.countryInfo.countryName}</h1>
      <p>
        Capital: <span>{props.countryInfo.capital}</span>
      </p>
      <p>
        Population: <span>{props.countryInfo.population}</span>
      </p>
      <p>
        Official Language: <span>{props.countryInfo.officialLanguage}</span>
        {/* Languages: iso 639-3 standard */}
      </p>
      <p>
        Predominant Religion: <span>{props.countryInfo.primaryReligion}</span>
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
};

export default CountryCard;
