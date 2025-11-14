const express = require('express');
const app = express();
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser');

// add body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

const programmeData = {
    "campus": [
      {
        "campusID": 1,
        "name": "INTI International College Penang",
        "image": "assets/penang.jpeg",
      },
      {
        "campusID": 2,
        "name": "INTI International Subang Jaya",
        "image": "assets/subang.jpeg",
      },
      {
        "campusID": 3,
        "name": "INTI International Nilai",
        "image": "assets/nilai.jpeg",
      },
    ],
    "areaOfStudy": [
      {
        "areaID": 1000,
        "name": "Business",
        "campusID": 1,
      },
      {
        "areaID": 1001,
        "name": "Mass Communication",
        "campusID": 1,
      },
      {
        "areaID": 1002,
        "name": "Computing & IT",
        "campusID": 1,
      },
      {
        "areaID": 1003,
        "name": "Hospitality & Culinary Arts",
        "campusID": 1,
      },
      {
        "areaID": 1004,
        "name": "Biotechnology & Life Science",
        "campusID": 1,
      },
      {
        "areaID": 2000,
        "name": "American Degree Transfer Program",
        "campusID": 2,
      },
      {
        "areaID": 2001,
        "name": "Interior Design",
        "campusID": 2,
      },
      {
        "areaID": 2002,
        "name": "Graphic Design",
        "campusID": 2,
      },
      {
        "areaID": 2003,
        "name": "Engineering",
        "campusID": 2,
      },
      {
        "areaID": 2004,
        "name": "Art & Design",
        "campusID": 2,
      },
      {
        "areaID": 3000,
        "name": "Working Professionals",
        "campusID": 3,
      },
      {
        "areaID": 3001,
        "name": "Health Science",
        "campusID": 3,
      },
      {
        "areaID": 3002,
        "name": "Pre-University",
        "campusID": 3,
      },
      {
        "areaID": 3003,
        "name": "Mass Communication",
        "campusID": 3,
      },
      {
        "areaID": 3004,
        "name": "INTI English Language",
        "campusID": 3,
      }
    ],
    "programme": [
      {
        "programmeID": "DIEC",
        "campusID": 1,
        "areaID": 1000,
        "name": "Diploma in E-commerce",
      },
      {
        "programmeID": "DBMF",
        "campusID": 1,
        "areaID": 1000,
        "name": "Diploma in Business Management-Flexible Learning",
      },
      {
        "programmeID": "DIB",
        "campusID": 1,
        "areaID": 1000,
        "name": "Diploma in Business",
      },
      {
        "programmeID": "BOB",
        "campusID": 1,
        "areaID": 1000,
        "name": "Bachelor of Business (3+0)",
      },
      {
        "programmeID": "CIBS",
        "campusID": 1,
        "areaID": 1000,
        "name": "Certificate in Business Studies",
      },
      {
        "programmeID": "DIMS",
        "campusID": 1,
        "areaID": 1001,
        "name": "Diploma in Mass Communication",
      },
      {
        "programmeID": "DDM",
        "campusID": 1,
        "areaID": 1001,
        "name": "Diploma in Digital Media",
      },
      {
        "programmeID": "BMC",
        "campusID": 1,
        "areaID": 1001,
        "name": "Bachelor of Media Comunication(3+0)",
      },
      {
        "programmeID": "DMC",
        "campusID": 1,
        "areaID": 1001,
        "name": "Bachelor of Arts(Honours) Mass Communication 3+0",
      },
      {
        "programmeID": "FITN",
        "campusID": 1,
        "areaID": 1002,
        "name": "Foundation in Information Technology",
      },
      {
        "programmeID": "DITN",
        "campusID": 1,
        "areaID": 1002,
        "name": "Diploma in Information Technology",
      },
      {
        "programmeID": "DCS",
        "campusID": 1,
        "areaID": 1002,
        "name": "Diploma in Computer Science",
      },
      {
        "programmeID": "CITN",
        "campusID": 1,
        "areaID": 1002,
        "name": "Certificate in Information Technology",
      },
      {
        "programmeID": "BSC",
        "campusID": 1,
        "areaID": 1002,
        "name": "Bachelor of Science with Honours in Computing 3+0",
      },
      {
        "programmeID": "DCA",
        "campusID": 1,
        "areaID": 1003,
        "name": "Diploma in Culinary Arts",
      },
      {
        "programmeID": "DHM",
        "campusID": 1,
        "areaID": 1003,
        "name": "Diploma in Hotel Management",
      },
      {
        "programmeID": "SADTP",
        "campusID": 1,
        "areaID": 1004,
        "name": "Australian Degree Transfer Programme (Science)",
      },
      {
        "programmeID": "SCA",
        "campusID": 2,
        "areaID": 2000,
        "name": "Summer Course",
      },
      {
        "programmeID": "PDPA",
        "campusID": 2,
        "areaID": 2000,
        "name": "Psychology Degree Program",
      },
      {
        "programmeID": "MCDPA",
        "campusID": 2,
        "areaID": 2000,
        "name": "Mass Communication Degree Program",
      },
      {
        "programmeID": "HASPA",
        "campusID": 2,
        "areaID": 2001,
        "name": "Health and Applied Science Program",
      },
      {
        "programmeID": "EDPA",
        "campusID": 2,
        "areaID": 2000,
        "name": "Engineering Degree Program",
      },
      {
        "programmeID": "DID",
        "campusID": 2,
        "areaID": 2001,
        "name": "Diploma in Interior Design",
      },
      {
        "programmeID": "FID",
        "campusID": 2,
        "areaID": 2001,
        "name": "Foundation in Design",
      },
      {
        "programmeID": "FID",
        "campusID": 2,
        "areaID": 2002,
        "name": "Foundation in Design",
      },
      {
        "programmeID": "DSD",
        "campusID": 2,
        "areaID": 2002,
        "name": "Diploma in Immersive Design",
      },
      {
        "programmeID": "DGD",
        "campusID": 2,
        "areaID": 2002,
        "name": "Diploma in Graphic Design",
      },
      {
        "programmeID": "CAD",
        "campusID": 2,
        "areaID": 2002,
        "name": "Certificate in Art Design",
      },
      {
        "programmeID": "BGD",
        "campusID": 2,
        "areaID": 2002,
        "name": "BA(Hons)Graphic Desgn 3+0",
      },
      {
        "programmeID": "DME",
        "campusID": 2,
        "areaID": 2003,
        "name": "Diploma in Mechanical Engineering",
      },
      {
        "programmeID": "DQS",
        "campusID": 2,
        "areaID": 2003,
        "name": "Diploma in Quantity Surveying",
      },
      {
        "programmeID": "FIS",
        "campusID": 2,
        "areaID": 2003,
        "name": "Foundation in Science",
      },
      {
        "programmeID": "FID",
        "campusID": 2,
        "areaID": 2004,
        "name": "Foundation in Design",
      },
      {
        "programmeID": "DID",
        "campusID": 2,
        "areaID": 2004,
        "name": "Diploma in Interior Design",
      },
      {
        "programmeID": "DIMD",
        "campusID": 2,
        "areaID": 2004,
        "name": "Diploma in Immersive Design",
      },
      {
        "programmeID": "DGD",
        "campusID": 2,
        "areaID": 2004,
        "name": "Diploma in Graphic Design",
      },
      {
        "programmeID": "DFD",
        "campusID": 2,
        "areaID": 2004,
        "name": "Diploma in Fashion Design",
      },
      {
        "programmeID": "CAD",
        "campusID": 2,
        "areaID": 2004,
        "name": "Certificate in Art & Design",
      },
      {
        "programmeID": "MSIT",
        "campusID": 3,
        "areaID": 3000,
        "name": "Master of Science in Innovation and Technology (by Research)",
      },
      {
        "programmeID": "MSDS",
        "campusID": 3,
        "areaID": 3000,
        "name": "Master of Science in Data Science (by Research)",
      },
      {
        "programmeID": "MSCM-FM",
        "campusID": 3,
        "areaID": 3000,
        "name": "Master of Science in Construction Management (Facility Management)",
      },
      {
        "programmeID": "MSCM-BIM",
        "campusID": 3,
        "areaID": 3000,
        "name": "Master of Science in Construcation Management (Building Information Modelling)-(Fully Online)",
      },
      {
        "programmeID": "DBO",
        "campusID": 3,
        "areaID": 3000,
        "name": "Diploma in Business (Online Learning)",
      },
      {
        "programmeID": "DBA",
        "campusID": 3,
        "areaID": 3000,
        "name": "Doctor of Business Administration",
      },
      {
        "programmeID": "MHA",
        "campusID": 3,
        "areaID": 3001,
        "name": "Master in Health Administration",
      },
      {
        "programmeID": "BTCM",
        "campusID": 3,
        "areaID": 3001,
        "name": "Bachelor of Traditional Chinese Medicine(Hons)",
      },
      {
        "programmeID": "BSP",
        "campusID": 3,
        "areaID": 3001,
        "name": "B.Sc.(Hons) in Physiotherapy",
      },
      {
        "programmeID": "MHSP",
        "campusID": 3,
        "areaID": 3001,
        "name": "Master in Health Sciences (Physiotherapy)(by Research)",
      },
      {
        "programmeID": "FIA",
        "campusID": 3,
        "areaID": 3002,
        "name": "Foundation in Arts",
      },
      {
        "programmeID": "FIB",
        "campusID": 3,
        "areaID": 3002,
        "name": "Foundation in Business",
      },
      {
        "programmeID": "FITN",
        "campusID": 3,
        "areaID": 3002,
        "name": "Foundation in Information Technology",
      },
      {
        "programmeID": "FIS",
        "campusID": 3,
        "areaID": 3002,
        "name": "Foundation in Science",
      },
      {
        "programmeID": "FIA",
        "campusID": 3,
        "areaID": 3003,
        "name": "Foundation in Arts",
      },
      {
        "programmeID": "DMC",
        "campusID": 3,
        "areaID": 3003,
        "name": "Diploma in Mass Communication",
      },
      {
        "programmeID": "BMC",
        "campusID": 3,
        "areaID": 3003,
        "name": "Bachelor of Mass Communication(Hons)",
      },
      {
        "programmeID": "IETC",
        "campusID": 3,
        "areaID": 3004,
        "name": "IELTS Training Course",
      },
      {
        "programmeID": "IEP",
        "campusID": 3,
        "areaID": 3003,
        "name": "Intensive English Programme(IEP)",
      }
    ],
};

