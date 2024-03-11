const resumeData = {
    name: "Josco J",
    contact: {
      email: "joscojo2000@gmail.com",
      phone: "9585354989",
      address: "Marthandam,Tamil Nadu"
    },
    profile: {
      summary: "A passionate Fresher looking for an good programmer."
    },
    education: [
      {
        degree: "BSC Computer",
        school: "Bishop Arokiya Sammy",
        location: "Marthandam,Tamil Nadu",
        year: "2015 to 2017",
        percentage: "70%"
      },
      {
        degree: "BSC",
        school: "Bishop Arokiya Sammy",
        location: "Marthandam,Tamil Nadu",
        year: "2015 to 2016",
        percentage: "77%"
      },
      {
        degree: "BSC",
        school: "BHS",
        location: "Nagercoil, India",
        year: "2017 to 2021",
        percentage: "65%"
      }
    ],
    languages: ["Tamil", "English", "malayalam"],
    skills: [
      "Effective communication",
      "Time Management",
      "Leadership Skills",
      "Stress Handling"
    ],
    certificates: [
      "MS Office",
      "C Program",
      "HTML",
      "Python",
      "JavaScript",
      "Digital Marketing"
    ],
  
  console.log(resumeData);
  // for loop 

  for (let i = 0; i < resumeData.education.length; i++) {
    const educationItem = resumeData.education[i];
    console.log(`Education ${i + 1}:`);
    for (const key in educationItem) {
      if (educationItem.hasOwnProperty(key)) {
        console.log(`  ${key}:`, educationItem[key]);
      }
    }
  }
  // for in loop
  for (const key in resumeData) {
    if (resumeData.hasOwnProperty(key)) {
      console.log(`${key}:`);
    }
  };
// for of loop 
for (const educationItem of resumeData.education) {
    console.log("Education:");
    for (const key in educationItem) {
      if (educationItem.hasOwnProperty(key)) {
        console.log(`  ${key}: ${educationItem[key]}`);
      }
    }
  };
  //for each loop 
  resumeData.education.forEach((educationItem, index) => {
    console.log(`Education ${index + 1}:`);
    for (const key in educationItem) {
      if (educationItem.hasOwnProperty(key)) {
        console.log(`  ${key}: ${educationItem[key]}`);
      }
    }
  });