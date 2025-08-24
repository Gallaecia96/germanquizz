const vocabDB = {
    days_months_seasons: [
        { question: "Monday", answers: ["Montag"] },
        { question: "Tuesday", answers: ["Dienstag"] },
        { question: "Wednesday", answers: ["Mittwoch"] },
        { question: "Thursday", answers: ["Donnerstag"] },
        { question: "Friday", answers: ["Freitag"] },
        { question: "Saturday", answers: ["Samstag", "Sonnabend"] },
        { question: "Sunday", answers: ["Sonntag"] },

        { question: "January", answers: ["Januar"] },
        { question: "February", answers: ["Februar"] },
        { question: "March", answers: ["März", "Maerz"] },
        { question: "April", answers: ["April"] },
        { question: "May", answers: ["Mai"] },
        { question: "June", answers: ["Juni"] },
        { question: "July", answers: ["Juli"] },
        { question: "August", answers: ["August"] },
        { question: "September", answers: ["September"] },
        { question: "October", answers: ["Oktober"] },
        { question: "November", answers: ["November"] },
        { question: "December", answers: ["Dezember"] },

        { question: "Spring", answers: ["Frühling", "Fruehling"] },
        { question: "Summer", answers: ["Sommer"] },
        { question: "Autumn", answers: ["Herbst"] },
        { question: "Winter", answers: ["Winter"] },
    ],
    countries_nationalities: [
        // GERMAN-SPEAKING
        { question: "Germany", answers: ["Deutschland"] },
        { question: "German (male)", answers: ["Deutscher"] },
        { question: "German (female)", answers: ["Deutsche"] },

        { question: "Austria", answers: ["Österreich", "Oesterreich"] },
        { question: "Austrian (male)", answers: ["Österreicher", "Oesterreicher"] },
        { question: "Austrian (female)", answers: ["Österreicherin", "Oesterreicherin"] },

        { question: "Switzerland", answers: ["Schweiz"] },
        { question: "Swiss (male)", answers: ["Schweizer"] },
        { question: "Swiss (female)", answers: ["Schweizerin"] },

        // WESTERN EUROPE
        { question: "France", answers: ["Frankreich"] },
        { question: "French (male)", answers: ["Franzose"] },
        { question: "French (female)", answers: ["Französin", "Frauen Franzosin"] },

        { question: "Belgium", answers: ["Belgien"] },
        { question: "Belgian (male)", answers: ["Belgier"] },
        { question: "Belgian (female)", answers: ["Belgierin"] },

        { question: "Netherlands", answers: ["Niederlande"] },
        { question: "Dutch (male)", answers: ["Niederländer"] },
        { question: "Dutch (female)", answers: ["Niederländerin"] },

        { question: "Luxembourg", answers: ["Luxemburg"] },
        { question: "Luxembourgish (male)", answers: ["Luxemburger"] },
        { question: "Luxembourgish (female)", answers: ["Luxemburgerin"] },

        { question: "United Kingdom", answers: ["Vereinigtes Königreich", "Grossbritannien", "Großbritannien"] },
        { question: "British (male)", answers: ["Brite"] },
        { question: "British (female)", answers: ["Britin"] },

        { question: "Ireland", answers: ["Irland"] },
        { question: "Irish (male)", answers: ["Ire"] },
        { question: "Irish (female)", answers: ["Ir(in)", "Irische Frau"] },

        // SOUTHERN EUROPE
        { question: "Spain", answers: ["Spanien"] },
        { question: "Spanish (male)", answers: ["Spanier"] },
        { question: "Spanish (female)", answers: ["Spanierin"] },

        { question: "Portugal", answers: ["Portugal"] },
        { question: "Portuguese (male)", answers: ["Portugiese"] },
        { question: "Portuguese (female)", answers: ["Portugiesin"] },

        { question: "Italy", answers: ["Italien"] },
        { question: "Italian (male)", answers: ["Italiener"] },
        { question: "Italian (female)", answers: ["Italienerin"] },

        { question: "Malta", answers: ["Malta"] },
        { question: "Maltese (male)", answers: ["Maltese"] },
        { question: "Maltese (female)", answers: ["Malteserin"] },

        { question: "Greece", answers: ["Griechenland"] },
        { question: "Greek (male)", answers: ["Grieche"] },
        { question: "Greek (female)", answers: ["Griechin"] },

        { question: "Cyprus", answers: ["Zypern"] },
        { question: "Cypriot (male)", answers: ["Zyprer"] },
        { question: "Cypriot (female)", answers: ["Zyprerin"] },

        // NORDIC COUNTRIES
        { question: "Denmark", answers: ["Dänemark", "Daenemark"] },
        { question: "Danish (male)", answers: ["Däne", "Daene"] },
        { question: "Danish (female)", answers: ["Dänin", "Daenin"] },

        { question: "Sweden", answers: ["Schweden"] },
        { question: "Swedish (male)", answers: ["Schwede"] },
        { question: "Swedish (female)", answers: ["Schwedin"] },

        { question: "Norway", answers: ["Norwegen"] },
        { question: "Norwegian (male)", answers: ["Norweger"] },
        { question: "Norwegian (female)", answers: ["Norwegerin"] },

        { question: "Finland", answers: ["Finnland"] },
        { question: "Finnish (male)", answers: ["Finne"] },
        { question: "Finnish (female)", answers: ["Finnin"] },

        { question: "Iceland", answers: ["Island"] },
        { question: "Icelandic (male)", answers: ["Isländer"] },
        { question: "Icelandic (female)", answers: ["Isländerin"] },

        // EASTERN EUROPE
        { question: "Poland", answers: ["Polen"] },
        { question: "Polish (male)", answers: ["Pole"] },
        { question: "Polish (female)", answers: ["Polin"] },

        { question: "Czech Republic", answers: ["Tschechien"] },
        { question: "Czech (male)", answers: ["Tscheche"] },
        { question: "Czech (female)", answers: ["Tschechin"] },

        { question: "Slovakia", answers: ["Slowakei"] },
        { question: "Slovak (male)", answers: ["Slowake"] },
        { question: "Slovak (female)", answers: ["Slowakin"] },

        { question: "Hungary", answers: ["Ungarn"] },
        { question: "Hungarian (male)", answers: ["Ungar"] },
        { question: "Hungarian (female)", answers: ["Ungarin"] },

        { question: "Romania", answers: ["Rumänien", "Rumaenien"] },
        { question: "Romanian (male)", answers: ["Rumäne", "Rumaene"] },
        { question: "Romanian (female)", answers: ["Rumänin", "Rumaenin"] },

        { question: "Bulgaria", answers: ["Bulgarien"] },
        { question: "Bulgarian (male)", answers: ["Bulgare"] },
        { question: "Bulgarian (female)", answers: ["Bulgarin"] },

        // BALTICS
        { question: "Estonia", answers: ["Estland"] },
        { question: "Estonian (male)", answers: ["Este"] },
        { question: "Estonian (female)", answers: ["Estin"] },

        { question: "Latvia", answers: ["Lettland"] },
        { question: "Latvian (male)", answers: ["Lette"] },
        { question: "Latvian (female)", answers: ["Lettin"] },

        { question: "Lithuania", answers: ["Litauen"] },
        { question: "Lithuanian (male)", answers: ["Litauer"] },
        { question: "Lithuanian (female)", answers: ["Litauerin"] },

        // BALKANS
        { question: "Slovenia", answers: ["Slowenien"] },
        { question: "Slovenian (male)", answers: ["Slowene"] },
        { question: "Slovenian (female)", answers: ["Slowenin"] },

        { question: "Croatia", answers: ["Kroatien"] },
        { question: "Croatian (male)", answers: ["Kroate"] },
        { question: "Croatian (female)", answers: ["Kroatin"] },

        { question: "Bosnia and Herzegovina", answers: ["Bosnien und Herzegowina"] },
        { question: "Bosnian (male)", answers: ["Bosnier"] },
        { question: "Bosnian (female)", answers: ["Bosnierin"] },

        { question: "Serbia", answers: ["Serbien"] },
        { question: "Serbian (male)", answers: ["Serbe"] },
        { question: "Serbian (female)", answers: ["Serbin"] },

        { question: "Montenegro", answers: ["Montenegro"] },
        { question: "Montenegrin (male)", answers: ["Montenegriner"] },
        { question: "Montenegrin (female)", answers: ["Montenegrinerin"] },

        { question: "North Macedonia", answers: ["Nordmazedonien"] },
        { question: "Macedonian (male)", answers: ["Mazedonier"] },
        { question: "Macedonian (female)", answers: ["Mazedonierin"] },

        { question: "Albania", answers: ["Albanien"] },
        { question: "Albanian (male)", answers: ["Albaner"] },
        { question: "Albanian (female)", answers: ["Albanerin"] },

        { question: "Kosovo", answers: ["Kosovo"] },
        { question: "Kosovar (male)", answers: ["Kosovar"] },
        { question: "Kosovar (female)", answers: ["Kosovarin"] },

        // EAST / OTHER
        { question: "Russia", answers: ["Russland"] },
        { question: "Russian (male)", answers: ["Russe"] },
        { question: "Russian (female)", answers: ["Russin"] },

        { question: "Belarus", answers: ["Weißrussland", "Weissrussland", "Belarus"] },
        { question: "Belarusian (male)", answers: ["Weißrusse", "Weissrusse", "Belarusse"] },
        { question: "Belarusian (female)", answers: ["Weißrussin", "Weissrussin", "Belarussin"] },

        { question: "Ukraine", answers: ["Ukraine"] },
        { question: "Ukrainian (male)", answers: ["Ukrainer"] },
        { question: "Ukrainian (female)", answers: ["Ukrainerin"] },

        { question: "Moldova", answers: ["Moldau", "Moldawien"] },
        { question: "Moldovan (male)", answers: ["Moldauer"] },
        { question: "Moldovan (female)", answers: ["Moldauerin"] },

        { question: "Georgia (sometimes considered Europe)", answers: ["Georgien"] },
        { question: "Georgian (male)", answers: ["Georgier"] },
        { question: "Georgian (female)", answers: ["Georgierin"] },

        { question: "Armenia (sometimes considered Europe)", answers: ["Armenien"] },
        { question: "Armenian (male)", answers: ["Armenier"] },
        { question: "Armenian (female)", answers: ["Armenierin"] },
    ],
    family_vocab: [
        { question: "Father", answers: ["Vater"] },
        { question: "Mother", answers: ["Mutter"] },
        { question: "Parents", answers: ["Eltern"] },
        { question: "Son", answers: ["Sohn"] },
        { question: "Daughter", answers: ["Tochter"] },
        { question: "Child", answers: ["Kind"] },
        { question: "Children", answers: ["Kinder"] },
        { question: "Brother", answers: ["Bruder"] },
        { question: "Sister", answers: ["Schwester"] },
        { question: "Siblings", answers: ["Geschwister"] },
        { question: "Grandfather", answers: ["Großvater", "Grossvater", "Opa"] },
        { question: "Grandmother", answers: ["Großmutter", "Grossmutter", "Oma"] },
        { question: "Grandparents", answers: ["Großeltern", "Grosseltern"] },
        { question: "Uncle", answers: ["Onkel"] },
        { question: "Aunt", answers: ["Tante"] },
        { question: "Cousin (male)", answers: ["Cousin", "Vetter"] },
        { question: "Cousin (female)", answers: ["Cousine", "Base"] },
        { question: "Nephew", answers: ["Neffe"] },
        { question: "Niece", answers: ["Nichte"] },
        { question: "Husband", answers: ["Ehemann", "Mann"] },
        { question: "Wife", answers: ["Ehefrau", "Frau"] },
    ],
    colors_clothes: [
        // COLORS
        { question: "Red", answers: ["Rot"] },
        { question: "Blue", answers: ["Blau"] },
        { question: "Green", answers: ["Grün", "Gruen"] },
        { question: "Yellow", answers: ["Gelb"] },
        { question: "Black", answers: ["Schwarz"] },
        { question: "White", answers: ["Weiß", "Weiss"] },
        { question: "Gray", answers: ["Grau"] },
        { question: "Brown", answers: ["Braun"] },
        { question: "Orange", answers: ["Orange"] },
        { question: "Pink", answers: ["Rosa", "Pink"] },
        { question: "Purple", answers: ["Lila", "Violett"] },

        // CLOTHES
        { question: "Shirt", answers: ["Hemd"] },
        { question: "T-shirt", answers: ["T-Shirt"] },
        { question: "Pants", answers: ["Hose"] },
        { question: "Jeans", answers: ["Jeans"] },
        { question: "Skirt", answers: ["Rock"] },
        { question: "Dress", answers: ["Kleid"] },
        { question: "Shoes", answers: ["Schuhe"] },
        { question: "Socks", answers: ["Socken"] },
        { question: "Jacket", answers: ["Jacke"] },
        { question: "Coat", answers: ["Mantel"] },
        { question: "Hat/Cap", answers: ["Hut", "Mütze", "Muetze"] },
        { question: "Scarf", answers: ["Schal"] },
        { question: "Gloves", answers: ["Handschuhe"] },
        { question: "Sweater", answers: ["Pullover"] },
        { question: "Suit", answers: ["Anzug"] },
    ],
    
    home_rooms: [
    { question: "House", answers: ["Haus"] },
    { question: "Apartment", answers: ["Wohnung"] },
    { question: "Room", answers: ["Zimmer"] },
    { question: "Living room", answers: ["Wohnzimmer"] },
    { question: "Bedroom", answers: ["Schlafzimmer"] },
    { question: "Kitchen", answers: ["Küche", "Kueche"] },
    { question: "Bathroom", answers: ["Badezimmer"] },
    { question: "Toilet", answers: ["Toilette", "WC"] },
    { question: "Hallway", answers: ["Flur"] },
    { question: "Garden", answers: ["Garten"] },
    { question: "Balcony", answers: ["Balkon"] },
    { question: "Door", answers: ["Tür", "Tuer"] },
    { question: "Window", answers: ["Fenster"] },
    { question: "Table", answers: ["Tisch"] },
    { question: "Chair", answers: ["Stuhl"] },
    { question: "Bed", answers: ["Bett"] },
    { question: "Sofa", answers: ["Sofa", "Couch"] },
    { question: "Lamp", answers: ["Lampe"] },
    { question: "Fridge", answers: ["Kühlschrank", "Kuehlschrank"] },
    { question: "Oven", answers: ["Ofen"] },
],
    daily_routines: [
    { question: "to wake up", answers: ["aufwachen"] },
    { question: "to get up", answers: ["aufstehen"] },
    { question: "to wash oneself", answers: ["sich waschen"] },
    { question: "to shower", answers: ["duschen"] },
    { question: "to brush teeth", answers: ["Zähne putzen", "Zaehne putzen"] },
    { question: "to get dressed", answers: ["sich anziehen"] },
    { question: "to have breakfast", answers: ["frühstücken", "fruehstuecken"] },
    { question: "to eat lunch", answers: ["zu Mittag essen"] },
    { question: "to eat dinner", answers: ["zu Abend essen"] },
    { question: "to go to work", answers: ["zur Arbeit gehen"] },
    { question: "to study", answers: ["lernen", "studieren"] },
    { question: "to work", answers: ["arbeiten"] },
    { question: "to cook", answers: ["kochen"] },
    { question: "to clean", answers: ["putzen", "reinigen"] },
    { question: "to relax", answers: ["sich entspannen"] },
    { question: "to watch TV", answers: ["fernsehen"] },
    { question: "to go shopping", answers: ["einkaufen gehen"] },
    { question: "to go to bed", answers: ["ins Bett gehen"] },
    { question: "to sleep", answers: ["schlafen"] },
],

    transport_travel: [
    { question: "car", answers: ["Auto"] },
    { question: "bus", answers: ["Bus"] },
    { question: "train", answers: ["Zug"] },
    { question: "tram", answers: ["Straßenbahn", "Strassenbahn"] },
    { question: "subway / metro", answers: ["U-Bahn", "Ubahn"] },
    { question: "bicycle", answers: ["Fahrrad", "Rad"] },
    { question: "motorcycle", answers: ["Motorrad"] },
    { question: "airplane", answers: ["Flugzeug"] },
    { question: "airport", answers: ["Flughafen"] },
    { question: "ticket", answers: ["Fahrkarte", "Ticket"] },
    { question: "station", answers: ["Bahnhof"] },
    { question: "stop (bus/tram)", answers: ["Haltestelle"] },
    { question: "luggage", answers: ["Gepäck", "Koffer"] },
    { question: "passport", answers: ["Pass", "Reisepass"] },
    { question: "map", answers: ["Karte", "Landkarte"] },
    { question: "journey / trip", answers: ["Reise"] },
    { question: "vacation / holiday", answers: ["Urlaub", "Ferien"] },
    { question: "to travel", answers: ["reisen"] },
    { question: "to drive", answers: ["fahren"] },
    { question: "to fly", answers: ["fliegen"] },
],
    nature_weather: [
    { question: "the sun", answers: ["die Sonne"] },
    { question: "the moon", answers: ["der Mond"] },
    { question: "the star", answers: ["der Stern"] },
    { question: "the sky", answers: ["der Himmel"] },
    { question: "the cloud", answers: ["die Wolke"] },
    { question: "the rain", answers: ["der Regen"] },
    { question: "the snow", answers: ["der Schnee"] },
    { question: "the wind", answers: ["der Wind"] },
    { question: "the storm", answers: ["das Gewitter", "der Sturm"] },
    { question: "the fog", answers: ["der Nebel"] },
    { question: "the tree", answers: ["der Baum"] },
    { question: "the flower", answers: ["die Blume"] },
    { question: "the grass", answers: ["das Gras"] },
    { question: "the forest", answers: ["der Wald"] },
    { question: "the mountain", answers: ["der Berg"] },
    { question: "the river", answers: ["der Fluss", "der Fluss"] },
    { question: "the sea", answers: ["das Meer"] },
    { question: "the lake", answers: ["der See"] },
    { question: "the earth / soil", answers: ["die Erde"] },
    { question: "the weather", answers: ["das Wetter"] },
],
    body_health: [
    // BODY
    { question: "the head", answers: ["der Kopf"] },
    { question: "the face", answers: ["das Gesicht"] },
    { question: "the eye", answers: ["das Auge"] },
    { question: "the nose", answers: ["die Nase"] },
    { question: "the mouth", answers: ["der Mund"] },
    { question: "the ear", answers: ["das Ohr"] },
    { question: "the tooth", answers: ["der Zahn"] },
    { question: "the hand", answers: ["die Hand"] },
    { question: "the arm", answers: ["der Arm"] },
    { question: "the leg", answers: ["das Bein"] },
    { question: "the foot", answers: ["der Fuß", "der Fuss"] },
    { question: "the heart", answers: ["das Herz"] },
    { question: "the stomach/belly", answers: ["der Bauch"] },
    { question: "the back", answers: ["der Rücken", "der Ruecken"] },
    { question: "the body", answers: ["der Körper", "der Koerper"] },

    // HEALTH
    { question: "the doctor (male)", answers: ["der Arzt"] },
    { question: "the doctor (female)", answers: ["die Ärztin", "die Aerztin"] },
    { question: "the hospital", answers: ["das Krankenhaus"] },
    { question: "the medicine", answers: ["die Medizin"] },
    { question: "the pain", answers: ["der Schmerz"] },
],
jobs_workplaces: [
    // JOBS
    { question: "teacher (male)", answers: ["der Lehrer"] },
    { question: "teacher (female)", answers: ["die Lehrerin"] },
    { question: "student (university) (male)", answers: ["der Student"] },
    { question: "student (university) (female)", answers: ["die Studentin"] },
    { question: "doctor (male)", answers: ["der Arzt"] },
    { question: "doctor (female)", answers: ["die Ärztin", "die Aerztin"] },
    { question: "nurse (male)", answers: ["der Krankenpfleger"] },
    { question: "nurse (female)", answers: ["die Krankenschwester"] },
    { question: "engineer (male)", answers: ["der Ingenieur"] },
    { question: "engineer (female)", answers: ["die Ingenieurin"] },
    { question: "cook/chef (male)", answers: ["der Koch"] },
    { question: "cook/chef (female)", answers: ["die Köchin", "die Koechin"] },
    { question: "waiter (male)", answers: ["der Kellner"] },
    { question: "waitress (female)", answers: ["die Kellnerin"] },
    { question: "salesperson (male)", answers: ["der Verkäufer", "der Verkaeufer"] },
    { question: "salesperson (female)", answers: ["die Verkäuferin", "die Verkaeuferin"] },
    { question: "driver (male)", answers: ["der Fahrer"] },
    { question: "driver (female)", answers: ["die Fahrerin"] },
    { question: "farmer (male)", answers: ["der Landwirt"] },
    { question: "farmer (female)", answers: ["die Landwirtin"] },
    { question: "artist (male)", answers: ["der Künstler", "der Kuenstler"] },
    { question: "artist (female)", answers: ["die Künstlerin", "die Kuenstlerin"] },
    { question: "musician (male)", answers: ["der Musiker"] },
    { question: "musician (female)", answers: ["die Musikerin"] },
    { question: "programmer (male)", answers: ["der Programmierer"] },
    { question: "programmer (female)", answers: ["die Programmiererin"] },
    { question: "hairdresser (male)", answers: ["der Friseur"] },
    { question: "hairdresser (female)", answers: ["die Friseurin"] },
    { question: "mechanic (male)", answers: ["der Mechaniker"] },
    { question: "mechanic (female)", answers: ["die Mechanikerin"] },
    { question: "police officer (male)", answers: ["der Polizist"] },
    { question: "police officer (female)", answers: ["die Polizistin"] },
    { question: "firefighter (male)", answers: ["der Feuerwehrmann"] },
    { question: "firefighter (female)", answers: ["die Feuerwehrfrau"] },

    // WORKPLACES
    { question: "the office", answers: ["das Büro", "das Buero"] },
    { question: "the company", answers: ["die Firma"] },
    { question: "the shop / store", answers: ["das Geschäft", "der Laden", "das Geschaeft"] },
    { question: "the factory", answers: ["die Fabrik"] },
    { question: "the hospital", answers: ["das Krankenhaus"] },
    { question: "the school", answers: ["die Schule"] },
    { question: "the restaurant", answers: ["das Restaurant"] },
    { question: "the construction site", answers: ["die Baustelle"] },
    { question: "the farm", answers: ["der Bauernhof"] },
    { question: "the meeting", answers: ["die Besprechung", "das Meeting"] },
    { question: "the colleague (male)", answers: ["der Kollege"] },
    { question: "the colleague (female)", answers: ["die Kollegin"] },
]

    hobbies_free_time: [
    { question: "to read", answers: ["lesen"] },
    { question: "to listen to music", answers: ["Musik hören", "Musik hoeren"] },
    { question: "to sing", answers: ["singen"] },
    { question: "to dance", answers: ["tanzen"] },
    { question: "to play guitar", answers: ["Gitarre spielen"] },
    { question: "to play piano", answers: ["Klavier spielen"] },
    { question: "to cook", answers: ["kochen"] },
    { question: "to bake", answers: ["backen"] },
    { question: "to draw", answers: ["zeichnen"] },
    { question: "to paint", answers: ["malen"] },
    { question: "photography / to take photos", answers: ["Fotografie", "fotografieren"] },
    { question: "to hike", answers: ["wandern"] },
    { question: "to swim", answers: ["schwimmen"] },
    { question: "to run / jog", answers: ["joggen", "laufen"] },
    { question: "to cycle", answers: ["Rad fahren", "Fahrrad fahren"] },
    { question: "to travel", answers: ["reisen"] },
    { question: "to camp", answers: ["zelten"] },
    { question: "to play video games", answers: ["Videospiele spielen"] },
    { question: "to watch movies", answers: ["Filme schauen", "Filme sehen"] },
    { question: "to go to the cinema", answers: ["ins Kino gehen"] },
    { question: "to play board games", answers: ["Brettspiele spielen"] },
    { question: "to do yoga", answers: ["Yoga machen"] },
    { question: "gardening", answers: ["Gartenarbeit", "gärtnern", "gaertnern"] },
    { question: "to fish", answers: ["angeln"] },
    { question: "to read comics", answers: ["Comics lesen"] },
]
    shopping_prices: [
    { question: "the shop / store", answers: ["das Geschäft", "der Laden", "das Geschaeft"] },
    { question: "the supermarket", answers: ["der Supermarkt"] },
    { question: "the bakery", answers: ["die Bäckerei", "die Baeckerei"] },
    { question: "the butcher", answers: ["die Metzgerei"] },
    { question: "the market", answers: ["der Markt"] },
    { question: "the mall", answers: ["das Einkaufszentrum"] },
    { question: "the cashier", answers: ["die Kasse"] },
    { question: "the price", answers: ["der Preis"] },
    { question: "How much does it cost?", answers: ["Wie viel kostet es?", "Wie viel kostet das?"] },
    { question: "the money", answers: ["das Geld"] },
    { question: "the euro", answers: ["der Euro"] },
    { question: "the cent", answers: ["der Cent"] },
    { question: "cheap", answers: ["billig", "günstig", "guenstig"] },
    { question: "expensive", answers: ["teuer"] },
    { question: "to pay", answers: ["bezahlen", "zahlen"] },
    { question: "cash", answers: ["das Bargeld"] },
    { question: "credit card", answers: ["die Kreditkarte"] },
    { question: "the receipt", answers: ["der Kassenzettel", "die Quittung"] },
    { question: "the offer / sale", answers: ["das Angebot"] },
    { question: "the discount", answers: ["der Rabatt"] },
],
    classroom_phrases: [
    { question: "Hello!", answers: ["Hallo!"] },
    { question: "Good morning!", answers: ["Guten Morgen!"] },
    { question: "Good evening!", answers: ["Guten Abend!"] },
    { question: "Good night!", answers: ["Gute Nacht!"] },
    { question: "How are you?", answers: ["Wie geht's?", "Wie geht es dir?"] },
    { question: "I'm fine, thanks.", answers: ["Mir geht es gut, danke.", "Gut, danke."] },
    { question: "Please", answers: ["Bitte"] },
    { question: "Thank you", answers: ["Danke", "Vielen Dank"] },
    { question: "You're welcome", answers: ["Bitte schön", "Gern geschehen"] },
    { question: "Excuse me", answers: ["Entschuldigung"] },
    { question: "Sorry", answers: ["Es tut mir leid", "Sorry"] },
    { question: "I don't understand", answers: ["Ich verstehe nicht"] },
    { question: "Can you repeat, please?", answers: ["Können Sie das bitte wiederholen?", "Kannst du das bitte wiederholen?"] },
    { question: "What does that mean?", answers: ["Was bedeutet das?"] },
    { question: "I have a question", answers: ["Ich habe eine Frage"] },
    { question: "Yes", answers: ["Ja"] },
    { question: "No", answers: ["Nein"] },
    { question: "Maybe", answers: ["Vielleicht"] },
    { question: "Where is the toilet?", answers: ["Wo ist die Toilette?", "Wo ist das WC?"] },
    { question: "I would like...", answers: ["Ich möchte...", "Ich hätte gern..."] },
],


};