const facility = [
  {
    "locationID": 10,
    "name": "Disscussion Room",
    "image": "assets/discussionroom.png",
  },
  {
    "locationID": 11,
    "name": "Music Room",
    "image": "assets/musicroom.png",
  },
  {
    "locationID": 12,
    "name": "Basketball Court",
    "image": "assets/basketballcourt.jpg",
  },
  {
    "locationID": 13,
    "name": "Pool Table",
    "image": "assets/pooltable.jpeg",
  },
  {
    "locationID": 14,
    "name": "Ping Pong Table",
    "image": "assets/pingpong.jpeg",
  },
  {
    "locationID": 15,
    "name": "Cinema Room",
    "image": "assets/cinemaroom.png",
  },
];

const students = [
  {
      "studentID": "P21013627",
      "name": "Poh Zi Jun",
      "image": "assets/student_photo.png",
      "selected" : false,
  },
  {
      "studentID": "P21013432",
      "name": "Amelia",
      "image": "assets/amelia.jpg",
      "selected" : false,
  },  
  {
      "studentID": "P21013395",
      "name": "Ong Yu Chin",
      "image": "assets/ongyuchin.jpg",
      "selected" : false,
  },
];

const campuses = [
    {
        "campusID": 1,
        "name": "INTI International College Penang",
        "image": "assets/penang.jpeg",
    },
    {
        "campusID": 2,
        "name": "INTI International Subang Jaya",
        "image": "assets/subang.jpeg",
    },
    {
        "campusID": 3,
        "name": "INTI International Nilai",
        "image": "assets/nilai.jpeg",
    },
];

