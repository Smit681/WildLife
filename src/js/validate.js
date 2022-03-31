/*

  Name: Smit Shah
  Student id: 116605205
  Username: syshah3@myseneca.ca
  Web Final assessment
  Github line: https://smit681.github.io/src/index.html
*/

function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
}

function validate() {
  var latitude = document.getElementById("Latitude").value;
  var longitude = document.getElementById("Longitude").value;
  document.getElementById("Latlab").innerHTML = "";
  document.getElementById("Longlab").innerHTML = "";
  var ok = false;
  if (isNaN(latitude) || latitude < -90 || latitude > 90) {
    document.getElementById("Latlab").innerHTML =
      "must be a valid Latitude (-90 to 90)";
  } else if (isNaN(longitude) || longitude < -180 || longitude > 180) {
    document.getElementById("Longlab").innerHTML =
      "must be a valid Longitude (-180 to 180)";
  } else {
    
    ok = true;
  }
  return ok;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
