class QuestionnairesController < ApplicationController
  def survey
      @questions = Question.all
      @options = Option.all
  end
end