const programme = [
    {
        "programmeID": "DIEC",
        "campusID": 1,
        "areaID": 1000,
        "name": "Diploma in E-commerce",
    },
    {
        "programmeID": "DBMF",
        "campusID": 1,
        "areaID": 1000,
        "name": "Diploma in Business Management-Flexible Learning",
    },
    {
        "programmeID": "DIB",
        "campusID": 1,
        "areaID": 1000,
        "name": "Diploma in Business",
    },
    {
        "programmeID": "BOB",
        "campusID": 1,
        "areaID": 1000,
        "name": "Bachelor of Business (3+0)",
    },
    {
        "programmeID": "CIBS",
        "campusID": 1,
        "areaID": 1000,
        "name": "Certificate in Business Studies",
    },
    {
        "programmeID": "DIMS",
        "campusID": 1,
        "areaID": 1001,
        "name": "Diploma in Mass Communication",
    },
    {
        "programmeID": "DDM",
        "campusID": 1,
        "areaID": 1001,
        "name": "Diploma in Digital Media",
    },
    {
        "programmeID": "BMC",
        "campusID": 1,
        "areaID": 1001,
        "name": "Bachelor of Media Comunication(3+0)",
    },
    {
        "programmeID": "DMC",
        "campusID": 1,
        "areaID": 1001,
        "name": "Bachelor of Arts(Honours) Mass Communication 3+0",
    },
    {
        "programmeID": "FITN",
        "campusID": 1,
        "areaID": 1002,
        "name": "Foundation in Information Technology",
    },
    {
        "programmeID": "DITN",
        "campusID": 1,
        "areaID": 1002,
        "name": "Diploma in Information Technology",
    },
    { 
        "programmeID": "DCS",
        "campusID": 1,
        "areaID": 1002,
        "name": "Diploma in Computer Science",
    },
    { 
        "programmeID": "CITN",
        "campusID": 1,
        "areaID": 1002,
        "name": "Certificate in Information Technology",
    },
    {
        "programmeID": "BSC",
        "campusID": 1,
        "areaID": 1002,
        "name": "Bachelor of Science with Honours in Computing 3+0",
    },
    {
        "programmeID": "DCA",
        "campusID": 1,
        "areaID": 1003,
        "name": "Diploma in Culinary Arts",
    },
    {
        "programmeID": "DHM",
        "campusID": 1,
        "areaID": 1003,
        "name": "Diploma in Hotel Management",
    },
    {
        "programmeID": "SADTP",
        "campusID": 1,
        "areaID": 1004,
        "name": "Australian Degree Transfer Programme (Science)",
    },
    {
        "programmeID": "SCA",
        "campusID": 2,
        "areaID": 2000,
        "name": "Summer Course",
    },
    {
        "programmeID": "PDPA",
        "campusID": 2,
        "areaID": 2000,
        "name": "Psychology Degree Program",
    },
    {
        "programmeID": "MCDPA",
        "campusID": 2,
        "areaID": 2000,
        "name": "Mass Communication Degree Program",
    },
    {
        "programmeID": "HASPA",
        "campusID": 2,
        "areaID": 2001,
        "name": "Health and Applied Science Program",
    },
    {
        "programmeID": "EDPA",
        "campusID": 2,
        "areaID": 2000,
        "name": "Engineering Degree Program",
    },
    { 
        "programmeID": "DID",
        "campusID": 2,
        "areaID": 2001,
        "name": "Diploma in Interior Design",
    },
    {
        "programmeID": "FID",
        "campusID": 2,
        "areaID": 2001,
        "name": "Foundation in Design",
    },
    {
        "programmeID": "FID",
        "campusID": 2,
        "areaID": 2002,
        "name": "Foundation in Design",
    },
    {
        "programmeID": "DSD",
        "campusID": 2,
        "areaID": 2002,
        "name": "Diploma in Immersive Design",
    },
    {
        "programmeID": "DGD",
        "campusID": 2,
        "areaID": 2002,
        "name": "Diploma in Graphic Design",
    },
    {
        "programmeID": "CAD",
        "campusID": 2,
        "areaID": 2002,
        "name": "Certificate in Art Design",
    },
    {
        "programmeID": "BGD",
        "campusID": 2,
        "areaID": 2002,
        "name": "BA(Hons)Graphic Desgn 3+0",
    },
    {
        "programmeID": "DME",
        "campusID": 2,
        "areaID": 2003,
        "name": "Diploma in Mechanical Engineering",
    },
    {
        "programmeID": "DQS",
        "campusID": 2,
        "areaID": 2003,
        "name": "Diploma in Quantity Surveying",
    },
    {
        "programmeID": "FIS",
        "campusID": 2,
        "areaID": 2003,
        "name": "Foundation in Science",
    },
    {
        "programmeID": "FID",
        "campusID": 2,
        "areaID": 2004,
        "name": "Foundation in Design",
    },
    {
        "programmeID": "DID",
        "campusID": 2,
        "areaID": 2004,
        "name": "Diploma in Interior Design",
    },
    {
        "programmeID": "DIMD",
        "campusID": 2,
        "areaID": 2004,
        "name": "Diploma in Immersive Design",
    },
    {
        "programmeID": "DGD",
        "campusID": 2,
        "areaID": 2004,
        "name": "Diploma in Graphic Design",
    },
    {
        "programmeID": "DFD",
        "campusID": 2,
        "areaID": 2004,
        "name": "Diploma in Fashion Design",
    },
    {
        "programmeID": "CAD",
        "campusID": 2,
        "areaID": 2004,
        "name": "Certificate in Art & Design",
    },
    {
        "programmeID": "MSIT",
        "campusID": 3,
        "areaID": 3000,
        "name": "Master of Science in Innovation and Technology (by Research)",
    },
    {
        "programmeID": "MSDS",
        "campusID": 3,
        "areaID": 3000,
        "name": "Master of Science in Data Science (by Research)",
    },
    {
        "programmeID": "MSCM-FM",
        "campusID": 3,
        "areaID": 3000,
        "name": "Master of Science in Construction Management (Facility Management)",
    },
    {
        "programmeID": "MSCM-BIM",
        "campusID": 3,
        "areaID": 3000,
        "name": "Master of Science in Construcation Management (Building Information Modelling)-(Fully Online)",
    },
    {
        "programmeID": "DBO",
        "campusID": 3,
        "areaID": 3000,
        "name": "Diploma in Business (Online Learning)",
    },
    {
        "programmeID": "DBA",
        "campusID": 3,
        "areaID": 3000,
        "name": "Doctor of Business Administration",
    },
    {
        "programmeID": "MHA",
        "campusID": 3,
        "areaID": 3001,
        "name": "Master in Health Administration",
    },
    {
        "programmeID": "BTCM",
        "campusID": 3,
        "areaID": 3001,
        "name": "Bachelor of Traditional Chinese Medicine(Hons)",
    },
    {
        "programmeID": "BSP",
        "campusID": 3,
        "areaID": 3001,
        "name": "B.Sc.(Hons) in Physiotherapy",
    },
    {
        "programmeID": "MHSP",
        "campusID": 3,
        "areaID": 3001,
        "name": "Master in Health Sciences (Physiotherapy)(by Research)",
    },
    {
        "programmeID": "FIA",
        "campusID": 3,
        "areaID": 3002,
        "name": "Foundation in Arts",
    },
    {
        "programmeID": "FIB",
        "campusID": 3,
        "areaID": 3002,
        "name": "Foundation in Business",
    },
    {
        "programmeID": "FITN",
        "campusID": 3,
        "areaID": 3002,
        "name": "Foundation in Information Technology",
    },
    {
        "programmeID": "FIS",
        "campusID": 3,
        "areaID": 3002,
        "name": "Foundation in Science",
    },
    {
        "programmeID": "FIA",
        "campusID": 3,
        "areaID": 3003,
        "name": "Foundation in Arts",
    },
    {
        "programmeID": "DMC",
        "campusID": 3,
        "areaID": 3003,
        "name": "Diploma in Mass Communication",
    },
    {
        "programmeID": "BMC",
        "campusID": 3,
        "areaID": 3003,
        "name": "Bachelor of Mass Communication(Hons)",
    },
    {
        "programmeID": "IETC",
        "campusID": 3,
        "areaID": 3004,
        "name": "IELTS Training Course",
    },
    {
        "programmeID": "IEP",
        "campusID": 3,
        "areaID": 3003,
        "name": "Intensive English Programme(IEP)",
    }
];

