window.onload = () => {
   const data = JSON.parse(localStorage.getItem("data"));
   console.log();

   document.querySelector("#fullname").innerHTML = data.fullName;
   document.querySelector("#role").innerHTML = data.role;
   document.querySelector("#about").innerHTML = data.about;
   document.querySelector("#mobile").innerHTML = data.mobile;
   document.querySelector("#place").innerHTML = data.place;
   document.querySelector("#email").innerHTML = data.email;
   document.querySelector("#linkden").innerHTML =
      data.linkden === undefined ? "" : data.linkden;
   document.querySelector("#github").innerHTML =
      data.github === undefined ? "" : data.github;

   // localStorage.removeItem("data");
};
