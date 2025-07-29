import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import { Heart } from "phosphor-react-native";

import { Image, Text, TouchableOpacity, View } from "react-native";


export default function Moviecard({ items, favourite, setfavourite }) {


    const fav = favourite?.find(function (elem) {
        if (elem.imdbID == items.imdbID)
            return true;
    })

    function isfav() {
        if (fav) {
            const updated = favourite?.filter(function (elem) {
                if (elem.imdbID != items.imdbID) return true
            })
            setfavourite(updated)
            AsyncStorage.setItem("fav-movies", JSON.stringify(updated));
        } else {
            const arr = [...favourite];
            arr.push(items)
            setfavourite(arr)
            AsyncStorage.setItem("fav-movies", JSON.stringify(arr));
        }

    }
    return (
        <View style={{
            margin: 10,
            width: 150,

        }}>

            <Link href={`/Moviedetail/${items.imdbID}`}>
                <View>

                    <Image src={items.Poster} style={{
                        height: 200,
                        aspectRatio: 0.7
                    }} />
                </View>

            </Link>


            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,

            }}>
                <View style={{

                }}>
                    <View style={{
                        width: "80%",
                    }}
                    >
                        <Text style={{
                            fontWeight: "bold",

                        }}>{items.Title} - {items.Year}</Text>
                    </View>

                    <Text style={{
                    }}>Description - {items.Type}</Text>
                </View>
                <TouchableOpacity onPress={isfav}>
                    <Heart size={25} color="red" weight={fav ? "fill" : "light"} />

                </TouchableOpacity>
            </View>
        </View >
    )
}