const foodCategory = [
  {
    "foodCategoryID": 21,
    "name": "Rice",
  },
  {
    "foodCategoryID": 22,
    "name": "Bread",
  },
  {
    "foodCategoryID": 23,
    "name": "Noodle",
  },
  {
    "foodCategoryID": 24,
    "name": "Western",
  },
];

const foodData = [
  {
    "foodID": 2001,
    "name": "Nasi Lemak",
    "price": 10.00,
    "image": "assets/nasilemak.jpeg",
    "foodCategoryID": 21,
  },
  {
    "foodID": 2002,
    "name": "Fried Rice",
    "price": 6.00,
    "image": "assets/friedrice.jpeg",
    "foodCategoryID": 21,
  },
  {
    "foodID": 2003,
    "name": "Nasi Biryani",
    "price": 12.00,
    "image": "assets/biryani.jpeg",
    "foodCategoryID": 21,
  },
  {
    "foodID": 2004,
    "name": "Roti Bakar",
    "price": 3.00,
    "image": "assets/rotibakar.png",
    "foodCategoryID": 22,
  },
  {
    "foodID": 2005,
    "name": "Butter + Kaya",
    "price": 5.00,
    "image": "assets/butterkaya.jpeg",
    "foodCategoryID": 22,
  },
  {
    "foodID": 2006,
    "name": "Peanut Butter",
    "price": 4.00,
    "image": "assets/peanutbutter.jpeg",
    "foodCategoryID": 22,
  },
  {
    "foodID": 2007,
    "name": "Bread + Butter",
    "price": 3.00,
    "image": "assets/butter.jpeg",
    "foodCategoryID": 22,
  },
  {
    "foodID": 2008,
    "name": "Fried Noodle",
    "price": 5.00,
    "image": "assets/friednoodle.jpeg",
    "foodCategoryID": 23,
  },
  {
    "foodID": 2009,
    "name": "Bihun Goreng",
    "price": 5.00,
    "image": "assets/bihungoreng.jpeg",
    "foodCategoryID": 23,
  },
  {
    "foodID": 2010,
    "name": "Tomyam Bihun",
    "price": 4.00,
    "image": "assets/tomyambihun.jpeg",
    "foodCategoryID": 23,
  },
  {
    "foodID": 2011,
    "name": "Maggie",
    "price": 6.00,
    "image": "assets/maggiegoreng.jpeg",
    "foodCategoryID": 23,
  },
  {
    "foodID": 2012,
    "name": "Spaghetti",
    "price": 8.00,
    "image": "assets/spaghetti.jpeg",
    "foodCategoryID": 24,
  },
  {
    "foodID": 2013,
    "name": "Carbonara",
    "price": 6.00,
    "image": "assets/carbonara.jpeg",
    "foodCategoryID": 24,
  },
  {
    "foodID": 2014,
    "name": "Chicken Chop",
    "price": 12.00,
    "image": "assets/chickenchop.jpeg",
    "foodCategoryID": 24,
  },
  {
    "foodID": 2015,
    "name": "Black Pepper Chicken",
    "price": 14.00,
    "image": "assets/blackpepper.jpeg",
    "foodCategoryID": 24,
  },
  {
    "foodID": 2016,
    "name": "Fish & Chip",
    "price": 12.00,
    "image": "assets/fishnchip.jpeg",
    "foodCategoryID": 24,
  },
];

