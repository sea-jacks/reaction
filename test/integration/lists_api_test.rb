require 'test_helper'

class ListsAPITest < ActionDispatch::IntegrationTest
  class PostListsTest < ActionDispatch::IntegrationTest
    class ValidDataTest < ActionDispatch::IntegrationTest
      test 'creates a new list' do
        assert_equal 0, List.count
        @board = Board.create(title: 'test board')

        post '/api/lists',
          params: { list: { title: 'My new list', board_id: @board.id } },
          headers: { 'Accept' => 'application/json' }

        assert_equal 1, List.count
      end

      test 'returns a 201' do
        @board = Board.create(title: 'test board')
        post '/api/lists',
          params: { list: { title: 'My new list', board_id: @board.id } },
          headers: { 'Accept' => 'application/json' }


        assert_response 201
      end


      test 'returns the new list' do
        @board = Board.create(title: 'test board')
        new_list = { title: 'My new list', board_id: @board.id }

        post '/api/lists',
          params: { list: new_list },
          headers: { 'Accept' => 'application/json' }

        assert_equal List.first.to_json, response.body
      end
    end

    class InvalidDataTest < ActionDispatch::IntegrationTest
      test 'returns a 422' do
        @board = Board.create(title: 'test board')
        post '/api/lists',
          params: { list: { title: '', board_id: @board.id } },
          headers: { 'Accept' => 'application/json' }

        assert_response 422
      end
    end
  end
end