const grammarDB = {
articles_der_die_das: [
    // DEFINITE ARTICLES
    { question: "(The) ___ Tisch (table)", answers: ["der"] },
    { question: "(The) ___ Lampe (lamp)", answers: ["die"] },
    { question: "(The) ___ Buch (book)", answers: ["das"] },
    { question: "(The) ___ Fenster (window)", answers: ["das"] },
    { question: "(The) ___ Stühle (chairs)", answers: ["die"] },
    { question: "(The) ___ Apfel (apple)", answers: ["der"] },
    { question: "(The) ___ Banane (banana)", answers: ["die"] },
    { question: "(The) ___ Wasser (water)", answers: ["das"] },
    { question: "(The) ___ Lehrer (teacher, male)", answers: ["der"] },
    { question: "(The) ___ Lehrerin (teacher, female)", answers: ["die"] },

    // INDEFINITE ARTICLES
    { question: "Ich habe ___ Hund (dog).", answers: ["einen"] },
    { question: "Sie hat ___ Katze (cat).", answers: ["eine"] },
    { question: "Er kauft ___ Auto (car).", answers: ["ein"] },
    { question: "Wir brauchen ___ Tisch (table).", answers: ["einen"] },
    { question: "Das ist ___ Problem (problem).", answers: ["ein"] },
    { question: "Er schreibt ___ Brief (letter).", answers: ["einen"] },
    { question: "Sie liest ___ Zeitung (newspaper).", answers: ["eine"] },
    { question: "Ich trinke ___ Kaffee (coffee).", answers: ["einen"] },
    { question: "Das ist ___ Idee (idea).", answers: ["eine"] },
    { question: "Ich habe ___ Handy (mobile phone).", answers: ["ein"] },

    // NEGATION WITH KEIN
    { question: "(Article) Ich habe ___ Geld (money).", answers: ["kein"] },
    { question: "(Article) Sie hat ___ Freunde (friends).", answers: ["keine"] },
    { question: "(Article) Wir kaufen ___ Wasser (water).", answers: ["kein"] },
    { question: "(Article) Das ist ___ Auto (car).", answers: ["kein"] },
    { question: "(Article) Das sind ___ Bücher (books).", answers: ["keine"] },
],



};