const appointments = [];
const orders = [];
const orderFoods = [];
const bookStudents = [];

const accounts = [
  {
    "name": "Poh Zi Jun",
    "studentID": "P21013627",
    "ic": "000711070807",
    "password": "$2a$10$um1XdNi.Ol0tiGgck4RsTOeaiX9PHWGzpNzvnxrIaxqEwMkpYn37i"
  },
  {
    "name": "Amelia",
    "studentID": "P21013432",
    "ic": "03072471234",
    "password": "$2a$10$CMMBYcwTRBDXKoDlLoFDW.BtMtB1TYQAlvlbd495ZoZTSCy4fhtwC"
  },
  {
    "name": "Ong Yu Chin",
    "studentID": "P21013395",
    "ic": "031026070000",
    "password": "$2a$10$zD4ni6zGxRI2lFk02kugwuWZoOdtmWFoZColLlvCSFrZUsJkYsgIe"
  },
];

let timeSlots = [];

function createTimeSlots() {
  const start = new Date();
  start.setHours(8, 0, 0, 0);
  const end = new Date(start.getFullYear(), 11, 31);
  end.setHours(16, 0, 0, 0);

  const dayInSecs = 24 * 60 * 60; // number of seconds in a day
  for (let date = start; date < end; date.setDate(date.getDate() + 1)) {
    for (let i = date.getTime(); i < date.getTime() + dayInSecs * 1000; i += 3600 * 1000) {
      const slotDate = Math.floor(i / 1000); // convert Unix timestamp to seconds and round down to nearest integer
      timeSlots.push({
        slotDate: slotDate,
        blockDate: 0
      });
    }
  }
}

