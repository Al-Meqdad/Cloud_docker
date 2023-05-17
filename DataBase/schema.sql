CREATE TABLE IF NOT EXISTS news (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  content TEXT
);

INSERT INTO news (title, content) VALUES
  ('Breaking News', 'Breaking News something urgent just happened in the world.'),
  ('Secondary News', 'The dollar is dropping its prices compared to the ILS.'),
  ('Ads', 'Buy this laptop for only $999.99 10% Discount.'),
  ('News', 'New News in the News of the News.'),
  ('Article', 'Article about programming languages.'),
  ('Latest Inventions', 'A 3 screen laptop is coming out from razor.'),
  ('Gaming', 'Realistic Games are coming with unreal engine 5 shocking results.'),
  ('Developers News', 'Currently there are no jobs available for programmers making it hard for fresh graduates.'),
  ('Companies', 'New companies are going bankrubt due to the downfall of USA economy.'),
  ('Jobs', '3 job offers for senior developers.'),
  ('Colleges', 'An najah announces the extension of the secodn semester by a 2 whole weeks');