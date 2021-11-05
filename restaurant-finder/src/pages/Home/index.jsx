import React, { useState } from "react";
import { shallowEqual, useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import {
    RestaurantCard,
    Model,
    Map,
    ImageCard,
    Loader,
    Text,
    ImageSkeleton as Skeleton,
} from '../../components';

import logo from '../../assets/logo.svg';

import {
    Container,
    Search,
    Logo,
    Title,
    Carousel,
    Wrapper
} from './styles';
import Modal from "../../components/Modal";

const Home = () => {
    const [value, setValue] = useState('');
    const [query, setQuery] = useState('');
    const [placeId, setPlaceId] = useState(null);
    const [open, setOpen] = useState(false);
    const { restaurants, restaurantsSelected } = useSelector((state) => state.restaurants);
    const hasRestaurants = restaurants.length > 0;

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeigth: true
    };

    const renderCarousel = () => {
        if(hasRestaurants){
            return(
                <>
                    <Title size="large">Na sua área</Title>
                    <Carousel {...settings }>
                        {restaurants.map((restaurants) => (
                            <ImageCard key={restaurants.placeId} restaurant={restaurant}/>
                        ))}
                    </Carousel>
                </>
            );
        }
        return <Loader/>
    };

    const renderRestaurants = () => {
        if(hasRestaurants){
            return restaurants.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.placeId}
                    restaurant={restaurant}
                    onClick={() => {
                        setPlaceId(restaurant.placeId);
                        setOpen(true);
                    }}
                />
            ));
        }
        return null;
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            setQuery(value);
        }
    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo da empresa"/>
                    <TextField
                        outlined
                        label="Pesquisar Restaurante"
                        trailingIcon={ <MaterialIcon role="button" icon="search"/> }
                    >
                        <Input type="text" value={value} onKeyPress={handleKeyPress} onChange={handleChange}/>
                    </TextField>

                    {renderCarousel()}
                </Search>
                {renderRestaurants()}
                <Modal open={open} onClose={() => setOpen(false)}>
                    {restaurantsSelected ? (
                        <>
                            <Text size="large">{restaurantSelected?.name}</Text>
                            <Text size="medium">{restaurantSelected?.formatted_phone_number}</Text>
                            <Text size="medium">{restaurantSelected?.formatted_address}</Text>
                            <Text size="medium">
                                {restaurantSelected?.opening_hours?.open_now
                                    ? 'Aberto agora :)'
                                    : 'Fechado neste momento :('}
                            </Text>
                        </>
                    ) : (
                        <>
                            <Skeleton width="10px" height="10px" />
                            <Skeleton width="10px" height="10px" />
                            <Skeleton width="10px" height="10px" />
                            <Skeleton width="10px" height="10px" />
                        </>
                    )}
                </Modal>
            </Container>
            <Map query={query} placeId={placeId} />
        </Wrapper>
    );

}

export default Home;