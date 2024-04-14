FactoryBot.define do
  factory :feature do
    feature_id { Faker::Alphanumeric.alpha(number: 10) }
    mag { Faker::Number.decimal(l_digits: 2) }
    place { Faker::Address.city }
    time { Faker::Time.between(from: DateTime.now - 1, to: DateTime.now) }
    url { Faker::Internet.url }
    tsunami { [true, false].sample }
    mag_type { %w[md ml ms mw me mi mb mlg].sample }
    title { Faker::Lorem.sentence(word_count: 3) }
    longitude { Faker::Address.longitude }
    latitude { Faker::Address.latitude }
  end
end
