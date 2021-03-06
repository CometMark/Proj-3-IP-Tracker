import React from 'react';
import './map.css';

const Map=(props)=>{
return(
    <div>

  <iframe title="map"  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" 
src={'https://maps.google.com/maps?q='
 + props.lat.toString() + 
 ','
  + props.lng.toString() + 
  '&t=&z=15&ie=UTF8&iwloc=&output=embed'}></iframe>

  <script type='text/javascript' 
  src='https://embedmaps.com/google-maps-authorization/script.js?id=5a33be79e53caf0a07dfec499abf84b7b481f165'>
</script>

    </div>
)
}

export default Map;