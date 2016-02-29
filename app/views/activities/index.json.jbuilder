json.array!(@activities) do |activity|
  json.extract! activity, :id, :starting_time, :finishing_time, :name
  json.url activity_url(activity, format: :json)
end
