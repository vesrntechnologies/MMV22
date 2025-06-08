// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Which type of gear box provided with spur gears?",
    immg: "img1",
    answer: "Sliding mesh gear box",
    options: [
      "Auto synchromesh gear box",
      "Constant mesh gear box",
      "Sliding mesh gear box",
      "Synchromesh gear box"
    ]
  },
  {
    numb: 2,
    question: "What type of inspection carried out on the pressure plate shown in the figure?",
    immg: "img2",
    answer: "Checking warpage",
    options: [
      "Checking warpage",
      "Checking crack",
      "Checking clearance",
      "Checking squareness"
    ]
  },
  {
    numb: 3,
    question: "What is the advantage of dual mass fly wheel?",
    immg: "img3",
    answer: "Reduction of gear box and body noises",
    options: [
      "Prevent wrong clutch engagements",
      "Reduction of gear box and body noises",
      "Transmit the torque with less effort",
      "Reduce the possibility of clutch slip"
    ]
  },
  {
    numb: 4,
    question: "Which part of dual mass fly wheel isolate the fly wheel mass system of the engine?",
    immg: "img4",
    answer: "Vibration damper",
    options: [
      "Gear box",
      "Vibration damper",
      "Crank shaft",
      "Cam shaft"
    ]
  },
  {
    numb: 5,
    question: "What is the advantage of dog clutch?",
    immg: "img5",
    answer: "No possibility of slip",
    options: [
      "No possibility of slip",
      "More frictional area",
      "Less pedal force to operate",
      "Easy maintenance and repair"
    ]
  },
  {
    numb: 6,
    question: "Which type of clutch provides more frictional area and simple in construction?",
    immg: "img6",
    answer: "Cone clutch",
    options: [
      "Diaphragm spring clutch",
      "Cone clutch",
      "Dog clutch",
      "Multi plate clutch"
    ]
  },
  {
    numb: 7,
    question: "What is the advantage of using single plate hydraulic clutch?",
    immg: "img7",
    answer: "Minimize the force to operate the clutch",
    options: [
      "Minimize the force to operate the clutch",
      "Hard transmission",
      "Maximize the force to operate the clutch",
      "Easy repair and maintenance"
    ]
  },
  {
    numb: 8,
    question: "What is the name of the part marked as ‘X’ shown in the figure?",
    immg: "img8",
    answer: "Damper spring",
    options: [
      "Damper spring",
      "Clutch lining",
      "Torque plate",
      "Rivets"
    ]
  },
  {
    numb: 9,
    question: "What is the name of the part marked as ‘X’ shown in the figure?",
    immg: "img9",
    answer: "Fly wheel",
    options: [
      "Clutch plate hub",
      "Gear box drive shaft",
      "Fly wheel",
      "Pressure plate"
    ]
  },
  {
    numb: 10,
    question: "What is the main feature of hydraulic actuated clutches?",
    immg: "img10",
    answer: "Pedal effort transmitted through fluid",
    options: [
      "Pedal effort transmitted through linkage",
      "Pedal effort transmitted through spring",
      "Pedal effort transmitted through fluid",
      "Pedal effort transmitted through coupling"
    ]
  },
  
  {
    numb: 11,
    question: "What is the advantage of mechanical actuated type clutches?",
    immg: "img11",
    answer: "Less maintenance and repair",
    options: [
      "Less maintenance and repair",
      "Less pedal effort",
      "Smooth functioning",
      "Easy to operate"
    ]
  },
  {
    numb: 12,
    question: "Which factor does not affect the torque transmission by clutch?",
    immg: "img12",
    answer: "Radial load on the clutch",
    options: [
      "Size of clutch plate",
      "Co-efficient friction",
      "Number of clutch plates used",
      "Radial load on the clutch"
    ]
  },
  {
    numb: 13,
    question: "What is the function of clutch?",
    immg: "img13",
    answer: "Connect and disconnect power flow engine to gear box",
    options: [
      "Increase and decrease the RPM of engine",
      "Connect and disconnect power flow engine to gear box",
      "Reduce the noise during engine running",
      "Prevent malfunctioning of fly wheel"
    ]
  },
  {
    numb: 14,
    question: "Which system making the drive cabin comfortable for driving?",
    immg: "img14",
    answer: "HVAC system",
    options: [
      "HVAC system",
      "Starting system",
      "Steering system",
      "Charging system"
    ]
  },
  {
    numb: 15,
    question: "Which system provides DC power source for the various units of the vehicles?",
    immg: "img15",
    answer: "Charging system",
    options: [
      "Storage system",
      "Charging system",
      "Lighting system",
      "Steering system"
    ]
  },
  {
    numb: 16,
    question: "Which type of drive line used in sand and slushy ground?",
    immg: "img16",
    answer: "All wheel drive line",
    options: [
      "Front wheel drive line",
      "Rear wheel drive line",
      "All wheel drive line",
      "Center wheel drive line"
    ]
  },
  {
    numb: 17,
    question: "Which type of gear box can be operated even by unskilled driver?",
    immg: "img17",
    answer: "Synchromesh gear box",
    options: [
      "Synchromesh gear box",
      "Sliding mesh gear box",
      "Constant mesh gear box",
      "Compound wheel mesh gear box"
    ]
  },
  {
    numb: 18,
    question: "Which type of synchromesh gear box will produce torque more than three times of other types?",
    immg: "img18",
    answer: "Multi and Double cone",
    options: [
      "Baulk type",
      "Baulk ring type",
      "Multi and Double cone",
      "Porsche type"
    ]
  },
  {
    numb: 19,
    question: "Which type of synchromesh gear box used for heavy commercial vehicles?",
    immg: "img19",
    answer: "Multi and double cone type",
    options: [
      "Baulk type",
      "Multi and double cone type",
      "Baulk ring type",
      "Porsche type"
    ]
  },
  {
    numb: 20,
    question: "Which gear will produce clicking noise during teeth contact?",
    immg: "img20",
    answer: "Spur gear",
    options: [
      "Spur gear",
      "Bevel gear",
      "Helical gear",
      "Worm gear"
    ]
  },
  {
    numb: 21,
    question: "What is the location of propeller shaft?",
    immg: "img21",
    answer: "Between gear box and final drive",
    options: [
      "Between clutch shaft and fly wheel",
      "Between gear box and final drive",
      "Between cam shaft and clutch shaft",
      "Between crankshaft and fly wheel"
    ]
  },
  {
    numb: 22,
    question: "Which part provides flexible connection and permits smooth transfer of torque from gear box to the rear axle?",
    immg: "img22",
    answer: "Universal joint",
    options: [
      "Universal joint",
      "Fly wheel",
      "Half shaft",
      "Clutch shaft"
    ]
  },
  {
    numb: 23,
    question: "Which type of gear produces axial thrust?",
    immg: "img23",
    answer: "Worm gear",
    options: [
      "Rack & Pinion gear",
      "Herring bone gears",
      "Spur gear",
      "Worm gear"
    ]
  },
  {
    numb: 24,
    question: "What is the necessity of square cut seals?",
    immg: "img24",
    answer: "Prevents the seal rolling in groove",
    options: [
      "Prevents fluid leakage",
      "Prevents the seal rolling in groove",
      "Provides cushioning effect",
      "Withstands radial movement"
    ]
  },
  {
    numb: 25,
    question: "Which type of gear box allows the gear to slide on the shaft?",
    immg: "img25",
    answer: "Sliding mesh gear box",
    options: [
      "Sliding mesh gear box",
      "Synchromesh gear box",
      "Constant mesh gear box",
      "Compound wheel mesh gear box"
    ]
  },
  {
    numb: 26,
    question: "Why is synchromesh action needed in a gearbox?",
    immg: "img26",
    answer: "Easy gear shifting when vehicle is in motion",
    options: [
      "Provides noise in gear shifting",
      "Prevents cushioning effect during gear shifting",
      "Easy gear shifting when vehicle is in motion",
      "Damages the gear teeth during gear change"
    ]
  },
  {
    numb: 27,
    question: "Which type of clutch does not require clutch pedal?",
    immg: "img27",
    answer: "Centrifugal",
    options: [
      "Cone",
      "Centrifugal",
      "Diaphragm",
      "Single plate"
    ]
  },
  {
    numb: 28,
    question: "What is the type of gear shown in the figure?",
    immg: "img28",
    answer: "Spur gears",
    options: [
      "Spur gears",
      "Helical gears",
      "Rack & pinion",
      "Worm gears"
    ]
  },
  {
    numb: 29,
    question: "Which is the final unit in transmission system?",
    immg: "img29",
    answer: "Final drive",
    options: [
      "Differential",
      "Rear axle",
      "Gear box",
      "Final drive"
    ]
  },
  {
    numb: 30,
    question: "What is the name of the gear shown in the figure?",
    immg: "img30",
    answer: "Helical gears",
    options: [
      "Worm gears",
      "Helical gears",
      "Spur gears",
      "Spur bevel gear"
    ]
  },
  {
    numb: 31,
    question: "What is the type of gear shown in the figure?",
    immg: "img31",
    answer: "Rack & pinion",
    options: [
      "Spiral bevel gears",
      "Helical gears",
      "Rack & pinion",
      "Worm gears"
    ]
  },
  {
    numb: 32,
    question: "What is the name of the gear shown in the figure?",
    immg: "img32",
    answer: "Worm gears",
    options: [
      "Helical gears",
      "Worm gears",
      "Herring bone gears",
      "Spur gears"
    ]
  },
  {
    numb: 33,
    question: "What is the name of the gear shown in the figure?",
    immg: "img33",
    answer: "Herring bone gears",
    options: [
      "Herring bone gears",
      "Helical gears",
      "Sun gear",
      "Star gear"
    ]
  },
  {
    numb: 34,
    question: "What is the advantages of helical gears rather than spur gears in a transmission?",
    immg: "img34",
    answer: "Low noise level",
    options: [
      "Low cost",
      "Less end thrust",
      "Low noise level",
      "Low speed"
    ]
  },
  {
    numb: 35,
    question: "What is the name of the drive shown in the figure?",
    immg: "img35",
    answer: "Four wheel drive",
    options: [
      "Front wheel drive",
      "Rear wheel drive",
      "Center wheel drive",
      "Four wheel drive"
    ]
  },
  {
    numb: 36,
    question: "Which is up and down movement component of propeller shaft?",
    immg: "img36",
    answer: "Universal joint",
    options: [
      "Flange coupling",
      "Knuckle joint",
      "Rag joint",
      "Universal joint"
    ]
  },
  {
    numb: 37,
    question: "What is the name of part marked as ‘X’ in the drive?",
    immg: "img37",
    answer: "Differential",
    options: [
      "Differential",
      "Gearbox",
      "Slip joint",
      "Propeller shaft"
    ]
  },
  {
    numb: 38,
    question: "What is the name of part marked as ‘X’ in the drive?",
    immg: "img38",
    answer: "Differential housing",
    options: [
      "Rear leaf springs",
      "Differential housing",
      "Gearbox",
      "Transfer case"
    ]
  },
  {
    numb: 39,
    question: "Which one of the following geometrical shape's centre of gravity lies from its base is 1/3 of its height?",
    immg: "img39",
    answer: "Triangle",
    options: [
      "Square",
      "Rhombus",
      "Triangle",
      "Cone"
    ]
  },
  {
    numb: 40,
    question: "What is the formula for circumference of a circle?",
    immg: "img40",
    answer: "2πr",
    options: [
      "πr",
      "πd",
      "2πr",
      "πr²"
    ]
  },
  {
    numb: 41,
    question: "What is the formula for area of the circle?",
    immg: "img41",
    answer: "πr²",
    options: [
      "2πr",
      "πr²",
      "πd²",
      "πr"
    ]
  },
  {
    numb: 42,
    question: "Which line is called as chord?",
    immg: "img42",
    answer: "AB",
    options: [
      "ED",
      "AB",
      "OD",
      "OE"
    ]
  },
  {
    numb: 43,
    question: "What is the radius of a circle whose diameter is 44 cm?",
    immg: "img43",
    answer: "22 cm",
    options: [
      "44 cm",
      "22 cm",
      "23 cm",
      "20 cm"
    ]
  },
  {
    numb: 44,
    question: "Which type of stress?",
    immg: "img44",
    answer: "Shear stress",
    options: [
      "Tensile stress",
      "Compressive stress",
      "Shear stress",
      "Torsional stress"
    ]
  },
  {
    numb: 45,
    question: "Identify the type of brake.",
    immg: "img45",
    answer: "Drum brake",
    options: [
      "Air brake",
      "Disc brake",
      "Drum brake",
      "Hydraulic brake"
    ]
  },
  {
    numb: 46,
    question: "Identify the part.",
    immg: "img46",
    answer: "Spark plug",
    options: [
      "Blower",
      "Valve",
      "Compressor",
      "Spark plug"
    ]
  },
  {
    numb: 47,
    question: "Which part is used to get different torques and speeds?",
    immg: "img47",
    answer: "Gear box",
    options: [
      "Steering",
      "Gear box",
      "Clutch",
      "Wheel"
    ]
  },
  {
    numb: 48,
    question: "Which of the following metals is used to make electrical wires?",
    immg: "img48",
    answer: "Copper",
    options: [
      "Copper",
      "Silver",
      "Magnesium",
      "Lead"
    ]
  },
  {
    numb: 49,
    question: "What type of current does a car battery produce?",
    immg: "img49",
    answer: "Direct Current",
    options: [
      "Alternating current",
      "Flow current",
      "Under- Tow current",
      "Direct Current"
    ]
  },
  {
    numb: 50,
    question: "Which instrument is prohibited to connect with live wire?",
    immg: "img50",
    answer: "Ohmmeter",
    options: [
      "Ammeter",
      "Ohmmeter",
      "Voltmeter",
      "Wattmeter"
    ]
  }




  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
