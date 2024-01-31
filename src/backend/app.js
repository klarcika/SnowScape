const express = require('express');
const {db}= require('./firebase.js') 
const cors = require('cors');
app=express();
const fs = require('fs');
const xml2js = require('xml2js');
const axios = require('axios');
const cheerio = require('cheerio');


//-------------------branje iz firebase REST---------------------
//app.use(express.json())
app.use(cors());


app.get('/getAllWasteTypes', async (req, res) => {
    try {
      const wasteTypesSnapshot = await db.collection('waste-types').get();
      const wasteTypes = wasteTypesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.json({ status: 200, success: true, data: wasteTypes });
      console.log(wasteTypes)
    } catch (error) {
      console.error(error);  // Log the detailed error message
      res.json({ status: 400, success: false, error: error.message });
    }
  });

  app.get('/getAllWasteCollections', async (req, res) => {
    try {
      const wasteColSnapshot = await db.collection('waste-collections').get();
      const waste = wasteColSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.json({ status: 200, success: true, data: waste });
    } catch (error) {
      res.json({ status: 400, success: false, error: error.message });
    }
  });

  app.get('/getAllRC', async (req, res) => {
    try {
      const wasteRyclceSnapshot = await db.collection('recycling-center').get();
      const wasteTypes = wasteRyclceSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.json({ status: 200, success: true, data: wasteTypes });
    }catch (error) {
      console.error(error);  // Log the detailed error message
      res.json({ status: 400, success: false, error: error.message });
    }
  });


//------------ branje XML --------------------
/*
app.get('/odpadki', (req, res) => {
  // Read artikli.xml and dobavitelji.xml
  const artikliXml = fs.readFileSync('./artikli.xml', 'utf-8');
  const dobaviteljiXml = fs.readFileSync('./dobavitelj.xml', 'utf-8');

  // Parse XML to JS object
  const parser = new xml2js.Parser({ explicitArray: false });
  parser.parseString(artikliXml, (err, resultArtikli) => {
      if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
      }

      parser.parseString(dobaviteljiXml, (err, resultDobavitelji) => {
          if (err) {
              console.error(err);
              return res.status(500).send('Internal Server Error');
          }

          // Filter data
          const izdelki_z_nizko_zalogo = resultArtikli.artikli.artikel
              .filter(artikel => parseInt(artikel.zaloga) > 100)
              .map(artikel => {
                  const dobavitelj = resultDobavitelji.dobavitelji.dobavitelj.find(d => d.id === artikel.dobavitelj_id);
                  return {
                      id: artikel.id,
                      naziv: artikel.naziv,
                      cena: parseFloat(artikel.cena),
                      zaloga: parseInt(artikel.zaloga),
                      dobavitelj: dobavitelj ? dobavitelj.naziv : "Unknown"
                  };
              });

          // Send filtered data
          res.json(izdelki_z_nizko_zalogo);
      });
  });
});
*/
// dobavitelji odpadkov
function readXmlFile() {
  return fs.readFileSync('dobavitelj.xml', 'utf-8');
}

function convertXmlToJson(xmlData) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xmlData, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

app.get('/dobavitelji', async (req, res) => {
  try {
    const dobaviteljiXml = readXmlFile();
    const dobaviteljiJson = await convertXmlToJson(dobaviteljiXml);

    // Save the JSON data to a file (optional)
    fs.writeFileSync('dobavitelji.json', JSON.stringify(dobaviteljiJson, null, 2));

    // Respond with the JSON data
    res.json(dobaviteljiJson);
  } catch (error) {
    console.error('Error processing XML:', error);
    res.status(500).send('Internal Server Error');
  }
});


//-------------------scraper---------------
app.get('/api/data', (req, res) => {
  try {
    // Read data from the saved JSON file
    const jsonData = JSON.parse(fs.readFileSync('web_data.json', 'utf-8'));
    res.json(jsonData);
  } catch (error) {
    
    console.error('Error reading data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

  const url = 'https://www.snaga-mb.si/objava/388726';
  axios.get(url)
  .then(response => {
    if (response.status === 200) {
      // Parsing HTML using Cheerio
      const $ = cheerio.load(response.data);

      // Extract data based on HTML tags
      const title = $("h1").text().trim();

      const paragraphs = $("p");
      const text = paragraphs.map((_, p) => $(p).text().trim()).get().join(" ");

      // Output structure
      const data = {
        "Naslov": title,
        "Besedilo": text
      };

      // Save data to a JSON file
      fs.writeFileSync("web_data.json", JSON.stringify(data, null, 4), 'utf-8');

      console.log("Saved as web_data.json");
    } else {
      console.log("Failed to retrieve the webpage. Status code:", response.status);
    }
  })
  .catch(error => {
    console.error("Error:", error.message);
  });

//------------------------------------------------
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});