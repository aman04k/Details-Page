const data = {
    firstLevel: {
      secondLevel: {
        thirdLevel: {
          image: "https://example.com/image.jpg",
        },
      },
    },
  };
  
  const imageUrl = data?.firstLevel?.secondLevel?.thirdLevel?.image;
  
  if (imageUrl) {
    console.log("Image URL:", imageUrl);
  } else {
    console.log("Image not found!");
  }
  