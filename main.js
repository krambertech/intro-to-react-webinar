const HOTELS = [
    {
        id: 7969942,
        name: 'Beautiful, best located apartment!',
        description: 'Im Herzen Berlins begrüßt dich diese moderne, helle und komplett eingerichtete 3 Zimmer Wohnung, mit Blick auf den Kreuzberger Spreewaldplatz und nur 200m zum Görlitzer Park.',
        price: 209,
        image: 'https://a1.muscache.com/im/pictures/109467913/296cdac4_original.jpg?aki_policy=x_medium'
    },
    {
        id: 4508183,
        name: 'Fantastic view in a superlocation',
        description: 'A peacefull oasis in the middle of the city, with fantastic view from balcony. The most highlights are in walking distance. Bus, subway, supermarkets, restaurants and cafes just at the corner(URL HIDDEN)',
        price: 104,
        image: 'https://a2.muscache.com/im/pictures/60695965/9cdada99_original.jpg?aki_policy=x_medium'
    },
    {
        id: 13501472,
        name: 'Nice and central in Berlin',
        description: 'Nice altbau apartment (complete renovated) nearby Mauerpark an Bernauer Straße. It is in the district of Berlin-Mitte, you can reach any atrraction of Berlin within less than 30 Minutes by subway tram or bycycle.',
        price: 117,
        image: 'https://a0.muscache.com/im/pictures/158207ca-75db-4f05-90ad-90519c227cf7.jpg?aki_policy=x_medium'
    },
    {
        id: 976856,
        name: 'living at checkpoint charlie',
        description: 'The apartment is in the former East of Berlin between Potsdamer Platz and Alexanderplatz. This part of town is a very attractive residential area and full of history and places to discover. The “Mitte” fashion district, dozens of good restaurants, bars, theatres and clubs are at the doorsteps.',
        price: 48,
        image: 'https://a1.muscache.com/im/pictures/16948729/687c16bc_original.jpg?aki_policy=x_medium'
    }
];

const MAX_DESCRIPTION_LENGTH = 100;

const HotelCard = React.createClass({
    render() {
        const {
            id,
            name,
            image,
            description,
            price
        } = this.props;

        return (
            <div className="hotel-card">
                <img className="hotel-image" src={image} />

                <div className="hotel-body">
                    <h3 className="hotel-title">
                        {name}
                    </h3>

                    <p className="hotel-description">
                        {
                            description.length > MAX_DESCRIPTION_LENGTH
                            ? description.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
                            : description
                        }
                    </p>
                </div>

                <div className="hotel-book">
                    <span className="hotel-price">{price}$</span>
                    <a
                        href={`https://www.airbnb.com/rooms/${id}`}
                        target="_blank"
                        className="hotel-book-link"
                    >
                        Book now!
                    </a>
                </div>
            </div>
        );
    }
});

const SearchBar = React.createClass({
    render() {
        return (
            <div className="search-bar">
                <i className="search-icon fa fa-search" />

                <input
                    className="search-input"
                    type="text"
                    placeholder="Look for a hotel"
                    onChange={this.props.onSearch}
                />
            </div>
        );
    }
})

const HotelApp = React.createClass({
    getInitialState() {
        return {
            displayedHotels: HOTELS
        };
    },

    handleSearch(e) {
        const searchQuery = e.target.value.toLowerCase();

        const displayedHotels = HOTELS.filter(hotel => {
            const searchString = hotel.name.toLowerCase() + hotel.description.toLowerCase();

            return searchString.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedHotels
        });
    },

    render() {
        const hotelCards = this.state.displayedHotels.map(hotel =>
            <HotelCard
                key={hotel.id}
                id={hotel.id}
                name={hotel.name}
                image={hotel.image}
                description={hotel.description}
                image={hotel.image}
                rating={hotel.rating}
                price={hotel.price}
            />
        );

        return (
            <div className="app">
                <div className="header">Hotel Look</div>

                <SearchBar onSearch={this.handleSearch} />

                <div className="hotels-list">
                    {hotelCards}
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <HotelApp />,
    document.getElementById('root')
);
