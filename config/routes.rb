Rails.application.routes.draw do
  resources :schedules
  resources :activities
  resources :activities
	root :to => 'subjects#index'

	resources :subjects
end
