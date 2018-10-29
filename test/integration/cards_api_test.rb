require 'test_helper'

class CardsAPITest < ActionDispatch::IntegrationTest
  class PostCardsTest < ActionDispatch::IntegrationTest
    class ValidDataTest < ActionDispatch::IntegrationTest
      def setup
        @board = Board.create(title: 'test board')
        @list = List.create(title: 'My new list', board_id: @board.id)
      end

      def teardown
        @board = nil
        @list = nil
      end

      test 'creates a new card' do
        assert_equal 0, Card.count

        post '/api/cards',
          params: { card: { title: 'My new card', list_id: @list.id } },
          headers: { 'Accept' => 'application/json' }

        assert_equal 1, Card.count
      end

      test 'returns a 201' do
        post '/api/cards',
          params: { card: { title: 'My new card', list_id: @list.id } },
          headers: { 'Accept' => 'application/json' }

        assert_response 201
      end


      test 'returns the new card' do
        post '/api/cards',
          params: { card: { title: 'My new card', list_id: @list.id } },
          headers: { 'Accept' => 'application/json' }

        assert_equal Card.first.to_json, response.body
      end
    end

    class InvalidDataTest < ActionDispatch::IntegrationTest
      test 'returns a 422' do
        @board = Board.create(title: 'test board')
        @list = List.create(title: 'My new list', board_id: @board.id)

        post '/api/cards',
          params: { card: { title: '', list_id: @list.id } },
          headers: { 'Accept' => 'application/json' }

        assert_response 422
      end
    end
  end

  class UpdateCardsTest < ActionDispatch::IntegrationTest
    class ValidDataTest < ActionDispatch::IntegrationTest
      def setup
        @board = Board.create(title: 'test board')
        @list = List.create(title: 'My new list', board_id: @board.id)
        @card = Card.create(title: "My first card", list_id: @list.id)
        @card_id = @card.id
      end

      def teardown
        @card = nil
      end

      test 'returns a 202' do
        put "/api/cards/#{@card_id}",
          params: { card: { title: 'My updated card', list_id: @list.id } },
          headers: { 'Accept' => 'application/json' }

        assert_response 202
      end


      test 'returns the updated card' do
        put "/api/cards/#{@card_id}",
          params: { card: { title: 'Updated card again' } },
          headers: { 'Accept' => 'application/json' }
        assert_equal JSON.parse(Card.first.to_json), JSON.parse(response.body)
      end
    end

    class InvalidDataTest < ActionDispatch::IntegrationTest
      test 'returns a 422' do
        @board = Board.create(title: 'test board')
        @list = List.create(title: 'My new list', board_id: @board.id)
        @card = Card.create(title: "My first card", list_id: @list.id)
        @card.title = ''

        put "/api/cards/#{@card.id}",
          params: { card: { title: '', list_id: @list.id } },
          headers: { 'Accept' => 'application/json' }

        assert_response 422
      end
    end
  end
end
