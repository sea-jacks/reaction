require 'test_helper'

class CommentsAPITest < ActionDispatch::IntegrationTest
  class PostCommentsTest < ActionDispatch::IntegrationTest
    class ValidDataTest < ActionDispatch::IntegrationTest
      def setup
        @board = Board.create(title: 'test board')
        @list = List.create(title: 'My new list', board_id: @board.id)
        @card = Card.create(title: 'A Great Card', list_id: @list.id)
      end

      def teardown
        @board = nil
        @list = nil
        @card = nil
      end

      test 'creates a new card' do
        assert_equal 0, Comment.count

        post '/api/comments',
          params: { card_id: @card.id, comment: { text: 'Wow!'} },
          headers: { 'Accept' => 'application/json' }

        assert_equal 1, Comment.count
      end

      test 'returns a 201' do
        post '/api/comments',
          params: { card_id: @card.id, comment: { text: 'Wow!'} },
          headers: { 'Accept' => 'application/json' }

        assert_response 201
      end


      test 'returns the new comment' do
        post '/api/comments',
          params: { card_id: @card.id, comment: { text: 'Wow!'} },
          headers: { 'Accept' => 'application/json' }

        assert_equal Comment.first.to_json, response.body
      end
    end

    class InvalidDataTest < ActionDispatch::IntegrationTest
      def setup
        @board = Board.create(title: 'test board')
        @list = List.create(title: 'My new list', board_id: @board.id)
        @card = Card.create(title: 'A Great Card', list_id: @list.id)
      end

      def teardown
        @board = nil
        @list = nil
        @card = nil
      end

      test 'returns a 422' do
        post '/api/comments',
          params: { card_id: @card.id , comment: { text: ''} },
          headers: { 'Accept' => 'application/json' }

        assert_response 422
      end

      test 'returns a 404' do
        post '/api/comments',
          params: { card_id: 100, comment: { text: 'Wow!'} },
          headers: { 'Accept' => 'application/json' }

        assert_response 404
      end
    end
  end
end
