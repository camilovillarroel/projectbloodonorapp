require 'test_helper'

class QuestionnairesControllerTest < ActionDispatch::IntegrationTest
  test "should get survey" do
    get questionnaires_survey_url
    assert_response :success
  end

end
