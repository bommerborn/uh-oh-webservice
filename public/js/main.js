var fake = '[["51.5073509 ","-0.12775829999998223 "],["51.48689323 ","-0.16795419 "],["51.50276628 ","-0.17285399 "],["51.47214509 ","-0.15137923 "],["51.50086613 ","-0.19596798 "],["51.53174932 ","-0.13073053 "],["51.52022205 ","-0.13424481 "],["51.5187006 ","-0.10719379 "],["51.51268263 ","-0.06306468 "],["51.48473864 ","-0.13186051 "],["51.51725932 ","-0.07441847 "],["51.4799072 ","-0.15827303 "],["51.46405101 ","-0.12788872 "],["51.51025935 ","-0.14629271 "],["51.51802583 ","-0.093624 "],["51.50325317 ","-0.09353706 "],["51.51159007 ","-0.10542988 "],["51.54177375 ","-0.14828726 "],["51.50078556 ","-0.10220889 "],["51.49953652 ","-0.1539931 "],["51.51742247 ","-0.14964162 "],["51.51308156 ","-0.13077876 "],["51.48760228 ","-0.1220472 "],["51.49303851 ","-0.15164138 "],["51.53653829 ","-0.12949435 "],["51.53706269 ","-0.14017134 "],["51.54097968 ","-0.14963748 "],["51.54683008 ","-0.13270671 "],["51.48284651 ","-0.17746785 "],["51.52676933 ","-0.11521678 "],["51.50543997 ","-0.09850754 "],["51.51697155 ","-0.07324926 "],["51.5367269 ","-0.12027178 "],["51.4921418 ","-0.12923128 "],["51.5138777 ","-0.18236766 "],["51.51105723 ","-0.07609246 "],["51.52845098 ","-0.16604706 "],["51.48618613 ","-0.15271335 "],["51.51575917 ","-0.1758186 "],["51.50000918 ","-0.07468474 "],["51.49815179 ","-0.16307352 "],["51.51321774 ","-0.06876157 "],["51.53285764 ","-0.10590148 "],["51.49960917 ","-0.1129212 "],["51.47068947 ","-0.13055783 "],["51.53122888 ","-0.1726699 "],["51.52093498 ","-0.13612988 "],["51.54557422 ","-0.10085319 "],["51.51235235 ","-0.11707792 "],["51.49786909 ","-0.13351763 "],["51.49743499 ","-0.07245899 "],["51.47000943 ","-0.10128017 "],["51.54468186 ","-0.15818471 "],["51.54615672 ","-0.15693232 "],["51.49133952 ","-0.10156564 "],["51.50577705 ","-0.17214181 "],["51.51136347 ","-0.14619082 "],["51.48801785 ","-0.16228297 "],["51.54687939 ","-0.10473263 "],["51.54116496 ","-0.15114417 "],["51.51881815 ","-0.18832421 "],["51.52284609 ","-0.18796213 "],["51.52497857 ","-0.08749682 "],["51.51727808 ","-0.0824737 "],["51.48373353 ","-0.15607233 "],["51.53694753 ","-0.09531097 "],["51.51803799 ","-0.09158415 "],["51.53794973 ","-0.12244056 "],["51.48621608 ","-0.11734879 "],["51.48092271 ","-0.17470936 "],["51.51413024 ","-0.14326166 "],["51.50646753 ","-0.09852275 "],["51.52269614 ","-0.17309712 "],["51.49245169 ","-0.10450496 "],["51.49610034 ","-0.18343693 "],["51.51724076 ","-0.15390943 "],["51.518016 ","-0.15916632 "],["51.54249195 ","-0.15182587 "],["51.51097749 ","-0.10085909 "],["51.53042051 ","-0.10927368 "],["51.47502152 ","-0.14026895 "],["51.48358094 ","-0.09489335 "],["51.49223443 ","-0.0667095 "],["51.52233768 ","-0.14479018 "],["51.50663028 ","-0.12628956 "],["51.50599189 ","-0.17300025 "],["51.53664799 ","-0.12700912 "],["51.50939052 ","-0.10253753 "],["51.49683607 ","-0.19075433 "],["51.4959568 ","-0.11929299 "],["51.47619521 ","-0.12386294 "],["51.49061792 ","-0.0853606 "],["51.4787516 ","-0.16140258 "],["51.49043821 ","-0.18424271 "],["51.51168565 ","-0.13798037 "],["51.51383523 ","-0.0884007 "],["51.47772163 ","-0.09519513 "],["51.51817393 ","-0.07224117 "],["51.49372559 ","-0.09696581 "],["51.47357107 ","-0.15800648 "],["51.53530647 ","-0.13873109 "]]'

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(51.525341, -0.1391107),
        zoom: 14
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var organiseData = function(data) {
            var fakeData = JSON.parse(fake)
            var parsedFakeData = []
            var i = 0
            fakeData.forEach(function(array) {
                i++
                console.log(i)
                fakeObj = {}
                fakeObj.gpsCoords = array;
                fakeObj.mode = "Alert"
                if (i % 2 == 0) {
                    fakeObj.mode = "Emergency"
                }
                data.push(fakeObj);

            })
            // data.push(parsedFakeData);
            data.forEach(function(obj) {
                console.log(obj.gpsCoords)
                var myLatlng = new google.maps.LatLng(obj.gpsCoords[0], obj.gpsCoords[1]);

                var infowindow = new google.maps.InfoWindow({
                    content: '<h1>' + obj.mode + '</h1>'
                });
                var pinColor = 'FF00FF'

                if (obj.mode === 'Alert') {
                    pinColor = '660033'

                }
                var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                    new google.maps.Size(21, 34),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(10, 34))


                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: "Incident Report",
                    icon: pinImage
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);
                });
            })
        }
        // locations = $.get
    $.getJSON('/uhohDetails').then(organiseData)
}
google.maps.event.addDomListener(window, 'load', initialize);
