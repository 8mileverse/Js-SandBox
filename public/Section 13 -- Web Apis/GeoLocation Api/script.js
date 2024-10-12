// Get Position
function curSuccess(success) {
  const coords = success.coords;
  console.log(success);
  console.log(
    `Latitude: ${coords.latitude}, Longitude: ${coords.longitude} ,within: ${coords.accuracy} degrees`
  );

  console.log(coords);
}

function curError(err) {
  console.log`(err: ${err - code}-${err - message})`;
}

const Options = {
  enableHighAccuracy: true, // will use Gps if available
  timeout: 5000,
  maximumAge: 0, // do not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, Options);

// Watch Position

const target = {
  latitude: 42.947947,
  longitude: -78.159847,
  radius: 1000, // 1 km radius
};

function WatchSuccess(success) {
  const coords = success.coords;

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log("You Have Arrived at Your Destination!");
    navigator.geolocation.clearWatch(id);
  }
}

function Error(err) {
  console.log`(err: ${err - code}-${err - message})`;
}

const curOptions = {
  enableHighAccuracy: true, // will use Gps if available
  timeout: 5000,
  maximumAge: 0, // do not use a cached position
};

const id = navigator.geolocation.watchPosition(WatchSuccess, Error, curOptions);
