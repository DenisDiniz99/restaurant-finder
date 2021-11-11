import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";

import {Restaurant, RestaurantInfo, Content, RestaurantPhoto} from './styles';
import Text from '../Text';
import ImageSkeleton from '../ImageSkeleton';
import restauranteFake from '../../assets/restaurante-fake.png'

const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const image = restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon;

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = image;
        imageLoader.onload = () => setImageLoaded(true);
    }, [image]);

    return(
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Text size="large">{restaurant.name}</Text>
                <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c"/>
                <Content size="medium">{restaurant.formatted_address || restaurant.vicinity}</Content>
            </RestaurantInfo>
            <RestaurantPhoto
                imageLoaded={imageLoaded}
                onload={ () => setImageLoaded(true) }
                src={image}
                alt="Foto do Restaurante"
            />
            {!imageLoaded && <ImageSkeleton width="100px" height="100px"/>}
        </Restaurant>
    );
    console.log(image.Content);
};

export default RestaurantCard;