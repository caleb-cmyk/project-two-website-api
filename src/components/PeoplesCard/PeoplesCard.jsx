import { useParams } from "react-router";
import ethnicService from "../../services/ethnicService/ethnicService";
import { useState } from "react";
import { useEffect } from "react";

const PeoplesCard = () => {
    const ethnicGroup = useParams().peopleId;
    const [ethnicInfo, setEthnicInfo] = useState({});

    useEffect(() => {
        const fetchEthnicInfo = async () => {
          const data = await ethnicService(ethnicGroup);
          const cleanEthnicData = {
            peopleName: data[0].PeopNameAcrossCountries,
            category: data[0].AffinityBloc,
            worldwidePopulation: data[0].PopulationPGAC,
            populationInCountriesCount: data[0].CountOfCountries,
          };
          setEthnicInfo(cleanEthnicData);
        };
        fetchEthnicInfo();
      }, [ethnicGroup]);

      return (
        <>
            <h1>{ethnicInfo.peopleName}</h1>
            <ul>
                <li>Ethnic Category: {ethnicInfo.category}</li>
                <li>Worldwide Population: {ethnicInfo.worldwidePopulation}</li>
                <li>Countries Present in: {ethnicInfo.populationInCountriesCount}</li>
            </ul>
        </>
    );
};

export default PeoplesCard;
