const listings = [
    {
        id: 1,
        title: "Apartment One Za’abeel Tower - Kauf or Miete",
        category: "resale",
        description: "One Za’abeel ist ein renommiertes Mischnutzungsprojekt im Herzen von Dubai, Vereinigte Arabische Emirate. Es befindet sich im ikonischen Stadtteil Za’abeel und bietet Blick auf das Dubai World Trade Centre und den Burj Khalifa. Das Projekt zielt darauf ab, das städtische Leben neu zu definieren, indem es Wohn-, Geschäfts- und Freizeiträume nahtlos miteinander verbindet.",

        // header banner image 4+1
        bannerImages: [
            {
                link: "https://i.ibb.co/MRM20Q2/Al-Habtoor-Tower-1.jpg",
                title: "Custom title 1",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam reiciendis pariatur ratione perspiciatis tempore labore, illum et eos consequatur vero accusantium repellat quos, odio voluptatum sint expedita, maiores veritatis. Ipsam."

            },
            {
                link: "https://i.ibb.co/jGv43Ds/Al-Habtoor-Tower-2.jpg",
                title: "Custom title 2",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam reiciendis pariatur ratione perspiciatis tempore labore, illum et eos consequatur vero accusantium repellat quos, odio voluptatum sint expedita, maiores veritatis. Ipsam."
            },
            {
                link: "https://i.ibb.co/xJxkpd7/Al-Habtoor-Tower-3.jpg",
                title: "Custom title 3",
                description: "Custom description 3"
            },
            {
                link: "https://i.ibb.co/GdwdcnP/Al-Habtoor-Tower-4.jpg",
                title: "Custom title 4",
                description: "Custom description 4"
            },
            {
                link: "https://i.ibb.co/Sf2tYpC/Al-Habtoor-Tower-5.jpg",
                title: "Custom title 5",
                description: "Custom description 5"
            },

        ],

        // data and facts
        rooms: 4,
        kitchen: 1,
        bedroom: 3,
        area: "2,015 Sq. Ft. | 187 m²",

        //property type (optional)
        property_type: [
            { type: "Apartment 1 Bedroom", value: "1,046 - 1,496 Sq Ft." },
            { type: "Apartment 2 Bedroom", value: "1,639 Sq Ft." },
            { type: "Apartment 3 Bedroom", value: "1,820 - 1875 Sq Ft." }
        ],

        //Amenities (optional)
        amenities: [
            "Gym",
            "Security",
            "Central air conditioning",
            "Community pool",
            "BBQ area",
            "Built-in wardrobes",
            "Fully furnished",
            "many restaurants in the building"
        ],

        // floor plans (optional)
        floor_plans: [
            {
                link: "https://i.ibb.co/r2t8TRY/plan-al-habtoor-tower-dubai.jpg",
                title: "You can add custom title",
            },
            {
                link: "https://i.ibb.co/r2t8TRY/plan-al-habtoor-tower-dubai.jpg",
                title: "Yet another title",
            },
            {
                link: "https://i.ibb.co/r2t8TRY/plan-al-habtoor-tower-dubai.jpg",
                title: "If you want, we can remove this title",
            },
        ],
        // handover and price
        handover: "bezugsfertig",
        price: "2,375,000",
    },
    {
        id: 2,
        title: "Duplex Apartment One Za'abeel Tower - zum Kauf oder Miete",
        category: "resale",
        description: "One Za’abeel ist ein renommiertes Mischnutzungsprojekt im Herzen von Dubai, Vereinigte Arabische Emirate. Es befindet sich im ikonischen Stadtteil Za’abeel und bietet Blick auf das Dubai World Trade Centre und den Burj Khalifa. Das Projekt zielt darauf ab, das städtische Leben neu zu definieren, indem es Wohn-, Geschäfts- und Freizeiträume nahtlos miteinander verbindet.",
        rooms: 4,
        kitchen: 1,
        bedroom: 3,
        area: "2,015 Sq. Ft. | 187 m²",
        amenities: [
            "Gym",
            "Security",
            "Central air conditioning",
            "Community pool",
            "BBQ area",
            "Built-in wardrobes",
            "Fully furnished",
            "many restaurants in the building"
        ],
        handover: "bezugsfertig",
        price: "2,375,000",
        property_map: "/listing/Apartment One Za_abeel Tower 1.jpg",

        bannerImages: [
            {
                link: "https://i.ibb.co/3h71TTn/Duplex-Apartment-One-Za-abeel-Tower-2.jpg",
                title: "Custom title 1",
                description: "Custom description 1"
            },
            {
                link: "https://i.ibb.co/McHxZpp/Duplex-Apartment-One-Za-abeel-Tower-3.jpg",
                title: "Custom title 2",
                description: "Custom description 2"
            },
            {
                link: "https://i.ibb.co/Y8t4w4M/Duplex-Apartment-One-Za-abeel-Tower-4.jpg",
                title: "Custom title 3",
                description: "Custom description 3"
            },
            {
                link: "https://i.ibb.co/P4ddDts/Duplex-Apartment-One-Za-abeel-Tower-5.jpg",
                title: "Custom title 4",
                description: "Custom description 4"
            },
            {
                link: "https://i.ibb.co/10MLt5w/Duplex-Apartment-One-Za-abeel-Tower-6.jpg",
                title: "Custom title 5",
                description: "Custom description 5"
            },

        ],
    },
    {
        id: 3,
        title: "Luxus-Villa Palm Jumeirah Dubai",
        category: "resell",
        description: `Die Palm Jumeirah, eine außergewöhnliche künstliche Inselgruppe in Dubai, Vereinigte Arabische Emirate, ist nicht nur ein Symbol für Luxus, sondern auch ein Meisterwerk der Innovation mit einzigartigen Merkmalen, die zu ihrem unvergleichlichen Charme beitragen. Die palmenförmige Insel mit ihrem Stamm, 16 Palmwedeln und der umgebenden Mondsichel bietet einen exklusiven und opulenten Lebensstil vor dem Hintergrund des Arabischen Golfs. 
        
        Die Palmwedel der Palm Jumeirah beherbergen eine Sammlung von hochwertigen Wohnvillen und Apartments, die jeweils sorgfältig gestaltet wurden, um den Bewohnern atemberaubende Ausblicke auf das Meer und die ikonische Skyline von Dubai zu bieten. Die Mondsichel, die die äußeren Ränder der Palme umschließt, beherbergt eine Vielzahl von Luxushotels, Resorts und Unterhaltungskomplexen, die eine Oase der Raffinesse schaffen.
        
        Eines der herausragenden Merkmale sind die privaten Strände entlang der Palmwedel und der Mondsichel, die den Bewohnern und Gästen einen ruhigen Rückzugsort mit pudrigen weißen Sandstränden und makellosem Wasser bieten.
        
        Die Palm Jumeirah zeichnet sich auch durch ihre erstklassigen gastronomischen Einrichtungen aus, von mit Michelin-Sternen ausgezeichneten Restaurants bis hin zu Strandcafés. Das Kronjuwel der Mondsichel, das Atlantis, The Palm, ist selbst ein Ziel, das einzigartige Attraktionen wie den Aquaventure Waterpark und das The Lost Chambers Aquarium bietet.
        
        Darüber hinaus ist die palmenförmige Insel ein Ingenieurswunder, nahtlos verbunden mit dem Festland durch Brücken und Tunnel. Diese Zugänglichkeit gewährleistet, dass die Bewohner leicht in das geschäftige Zentrum von Dubai eintauchen können, während sie gleichzeitig die Ruhe und Exklusivität ihres Inselwohnsitzes genießen.
        
        Im Wesentlichen übertrifft die Palm Jumeirah die Grenzen des konventionellen Lebens und bietet einen Lebensstil, der von architektonischer Eleganz, unvergleichlichen Erlebnissen am Wasser und einer Mischung aus Freizeit und Luxus geprägt ist, die wirklich einzigartig ist.`,
        rooms: 4,
        kitchen: 1,
        bedroom: 3,
        area: "2,015 Sq. Ft. | 187 m²",
        amenities: [
            "Gym",
            "Security",
            "Central air conditioning",
            "Community pool",
            "BBQ area",
            "Built-in wardrobes",
            "Fully furnished",
            "many restaurants in the building"
        ],
        handover: "bezugsfertig",
        price: "2,375,000",
        property_map: "/listing/Duplex Apartment One Za'abeel Tower 1.jpg",
        bannerImages: [
            {
                link: "https://i.ibb.co/crP8h5S/Jumeirah-Village-Circle-1.jpg",
                title: "Custom title 1",
                description: "Custom description 1"
            },
            {
                link: "https://i.ibb.co/ySNKD9Y/Jumeirah-Village-Circle-2.jpg",
                title: "Custom title 2",
                description: "Custom description 2"
            },
            {
                link: "https://i.ibb.co/Df7zmWK/Jumeirah-Village-Circle-3.jpg",
                title: "Custom title 3",
                description: "Custom description 3"
            },
            {
                link: "https://i.ibb.co/5LqY3nb/Jumeirah-Village-Circle-4.jpg",
                title: "Custom title 4",
                description: "Custom description 4"
            },
            {
                link: "https://i.ibb.co/gjYpFfW/Jumeirah-Village-Circle-5.jpg",
                title: "Custom title 5",
                description: "Custom description 5"
            },

        ],
    },
    {
        id: 4,
        title: "310 Riverside Crescent by Sobha",
        category: "off plan",
        description: `Das Riverside Crescent-Projekt bietet eine günstige Lage in Sobha Hartland 2.

        Die Bewohner des Wohnkomplexes können die wichtigsten Orte im Emirat Dubai in kürzester Zeit erreichen, da der Wohnkomplex sehr zentral gelegen ist und über öffentliche Verkehrsmittel verfügt und in der Nähe von Hauptverkehrsstraßen liegt.
        
        Die Fahrzeit zum Stadtzentrum von Dubai (Dubai Mall, Burj Khalifa) und Business Bay beträgt nur etwa 10 Minuten, während der internationale Flughafen von Dubai innerhalb von 15 Minuten erreicht werden kann.
        
        Im Riverside Crescent haben wir Einheiten mit 1 Schlafzimmer, 1,5 Schlafzimmer und 2 Schlafzimmern`,
        rooms: 4,
        kitchen: 1,
        bedroom: 3,
        area: "2,015 Sq. Ft. | 187 m²",
        amenities: [
            "Gym",
            "Security",
            "Central air conditioning",
            "Community pool",
            "BBQ area",
            "Built-in wardrobes",
            "Fully furnished",
            "many restaurants in the building"
        ],
        handover: "",
        price: "",
        property_map: "",
        bannerImages: [
            {
                link: "https://i.ibb.co/88bW1mp/Riverside-Crescent-1.jpg",
                title: "Custom title 1",
                description: "Custom description 1"
            },
            {
                link: "https://i.ibb.co/J54Xf0m/Riverside-Crescent-2.jpg",
                title: "Custom title 2",
                description: "Custom description 2"
            },
            {
                link: "https://i.ibb.co/YNDh569/Riverside-Crescent-3.jpg",
                title: "Custom title 3",
                description: "Custom description 3"
            },
            {
                link: "https://i.ibb.co/b7QLzRK/Riverside-Crescent-4.jpg",
                title: "Custom title 4",
                description: "Custom description 4"
            },
            {
                link: "https://i.ibb.co/72qRLTc/Riverside-Crescent-5.jpg",
                title: "Custom title 5",
                description: "Custom description 5"
            },

        ],
    },
    {
        id: 5,
        title: "310 Riverside Crescent by Sobha",
        category: "off plan",
        description: `Das Riverside Crescent-Projekt bietet eine günstige Lage in Sobha Hartland 2.

        Die Bewohner des Wohnkomplexes können die wichtigsten Orte im Emirat Dubai in kürzester Zeit erreichen, da der Wohnkomplex sehr zentral gelegen ist und über öffentliche Verkehrsmittel verfügt und in der Nähe von Hauptverkehrsstraßen liegt.
        
        Die Fahrzeit zum Stadtzentrum von Dubai (Dubai Mall, Burj Khalifa) und Business Bay beträgt nur etwa 10 Minuten, während der internationale Flughafen von Dubai innerhalb von 15 Minuten erreicht werden kann.
        
        Im Riverside Crescent haben wir Einheiten mit 1 Schlafzimmer, 1,5 Schlafzimmer und 2 Schlafzimmern`,
        rooms: 4,
        kitchen: 1,
        bedroom: 3,
        area: "2,015 Sq. Ft. | 187 m²",
        amenities: [
            "Gym",
            "Security",
            "Central air conditioning",
            "Community pool",
            "BBQ area",
            "Built-in wardrobes",
            "Fully furnished",
            "many restaurants in the building"
        ],
        handover: "",
        price: "",
        property_map: "",
        bannerImages: [
            {
                link: "https://i.ibb.co/MRM20Q2/Al-Habtoor-Tower-1.jpg",
                title: "Custom title 1",
                description: "Custom description 1"
            },
            {
                link: "https://i.ibb.co/jGv43Ds/Al-Habtoor-Tower-2.jpg",
                title: "Custom title 2",
                description: "Custom description 2"
            },
            {
                link: "https://i.ibb.co/xJxkpd7/Al-Habtoor-Tower-3.jpg",
                title: "Custom title 3",
                description: "Custom description 3"
            },
            {
                link: "https://i.ibb.co/GdwdcnP/Al-Habtoor-Tower-4.jpg",
                title: "Custom title 4",
                description: "Custom description 4"
            },
            {
                link: "https://i.ibb.co/Sf2tYpC/Al-Habtoor-Tower-5.jpg",
                title: "Custom title 5",
                description: "Custom description 5"
            },

        ],
        images: [
            "/listing/Jumeirah Village Circle 2.jpg",
            "/listing/Jumeirah Village Circle 3.jpg",
            "/listing/Jumeirah Village Circle 4.jpg",
            "/listing/Jumeirah Village Circle 5.jpg",
        ],
        banner: "/listing/Jumeirah Village Circle 5.jpg"
    }
]

const getListings = () => {
    return listings;
}

const getListById = (id) => {
    const list = listings.find(list => list.id === Number(id));
    return list
}

export { getListings, getListById }