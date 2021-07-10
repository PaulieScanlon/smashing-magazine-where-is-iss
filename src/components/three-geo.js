import React, { Fragment, useState, useEffect } from 'react';
import { GeoJsonGeometry } from 'three-geojson-geometry';
import axios from 'axios';

const ThreeGeo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [geoJson, setGeoJson] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson'
      )
      .then((response) => {
        setIsLoading(false);
        setGeoJson(response.data);
      })
      .catch((error) => {
        console.log(error);
        throw new Error();
      });
  }, []);

  return (
    <Fragment>
      {!isLoading ? (
        <Fragment>
          {geoJson.features.map(({ geometry }, index) => {
            return (
              <lineSegments
                key={index}
                geometry={new GeoJsonGeometry(geometry, 100)}
              >
                <lineBasicMaterial color="#80cbc4" />
              </lineSegments>
            );
          })}
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default ThreeGeo;
