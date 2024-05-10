json.array! @todos do |todo|
  json.id todo.id
  json.title todo.title
  json.description todo.description
  json.created_at todo.created_at
  json.updated_at todo.updated_at
end
