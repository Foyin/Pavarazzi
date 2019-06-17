function initMap() {
        var pavarazzi = {lat: 45.4138619, lng: -75.7003277};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: pavarazzi
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Pavarazzi</h1>'+
            '<div id="bodyContent">'+
            
            '<p>Attribution: pavarazzi, <a href="https://en.wikipedia.org/w/index.php?title=pavarazzi&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=pavarazzi</a> '+
            '(last visited June 22, 2009).</p> +
            '<a href="https://www.google.com/maps/place/491+Somerset+St+W,+Ottawa,+ON+K1R+5J7/@45.4139341,-75.7025607,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce0452ad38fe5d:0xb84393dee538c1b7!8m2!3d45.4139341!4d-75.700372">' +
            'View on Google Maps</a>' +
            '+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: pavarazzi,
          map: map,
          title: 'Pavarazzi'
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });