@upvotes.each do |upvote|
  json.set! upvote.id do
    json.extract! upvote, :id, :user_id, :comment_id, :vote_value
  end


end
