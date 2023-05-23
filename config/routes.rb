Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get "api/places", to: "api/places#index"
  get "*path", to: "places#index"
  root "places#index"

end
