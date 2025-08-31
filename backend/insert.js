// insertQuestions.js
const mongoose = require("mongoose");

const uri = "mongodb+srv://EGD123:eY0OKatyuPtjPA1j@egd.z7obr2r.mongodb.net/questionSet?retryWrites=true&w=majority&appName=EGD";

// ---- Your provided question sets ----
const q1Questions = [
  "Write your full name initials and year of joining college (e.g., A.S.2021) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite superhero name and year (e.g., BATMAN2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your dream profession and birth year (e.g., DOCTOR2003) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite season and any year (e.g., WINTER2019) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your school name initials and pass-out year (e.g., D.P.S.2020) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your best friend's name and their birth year (e.g., RAVI2002) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your current city name and year (e.g., MUMBAI2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a motivational word and any year (e.g., BELIEVE2021) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite sport and a year (e.g., CRICKET2018) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a country name you want to visit and year (e.g., JAPAN2025) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your surname and graduation year (e.g., SINGH2024) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'GROWTH' and any year (e.g., GROWTH2026) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'FOCUS' and a meaningful year (e.g., FOCUS2020) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'POWER' and a lucky year (e.g., POWER2005) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your pet's name and adoption year (e.g., BRUNO2019) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'MIND' and a year (e.g., MIND2024) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'BRAVE' and any year (e.g., BRAVE2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'UNITY' and a year of significance (e.g., UNITY1947) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the name of a mountain and any year (e.g., EVEREST2010) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the name of a river and a historical year (e.g., GANGA1984) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'ENERGY' and any year (e.g., ENERGY2027) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite subject and a random year (e.g., MATH2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a planet name and a futuristic year (e.g., MARS2070) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a flower name and a random year (e.g., LOTUS2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a tree name and year (e.g., NEEM2016) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'SKY' and a past year (e.g., SKY2011) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'RACE' and any year (e.g., RACE2009) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'CALM' and a peaceful year (e.g., CALM2001) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite bird name and year (e.g., PARROT2014) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'HAPPY' and a birthday year (e.g., HAPPY1998) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'TRUST' and a random year (e.g., TRUST2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'HONEST' and a memorable year (e.g., HONEST2017) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'SKILL' and a practice year (e.g., SKILL2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a movie title and year (e.g., AVATAR2009) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite animal and any year (e.g., TIGER2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'NEVERGIVEUP' and a recent year (e.g., NEVERGIVEUP2024) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your college abbreviation and a current year (e.g., IITD2025) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'ENGINEER' and your graduation year (e.g., ENGINEER2026) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word 'LEADER' and any meaningful year (e.g., LEADER2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the name of a god or goddess and a year (e.g., SHIVA2020) in 35mm height uppercase double-stroke Gothic letters."
];

