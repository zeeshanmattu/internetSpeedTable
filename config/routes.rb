Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "places#index"

  get "api/places", to: "api/places#index"
  get "/new-internet-speed", to: "internet_speeds#new"
end
