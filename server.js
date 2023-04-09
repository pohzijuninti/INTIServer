const express = require('express');
const app = express();

const programmeData = {
    "campus": [
      {
        "campusID": 0001,
        "name": "INTI International College Penang",
        "image": "assets/penang.jpeg",
      },
      {
        "campusID": 0002,
        "name": "INTI International Subang Jaya",
        "image": "assets/subang.jpeg",
      },
      {
        "campusID": 0003,
        "name": "INTI International Nilai",
        "image": "assets/nilai.jpeg",
      },
    ],
    "areaOfStudy": [
      {
        "areaID": 1000,
        "name": "Business",
        "campusID": 0001,
      },
      {
        "areaID": 1001,
        "name": "Mass Communication",
        "campusID": 0001,
      },
      {
        "areaID": 1002,
        "name": "Computing & IT",
        "campusID": 0001,
      },
      {
        "areaID": 1003,
        "name": "Hospitality & Culinary Arts",
        "campusID": 0001,
      },
      {
        "areaID": 1004,
        "name": "Biotechnology & Life Science",
        "campusID": 0001,
      },
      {
        "areaID": 2000,
        "name": "American Degree Transfer Program",
        "campusID": 0002,
      },
      {
        "areaID": 2001,
        "name": "Interior Design",
        "campusID": 0002,
      },
      {
        "areaID": 2002,
        "name": "Graphic Design",
        "campusID": 0002,
      },
      {
        "areaID": 2003,
        "name": "Engineering",
        "campusID": 0002,
      },
      {
        "areaID": 2004,
        "name": "Art & Design",
        "campusID": 0002,
      },
      {
        "areaID": 3000,
        "name": "Working Professionals",
        "campusID": 0003,
      },
      {
        "areaID": 3001,
        "name": "Health Science",
        "campusID": 0003,
      },
      {
        "areaID": 3002,
        "name": "Pre-University",
        "campusID": 0003,
      },
      {
        "areaID": 3003,
        "name": "Mass Communication",
        "campusID": 0003,
      },
      {
        "areaID": 3004,
        "name": "INTI English Language",
        "campusID": 0003,
      }
    ],
    "programme": [
      {
        "programmeID": "DIEC",
        "campusID": 0001,
        "areaID": 1000,
        "name": "Diploma in E-commerce",
      },
      {
        "programmeID": "DBMF",
        "campusID": 0001,
        "areaID": 1000,
        "name": "Diploma in Business Management-Flexible Learning",
      },
      {
        "programmeID": "DIB",
        "campusID": 0001,
        "areaID": 1000,
        "name": "Diploma in Business",
      },
      {
        "programmeID": "BOB",
        "campusID": 0001,
        "areaID": 1000,
        "name": "Bachelor of Business (3+0)",
      },
      {
        "programmeID": "CIBS",
        "campusID": 0001,
        "areaID": 1000,
        "name": "Certificate in Business Studies",
      },
      {
        "programmeID": "DIMS",
        "campusID": 0001,
        "areaID": 1001,
        "name": "Diploma in Mass Communication",
      },
      {
        "programmeID": "DDM",
        "campusID": 0001,
        "areaID": 1001,
        "name": "Diploma in Digital Media",
      },
      {
        "programmeID": "BMC",
        "campusID": 0001,
        "areaID": 1001,
        "name": "Bachelor of Media Comunication(3+0)",
      },
      {
        "programmeID": "DMC",
        "campusID": 0001,
        "areaID": 1001,
        "name": "Bachelor of Arts(Honours) Mass Communication 3+0",
      },
      {
        "programmeID": "FITN",
        "campusID": 0001,
        "areaID": 1002,
        "name": "Foundation in Information Technology",
      },
      {
        "programmeID": "DITN",
        "campusID": 0001,
        "areaID": 1002,
        "name": "Diploma in Information Technology",
      },
      {
        "programmeID": "DCS",
        "campusID": 0001,
        "areaID": 1002,
        "name": "Diploma in Computer Science",
      },
      {
        "programmeID": "CITN",
        "campusID": 0001,
        "areaID": 1002,
        "name": "Certificate in Information Technology",
      },
      {
        "programmeID": "BSC",
        "campusID": 0001,
        "areaID": 1002,
        "name": "Bachelor of Science with Honours in Computing 3+0",
      },
      {
        "programmeID": "DCA",
        "campusID": 0001,
        "areaID": 1003,
        "name": "Diploma in Culinary Arts",
      },
      {
        "programmeID": "DHM",
        "campusID": 0001,
        "areaID": 1003,
        "name": "Diploma in Hotel Management",
      },
      {
        "programmeID": "SADTP",
        "campusID": 0001,
        "areaID": 1004,
        "name": "Australian Degree Transfer Programme (Science)",
      },
      {
        "programmeID": "SCA",
        "campusID": 0002,
        "areaID": 2000,
        "name": "Summer Course",
      },
      {
        "programmeID": "PDPA",
        "campusID": 0002,
        "areaID": 2000,
        "name": "Psychology Degree Program",
      },
      {
        "programmeID": "MCDPA",
        "campusID": 0002,
        "areaID": 2000,
        "name": "Mass Communication Degree Program",
      },
      {
        "programmeID": "HASPA",
        "campusID": 0002,
        "areaID": 2001,
        "name": "Health and Applied Science Program",
      },
      {
        "programmeID": "EDPA",
        "campusID": 0002,
        "areaID": 2000,
        "name": "Engineering Degree Program",
      },
      {
        "programmeID": "DID",
        "campusID": 0002,
        "areaID": 2001,
        "name": "Diploma in Interior Design",
      },
      {
        "programmeID": "FID",
        "campusID": 0002,
        "areaID": 2001,
        "name": "Foundation in Design",
      },
      {
        "programmeID": "FID",
        "campusID": 0002,
        "areaID": 2002,
        "name": "Foundation in Design",
      },
      {
        "programmeID": "DSD",
        "campusID": 0002,
        "areaID": 2002,
        "name": "Diploma in Immersive Design",
      },
      {
        "programmeID": "DGD",
        "campusID": 0002,
        "areaID": 2002,
        "name": "Diploma in Graphic Design",
      },
      {
        "programmeID": "CAD",
        "campusID": 0002,
        "areaID": 2002,
        "name": "Certificate in Art Design",
      },
      {
        "programmeID": "BGD",
        "campusID": 0002,
        "areaID": 2002,
        "name": "BA(Hons)Graphic Desgn 3+0",
      },
      {
        "programmeID": "DME",
        "campusID": 0002,
        "areaID": 2003,
        "name": "Diploma in Mechanical Engineering",
      },
      {
        "programmeID": "DQS",
        "campusID": 0002,
        "areaID": 2003,
        "name": "Diploma in Quantity Surveying",
      },
      {
        "programmeID": "FIS",
        "campusID": 0002,
        "areaID": 2003,
        "name": "Foundation in Science",
      },
      {
        "programmeID": "FID",
        "campusID": 0002,
        "areaID": 2004,
        "name": "Foundation in Design",
      },
      {
        "programmeID": "DID",
        "campusID": 0002,
        "areaID": 2004,
        "name": "Diploma in Interior Design",
      },
      {
        "programmeID": "DIMD",
        "campusID": 0002,
        "areaID": 2004,
        "name": "Diploma in Immersive Design",
      },
      {
        "programmeID": "DGD",
        "campusID": 0002,
        "areaID": 2004,
        "name": "Diploma in Graphic Design",
      },
      {
        "programmeID": "DFD",
        "campusID": 0002,
        "areaID": 2004,
        "name": "Diploma in Fashion Design",
      },
      {
        "programmeID": "CAD",
        "campusID": 0002,
        "areaID": 2004,
        "name": "Certificate in Art & Design",
      },
      {
        "programmeID": "MSIT",
        "campusID": 0003,
        "areaID": 3000,
        "name": "Master of Science in Innovation and Technology (by Research)",
      },
      {
        "programmeID": "MSDS",
        "campusID": 0003,
        "areaID": 3000,
        "name": "Master of Science in Data Science (by Research)",
      },
      {
        "programmeID": "MSCM-FM",
        "campusID": 0003,
        "areaID": 3000,
        "name": "Master of Science in Construction Management (Facility Management)",
      },
      {
        "programmeID": "MSCM-BIM",
        "campusID": 0003,
        "areaID": 3000,
        "name": "Master of Science in Construcation Management (Building Information Modelling)-(Fully Online)",
      },
      {
        "programmeID": "DBO",
        "campusID": 0003,
        "areaID": 3000,
        "name": "Diploma in Business (Online Learning)",
      },
      {
        "programmeID": "DBA",
        "campusID": 0003,
        "areaID": 3000,
        "name": "Doctor of Business Administration",
      },
      {
        "programmeID": "MHA",
        "campusID": 0003,
        "areaID": 3001,
        "name": "Master in Health Administration",
      },
      {
        "programmeID": "BTCM",
        "campusID": 0003,
        "areaID": 3001,
        "name": "Bachelor of Traditional Chinese Medicine(Hons)",
      },
      {
        "programmeID": "BSP",
        "campusID": 0003,
        "areaID": 3001,
        "name": "B.Sc.(Hons) in Physiotherapy",
      },
      {
        "programmeID": "MHSP",
        "campusID": 0003,
        "areaID": 3001,
        "name": "Master in Health Sciences (Physiotherapy)(by Research)",
      },
      {
        "programmeID": "FIA",
        "campusID": 0003,
        "areaID": 3002,
        "name": "Foundation in Arts",
      },
      {
        "programmeID": "FIB",
        "campusID": 0003,
        "areaID": 3002,
        "name": "Foundation in Business",
      },
      {
        "programmeID": "FITN",
        "campusID": 0003,
        "areaID": 3002,
        "name": "Foundation in Information Technology",
      },
      {
        "programmeID": "FIS",
        "campusID": 0003,
        "areaID": 3002,
        "name": "Foundation in Science",
      },
      {
        "programmeID": "FIA",
        "campusID": 0003,
        "areaID": 3003,
        "name": "Foundation in Arts",
      },
      {
        "programmeID": "DMC",
        "campusID": 0003,
        "areaID": 3003,
        "name": "Diploma in Mass Communication",
      },
      {
        "programmeID": "BMC",
        "campusID": 0003,
        "areaID": 3003,
        "name": "Bachelor of Mass Communication(Hons)",
      },
      {
        "programmeID": "IETC",
        "campusID": 0003,
        "areaID": 3004,
        "name": "IELTS Training Course",
      },
      {
        "programmeID": "IEP",
        "campusID": 0003,
        "areaID": 3003,
        "name": "Intensive English Programme(IEP)",
      }
    ],
};

