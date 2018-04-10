Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]

    resources :users do
      resources :tracks, only: [:create, :update, :destroy]
    end

    resources :tracks, only: [:index, :show]

    resources :tracks do
      resources :annotations, only: [:create, :show, :update, :destroy]
    end

    resource :session, only: [:create, :destroy]
  end

  root 'static_pages#root'
end
