/**
 * @file
 * Minimalist reproduction of mapbox/mapbox-gl-js#4359
 */

const Mapbox = require('mapbox-gl');

const container = document.createElement('div');

const styles = document.createElement('link');
styles.href = 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css';
styles.setAttribute('rel', 'stylesheet');

document.head.appendChild(styles);
document.body.appendChild(container);

Mapbox.accessToken = ''; // Enter access token here, though output is the same.

const map = new Mapbox.Map({
  container,
  style: 'mapbox://styles/mapbox/streets-v9',
});