const conjugationsDB = {
    core_verbs_pack1: [
    { question: "I am", answers: ["ich bin"] },
    { question: "You are (singular, informal)", answers: ["du bist"] },
    { question: "He is", answers: ["er ist"] },
    { question: "She is", answers: ["sie ist"] },
    { question: "It is", answers: ["es ist"] },
    { question: "We are", answers: ["wir sind"] },
    { question: "You are (plural, informal)", answers: ["ihr seid"] },
    { question: "They are", answers: ["sie sind"] },
    { question: "You are (formal)", answers: ["Sie sind"] },
    { question: "I have", answers: ["ich habe"] },
    { question: "You have (singular, informal)", answers: ["du hast"] },
    { question: "He has", answers: ["er hat"] },
    { question: "She has", answers: ["sie hat"] },
    { question: "It has", answers: ["es hat"] },
    { question: "We have", answers: ["wir haben"] },
    { question: "You have (plural, informal)", answers: ["ihr habt"] },
    { question: "They have", answers: ["sie haben"] },
    { question: "You have (formal)", answers: ["Sie haben"] },
    { question: "I go", answers: ["ich gehe"] },
    { question: "You go (singular, informal)", answers: ["du gehst"] },
    { question: "He goes", answers: ["er geht"] },
    { question: "She goes", answers: ["sie geht"] },
    { question: "It goes", answers: ["es geht"] },
    { question: "We go", answers: ["wir gehen"] },
    { question: "You go (plural, informal)", answers: ["ihr geht"] },
    { question: "They go", answers: ["sie gehen"] },
    { question: "You go (formal)", answers: ["Sie gehen"] },
    { question: "I do / make", answers: ["ich mache"] },
    { question: "You do / make (singular, informal)", answers: ["du machst"] },
    { question: "He does / makes", answers: ["er macht"] },
    { question: "She does / makes", answers: ["sie macht"] },
    { question: "It does / makes", answers: ["es macht"] },
    { question: "We do / make", answers: ["wir machen"] },
    { question: "You do / make (plural, informal)", answers: ["ihr macht"] },
    { question: "They do / make", answers: ["sie machen"] },
    { question: "You do / make (formal)", answers: ["Sie machen"] },
    { question: "I come", answers: ["ich komme"] },
    { question: "You come (singular, informal)", answers: ["du kommst"] },
    { question: "He comes", answers: ["er kommt"] },
    { question: "She comes", answers: ["sie kommt"] },
    { question: "It comes", answers: ["es kommt"] },
    { question: "We come", answers: ["wir kommen"] },
    { question: "You come (plural, informal)", answers: ["ihr kommt"] },
    { question: "They come", answers: ["sie kommen"] },
    { question: "You come (formal)", answers: ["Sie kommen"] },
],


};

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Quiz state
let topicKey = null;
let questions = [];
let originalTopic = [];
let wrongQuestions = [];
let currentQuestion = 0;
let score = 0;

