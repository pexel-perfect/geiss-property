export const listings = [
    {
        id: 1,
        title: "Apartment One Za’abeel Tower - Kauf or Miete",
        category: "resale",
        description: "One Za’abeel ist ein renommiertes Mischnutzungsprojekt im Herzen von Dubai, Vereinigte Arabische Emirate. Es befindet sich im ikonischen Stadtteil Za’abeel und bietet Blick auf das Dubai World Trade Centre und den Burj Khalifa. Das Projekt zielt darauf ab, das städtische Leben neu zu definieren, indem es Wohn-, Geschäfts- und Freizeiträume nahtlos miteinander verbindet.",
        rooms: 4,
        kitchen: 1,
        bedroom: 3,
        living_space: "2,015 Sq. Ft. | 187 m²",
        furnishing: [
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
        images: [
            "Al Habtoor Tower 1.jpg",
            "Al Habtoor Tower 2.jpg",
            "Al Habtoor Tower 3.jpg",
            "Al Habtoor Tower 4.jpg",
            "Al Habtoor Tower 5.jpg",
        ]
    }
]

export const getListings = () => {
    return listings;
}

export const getListById = (id) => {
    const list = listings.find(list => list.id === Number(id));
    return list
}