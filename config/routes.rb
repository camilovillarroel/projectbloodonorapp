Rails.application.routes.draw do
  get 'locations/map'
  get 'questionnaires/survey'
  devise_for :healthworkers
  devise_for :users, controllers: { registrations:
    "users/registrations" }
  root to: "main_view#home"

  post 'questionnaires/eval', to: 'questionnaires#eval'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
