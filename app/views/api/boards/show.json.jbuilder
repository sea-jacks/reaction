json.merge! @board.attributes
json.lists(@board.lists) do |list|
  json.merge! list.attributes
   json.cards(list.cards) do |card|
      json.(card,
            :id,
            :title,
            :due_date,
            :labels,
            :description,
            :list_id,
            :board_id,
            :comments_count,
            :position,
            :completed)
  end
end
