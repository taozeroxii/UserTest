var express = require('express');
var router = express.Router();
var User = require('../models/usermodel');//อ้างอิงไฟล์โมเดลเพื่อดึงค่ามา
var TotalGender;
var countMale,countFeMale;
var persenofMale,persenofFeMale;

/* GET users listing. */
router.get('/', (req, res) => {
   
   
   User.find({gender:"male"},(err,data)=>{
      if(err)console.log(err)
      console.log(data.length)
      countMale=data.length;
   })
   User.find({gender:"Female"},(err,data)=>{
      if(err)console.log(err)
      console.log(data.length);
      countFeMale=data.length;
      TotalGender = countMale+countFeMale;
      console.log(TotalGender);
      persenofMale = ((countMale*100)/TotalGender)/100;
      console.log(persenofMale);
      persenofFeMale = ((countFeMale*100)/TotalGender)/100;
      console.log(persenofFeMale);
      var M02 = persenofMale.toFixed(2);
      var FeM02 = persenofFeMale.toFixed(2);
      res.render("testchart",{title:"Chart",scripttest,scripttest2,scripttest3,scripttest4,M02,FeM02})
   })
  
   var scripttest = `
      google.charts.load('current', {packages: ['corechart']});
      //setcallback
      google.charts.setOnLoadCallback(drawChart);function drawChart() {
         // Define the chart to be drawn.
         var data = new google.visualization.DataTable();
         data.addColumn('string', 'Element');
         data.addColumn('number', 'Percentage');`
   var scripttest2 = `     
         data.addRows([
         ['ชาย', `
   var scripttest3 = `],
         ['หญิง', `
   var scripttest4 = `  ],
         
         ]);
         // Set chart options
         var options = {'title':'กราฟเทียบชาย/หญิง',
                     'is3D':true,
                     'width':500,
                     'height':400};

         // Instantiate and draw the chart.
         var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
         chart.draw(data, options);
      }`

 
   
});

module.exports = router;