createTimeSlots();

app.use(express.json());

app.get('/account', (req, res) => {
  res.send(accounts);
});


app.post('/register', (req, res) => {
  const { name, studentID, ic, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      // Create an account object with the hashed password
      const account = {
        name,
        studentID,
        ic,
        password: hashedPassword,
      };

      // Store the account in the accounts array (you can replace this with your database logic)
      accounts.push(account);

      // Send the account object as the response
      res.json(account);
    }
  });
});

// Endpoint for password verification
app.post('/login', (req, res) => {
  const { studentID, password } = req.body;

  // Find the account with the matching studentID (you can replace this with your database logic)
  const account = accounts.find((acc) => acc.studentID === studentID);

  if (!account) {
    res.status(404).json({ error: 'Account not found' });
  } else {
    // Compare the entered password with the stored hashed password
    bcrypt.compare(password, account.password, (err, result) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else if (result) {
        res.json(account);
      } else {
        res.status(401).json({ error: 'Incorrect password' });
      }
    });
  }
});


const f = 3000;
const fcounter = Array.from({length: f}, (_, index) => index + 1);

app.post('/add/order', (req, res) => {
  const order = {
      orderID: fcounter.length + 1,
      date: parseInt(req.body.date),
  };
  fcounter.push(1);
  orders.push(order);
  res.send(order);
});

