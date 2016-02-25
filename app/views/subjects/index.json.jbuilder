json.array!(@subjects) do |subject|
  json.extract! subject, :id, :name, :description, :timelapse, :progress
  json.url subject_url(subject, format: :json)
end
