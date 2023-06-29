export interface Question {
    correctAnswer: string;
    options: string[];
    question: string;
}
// 
export type Questions = Question[]
// 
export const quetions: Questions = [
    {
        correctAnswer: "Rome",
        options: ["Venice", "Rome", "Naples", "Milan"],
        question: "In which Italian city can you find the Colosseum?",
    },
    {
        correctAnswer: "Zooey Deschanel",
        options: ["Zooey Deschanel", "Kaley Cuoco", "Jennifer Aniston", "Alyson Hannigan"],
        question: "In the TV show New Girl, which actress plays Jessica Day?"
    },
    {
        correctAnswer: "Grand Canyon, USA",
        options: ["Verdon Gorge, France", "King’s Canyon, Australia", "Grand Canyon, USA", "Fjaðrárgljúfur Canyon, Iceland"],
        question: "What is the largest canyon in the world?"
    },
    {
        correctAnswer: "5,525 miles",
        options: ["3,525 miles", "4,525 miles", "5,525 miles", "6,525 miles"],
        question: "How long is the border between the United States and Canada?"
    },
    {
        correctAnswer: "Mouna Loa",
        options: ["Mount Etna", "Mount Vesuvius", "Mouna Loa", "Mount Batur"],
        question: "What is the largest active volcano in the world?"
    },
    {
        correctAnswer: "21 January 1924",
        options: ["21 January 1924", "21 January 1934", "21 January 1944", "21 January 1954"],
        question: "When did Lenin die?"
    },
    {
        correctAnswer: "Tennessee",
        options: ["Maryland", "South Dakota", "Indiana", "Tennessee"],
        question: "In which US state did the ​​Scopes Monkey Trial happen?"
    },
    {
        correctAnswer: "1960",
        options: ["1950", "1960", "1970", "1980"],
        question: "When was the book “To Kill a Mockingbird” by Harper Lee published?"
    },
    {
        correctAnswer: "Le Louvre",
        options: ["Le Louvre", "Uffizi Museum", "British Museum", "Metropolitan Museum of Art"],
        question: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?"
    },
    {
        correctAnswer: "Madrid",
        options: ["Buenos Aires", "Barcelona", "Santiago", "Madrid"],
        question: "In which city can you find the Prado Museum?"
    },
    {
        correctAnswer: "2002",
        options: ["1992", "1998", "2002", "2008"],
        question: "When did Salt Lake City host the Winter Olympics?"
    },
    {
        correctAnswer: "Penny",
        options: ["Penny", "Patty", "Lily", "Jessie"],
        question: "In the Big Bang Theory, what is the name of Sheldon and Leonard’s neighbour?"
    },
    {
        correctAnswer: "1st September 1939",
        options: ["1st September 1939", "11th November 1939", "8th May 1940", "1st December 1940"],
        question: "When did Hitler invade Poland?"
    },
    {
        correctAnswer: "Asia",
        options: ["Asia", "Africa", "Europe", "North America"],
        question: "What is the largest continent in size?"
    },
    {
        correctAnswer: "Louis XVI",
        options: ["Louis XVI", "Charlemagne", "Francis I", "Louis XIV"],
        question: "Which French king was nicknamed the “Sun King”?"
    },
    {
        correctAnswer: "Dick Cheney",
        options: ["Kamala Harris", "Joe Biden", "Dick Cheney", "Al Gore"],
        question: "Who was George W. Bush’ vice president?"
    },
    {
        correctAnswer: "Alexander Graham Bell",
        options: ["Thomas Edison", "Benjamin Franklin", "Alexander Graham Bell", "Nikola Tesla"],
        question: "Which famous inventor invented the telephone?"
    },
    {
        correctAnswer: "Capricorn",
        options: ["Scorpio", "Capricorn", "Libra", "Aries"],
        question: "If you are born on the 1st of January, which star sign are you?"
    },
    {
        correctAnswer: "8",
        options: ["1", "3", "4", "5"],
        question: "How many wives had Henry VIII?"
    }, 
    {
        correctAnswer: "Turin",
        options: ["Turin", "Barcelona", "Manchester", "Marseille"],
        question: "In which city is the Juventus Football Club based?"
    },
    {
        correctAnswer: "Peyo",
        options: ["Hergé", "Peyo", "Morris", "Edgar P. Jacobs"],
        question: "Which artist and author made the Smurfs comic strips?"
    },
    {
        correctAnswer: "Earthquake intensity",
        options: ["Wind Speed", "Temperature", "Tornado Strength", "Earthquake intensity"],
        question: "What does the Richter scale measure?"
    },
    {
        correctAnswer: "Portugal",
        options: ["Spain", "Brazil", "Uruguay", "Portugal"],
        question: "Which country is the footballer Cristiano Ronaldo from?"
    },
    {
        correctAnswer: "Nile",
        options: ["Amazon River", "Nile", "Yellow River", "Congo River"],
        question: "What is the longest river in the world?"
    },
    {
        correctAnswer: "6",
        options: ["5", "6", "7", "8"],
        question: "How many sides has a Hexagon?"
    },
    {
        correctAnswer: "Poland",
        options: ["Ukraine", "Bulgaria", "Hungary", "Poland"],
        question: "Which country does not share a border with Romania?"
    },
    {
        correctAnswer: "Elizabeth Bennet",
        options: ["Bernadette Smith", "Poppy Williams", "Elizabeth Bennet", "Maggie Johnson"],
        question: "What is the name of the main character in Pride and Prejudice?"
    },
    {
        correctAnswer: "Ireland",
        options: ["Germany", "Ireland", "Scotland", "Spain"],
        question: "In which country was the airline Ryanair founded?"
    },
    {
        correctAnswer: "1605",
        options: ["1505", "1605", "1705", "1805"],
        question: "When were Guy Fawkes and The Gunpowder Plot discovered?"
    },
    {
        correctAnswer: "Joseph Heller",
        options: ["Mark Twain", "Ernest Hemingway", "Charles Dickens", "Joseph Heller"],
        question: "Who wrote Catch-22?"
    },
    {
        correctAnswer: "JFK",
        options: ["Martin Luther King", "JFK", "MK Gandhi", "Malcolm X"],
        question: "Who was assassinated on the 22nd of November 1963?"
    },
    {
        correctAnswer: "1997",
        options: ["1997", "1999", "2001", "2003"],
        question: "When was the first Harry Potter book published?"
    },
    {
        correctAnswer: "Agatha Christie",
        options: ["James Patterson", "Stephen King", "Arthur Conan Doyle", "Agatha Christie"],
        question: "Which author is known for creating Hercule Poirot?"
    },
    {
        correctAnswer: "Indian Food",
        options: ["French food", "Italian food", "Indian Food", "Mexican Food"],
        question: "If you are eating chicken jalfrezi, what type of food are you eating?"
    },
    {
        correctAnswer: "Battle of Hastings",
        options: ["Battle of Hastings", "Battle of Waterloo", "Battle of Borodino", "Battle of the Somme"],
        question: "Which battle did William the Conqueror win in 1066?"
    },
    {
        correctAnswer: "Jeff Bezos",
        options: ["Elon Musk", "Tim Cook", "Mark Zuckerberg", "Jeff Bezos"],
        question: "Who is the CEO of Amazon?"
    },
    {
        correctAnswer: "Soviet Union",
        options: ["Germany", "Italy", "Soviet Union", "Japan"],
        question: "Which country was not part of the Axis Powers during WWII?"
    },
    {
        correctAnswer: "Oasis",
        options: ["Oasis","Joy Division", "The Verge", "Nirvana"],
        question: "Which band released the song “Wonderwall” in the 90s?"
    },
    {
        correctAnswer: "Let it be – The Beatles",
        options: ["Smells like teen spirit – Nirvana", "Get lucky – Daft Punk", "Sweet Child O’ Mine – Gun N’ Roses", "Let it be – The Beatles"],
        question: "“When I find myself in times of trouble, Mother Mary comes to me” is the opening line of which song?"
    },
    {
        correctAnswer: "A mathematician",
        options: ["A philosopher", "A poet", "A painter", "A mathematician"],
        question: "What was Euclid?"
    },
    {
        correctAnswer: "Waltz",
        options: ["Salsa", "Waltz", "Jive", "Cha Cha"],
        question: "Which ballroom dance originated in Germany and Austria?"
    },
    {
        correctAnswer: "Baghdad",
        options: ["Baghdad", "Islamabad", "Tehran", "Amman"],
        question: "What is the capital of Iraq?"
    },
    {
        correctAnswer: "Uruguay",
        options: ["Brazil", "Portugal", "Italy", "Uruguay"],
        question: "Which country won the first Football World Cup in 1930?"
    },
    {
        correctAnswer: "Thailand",
        options: ["Vietnam", "Malaysia", "Indonesia", "Thailand"],
        question: "In which country is the baht the currency?"
    },
    {
        correctAnswer: "Sydney",
        options: ["London", "Paris", "Barcelona", "Sydney"],
        question: "In which city were the 2000 Summer Olympics held?"
    },
    {
        correctAnswer: "Yellow",
        options: ["Blue", "Red", "Yellow", "Black"],
        question: "What colour is the “m” from the McDonald’s logo?"
    },
    {
        correctAnswer: "Memphis",
        options: ["New York", "Austin", "Miami", "Memphis"],
        question: "In which city was Martin Luther King Jr. assassinated?"
    },
    {
        correctAnswer: "Snowy",
        options: ["Snowy", "Flakes", "Dottie", "Luna"],
        question: "What is the name of the dog in Tintin?"
    },
    {
        correctAnswer: "Cyndi Lauper",
        options: ["Blondie", "Cyndi Lauper", "A-ha", "Bonnie Tyler"],
        question: "Who released the song “Girls Just Want To Have Fun” in the 80s?"
    },
    {
        correctAnswer: "Avocado",
        options: ["Banana", "Yoghurt", "Avocado", "Chick Pea"],
        question: "What is guacamole made of?",
    },
    {
        correctAnswer: "11",
        options: ["3", "8", "9", "11"],
        question: "“Onze” is the french number for?"
    },
    {
        correctAnswer: "March",
        options: ["January", "March", "June", "September"],
        question: 'Which month is the aquamarine the birthstone of?'
    },
    {
        correctAnswer: "Moeraki Boulders",
        options: ["Moeraki Boulders", "The Great Barrier Reef", "Uluru", "12 Apostles"],
        question: "Which natural landmark is not in Australia?"
    },
    {
        correctAnswer: "Caladesi Island",
        options: ["Isle of Skye", "Islay", "Isle of Mull", "Caladesi Island"],
        question: "Which one of the following islands is not in Scotland?"
    },
    {
        correctAnswer: "Ronald Reagan",
        options: ["Franklin D. Roosevelt", "Ronald Reagan", "Bill Clinton", "George W. Bush"],
        question: "Who was the 40th President of the United States?"
    },
    {
        correctAnswer: "11",
        options: ["8", "9", "10", "11"],
        question: "How many players are in a cricket team?"
    },
    {
        correctAnswer: "Kiernan Shipka",
        options: ["Kiernan Shipka", "Christina Hendricks", "January Jones", "Elisabeth Moss"],
        question: "Which actress played Sally Draper in Mad Men?"
    },
    {
        correctAnswer: "National Aeronautics and Space Administration",
        options: ["National Aeronautics and Space Administration", "Nautical And Space Association", "National Aeronautics and Space Association", "New Aeronautics and Spacial Administration"],
        question: "What does NASA stand for?"
    },
    {
        correctAnswer: "A hotel",
        options: ["A dance", "A telenovela", "A hotel", "A police operation code name"],
        question: "What is “the Marbella” in Jane the Virgin?"
    },
    {
        correctAnswer: "Marie Curie",
        options: ["Mother Teresa", "Marie Curie", "Jane Adams", "Alva Myrdal"],
        question: "Who was the first woman to win a Nobel Prize?"
    },
    {
        correctAnswer: "Joey",
        options: ["Joey", "Ross", "Chandler", "Mike"],
        question: "Which Friends character’s famous pickup line is “How you doin’?"
    },
    {
        correctAnswer: "Lawyer",
        options: ["Architect", "Lawyer", "Teacher", "Journalist"],
        question: "What is Marshall’s job in How I met your mother?"
    },
    {
        correctAnswer: "Apple TV+",
        options: ["Netflix", "Amazon Prime", "Apple TV+", "Dinsey +"],
        question: "On which streaming service did The Morning show premiere in 2019?"
    },
    {
        correctAnswer: "Heart of the Ocean",
        options: ["Call of the Ocean", "Heart of Love", "Heart of the Ocean", "Call of Love"],
        question: "What is the name of the gem in the movie Titanic?"
    },
    {
        correctAnswer: "Lion",
        options: ["Puffin", "Lion", "Rabbit", "Fox"],
        question: "What is the national animal of England?"
    },
    {
        correctAnswer: "The southern cross",
        options: ["The southern cross", "Orion", "Ursa Minor", "Scorpius"],
        question: "Which constellation is on the Australian flag?"
    },
    {
        correctAnswer: "Wellington",
        options: ["Christchurch", "Wellington", "Auckland", "Dunedin"],
        question: "What is the capital of New Zealand?"
    },
    {
        correctAnswer: "Starbucks",
        options: ["Twitter", "HSBC", "Target", "Starbucks"],
        question: "Which one of the following companies has a mermaid in its logo?"
    },
    {
        correctAnswer: "Tea",
        options: ["Tea", "Coffee", "Beer", "Orange Juice"],
        question: "Apart from water, what is the most popular drink in the world?"
    },
    {
        correctAnswer: "Scar",
        options: ["Mufasa", "Scar", "Timon", "Zazu"],
        question: "In The Lion King, who is Simba’s uncle?"
    },
    {
        correctAnswer: "206",
        options: ["186", "206", "286", "306"],
        question: "How many bones are there in an adult human body?"
    },
    {
        correctAnswer: "Polish Zloty",
        options: ["Polish Pounds", "Polish Krone", "Polish Dollars", "Polish Zloty"],
        question: "What is the currency in Poland?"
    },
    {
        correctAnswer: "Casino Royale",
        options: ["No time to Die", "Casino Royale", "Skyfall", "Quantum of Solace"],
        question: "What was Daniel Craig’s first James Bond movie?"
    },
    {
        correctAnswer: "Pineapple",
        options: ["Strawberry", "Pineapple", "Mango", "Apple"],
        question: "Which fruit is at the top of the Wimbledon gentlemen’s singles trophy?"
    },
    {
        correctAnswer: "WWII",
        options: ["Vietnam War", "WWI", "WWII", "War of Roses"],
        question: "During which historical period is the movie ‘Schindler’s List’ set?"
    },
    {
        correctAnswer: "Julius Caesar",
        options: ["Winston Churchill", "Charles de Gaulle", "Julius Caesar", "Alexander the Great"],
        question: "Who famously said “Veni, vidi, vici”?"
    },
    {
        correctAnswer: "Howard Carter",
        options: ["Howard Carter", "Arthur Evans", "Mortimer Wheeler", "Kathleen Kenyon"],
        question: "Who discovered the tumb of Tutankhamun?"
    },
    {
        correctAnswer: "Pompeii",
        options: ["Rome", "Catania", "Pompeii", "Naples"],
        question: "Which city was covered in ashes during the eruption of Mount Vesuvius in 79 AD?"
    },
    {
        correctAnswer: "Yellowstone National Park",
        options: ["Yellowstone National Park", "Great Smoky Mountains National Park", "Zion National Park", "Rocky Mountain National Park"],
        question: "What was the first national park in the US?"
    },
    {
        correctAnswer: "Battle of Culloden",
        options: ["Battle of Trafalgar", "Battle of Culloden", "Battle of Inkerman", "Battle of the Alma"],
        question: "Which historical battle is featured in the TV series “Outlander”?"
    },
    {
            correctAnswer: "Balearic Islands",
            options: ["Balearic Islands", "Canary Islands", "Whitsunday Islands", "Galapagos Islands"],
            question: "Mallorca is part of which archipelago?"
    },
    {
        correctAnswer: "UK",
        options: ["USA", "UK", "Australia", "New Zealand"],
        question: "The Union Jack is the name of which country’s flag?"
    },
    {
        correctAnswer: "Literature",
        options: ["Literature", "Peace", "Chemistry", "Physics"],
        question: "Which Nobel Prize did Winston Churchill win?"
    },
    {
        correctAnswer: "France",
        options: ["England", "Florida", "France", "Mexico"],
        question: "In Home Alone, where were the McCallister flying to when they left Kevin?"
    },
    {
        correctAnswer: "Hugh Grant",
        options: ["Pierce Brosman", "Colin Firth", "Hugh Grant", "Stellan Skarsgård"],
        question: "In Mamma Mia, which one of the following actors didn’t play one of Sophie’s dad?"
    },
    {
        correctAnswer: "Puff pastry",
        options: ["Puff pastry", "Flaky Pastry", "Choux Pastry", "Shortcrust Pastry"],
        question: "What type of pastry is used to make a Mille-feuille?"
    },
    {
        correctAnswer: "Mary Poppins",
        options: ["The Aristocats", "Mary Poppins", "Pinocchio", "The Beauty and the Tramp"],
        question: "In which Disney movie can you see a character named Mr. Banks?"
    },
    {
        correctAnswer: "Lily Collins",
        options: ["Lily Collins", "Lily James", "Gal Gadot", "Anna Kendrick"],
        question: "Which actress played Emily Cooper in “Emily in Paris”?"
    },
    {
        correctAnswer: "Maintenance",
        options: ["Mantenance", "Maintenance", "Miantenance", "Maintenence"],
        question: "Which one of the following is the correct spelling?"
    },
    {
        correctAnswer: "Butterfly",
        options: ["Blossom", "Butterfly", "Bubbles", "Buttercup"],
        question: "Which one of the following is not a character in the cartoon “The Powerpuff Girls”?"
    },
    {
        correctAnswer: "UK Prime Minister",
        options: ["US President", "French President", "UK Prime Minister", "Scotland First Minister"],
        question: "Who lives at the following address ‘10 Downing Street’?"
    },
    {
        correctAnswer: "Jimmy Page",
        options: ["Mick Jagger", "Keith Richards", "Charlie Watts", "Jimmy Page"],
        question: "Which one of the following artists wasn’t part of the Rolling Stones?"
    },
    {
        correctAnswer: "Lasagna",
        options: ["Pizza", "Lasagna", "Burger", "Sandwich "],
        question: "What’s Garfield favourite food?"
    },
    {
        correctAnswer: "27",
        options: ["7", "17", "27", "37"],
        question: "How many years did Nelson Mandela spend in prison?"
    },
    {
        correctAnswer: "Mount Fuji",
        options: ["Mount Tate", "Mount Kita", "Mount Fuji", "Mount Yari"],
        question: "What is the highest mountain in Japan?"
    },
    {
        correctAnswer: "8,849 m",
        options: ["5,849 m", "6,849 m", "7,849 m", "8,849 m"],
        question: "How high is Mount Everest?"
    },
    {
        correctAnswer: "Silver",
        options: ["Gold", "Silver", "Iron", "Carbon"],
        question: "Which chemical element has Ag as a symbol?"
    },
    {
        correctAnswer: "118",
        options: ["58", "78", "98", "118"],
        question: "How many elements are there on the periodic table?"
    },
    {
        correctAnswer: "17 March",
        options: ["7 March", "17 March", "27 March", "7 April"],
        question: "When is St. Patrick’s Day?"
    },
    {
        correctAnswer: "Johannes Vermeer",
        options: ["Johannes Vermeer", "Vincent Van Gogh", "Leonardo da Vinci", "Sandro Botticelli"],
        question: "Who painted ‘Girl with a Pearl Earring’?"
    },
    {
        correctAnswer: "Brazil",
        options: ["Colombia", "Ivory Coast", "Brazil", "Argentina"],
        question: "Which country is the top producer of coffee?"
    },
    {
        correctAnswer: "Cusco",
        options: ["Santagio", "Bogota", "Caracas", "Cusco"],
        question: "What was the ancient capital of the Incas?"
    },
    {
        correctAnswer: "Tokyo",
        options: ["Tokyo", "New York City", "London", "Rome"],
        question: "Which of the following is the largest city?"
    },
    {
        correctAnswer: "Libra",
        options: ["Taurus", "Virgo", "Libra", "Capricorn"],
        question: "Which of the following is not an earth sign?"
    },
    {
        correctAnswer: "Apple",
        options: ["Pear", "Apple", "Plum", "Strawberry"],
        question: "Which fruit of the following variety of: Golden delicious, Gala and Granny Smith?s"
    },
    {
        correctAnswer: "Aphrodite",
        options: ["Aphrodite", "Demeter", "Hestia", "Athena"],
        question: "Who is the Greek goddess of beauty?"
    },
    {
        correctAnswer: "4",
        options: ["3", "4", "5", "6"],
        question: "How many strings has a standard bass guitar?"
    },
    {
        correctAnswer: "Les Miserables",
        options: ["The Phantom of the Opera", "Les Miserables", "Mamma Mia!", "Wicked"],
        question: "What is the longest-running musicals in London West End?"
    },
    {
        correctAnswer: "King John",
        options: ["King John", "King William I", "King George VI", "King Edward V"],
        question: "Which English king signed the Magna Carta?"
    },
    {
        correctAnswer: "Liverpool",
        options: ["Kiev", "Liverpool", "Toulouse", "Seville"],
        question: "In which city was the 2023 held?"
    }
]