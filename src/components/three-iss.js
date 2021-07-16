import React, { Fragment, useEffect, useState } from 'react';
import * as THREE from 'three';
import axios from 'axios';

export const getVertex = (latitude, longitude, radius) => {
  const vector = new THREE.Vector3().setFromSpherical(
    new THREE.Spherical(
      radius,
      THREE.MathUtils.degToRad(90 - latitude),
      THREE.MathUtils.degToRad(longitude)
    )
  );
  return vector;
};

const ThreeIss = () => {
  const [issNow, setIssNow] = useState(null);

  const poll = () => {
    axios
      .get('/api/get-iss-location')
      .then((response) => {
        setIssNow(response.data.iss_now);
      })
      .catch((error) => {
        console.log(error);
        throw new Error();
      });
  };

  useEffect(() => {
    const pollInterval = setInterval(() => {
      poll();
    }, 5000);

    poll();
    return () => clearInterval(pollInterval);
  }, []);

  return (
    <Fragment>
      {issNow ? (
        <mesh position={getVertex(issNow.latitude, issNow.longitude, 120)}>
          <sphereGeometry args={[2]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
      ) : null}
    </Fragment>
  );
};

export default ThreeIss;
