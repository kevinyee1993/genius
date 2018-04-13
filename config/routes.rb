Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]

    resources :users do
      resources :tracks, only: [:create, :update, :destroy]
    end

    resources :tracks, only: [:index, :show]

    resources :tracks do
      resources :annotations, only: [:create]
    end

    resources :annotations, only: [:index, :show, :update, :destroy]

    resources :tracks do
      resources :track_comments, only: [:create, :index]
    end

    resources :track_comments, only: [:update, :destroy]

    resources :track_comments do
      resources :comment_upvotes, only: [:create]
    end

    resources :comment_upvotes, only: [:destroy, :update, :index, :show]

    resource :session, only: [:create, :destroy]
  end

  root 'static_pages#root'
end
