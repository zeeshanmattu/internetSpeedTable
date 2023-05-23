require "test_helper"

module Api
  class PlaceController < ActionDispatch::IntegrationTest
    test "anwer palces the match search term if empty" do
      place = FactoryBot.create(:place)

      get "/api/places?search_term="

      parse_body = JSON.parse(response.body)
      assert_equal parse_body, (
        {
          places:[
            {
              name: place.name,
              city: place.city,
              most_recent_download_speed: nil,
              most_recent_download_units: nil,
              number_of_measurements: 0
            }.stringify_keys
          ]
        }.stringify_keys
      )
    end

    test "answer all place if search term is set" do
      place1 = FactoryBot.create(:place, name:"Place 1");
      place2 = FactoryBot.create(:place, name:"city abc");

      get "/api/places?search_term=Place"

      parse_body = JSON.parse(response.body)

      assert_equal parse_body, (
        {
          places:[
            {
              name: place1.name,
              city: place1.city,
              most_recent_download_speed: nil,
              most_recent_download_units: nil,
              number_of_measurements: 0
            }.stringify_keys
          ]
        }.stringify_keys
      )
    end

    test "answer now place found if search term is has not place matching" do
      place = FactoryBot.create(:place, name:"Place 1");

      get "/api/places?search_term=nothinghere"

      parse_body = JSON.parse(response.body)

      assert_equal parse_body, (
        {
          places:[]
        }.stringify_keys
      )
    end

    test "recent upload speed, units, measurements are correct or not" do
      place = FactoryBot.create(:place, name: "my place", city: "my city");
      speed1 = FactoryBot.create(
        :internet_speed,
        place: place,
        download_speed: 13.90,
        download_unit: "mbps",
        created_at: 5.days.ago
      )
      speed2 = FactoryBot.create(
        :internet_speed,
        place: place,
        download_speed: 18.90,
        download_unit: "mbps",
        created_at: 3.days.ago
      )

      get "/api/places?search_term="

      parse_body = JSON.parse(response.body)

      expect_results = {
        places:[
          {
            name: "my place",
            city: "my city",
          }.stringify_keys
        ]
      }.stringify_keys
    end
  end
end