// Start a new round with a topic
function startTopic(key, customQuestions) {
    // Use vocabDB, grammarDB, conjugationsDB for topic lookup
    let topicArr = null;
    if (key && vocabDB[key]) topicArr = vocabDB[key];
    else if (key && grammarDB[key]) topicArr = grammarDB[key];
    else if (key && conjugationsDB[key]) topicArr = conjugationsDB[key];
    else if (customQuestions) topicArr = customQuestions;
    else topicArr = [];

    topicKey = key;
    originalTopic = topicArr;
    questions = shuffle(topicArr).slice(0, Math.min(10, topicArr.length));
    wrongQuestions = []; // Ensure mistakes are cleared at the start
    currentQuestion = 0;
    score = 0;
    showSelect(false);
    setResult('');
    loadQuestion();
}

// Show/hide topic selector
function showSelect(show) {
    const optionMenu = document.getElementById('select_topic');
    const selectButton = document.getElementsByClassName('open-select')[0];
    const quizContainer = document.getElementsByClassName('quiz-container')[0];
    if (show) {
        optionMenu.style.display = 'flex';
        selectButton.style.display = 'none';
        if (quizContainer) quizContainer.style.display = 'none';
    } else {
        optionMenu.style.display = 'none';
        selectButton.style.display = 'block';
        if (quizContainer) quizContainer.style.display = 'block';
    }
}

