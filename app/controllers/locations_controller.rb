class LocationsController < ApplicationController


  def map
    @institutions = Intitution.all
    @hash = Gmaps4rails.build_markers(@institutions) do |intitution, marker|
      marker.lat intitution.latitude
      marker.lng intitution.longitude
      marker.infowindow "#{intitution.name}, #{intitution.address}"
    end
  end



end
