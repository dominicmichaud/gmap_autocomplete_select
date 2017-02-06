$(function(){
    initMap();
});

function initMap(){
    var input = document.getElementById('user_city');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setComponentRestrictions(
        {'country': ['us', 'ca']});

    autocomplete.addListener('place_changed', function() {
        var place, city, state, country;
        place = autocomplete.getPlace();
        console.log(place);
        console.log(place.formatted_address);

        for(i=0;i<place.address_components.length;i++){
            if(place.address_components[i].types[0] == "locality"){
                city = place.address_components[i].long_name;
            }

            if(place.address_components[i].types[0] == "administrative_area_level_1"){
                state = place.address_components[i].long_name;
            }

            if(place.address_components[i].types[0] == "country"){
                country = place.address_components[i].long_name;
            }

        }

        var state_input = document.getElementById('user_province');
        var country_input = document.getElementById('user_country');

        $(input).val(city)
        $(state_input).val(state);
        $(country_input).val(country);
    });
}