// Set result message
function setResult(msg, color = 'black') {
    const resultElement = document.getElementById("result");
    resultElement.textContent = msg;
    resultElement.style.color = color;
}

// Load current question or show final score
function loadQuestion() {
    const headingone = document.getElementsByTagName('h1')[0];
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const resultElement = document.getElementById("result");

    headingone.style.display = 'none';

    if (currentQuestion < questions.length) {
        const currentQuestionData = questions[currentQuestion];

        questionElement.textContent = currentQuestionData.question;
        setResult("");

        optionsContainer.innerHTML = "";

        // Free-text input only
        const input = document.createElement("input");
        input.type = "text";
        input.autofocus = true;
        input.id = "answer-input";

        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                submitButton.click();
            }
        });

        const submitButton = document.createElement("button");
        submitButton.textContent = "Send";
        submitButton.id = "submit-button";
        submitButton.addEventListener("click", () => {
            checkInputAnswer(input.value, currentQuestionData.answers, optionsContainer, input, submitButton);
        });

        optionsContainer.appendChild(input);
        optionsContainer.appendChild(submitButton);

    } else {
        // Final score
        questionElement.textContent = "Test completado!";
        optionsContainer.innerHTML = "";
        resultElement.innerHTML = "Score: " + score + " out of " + questions.length + '.<br> <br> Total: ' + parseInt(score * 10 / questions.length) + ' sobre 10.';

        // Only show review mistakes button if there are mistakes
        if (wrongQuestions.length > 0) {
            const reviewButton = document.createElement("button");
            reviewButton.textContent = "Review mistakes";
            optionsContainer.appendChild(reviewButton);
            reviewButton.addEventListener("click", () => {
                // Limit review round to max 10 questions
                const reviewSet = shuffle(wrongQuestions).slice(0, Math.min(10, wrongQuestions.length));
                startTopic(null, reviewSet);
            });
        }

        // New round button
        const newRoundButton = document.createElement("button");
        newRoundButton.textContent = "New round";
        optionsContainer.appendChild(newRoundButton);
        newRoundButton.addEventListener("click", () => startTopic(topicKey, originalTopic));

        // Choose another topic button
        const chooseTopicButton = document.createElement("button");
        chooseTopicButton.textContent = "Choose another topic";
        optionsContainer.appendChild(chooseTopicButton);
        chooseTopicButton.addEventListener("click", () => showSelect(true));
    }
}

