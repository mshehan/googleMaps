/*
/Matthew Shehan
//mshehan@my.smccd.edu
//CIS 
//114 OL
//map.js
//final
// 05-27-2016
 */
/*
Examples Used
-------------
https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
https://developers.google.com/maps/documentation/javascript/examples/marker-simple
https://developers.google.com/maps/documentation/javascript/examples/map-simple

*/
var MAP = {
    favorites:
    [
        {
            name: "Burma Love",
            location: new google.maps.LatLng(37.769628, -122.422160),
            img: "images/burma.png",
            description: "One of my favorite restaurants. I love their" +
            " tea leaf salad! it's amazing. They also have great drinks" +
            " It's always a pleasure dining here.",
            url: "https://www.yelp.com/biz/burma-love-san-francisco-2"
        },
        {
            name: "lucky13",
            location: new google.maps.LatLng(37.767264, -122.429960),
            img: "images/lucky.png",
            description: "Cheap drinks, good music, a patio and video games" +
            " among good company is always a fun night. This bar is a bit" +
            " rough around the edges, but that's how I like it.",
            url: "https://www.yelp.com/biz/lucky-13-san-francisco"
        },
        {
            name: "Brewcade",
            location: new google.maps.LatLng(37.765791, -122.431496),
            img: "images/brew.png",
            description: "Video games everywhere and great beer. " +
            " I'm never disappointed coming here when I want a simple night.",
            url: "https://www.yelp.com/biz/brewcade-san-francisco"
        },
        {
            name: "Tartine",
            location: new google.maps.LatLng(37.761460, -122.423909),
            img: "images/tartine.png",
            description: "The banana cream pie is my favorite item and" +
            " their specialty. Don't pass up the opportunity to enjoy" +
            " incredible treats. Dolores park isn't too far away so take" +
            " your treats and eat them there.",
            url: "https://www.yelp.com/biz/tartine-bakery-and-cafe-san-francisco"
        },
        {
            name: "The Mix",
            location: new google.maps.LatLng(37.761164, -122.434428),
            img: "images/mix.png",
            description: "the calmest gay bar in the castro" +
            " friendly open atmosphere and pool!",
            url: "https://www.yelp.com/biz/the-mix-san-francisco"
        }
    ],
    drawMap: function (element, latlng) {
        var map = new google.maps.Map(element,
            {
                center: latlng,
                zoom: 13
            });

        return map;
    },
    
    setInfoMarker: function (info) {
        var locdetails = new google.maps.InfoWindow({
            content: info,
            maxWidth:300
        });
        return locdetails;
    },

    setMarker: function (map, latlng, info) {
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
        });
        if(info){
            var details = MAP.setInfoMarker(info);
            marker.addListener('click', function(){
                details.open(map,marker); 
            });
        }
        return marker;
    },

    
    initMap: function () {
        
        var sanFrancisco = new google.maps.LatLng(37.7749, -122.4194);
        var map = MAP.drawMap(U.$('map'), sanFrancisco);
        
        for(var i = 0, count = MAP.favorites.length; i < count; i++){
            var info = '<div><h3>' + MAP.favorites[i].name + 
                '</h3><img src="' +
                MAP.favorites[i].img + '"/><p>' + MAP.favorites[i].description +
                '</p><br/>' + '<a href="' + MAP.favorites[i].url + '">visit webpage</a></div>';
            var marker = MAP.setMarker(map,MAP.favorites[i].location,info);
        }
        
        return false;
    }

};

        

window.onload = MAP.initMap;
