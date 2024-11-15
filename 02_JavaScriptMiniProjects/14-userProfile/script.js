let profileDetails = {
    imgSrc: "https://res.cloudinary.com/dxauytfko/image/upload/v1731560532/IMG_20220410_184532_158_bxqnqe.jpg",
    name: "MD ZEESHAN",
    age: 21
  };
  
  let profileContainerEl = document.getElementById("profileContainer");
  profileContainerEl.classList.add( "text-center", "d-flex", "flex-column", "justify-content-center");
  
  let imgContainerEl = document.getElementById("imgContainer");
  
  //create an userProfileImg and append it to the imgContainerEl
  
  let imgEl = document.createElement("img");
  imgEl.setAttribute("src", profileDetails.imgSrc);
  imgEl.classList.add("profile-img");
  imgContainerEl.appendChild(imgEl);
  
  //create a nameEl and append it to the profileContainerEl
  
  let nameEl = document.createElement("h1");
  nameEl.classList.add("profile-name");
  nameEl.textContent = profileDetails.name;
  profileContainerEl.appendChild(nameEl);
  
  //create an ageEl and append it to the profileContainerEl
  
  let ageEl = document.createElement("p");
  ageEl.classList.add("age");
  ageEl.textContent = "Age: " + profileDetails.age;
  profileContainerEl.appendChild(ageEl);
  