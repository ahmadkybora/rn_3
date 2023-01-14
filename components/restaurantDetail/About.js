import { View, Text, Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo = {
    name: "FarmHouse",
    image: require('../../assets/images/bg3.jpg'),
    price: "$$",
    review: "1500",
    rating: 4.5,
    categories: [
        { title: "Thai" }, 
        { title: "Comfort" },
        { title: "Coffee" },
        { title: "Ice Cream" },
        { title: "Snacks" },
    ]
}

export default function About(props) {
    const { name, image, price, reviews, rating, categories } = props.route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(" . ");
    const description = `${formattedCategories} ${price ? " . " + price : ""} . G . ${rating} F (${reviews}+)`;
    return (
        <View>
        <RestaurantImage image={image} />
        <RestaurantName name={name} />
        <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={props.image} style={{ width: '100%', height: 180 }} />
)

const RestaurantName = (props) => (
    <Text 
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15
        }}
    >
        {props.name}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text 
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5,
        }}
    >
        {props.description}
    </Text>
);