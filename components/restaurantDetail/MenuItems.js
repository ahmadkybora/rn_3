import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

const foods = [
    {
        title: "lasania",
        description: "1 1 1",
        price: "1",
        image: require('../../assets/images/bg1.jpg'),
    },
    {
        title: "2 2 2",
        description: "2 2 2",
        price: "2",
        image: require('../../assets/images/bg2.jpg'),
    },
    {
        title: "3 3 3",
        description: "3 3 3",
        price: "3",
        image: require('../../assets/images/bg3.jpg'),
    }
];

const styles = StyleSheet.create({
    menuItemStyle: {
        textDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600'
    }
});

export default function MenuItems({ restaurantname }) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { 
                ...item,
                restaurantname: restaurantname,
                checkboxValue: checkboxValue
            }
        });
    }
    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );
    const isFoodInCart = (food, cartItems) => 
        Boolean(cartItems.find((item) => item.title === food.title));
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox 
                            iconStyle={{ 
                                borderColor: "lightgray", 
                                borderRadius: 0 
                            }}
                            fillColor="green"
                            isChecked={isFoodInCart(food, cartItems)}
                            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                            />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} orientation='vertical' style={{ marginHorizontal: 20 }} />
                </View>
            ))}
        </ScrollView>
    )
}

const FoodInfo = (props) => {
    <View style={{ width: 240, justifyContent: "space-evenly" }} >
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
}

const FoodImage = (props) => (
    <View>
        <Image 
            source={props.food.image} 
            style={{ width: 100, height: 100, borderRadius: 8 }} 
            />
    </View>
)