// Modified checkInputAnswer to prompt for correct answer if first attempt is wrong
function checkInputAnswer(inputValue, correctAnswers, optionsContainer, inputElem, submitBtn) {
    if (correctAnswers.some(ans => inputValue.trim().toLowerCase() === ans.toLowerCase())) {
        score++;
        setResult("Yasss!", "green");
        currentQuestion++;
        setTimeout(() => {
            loadQuestion();
        }, 1500);
    } else {
        const q = questions[currentQuestion];
        if (!wrongQuestions.includes(q)) {
            wrongQuestions.push(q);
        }
        setResult("Try with: " + correctAnswers.join(", "), "orange");
        // Only add mistake if not already present

        // Remove previous input/button
        if (inputElem && submitBtn) {
            inputElem.disabled = true;
            submitBtn.disabled = true;
        }

        // Prompt for correct answer
        const tryAgainInput = document.createElement("input");
        tryAgainInput.type = "text";
        tryAgainInput.autofocus = true;
        tryAgainInput.id = "try-again-input";

        tryAgainInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                tryAgainBtn.click();
            }
        });

        const tryAgainBtn = document.createElement("button");
        tryAgainBtn.textContent = "Try correct answer";
        tryAgainBtn.addEventListener("click", () => {
            const tryValue = tryAgainInput.value;
            if (correctAnswers.some(ans => tryValue.trim().toLowerCase() === ans.toLowerCase())) {
                setResult("Correct! Good job!", "green");
            } else {
                setResult("Still not correct. Correct answers: " + correctAnswers.join(", "), "red");
            }
            currentQuestion++;
            setTimeout(() => {
                loadQuestion();
            }, 3000);
        });

        optionsContainer.appendChild(document.createElement("br"));
        optionsContainer.appendChild(tryAgainInput);
        optionsContainer.appendChild(tryAgainBtn);
    }
}

// Topic selection from HTML buttons
window.theme_is = function(chosen) {
    // Try to find the topic key in all DBs
    for (const key in vocabDB) {
        if (vocabDB[key] === chosen) {
            startTopic(key);
            return;
        }
    }
    for (const key in grammarDB) {
        if (grammarDB[key] === chosen) {
            startTopic(key);
            return;
        }
    }
    for (const key in conjugationsDB) {
        if (conjugationsDB[key] === chosen) {
            startTopic(key);
            return;
        }
    }
    // If chosen is not found, fallback to original logic
    if (Array.isArray(chosen)) {
        startTopic(null, chosen);
    }
};

// Open/close select menu
window.openSelect = function() { showSelect(true); };
window.closeSelect = function() { showSelect(false); };