const campuses = [
    {
        "campusID": 0001,
        "name": "INTI International College Penang",
        "image": "assets/penang.jpeg",
    },
    {
        "campusID": 0002,
        "name": "INTI International Subang Jaya",
        "image": "assets/subang.jpeg",
    },
    {
        "campusID": 0003,
        "name": "INTI International Nilai",
        "image": "assets/nilai.jpeg",
    },
];

const programme = [
    {
        "programmeID": "DIEC",
        "campusID": 0001,
        "areaID": 1000,
        "name": "Diploma in E-commerce",
    },
    {
        "programmeID": "DBMF",
        "campusID": 0001,
        "areaID": 1000,
        "name": "Diploma in Business Management-Flexible Learning",
    },
    {
        "programmeID": "DIB",
        "campusID": 0001,
        "areaID": 1000,
        "name": "Diploma in Business",
    },
    {
        "programmeID": "BOB",
        "campusID": 0001,
        "areaID": 1000,
        "name": "Bachelor of Business (3+0)",
    },
    {
        "programmeID": "CIBS",
        "campusID": 0001,
        "areaID": 1000,
        "name": "Certificate in Business Studies",
    },
    {
        "programmeID": "DIMS",
        "campusID": 0001,
        "areaID": 1001,
        "name": "Diploma in Mass Communication",
    },
    {
        "programmeID": "DDM",
        "campusID": 0001,
        "areaID": 1001,
        "name": "Diploma in Digital Media",
    },
    {
        "programmeID": "BMC",
        "campusID": 0001,
        "areaID": 1001,
        "name": "Bachelor of Media Comunication(3+0)",
    },
    {
        "programmeID": "DMC",
        "campusID": 0001,
        "areaID": 1001,
        "name": "Bachelor of Arts(Honours) Mass Communication 3+0",
    },
    {
        "programmeID": "FITN",
        "campusID": 0001,
        "areaID": 1002,
        "name": "Foundation in Information Technology",
    },
    {
        "programmeID": "DITN",
        "campusID": 0001,
        "areaID": 1002,
        "name": "Diploma in Information Technology",
    },
    { 
        "programmeID": "DCS",
        "campusID": 0001,
        "areaID": 1002,
        "name": "Diploma in Computer Science",
    },
    { 
        "programmeID": "CITN",
        "campusID": 0001,
        "areaID": 1002,
        "name": "Certificate in Information Technology",
    },
    {
        "programmeID": "BSC",
        "campusID": 0001,
        "areaID": 1002,
        "name": "Bachelor of Science with Honours in Computing 3+0",
    },
    {
        "programmeID": "DCA",
        "campusID": 0001,
        "areaID": 1003,
        "name": "Diploma in Culinary Arts",
    },
    {
        "programmeID": "DHM",
        "campusID": 0001,
        "areaID": 1003,
        "name": "Diploma in Hotel Management",
    },
    {
        "programmeID": "SADTP",
        "campusID": 0001,
        "areaID": 1004,
        "name": "Australian Degree Transfer Programme (Science)",
    },
    {
        "programmeID": "SCA",
        "campusID": 0002,
        "areaID": 2000,
        "name": "Summer Course",
    },
    {
        "programmeID": "PDPA",
        "campusID": 0002,
        "areaID": 2000,
        "name": "Psychology Degree Program",
    },
    {
        "programmeID": "MCDPA",
        "campusID": 0002,
        "areaID": 2000,
        "name": "Mass Communication Degree Program",
    },
    {
        "programmeID": "HASPA",
        "campusID": 0002,
        "areaID": 2001,
        "name": "Health and Applied Science Program",
    },
    {
        "programmeID": "EDPA",
        "campusID": 0002,
        "areaID": 2000,
        "name": "Engineering Degree Program",
    },
    { 
        "programmeID": "DID",
        "campusID": 0002,
        "areaID": 2001,
        "name": "Diploma in Interior Design",
    },
    {
        "programmeID": "FID",
        "campusID": 0002,
        "areaID": 2001,
        "name": "Foundation in Design",
    },
    {
        "programmeID": "FID",
        "campusID": 0002,
        "areaID": 2002,
        "name": "Foundation in Design",
    },
    {
        "programmeID": "DSD",
        "campusID": 0002,
        "areaID": 2002,
        "name": "Diploma in Immersive Design",
    },
    {
        "programmeID": "DGD",
        "campusID": 0002,
        "areaID": 2002,
        "name": "Diploma in Graphic Design",
    },
    {
        "programmeID": "CAD",
        "campusID": 0002,
        "areaID": 2002,
        "name": "Certificate in Art Design",
    },
    {
        "programmeID": "BGD",
        "campusID": 0002,
        "areaID": 2002,
        "name": "BA(Hons)Graphic Desgn 3+0",
    },
    {
        "programmeID": "DME",
        "campusID": 0002,
        "areaID": 2003,
        "name": "Diploma in Mechanical Engineering",
    },
    {
        "programmeID": "DQS",
        "campusID": 0002,
        "areaID": 2003,
        "name": "Diploma in Quantity Surveying",
    },
    {
        "programmeID": "FIS",
        "campusID": 0002,
        "areaID": 2003,
        "name": "Foundation in Science",
    },
    {
        "programmeID": "FID",
        "campusID": 0002,
        "areaID": 2004,
        "name": "Foundation in Design",
    },
    {
        "programmeID": "DID",
        "campusID": 0002,
        "areaID": 2004,
        "name": "Diploma in Interior Design",
    },
    {
        "programmeID": "DIMD",
        "campusID": 0002,
        "areaID": 2004,
        "name": "Diploma in Immersive Design",
    },
    {
        "programmeID": "DGD",
        "campusID": 0002,
        "areaID": 2004,
        "name": "Diploma in Graphic Design",
    },
    {
        "programmeID": "DFD",
        "campusID": 0002,
        "areaID": 2004,
        "name": "Diploma in Fashion Design",
    },
    {
        "programmeID": "CAD",
        "campusID": 0002,
        "areaID": 2004,
        "name": "Certificate in Art & Design",
    },
    {
        "programmeID": "MSIT",
        "campusID": 0003,
        "areaID": 3000,
        "name": "Master of Science in Innovation and Technology (by Research)",
    },
    {
        "programmeID": "MSDS",
        "campusID": 0003,
        "areaID": 3000,
        "name": "Master of Science in Data Science (by Research)",
    },
    {
        "programmeID": "MSCM-FM",
        "campusID": 0003,
        "areaID": 3000,
        "name": "Master of Science in Construction Management (Facility Management)",
    },
    {
        "programmeID": "MSCM-BIM",
        "campusID": 0003,
        "areaID": 3000,
        "name": "Master of Science in Construcation Management (Building Information Modelling)-(Fully Online)",
    },
    {
        "programmeID": "DBO",
        "campusID": 0003,
        "areaID": 3000,
        "name": "Diploma in Business (Online Learning)",
    },
    {
        "programmeID": "DBA",
        "campusID": 0003,
        "areaID": 3000,
        "name": "Doctor of Business Administration",
    },
    {
        "programmeID": "MHA",
        "campusID": 0003,
        "areaID": 3001,
        "name": "Master in Health Administration",
    },
    {
        "programmeID": "BTCM",
        "campusID": 0003,
        "areaID": 3001,
        "name": "Bachelor of Traditional Chinese Medicine(Hons)",
    },
    {
        "programmeID": "BSP",
        "campusID": 0003,
        "areaID": 3001,
        "name": "B.Sc.(Hons) in Physiotherapy",
    },
    {
        "programmeID": "MHSP",
        "campusID": 0003,
        "areaID": 3001,
        "name": "Master in Health Sciences (Physiotherapy)(by Research)",
    },
    {
        "programmeID": "FIA",
        "campusID": 0003,
        "areaID": 3002,
        "name": "Foundation in Arts",
    },
    {
        "programmeID": "FIB",
        "campusID": 0003,
        "areaID": 3002,
        "name": "Foundation in Business",
    },
    {
        "programmeID": "FITN",
        "campusID": 0003,
        "areaID": 3002,
        "name": "Foundation in Information Technology",
    },
    {
        "programmeID": "FIS",
        "campusID": 0003,
        "areaID": 3002,
        "name": "Foundation in Science",
    },
    {
        "programmeID": "FIA",
        "campusID": 0003,
        "areaID": 3003,
        "name": "Foundation in Arts",
    },
    {
        "programmeID": "DMC",
        "campusID": 0003,
        "areaID": 3003,
        "name": "Diploma in Mass Communication",
    },
    {
        "programmeID": "BMC",
        "campusID": 0003,
        "areaID": 3003,
        "name": "Bachelor of Mass Communication(Hons)",
    },
    {
        "programmeID": "IETC",
        "campusID": 0003,
        "areaID": 3004,
        "name": "IELTS Training Course",
    },
    {
        "programmeID": "IEP",
        "campusID": 0003,
        "areaID": 3003,
        "name": "Intensive English Programme(IEP)",
    }
];

app.get('/', (req, res) => {
    res.send('INTI API');
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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));