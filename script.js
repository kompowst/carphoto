// Image file names (ensure these match the files in your 'photos/' folder)
const imageFiles = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', 
    '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg',
    '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg'
  ];
  
  // Get the gallery container element
  const gallery = document.getElementById('gallery');
  
  // Loop through image files and create img elements
  imageFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = `photos/${file}`;  // Assuming images are in the 'photos' folder
    img.alt = file;
    gallery.appendChild(img);
  });
  