app.post('/order/food', (req, res) => {
  const orderFood = {
    orderID: parseInt(req.body.orderID),
    foodID: parseInt(req.body.foodID),
    quantity: parseInt(req.body.quantity),
  };
  orderFoods.push(orderFood);
  res.send(orderFood);
});

app.get('/order', (req, res) => {
  res.send(orders);
});

app.get('/food/order', (req, res) => {
  res.send(orderFoods);
});

app.get('/timeslots', (req, res) => {
  res.send(timeSlots);
});

app.get('/time_slots/:date', (req, res) => {
  const { date } = req.params;

  // Convert date string to Unix timestamp
  const timestamp = new Date(date).getTime() / 1000;

  const timeSlotsByDate = timeSlots.filter(slot => {
    return slot.slotDate >= timestamp && slot.slotDate < timestamp + 24 * 60 * 60;
  });

  res.json({ slots: timeSlotsByDate });
});


app.put('/timeslots/:slotDate', (req, res) => {
  const slotDate = parseInt(req.params.slotDate); // extract slotDate from the URL and parse it as an integer
  const blockDate = parseInt(req.body.blockDate); // extract the new value for blockDate from the request body and parse it as an integer

  // find the time slot with the matching slotDate and update its blockDate property
  const timeSlotToUpdate = timeSlots.find(slot => slot.slotDate === slotDate);
  if (!timeSlotToUpdate) {
    return res.status(404).send('Time slot not found');
  }

  timeSlotToUpdate.blockDate = blockDate;

  res.send(timeSlotToUpdate);
});

