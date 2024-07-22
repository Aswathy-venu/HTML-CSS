// -- JS Code --

const imageArray = [
    "https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg",
    "https://media.istockphoto.com/id/1127069581/photo/medical-technology-concept.jpg?s=612x612&w=0&k=20&c=qp_smilHlWhGzZ-NcftDLugFs_EVCLfX2Z7WCAD1v6A=",
    "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202108/remoteconsultation-sixteen_nine.jpg?size=1200:675",
    "https://media.istockphoto.com/id/1028847418/vector/doctor-visit-with-patient-for-medicine-concept.jpg?s=612x612&w=0&k=20&c=0w5u7ShrukF7Jk_IgqBDRhW-3MfOJzuRurkIgSF9Wow=",
    "https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://img.etimg.com/thumb/width-1600,height-900,imgsize-5606,resizemode-75,msid-107913664/industry/healthcare/biotech/healthcare/online-preventive-health-check-ups-set-to-grow-50-in-january-march-tax-saving-season-simpl.jpg",
    "https://media.istockphoto.com/id/2154850841/photo/medical-industry-stock-market-graph-chart.webp?b=1&s=170667a&w=0&k=20&c=vBFUTgFjzjHA9UfFVe_12GHmPiDsRZX0nnwpFgdalc8=",
    "https://plus.unsplash.com/premium_photo-1682141160157-d6a296a65574?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  ];
  
  // Create a container and apply styles via a CSS class
  const container = document.createElement("div");
  container.className = "image-gallery";

  const div = document.createElement("div");
  div.className = "grid-gallery";

  // Create an array to hold the images
  const gallery = imageArray.map((image) => {
    const img = document.createElement("img");
    img.src = image;
    div.appendChild(img);
    return div;
  });
  
  // Create a DocumentFragment to batch DOM updates
  const fragment = document.createDocumentFragment();
  fragment.append(...gallery); // Append all elements at once
  
  // Append the fragment to the container and the container to the body
  container.appendChild(fragment);
  document.body.appendChild(container);
  
   