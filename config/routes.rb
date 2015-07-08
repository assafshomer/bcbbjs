Rails.application.routes.draw do

  get 'static_pages/home'
  get 'static_pages/getpixel'
  root              to: 'static_pages#home'
  namespace :api do
    resources :info, only: [:index]
  end
end
