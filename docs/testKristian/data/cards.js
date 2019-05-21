var cardData = [
  {
    "extent": "global",
    "title": "World Trade: Exports",
    "content": `<p>This map displays the 2017 exports of eight categories of products by country are related respectively. The colour of polygons shows the total export volume. </p>
      <div class='card border-secondary mb-3'>
        <div class='card-body'>
          <p class="lead mb-0">Click on the polygon representing the corresponding country to learn more details about its export volumes of eight typical kinds of products available now for export.
          </p>
        </div>
      </div>
      <!--This is a comment. We should add a bar chart here from this file ./file.csv-->
      <div id='top-five-exporter-bar-chart' class='col-12'></div> <!-- We need to add a bar chart here. -->
      <img src='./assets/images/top5exporters.jpeg' class='img-fluid' alt='Hong Kong Airport'>



      <h4 class='display-4'>Facts</h4>
      <ul>
        <li>United States and China are magnate of exporting countries, followed by Germany, Japan and South Korea. </li>
        <li>In the barchart related to 2017 total export volumes, China is the largest exporting country in 2017, which leads the world with its exporting worth 2,200 billion US dollars. </li>
        <li>From the main eight categories, it can be seen that technical has become the major country’s exports for China and U.S. which have 627,454 units and 705,700 units respectively. </li>
        <li>They both mainly export products in secondary sector. </li>
        <li>Organic products occupies the least shares of China’s total exports. Clothing occupies the least for U.S. </li>
      </ul>

    `,
    "layers": ['export-countries'],
    "flyTo": {
      "bearing": 0,
      "center": {"lng":-0.7973131555806958,"lat":34.84825706688895},
      "zoom": 1.2183705438114467,
      "pitch": 0
    },
    "featureContent": {
      // country-specific pie charts.
      "chartType": "bar"

    },
    loadCard: function(_i, _params) {
      // Load countries layer with Exports choropleth colors
      console.log(_i, _params)

      var exportersBarChartParams = {
        "chartType": "bar",
        "valueType": "value", // or "amount"
        "title": "Top Five Exporting Countries",
        "dataPath": "./data/top_five_exporters.csv",
        "yAxisLabel": "Billions (USD)",

      };


      // createBarChart(exportersBarChartParams, "#exports-bar-chart");
      // loadFeatureContent(_params.)

      setFeatureContentText(_i, "country")


    },
    updateFeature: function(_featureMetadata, _lngLat) {
      console.log(_featureMetadata);

      var featureSelector = currentCardId() + ' .feature';

      var featureDiv = d3.select(featureSelector)
        .select('.card-body').html('');

      var headerSpan = featureDiv.append('h3')
        .classed('display-3 mb-0', true)
        .text(_featureMetadata.properties.name);

      featureDiv.append('p')
        .classed('header-span', true)
        .text('Exports by category')

      // featureDiv.append('p')
      //   .text('Total Exports (million USD): ' + _featureMetadata.properties.all_commodities_export);

      var featureContent = featureDiv
        .append('div')
        .classed('col-12', true)
        .append('div')
        .classed('row', true);

      featureContent.append('div')
        .classed('col-12 pie-chart-holder', true);

      var pieData = {
        data: {
          'Organic Products': _featureMetadata.properties.organic_products_export,
          'Chemicals': _featureMetadata.properties.chemicals_export,
          'Materials': _featureMetadata.properties.material_export,
          'Clothing': _featureMetadata.properties.clothing_export,
          'Metals': _featureMetadata.properties.metals_export,
          'Technicals': _featureMetadata.properties.technical_export,
          'Transportation': _featureMetadata.properties.transportation_export,
          'Miscellaneous goods': _featureMetadata.properties.miscellaneous_goods_export
        }
      };

      createPieChart(pieData, featureSelector + ' .pie-chart-holder');

    }
  },
  {
    "extent": "global",
    "title": "World Trade: Imports",
    "content": `<p>This map displays the 2017 imports of eight categories of products by country are related respectively. The colour of polygons shows the total import volume.</p>
      <div class='card border-secondary mb-3'>
        <div class='card-body'>
          <p class="lead mb-0">Click on the polygon representing the corresponding country to learn more details about its import volumes of eight typical kinds of products available now for import.
          </p>
        </div>
      </div>
      <!--This is a comment. We should add a bar chart here from this file ./file.csv-->
      <div id='top-five-importer-bar-chart' class='col-12'></div> <!-- We need to add a bar chart here. -->

      <img src='./assets/images/top5Importers.jpeg' class='img-fluid' alt='Hong Kong Airport'>

      <h4 class='display-4'>Facts</h4>
      <ul>
        <li>United States and China are still magnate of importing countries, followed by Germany, Japan. But the United Kingdom ranked the fifth with nearly 600 biliion US dollars. </li>
        <li>Compare with the export, Non-Asia countries have taken quite a large share in the import trade. </li>
        <li>Similarly, for US and China, Technical is not only the main export goods, but also a major import goods.</li>
        <li>In 2017, the import volumes of technical in US and China are up to 705,700 units and 627,454 units respectively.  </li>
        </ul>

    `,

    "layers": ['import-countries'],
    "flyTo": {
      "bearing": 0,
      "center": {"lng":-0.7973131555806958,"lat":34.84825706688895},
      "zoom": 1.2183705438114467,
      "pitch": 0
    },
    "featureContent": {

    },
    loadCard: function(_i, _params) {
      // Set countries layer style to Imports choropleth colors
      var importersBarChartParams = {
        "chartType": "bar",
        "valueType": "value", // or "amount"
        "title": "Top Five Importing Countries",
        "dataPath": "./data/top_five_importers.csv",
        "yAxisLabel": "Billions (USD)",

      };


      // createBarChart(importersBarChartParams, "#imports-bar-chart");
      // loadFeatureContent(_params.)

      setFeatureContentText(_i, "country")



    },
    updateFeature: function(_featureMetadata, _lngLat) {
      console.log(_featureMetadata);

      var featureSelector = currentCardId() + ' .feature';

      var featureDiv = d3.select(featureSelector)
        .select('.card-body').html('');

      var headerSpan = featureDiv.append('h3')
        .classed('display-3 mb-0', true)
        .text(_featureMetadata.properties.name);

      featureDiv.append('p')
        .classed('header-span', true)
        .text('Imports by category')

      var featureContent = featureDiv
        .append('div')
        .classed('col-12', true)
        .append('div')
        .classed('row', true);

      featureContent.append('div')
        .classed('col-12 pie-chart-holder', true);

      var pieData = {
        data: {
          'Organic Products': _featureMetadata.properties.organic_products_import,
          'Chemicals': _featureMetadata.properties.chemicals_import,
          'Materials': _featureMetadata.properties.material_import,
          'Clothing': _featureMetadata.properties.clothing_import,
          'Metals': _featureMetadata.properties.metals_import,
          'Technicals': _featureMetadata.properties.technical_import,
          'Transportation': _featureMetadata.properties.transportation_import,
          'Miscellaneous goods': _featureMetadata.properties.miscellaneous_goods_import
        }
      };

      createPieChart(pieData, featureSelector + ' .pie-chart-holder');
    }
  },
  {
    "extent": "global",
    "title": "Air Transport",
    "content": `<p>The map displays globally distributed airports across different geographical areas, as well as their passed-through amounts in the year of 2017.</p>
      <div class='card border-secondary mb-3'>
        <div class='card-body'>
          <p class="lead mb-0">Click on the circle the airport is located to show its rank in the global busiest airports ranking.
          </p>
        </div>
      </div>

      <img src='./assets/images/top5Air.jpeg' class='img-fluid' alt='Hong Kong Airport'>


      <h4 class='display-4'>Facts</h4>
      <ul>
        <li>When looking at the air transport mode, airports are concentrated in the Asia, Europe and Americas.</li>
        <li>In fact, most airports in Asia are located around southeast, south and China’s coastal region.</li>
        <li>Most airports are concentrated in the middle of Americas.</li>
        <li>The top five ranking based on the 2017 passed-through amounts will be displayed in the bar chart, and it is worth mentioning that three out of the five airports are located in Asia, six in Americas and four in Europe.</li>
        <li>Hong Kong has become the busiest cargo hub in the world, the passed- through amounts has reaches up to 5,000,000 tonnes.</li>
      </ul>
      <img src='./assets/images/hk-airport.jpg' class='img-fluid' alt='Hong Kong Airport'>
      <figcaption class="figure-caption mb-4">   <!--This is a comment. We should add a bar chart here from this file ./file.csv-->
        Hong Kong International Airport from a passenger airliner. <a href="https://www.youtube.com/watch?v=LT4qH8OwuvI" target="_blank">Source</a>
      </figcaption>

    `,
    "layers": ["airports-mapbox-data"],
    "flyTo": {
      "bearing": 0,
      "center": {"lng":-0.7973131555806958,"lat":34.84825706688895},
      "zoom": 1.2183705438114467,
      "pitch": 0
    },
    loadCard: function(_i, _params) {

      setFeatureContentText(_i, "airport")


    },
    updateFeature: function(_featureMetadata, _lngLat) {
      // console.log(_featureMetadata.geometry.coordinates);

      var featureSelector = currentCardId() + ' .feature';

      var featureDiv = d3.select(featureSelector)
        .select('.card-body').html('');

      var airportCoords = 'Latitude: ' + String(_lngLat.lat.toFixed(5)) +
        '<br />Longitude: ' + String(_lngLat.lng.toFixed(5))

      featureDiv.append('h3')
        .classed('feature-subheader mb-0', true)
        .text('Airport');

      var featureRow = featureDiv.append('div')
        .classed('row', true);

      var featureAirportCode = featureRow.append('div')
        .classed('col-12', true);

      featureAirportCode.append('h1')
        .classed('airport-code', true)
        .text(_featureMetadata.properties.abbrev);

      $('.airport-code').fitText(0.3);

      var coordsList = featureAirportCode.append('dl')
        .classed('row', true);

      coordsList.append('dt')
        .classed('col-4', true)
        .text('Latitude:');

      coordsList.append('dd')
        .classed('col-8', true)
        .text(String(_lngLat.lat.toFixed(5)));

      coordsList.append('dt')
        .classed('col-4', true)
        .text('Longitude:');

      coordsList.append('dd')
        .classed('col-8', true)
        .text(String(_lngLat.lng.toFixed(5)));

      coordsList.append('dt')
        .classed('col-4', true)
        .text('Name:');

      coordsList.append('dd')
        .classed('col-8', true)
        .text(_featureMetadata.properties.airport_name);

      coordsList.append('dt')
        .classed('col-4', true)
        .text('Country:');

      coordsList.append('dd')
        .classed('col-8', true)
        .text(_featureMetadata.properties.name);


      coordsList.append('dt')
        .classed('col-4', true)
        .text('Size:');

      coordsList.append('dd')
        .classed('col-8', true)
        .text(_featureMetadata.properties.size);

      coordsList.append('dt')
        .classed('col-4', true)
        .text('Usage:');

      coordsList.append('dd')
        .classed('col-8', true)
        .text(_featureMetadata.properties.usage);

      featureAirportCode.append('button')
        .attr('type', 'button')
        .classed('btn btn-block btn-outline-primary mb-1', true)
        .text('Fly to airport')
        .on('click', function(d) {
          map.flyTo({
            "bearing": 0,
            "center": _featureMetadata.geometry.coordinates,
            "zoom": 12.5,
            "pitch": 0
          })
        });

      featureAirportCode.append('a')
          .attr('href', _featureMetadata.properties.wikipedia)
          .attr('target', '_blank')
        .append('button')
          .attr('type', 'button')
          .classed('btn btn-block btn-outline-primary mb-1', true)
          .text('More info ...');


    }
  },
  {
    "extent": "global",
    "title": "Sea Transport",
    "content": `<p>The map displays globally distributed ports across different geographical areas, as well as their shipped-through amounts in the year of 2017. </p>
      <div class='card border-secondary mb-3'>
        <div class='card-body'>
          <p class="lead mb-0">Click on the circle the airport is located to show its rank in the global busiest airports ranking.
          </p>
        </div>
      </div>

      <img src='./assets/images/top5Sea.jpeg' class='img-fluid' alt='Hong Kong Airport'>

      <h4 class='display-4'>Facts</h4>
      <ul>
        <li>The number of ports decreases with increasing latitude. Obviously, there is very few ports located in latitude above 72.15 degree. For example, there are three ports in Svalbard, but 23 ports in Greenland.</li>
        <li>Most ports are also located in Asia. Most ports are concentrated near the equator. We can mention that there are less than 30 ports in Russian, but Indonesia has more than 100 ports.</li>
        <li>However, more ports are concentrated in Mediterranean compared with North Africa. In continent, there are ports only locate in the countries near coast. And Inland countries does not need ports. In Mediterranean, there are 60 Basin countries. But most countries in North Africa are inland.</li>
        <li>In a similar way, Indonesia is made of hundreds of islands. The simplest transportation for these island countries is by sea. So it makes sense there are many ports appears in Indonesia.</li>
      </ul>
      <img src='./assets/images/indonesia.png' class='img-fluid' alt='Hong Kong Airport'>
      <figcaption class="figure-caption mb-4">   <!--This is a comment. We should add a bar chart here from this file ./file.csv-->
        The distribution of islands from Indonesia <a href="https://en.wikipedia.org/wiki/List_of_islands_of_Indonesia" target="_blank">Source</a>
      </figcaption>
    `,
    "layers": ["ports"],
    "flyTo": {
      "bearing": 0,
      "center": {"lng":-0.7973131555806958,"lat":34.84825706688895},
      "zoom": 1.2183705438114467,
      "pitch": 0
    },
    loadCard: function(_i, _params) {
      // console.log('card load!', _params);
      setFeatureContentText(_i, "port")

    },
    updateFeature: function(_featureMetadata, _lngLat) {

      var featureSelector = currentCardId() + ' .feature';

      var featureDiv = d3.select(featureSelector)
        .select('.card-body').html('');

      // var headerSpan = featureDiv.append('span');

      // var portCoords = 'Latitude: ' +  +
      //   '&nbsp;&nbsp; Longitude: ' + String(_featureMetadata.properties.longitude.toFixed(5))

      featureDiv.append('h5')
        .classed('feature-subheader mb-0', true)
        .text('Port');

      var featureHeader = featureDiv.append('h3')
        .classed('display-3', true)
        .text(titleCase(_featureMetadata.properties.port_name));

      var portContent = featureDiv.append('div')
        .classed('row', true)

      var portContent = portContent.append('div')
        .classed('col-12', true);

      var portTable = portContent.append('dl')
        .classed('row', true);

      portTable.append('dt')
        .classed('col-4', true)
        .text('Country:');

      portTable.append('dd')
        .classed('col-8', true)
        .text(_featureMetadata.properties.country_name);

      portTable.append('dt')
        .classed('col-4', true)
        .text('Latitude:');

      portTable.append('dd')
        .classed('col-8', true)
        .text(String(_featureMetadata.properties.latitude.toFixed(5)))

      portTable.append('dt')
        .classed('col-4', true)
        .text('Longitude:');

      portTable.append('dd')
        .classed('col-8', true)
        .text(String(_featureMetadata.properties.longitude.toFixed(5)))

      var imgSrc = "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/static/" +
        _featureMetadata.properties.longitude + ',' + _featureMetadata.properties.latitude +
        ',11,0,0/1000x250?access_token=' + mapboxgl.accessToken;


      portContent.append('img')
        .classed('img-fluid', true)
        // .attr('height', '250px')
        .attr('src', imgSrc)
        .classed('static-satellite', true)



      var luckyUrl = "http://www.google.com/search?q=Port+of+" + _featureMetadata.properties.port_name + "+wikipedia&btnI"

      portContent.append('button')
        .classed('btn-lg btn-block btn-outline-primary mb-1', true)
        .text("Fly to port.")
        .on('click', function(d) {

          map.flyTo({
            "bearing": 0,
            "center": [_featureMetadata.properties.longitude,
              _featureMetadata.properties.latitude
            ],
            "zoom": 12.5,
            "pitch": 0
          })
        });

      portContent
        .append('a')
        .attr('href', luckyUrl)
        .attr('target', '_blank')
        .append('button')
        .classed('btn-lg btn-block btn-outline-primary', true)
        .text("More info ...");


      // fea

      // featureDiv.append('p')
      //   .text(_featureMetadata.properties.airport_name);
      //
      // featureDiv.append('a')
      //   .attr('href', _featureMetadata.properties.wikipedia)
      //   .attr('target', '_blank')
      // .append('p')
      //   .text('Wikipedia');
    }
  },

  {
    "extent": "national",
    // "cardNum": 3,
    "title": "The UK in the World",
    "content": `<p>This page shows the UK airports and ports. From the map, the number of airports and ports decrease with increasing latitude. Besides, it is clearly that the top 5 busiest airports in the UK are London Heathrow, Manchester Airport, London Gatwick, Birmingham Airport and London Luton. Three of them are in London, the biggest city in the UK, and the other two also located in big cities. The top 5 busiest ports are London, Liverpool, Felixstowe, Belfast and Bristol.</p>
      <div class='card border-secondary mb-3'>
        <div class='card-body'>
          <p class="lead mb-0">Click on the circle the airport or the port is located to show its rank in the global busiest airports ranking.
          </p>
        </div>
      </div>



    `,
    "layers": ["airports-mapbox-data", 'ports'],
    "flyTo": {
      "bearing": 0,
      "center": [2.43025502683804, 54.19428441594809],
      "zoom": 4.5,
      "pitch": 0
    }
  },
  {
    "extent": "national",
    // "cardNum": 3,
    "title": "British Air Transport",
    "content": `<p>This page shows the freight airports of UK by using the data from Civil Aviation Authority. The map will show the name and size of the airports, and also the values (1000 tonnes) of pick up and set down freight for both domestics and international trade by clicking the icons.</p>
      <div class='card border-secondary mb-3'>
        <div class='card-body'>
          <p class="lead mb-0">Click on the circle the airport is located to show its rank in the global busiest airports ranking.
          </p>
        </div>
      </div>
      <img src='./assets/images/national-airport.jpg' class='img-fluid' alt='National Airport'>
<figcaption class="figure-caption mb-4">
        The bar chart for The United Kingdom's airports.
      </figcaption>

     <p>The bar chart shows the top five busiest airports in the UK. It is clear that the value of the goods transported by Heathrow airport is much higher than any other airports (around 1700 thousand tonne), which is ten times more than the second (Manchester airport).

</p>


    `,
    "layers": ["airports-mapbox-data"],
    "flyTo": {
      "bearing": 0,
      "center": [2.43025502683804, 54.19428441594809],
      "zoom": 4.5,
      "pitch": 0
    }
  },
  {
    "extent": "national",
    "title": "British Maritime Transport",
    "content":  `<p>This page shows the freight ports of UK by using the data from the UK government. The map will show the name, size, type and railway information of the ports, and also the values (1000 tonnes)  of inward and outward for both domestics and international trade by clicking the icons.</p>
      <div class='card border-secondary mb-3'>
        <div class='card-body'>
          <p class="lead mb-0">Click on the circle the port is located to show its rank in the global busiest airports ranking.
          </p>
        </div>
      </div>
      <img src='./assets/images/national-port.jpg' class='img-fluid' alt='National Port'>
<figcaption class="figure-caption mb-4">
        The bar chart for The United Kingdom's ports.
      </figcaption>

     <p>The bar chart shows that the port of London is the busiest port in the UK, which transported about 50000 thousand tonne of goods in 2017, almost 20000 thousand tonne higher than the second.</p>
 `,
    "layers": ["ports"],
    "flyTo": {
      "bearing": 0,
      "center": [2.43025502683804, 54.19428441594809],
      "zoom": 4.5,
      "pitch": 0
    }
  },
  {
    "extent": "local",
    "title": "Heathrow: A critical airport",
    "content": `<p>Heathrow is the busiest UK airport by both passenger traffic and cargo traffic. Heathrow Airport is used by over 80 airlines flying to 185 destinations in 84 countries. To the runway and four terminal buildings, it is one of the busiest airports in the UK and the world. The airport is the primary hub of British Airways and is a base for Virgin Atlantic. It has four passenger terminals (numbered 2 to 5) and a cargo terminal. </p>
      <div class='card border-secondary mb-3'>
        <div class='card-body'>
          <p class="lead mb-0">This page shows the facilities around Heathrow Airport in 5 kilometer's radius.
          </p>
        </div>
      </div>
      <img src='./assets/images/Heathrow.jpg' class='img-fluid' alt='Heathrow Airport'>
      <figcaption class="figure-caption mb-4">
        Heathrow Airport. <a href="https://youtu.be/LI_apMKa2c0" target="_blank">Source</a>
      </figcaption>
       <img src='./assets/images/Heathrow1.jpg' class='img-fluid' alt='Heathrow Airport'>
    <p>The pie chart shows that the international goods transtation in Heathrow is more than it for domestic goods transportation. </p>


    `,
    "layers": ["heathrow-point", "heathrow-stations", "heathrow-hotels", "heathrow-restaurants", "heathrow-buffer", '3d-buildings'],
    "flyTo": {
      "bearing": 0,
      "center": [-0.4172184, 51.459262],
      "zoom": 11.5,
      "pitch": 0
    },
    loadCard: function(_i, _params) {
      console.log("HEATHROW LOAD CARD", _i, _params);

      // map.setStyle(mapboxSatellite);

      var heathrowTourParams = {
        "Terminal 2": {
          "bearing": 200,
          "center": {
            "lng": -0.45183706289185466,
            "lat": 51.475127930801506
          },
          "zoom": 16.5,
          "pitch": 70
        },
        "Terminal 3": {
          "bearing": 130,
          "center": {
            lng: -0.4623692398431558,
            lat: 51.469771694617265
          },
          "zoom": 16,
          "pitch": 70
        },
        "Terminal 4": {
          "bearing": 330,
          "center": {
            "lng": -0.4437268331968198,
            "lat": 51.45981682919407
          },
          "zoom": 16.7,
          "pitch": 70
        },
        "Terminal 5": {
          "bearing": 90,
          "center": {
            "lng": -0.48849590095176154,
            "lat": 51.47020173214935
          },
          "zoom": 16.9,
          "pitch": 70
        },
        "Runways": {
          "bearing": 0,
          "center": {
            "lng": -0.44210786010671654,
            "lat": 51.456970583583995
          },
          "zoom": 13.9,
          "pitch": 0
        }
      }

      var featureSelector = "#" + _params.extent + '-card-' + i + ' .feature .card-body';

      var featureContent = d3.select(featureSelector)
        .append('div')
        .classed('col-12', true);

      featureContent.append('h1')
        .classed('display-4', true)
        .text('A tour of Heathrow');

      featureContent.selectAll('button')
        .data(Object.keys(heathrowTourParams)).enter()
        .append('button')
        .attr('type', 'button')
        .classed('btn btn-lg btn-block btn-outline-primary', true)
        .text(function(d) {
          return d;
        })
        .on('click', function(d) {
          map.flyTo(heathrowTourParams[d]);
        });

      // set up Feature Content with tour ...

    }
  },
  {
    "extent": "local",
    "title": "Port of London: A major port",
    "content":  `<p> The port of London was once the largest port in the world. The port facilities are located along River Thames and stretch from the capital to the North Sea. The seaport is managed by the Port of London Authority which has overseen its increment and construction since 1908. Various vessels such as roll-on-roll-off ferries and cruise liners are handled in the port. The port of London also receives a variety of cargo from various parts of the world. </p>
      <div class='card border-secondary mb-3'>
        <div class='card-body'>
          <p class="lead mb-0">This page shows the facilities around Port of London in 5 kilometer's radius.
          </p>
        </div>
      </div>
      <img src='./assets/images/London-port.jpg' class='img-fluid' alt='Port of London'>
      <figcaption class="figure-caption mb-4">
        Port of London. <a href="https://youtu.be/IINJU5k2WuY">Source</a>
      </figcaption>
       <img src='./assets/images/London-port1.jpg' class='img-fluid' alt='Port of London'>
    <p>The pie chart shows the inwards and outwards for domestic and international transportation.</p>


    `,
    "layers": ["3d-buildings", "tilbury-point", "tilbury-stations", "tilbury-schools", "tilbury-restaurants", "tilbury-buffer"],
    "flyTo": {
      "bearing": 0,
      "center": {
        lng: 0.38210875599440897,
        lat: 51.45468573166235
      },
      "zoom": 11.5,
      "pitch": 0
    },
    loadCard: function(_i, _params) {
      var featureSelector = "#" + _params.extent + '-card-' + i + ' .feature';
      d3.select(featureSelector)
        .classed('d-none', true);
    }
  },



]
