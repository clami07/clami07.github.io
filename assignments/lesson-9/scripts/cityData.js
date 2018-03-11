
    
    var section = document.querySelector('section');
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var town = request.response;
      showTown(town);
        
    }
    
    function showTown(jsonObj) {
      var cities = jsonObj['towns'];      
      
      for(var i = 0; i < cities.length; i++) {
          if((i == 0)|| !(i % 2 == 0)){
              
        var myArticle = document.createElement('article');
        var myH4 = document.createElement('h4');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');  
        var myList = document.createElement('ul');
        
          
        myH4.textContent = cities[i].name;
        myPara1.textContent = 'Motto: ' + cities[i].motto;
        myPara2.textContent = 'YearFounded: ' + cities[i].yearFounded;
        myPara3.textContent = 'Population:' + cities[i].currentPopulation;
        myPara4.textContent = 'AnnualRainfall:' + cities[i].averageRainfall;
        
        
        myArticle.appendChild(myH4);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
        
      }
    }
    }
   