require 'test_helper'

class LocationsControllerTest < ActionDispatch::IntegrationTest
  test "should get map" do
    get locations_map_url
    assert_response :success
  end

end
