// const addCode = () => {
//    const div = document.createElement("div");
//    //    div.className = "educationSection";
//    //    div.innerHTML += `
//    //    <div class="mb-3">
//    //    <label for="exampleInputPassword1" class="form-label">college name</label>
//    //    <input type="text" class="form-control" />
//    // </div>
//    // <div class="mb-3">
//    //    <label for="exampleInputPassword1" class="form-label">Location</label>
//    //    <input type="text" class="form-control" />
//    // </div>
//    // <div class="mb-3">
//    //    <label for="exampleInputPassword1" class="form-label">Degree</label>
//    //    <input type="text" class="form-control" />
//    // </div>
//    // <div class="mb-3">
//    //    <label for="exampleInputPassword1" class="form-label">Description</label>
//    //    <input type="text" class="form-control" />
//    // </div>`;
//    //    div.innerHTML = "<h1>hello world</h1>";
//    const ele = document.createElement("h1");
//    const text = document.createTextNode("hello world");
//    ele.appendChild(text);
//    //    div.appendChild(ele);
//    document.getElementById("educationSection").appendChild(ele);
//    console.log("object");
// };

const onSubmit = () => {
   const fullName = document.querySelector("#fullName").value;
   const role = document.querySelector("#role").value;
   const About = document.querySelector("#about").value;
   const mobile = document.querySelector("#mobile").value;
   const place = document.querySelector("#place").value;
   const email = document.querySelector("#email").value;
   const linkden = document.querySelector("#linkden").value;
   const github = document.querySelector("#github").value;
   // console.log(fullName);

   const data = {
      fullName: fullName,
      role: role,
      about: About,
      mobile: mobile,
      place: place,
      email: email,
      linkden: linkden,
      github: github,
   };
   console.log("object");
   localStorage.setItem("data", JSON.stringify(data));
};