const otherQuestions = [
 // Involute curves (20 questions)
    "Draw an involute of a circle with 25mm diameter.",
    "Construct an involute of a square with 30mm sides.",
    "Draw the involute of an equilateral triangle with 35mm sides.",
    "A string is unwound from a semicircle of 40mm diameter. Draw the path of the free end.",
    "Draw the involute of a regular pentagon with 25mm sides.",
    "Construct an involute of a hexagon with 20mm sides.",
    "Draw an involute of a circle with 30mm radius where string length equals half circumference.",
    "Construct an involute of a rectangle 40mm × 25mm starting from a corner.",
    "Draw the involute of an isosceles triangle with base 40mm and height 35mm.",
    "A string is unwound from three-quarters of a circle with 35mm diameter. Draw the path.",
    "Construct an involute of a right-angled triangle with sides 30mm and 40mm.",
    "Draw the involute of a quarter-circle with 30mm radius.",
    "A string is unwound from a circle of 50mm diameter by 270 degrees. Draw the path.",
    "Construct an involute of a trapezium with sides 30mm, 20mm, 25mm, and 25mm.",
    "Draw the involute of a sector of circle with 60° angle and 40mm radius.",
    "A string is partly unwound from a circle of 35mm radius. Draw the involute for 120° unwinding.",
    "Construct an involute of a kite-shaped quadrilateral with sides 30mm and 20mm.",
    "Draw the involute of a three-quarter circle with 25mm radius.",
    "A string is unwound from a semicircle of 45mm diameter starting from midpoint. Draw the path.",
    "Construct an involute of a rhombus with 35mm sides and 60° acute angle.",
    
    // Projection of lines (20 questions)
    "A line AB 60mm long has end A 15mm above HP and 20mm in front of VP. The line is inclined at 30° to HP and 45° to VP. Draw its projections.",
    "A line PQ 50mm long has end P 10mm above HP and 15mm in front of VP. The line is inclined at 45° to HP and 30° to VP. Draw its top and front views.",
    "The front view of a line measures 40mm and makes 30° with XY. End A is 10mm above HP and 15mm in front of VP. Draw projections if line is inclined at 45° to HP.",
    "A line AB has end A 20mm above HP and 25mm in front of VP. End B is 50mm above HP and 15mm in front of VP. Draw the projections.",
    "The true length of a line is 70mm. Front view measures 50mm and top view 60mm. Draw projections and find inclinations with HP and VP.",
    "A line CD 55mm long is inclined at 40° to HP and 25° to VP. End C is 15mm above HP and 20mm in front of VP. Draw projections.",
    "A line EF has its midpoint 20mm above HP and 25mm in front of VP. The line is inclined at 35° to HP and 50° to VP with true length 65mm. Draw projections.",
    "The top view of a line measures 45mm and makes 40° with XY. One end is 10mm above HP and 15mm in front of VP. Draw projections if line is inclined at 30° to VP.",
    "A line GH 60mm long has its end G 20mm above HP and 25mm in front of VP. The other end H is 35mm above HP and 40mm in front of VP. Draw projections.",
    "A line IJ is inclined at 25° to HP and 35° to VP. The front view measures 50mm and top view 55mm. Find true length and draw projections.",
    "A line KL 70mm long is parallel to VP and inclined at 40° to HP. End K is 15mm above HP and 20mm in front of VP. Draw projections.",
    "A line MN is inclined at 30° to HP. Its front view is 50mm long and makes 45° with XY. End M is 10mm above HP and 15mm in front of VP. Draw projections.",
    "A line OP 65mm long has end O 15mm above HP and 20mm in front of VP. The line is inclined at 35° to HP and appears as a point in top view. Draw projections.",
    "A line QR has end Q 25mm above HP and 30mm in front of VP. End R is 40mm above HP and 15mm in front of VP. Draw projections and find true length.",
    "A line ST is inclined at 40° to VP. Its top view measures 55mm and makes 30° with XY. End S is 15mm above HP and 20mm in front of VP. Draw projections.",
    "A line UV 60mm long is perpendicular to VP and inclined at 45° to HP. End U is 20mm above HP. Draw projections.",
    "A line WX has its midpoint 25mm above HP and 30mm in front of VP. The line is inclined at 30° to HP and 40° to VP with true length 70mm. Draw projections.",
    "A line YZ is inclined at 35° to HP. Its front view is 60mm long and makes 40° with XY. End Y is 15mm above HP and 20mm in front of VP. Draw projections.",
    "A line AB is inclined at 25° to VP. Its top view measures 50mm and makes 35° with XY. End A is 10mm above HP and 15mm in front of VP. Draw projections.",
    "A line CD 70mm long is parallel to HP and inclined at 30° to VP. End C is 20mm above HP and 25mm in front of VP. Draw projections.",
    
    // Projection of planes (20 questions)
    "A square plate of 40mm side is inclined to VP at 45°. Draw projections when one side is parallel to HP.",
    "A triangular plane with sides 50mm, 50mm and 60mm is perpendicular to HP and inclined at 30° to VP. Draw projections.",
    "A regular pentagon of 30mm side is resting on HP on one side inclined at 45° to VP. Draw projections.",
    "A circular plate of 50mm diameter is inclined to HP at 30° and perpendicular to VP. Draw front and top views.",
    "A rectangular plate 60mm × 40mm has shorter side parallel to HP and inclined at 30° to VP. Draw projections.",
    "A hexagonal plate 35mm side is perpendicular to VP and inclined at 40° to HP. Draw projections.",
    "A rhombus with diagonals 60mm and 40mm is parallel to HP and one diagonal is perpendicular to VP. Draw projections.",
    "An equilateral triangular plate 45mm side is inclined to HP at 45° with one side perpendicular to VP. Draw projections.",
    "A circular plate 60mm diameter is resting on HP on a point and inclined at 30° to VP. Draw projections.",
    "A square plate 50mm side is inclined to HP at 40° with one diagonal perpendicular to VP. Draw projections.",
    "A rectangular plate 70mm × 40mm is inclined to HP at 35° with longer side parallel to VP. Draw projections.",
    "A regular hexagonal plate 30mm side is perpendicular to HP and inclined at 25° to VP. Draw projections.",
    "A triangular plate ABC has AB=50mm, BC=60mm, CA=70mm. It is parallel to VP and inclined at 40° to HP. Draw projections.",
    "A semicircular plate 60mm diameter is perpendicular to HP and inclined at 30° to VP. Draw projections.",
    "A square plate 45mm side is resting on HP on one corner with sides equally inclined to HP. Draw projections.",
    "A circular plate 55mm diameter is inclined to both HP and VP at 45° each. Draw projections.",
    "A pentagonal plate 35mm side is resting on HP on one side which is inclined at 30° to VP. Draw projections.",
    "A rectangular plate 65mm × 35mm is inclined to VP at 40° with shorter side parallel to HP. Draw projections.",
    "A triangular plate with sides 40mm, 50mm and 60mm is perpendicular to VP and inclined at 35° to HP. Draw projections.",
    "A square plate 40mm side is resting on HP on one side which is inclined at 45° to VP. Draw projections.",
    
    // Scales (10 questions)
    "Construct a plain scale of RF=1:4 to measure up to 6m, showing m and dm. Mark 4.5m.",
    "Draw a plain scale of RF=1:50 to measure up to 5m, showing m and cm. Indicate 3.75m.",
    "Construct a diagonal scale of RF=1:20 to measure up to 5m, showing m, dm and cm. Mark 3.68m.",
    "Draw a diagonal scale of RF=1:100 to measure up to 8m, showing m and dm. Mark 6.5m.",
    "Construct a plain scale of RF=1:25 to measure up to 7m, showing m and dm. Mark 5.2m.",
    "Draw a diagonal scale of RF=1:40 to measure up to 6m, showing m, dm and cm. Mark 4.35m.",
    "Construct a plain scale of RF=1:30 to measure up to 9m, showing m and dm. Mark 7.5m.",
    "Draw a diagonal scale of RF=1:50 to measure up to 4m, showing m, dm and cm. Mark 2.83m.",
    "Construct a plain scale of RF=1:10 to measure up to 8m, showing m and dm. Mark 6.7m.",
    "Draw a diagonal scale of RF=1:25 to measure up to 5m, showing m, dm and cm. Mark 3.57m.",
    
    // Conic sections (10 questions)
    "Construct an ellipse with major axis 80mm and minor axis 50mm using concentric circle method.",
    "Draw a parabola with focus 30mm from directrix using rectangular method.",
    "Construct a hyperbola when distance between foci is 70mm and difference of distances is 40mm.",
    "Draw a parabola inscribed in right-angled triangle with base 70mm and height 90mm using tangent method.",
    "Construct an ellipse with major axis 90mm and minor axis 60mm using oblong method.",
    "Draw a hyperbola with eccentricity 3/2 and distance of focus from directrix 45mm.",
    "Construct a parabola with vertex at origin and axis vertical, passing through point (40mm, 30mm).",
    "Draw an ellipse with foci 60mm apart and major axis 80mm long using arcs of circles method.",
    "Construct a rectangular hyperbola when vertex is 30mm from origin and passes through (50mm, 20mm).",
    "Draw a parabola using double ordinate method with vertex and focus 35mm apart.",
    
    // Cycloids (10 questions)
    "Draw a cycloid generated by circle of 40mm diameter rolling on straight line for one revolution.",
    "Draw an epicycloid generated by circle of 25mm radius rolling outside circle of 80mm diameter.",
    "Draw a hypocycloid generated by circle of 30mm radius rolling inside circle of 100mm radius.",
    "Draw locus of point on circle of 35mm diameter as it rolls without slipping along straight line.",
    "Construct an epicycloid when rolling circle is 20mm diameter and directing circle is 70mm diameter.",
    "Draw a hypocycloid generated by circle of 25mm radius rolling inside circle of 90mm diameter.",
    "Construct a cycloid for one and half revolutions of rolling circle with 30mm diameter.",
    "Draw an epicycloid when rolling circle is 15mm radius and directing circle is 60mm radius.",
    "Construct a hypocycloid when rolling circle is 35mm diameter and directing circle is 120mm diameter.",
    "Draw locus of point on circle of 40mm diameter rolling on straight line for 270° rotation."
];

// ---- MongoDB logic ----
async function run() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const questionSchema = new mongoose.Schema({
      text: String,
      type: String // e.g., "Q1" or "Other"
    });

    const Question = mongoose.model("Question", questionSchema, "questions");

    // Convert Q1 to objects
    const q1Docs = q1Questions.map(q => ({ text: q, type: "Q1" }));
    const otherDocs = otherQuestions.map(q => ({ text: q, type: "Other" }));

    await Question.insertMany([...q1Docs, ...otherDocs]);

    console.log("✅ All questions inserted successfully!");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    mongoose.connection.close();
  }
}

run();
