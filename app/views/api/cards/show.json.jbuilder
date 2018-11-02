json.merge! @card.attributes
json.board_id @card.board_id

json.comments(@card.comments) do |c|
  json.merge! c.attributes
end