app.get('/', (req, res) => {
    res.send('INTI API');
});

app.get('/facility', (req, res) => {
  res.send(facility);
});


app.get('/students', (req, res) => {
  res.send(students);
});

app.post('/add/students', (req, res) => {
  const student = {
    studentID: req.body.studentID,
    name: req.body.name,
    image: "",
    selected: false,
  };
  students.push(student);
  res.send(student);
});

app.get('/appointment', (req, res) => {
  res.send(appointments);
});

const n = 1000;
const counter = Array.from({length: n}, (_, index) => index + 1);
// create appointment

app.post('/book/facility', (req, res) => {
  const appointment = {
      bookID: counter.length + 1,
      locationID: parseInt(req.body.locationID),
      arrivalDate: parseInt(req.body.arrivalDate),
      duration: parseInt(req.body.duration),
  };
  counter.push(1);
  appointments.push(appointment);
  res.send(appointment);
});

// Endpoint to delete an appointment
app.delete('/book/facility/:bookID', (req, res) => {
  const bookID = parseInt(req.params.bookID);

  // Find the index of the appointment in the appointments array
  const index = appointments.findIndex((appointment) => appointment.bookID === bookID);

  if (index === -1) {
    res.status(404).json({ error: 'Appointment not found' });
  } else {
    // Remove the appointment from the appointments array
    const deletedAppointment = appointments.splice(index, 1)[0];
    res.json({ message: 'Appointment deleted', appointment: deletedAppointment });
  }
});

app.get('/appointment/students', (req, res) => {
  res.send(bookStudents);
});

app.post('/book/students', (req, res) => {
  const bookStudent = {
    bookID: parseInt(req.body.bookID),
    studentID: req.body.studentID
  };
  bookStudents.push(bookStudent);
  res.send(bookStudent);
});

app.get('/programmeData', (req, res) => {
  res.send(programmeData);
});

app.get('/campus', (req, res) => {
    res.send(campuses);
});

app.get('/campus/:campusID', (req, res) => {
    const campus =  campuses.find(c => c.campusID === parseInt(req.params.campusID));
    if (!campus) res.status(404).send('The campus with the given ID was not found');
    res.send(campus);
});

app.get('/programme', (req, res) => {
    res.send(programme);
});

app.get('/programme/:programmeID', (req, res) => {
    let theProgram =  programme.find((program) => program.programmeID === req.params.programmeID);
    if (!theProgram) res.status(404).send('The program with the given ID was not found');
    res.send(theProgram);
});

app.get('/foodCategory', (req, res) => {
  res.send(foodCategory);
});

app.get('/foodData', (req, res) => {
  res.send(foodData);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));