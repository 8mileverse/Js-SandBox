function fetchUser() {
    showSpinner()
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => {
        hideSpinner();
      displayUser(data.results[0]); // fetching the data from the results object array in the results object
    });

}

function displayUser(user) {
  // display the fetched user details in the results object only
  // Get the user's name and email from the API response

  const userDisplay = document.querySelector("#user"); // always call the attribute with its type

  if (user.gender === "male") {
    document.body.style.backgroundColor = "royalblue";
  } else {
    document.body.style.backgroundColor = "lightpink";
  }

  userDisplay.innerHTML = `
  <div class="flex justify-between">
  <div class="flex">
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="${user.picture.large}"
    />
    <div class="space-y-3">
      <p class="text-xl">
        <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
      </p>
      <p class="text-xl">
        <span class="font-bold">Email: </span> ${user.email}
      </p>
      <p class="text-xl">
        <span class="font-bold">Phone: </span> ${user.phone}
      </p>
      <p class="text-xl">
        <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}
      </p>
      <p class="text-xl"><span class="font-bold">Date Of Birth: </span> ${user.dob.date}</p>
      <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
    </div>
  </div>
</div>
  
  `;
}

function showSpinner() {


    document.querySelector('.spinner').style.display = 'block';
}function hideSpinner() {


    document.querySelector('.spinner').style.display = 'none';
}

fetchUser(); // calling it in the global namespace

const btn = document.querySelector("#generate");
btn.addEventListener("click", fetchUser);
