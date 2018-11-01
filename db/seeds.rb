# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

Board.destroy_all
List.destroy_all
Card.destroy_all
Comment.destroy_all

b = Board.create(title: 'My Board')
l1 = List.create(title: 'My List1', board_id: b.id)

Card.create(title: "My Card1", list_id: l1.id, description: "summary", labels: ['red', 'purple'], comments_count: 2, due_date: DateTime.now()+1)
Card.create(title: 'My Card2', list_id: l1.id, description: 'summary', comments_count: 1, completed: false, due_date: DateTime.now()-0.5)

l2 = List.create(title: 'My List2', board_id: b.id)
Card.create(title: 'My Card1', list_id: l2.id, description: 'summary', comments_count: 0, completed: true, due_date: DateTime.new(2018,10,30))
Card.create(title: 'My Card2', list_id: l2.id, description: 'summary', comments_count: 1, due_date: DateTime.now())

c = Card.create(title: 'My Card3', list_id: l2.id, description: '', comments_count: 3, due_date: DateTime.new(2018,11,5))

Comment.create(text: "Great card", card_id: c.id)
Comment.create(text: "It was okay IMO", card_id: c.id)
Comment.create(text: "Whoo hoo -- this is done!", card_id: c.id)
