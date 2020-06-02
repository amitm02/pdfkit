var PDFDocument = require('../');
var tiger = require('./tiger');
var fs = require('fs');

// Create a new PDFDocument
var doc = new PDFDocument();
doc.font('Rubik.ttf');

doc.pipe(fs.createWriteStream('out.pdf'));

// Set some meta data
doc.info['Title'] = 'Test Document';

doc.info['Author'] = 'Devon Govett';

// Register a font name for use later
doc.registerFont('Palatino', 'fonts/PalatinoBold.ttf');

// Set the font, draw some text, and embed an image
// doc.text('first line here'.repeat(100));
// doc.text('second line here');
t = `
בשל גופו החסון ושערו הארוך והמתולתל, הוא מכונה "טרזן". במשך תקופה של 15 שנים, שהתפרסה בין 1999 ל-2014, הופיע פויול במדי ברצלונה ב-593 משחקים רשמיים, מה שהופך אותו לשחקן עם מספר ההופעות הרביעי בגודלו במדי הקבוצה. ב-2004 התמנה לקפטן ברצלונה, ובעשר השנים הבאות זכה עמה ב-6 אליפויות ספרד, ב-3 גביעי ליגת האלופות ובשני גביעי המלך הספרדי. במדי נבחרת ספרד, עמה הגיע ל-100 הופעות, היה שותף לזכייתה השנייה ביורו (2008) והראשונה במונדיאל (2010).
`
// doc.text(t, {align: 'right'});
doc.text('שורה ראשונה', {align: 'right'});


doc.end();
