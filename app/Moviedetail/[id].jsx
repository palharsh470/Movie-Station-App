
import { useLocalSearchParams } from "expo-router";
import { CalendarBlank, FilmReel, LineVertical, PlayCircle, Star, Timer } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

export default function Details() {
    const params = useLocalSearchParams();
    const id = params.id;
    const [moviedetail, setmoviedetail] = useState([])


    useEffect(function () {
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=9fab0ce9&`).then(
            function (response) {
                response.json().then(function (data) {
                    setmoviedetail(data)
                })
            }
        )
    }, [])
    return (
        <View style={{
            height: "100%"
        }}>
            <View style={{
                height: "48.5%"
            }}>



                <Image style={{
                    width: '100%',
                    aspectRatio: 3 / 2,
                }}
                    src={moviedetail.Poster}></Image>


                <View style={{
                    flexDirection: "row",
                    backgroundColor: "yellow",
                    width: 60,
                    borderRadius: 15,
                    position: "absolute",
                    right: 10,
                    top: 10,
                    gap: 5,
                    padding: 5,
                    justifyContent: 'center'

                }}><Star size={20} color="#0f0f02ff" weight="regular" /><Text style={{
                    fontSize: 14
                }}>{moviedetail.imdbRating}</Text></View>
                <TouchableOpacity style={{
                    position: "absolute",
                    right: "44%",
                    top: "26%"
                }}>
                    <PlayCircle size={50} color="#7d7d77ff" weight="fill" />
                </TouchableOpacity>
                <Image style={{
                    width: "35%",
                    aspectRatio: 0.7,
                    position: "absolute",
                    top: 180,
                    right: "31%",
borderRadius:10                
                }}
                    src={moviedetail.Poster}></Image>
            </View>

            <Text style={{
                fontWeight: "bold",
                fontSize: 20,
                marginHorizontal: "20%",
                textAlign: "center"
            }}>{moviedetail.Title}</Text>

            <View style={{
                flexDirection: "row",
                marginHorizontal: "auto",
                marginVertical: "15"
            }}>
                <CalendarBlank size={20} weight="thin" />
                <Text style={styles.moviedetails}> {moviedetail.Year}</Text>
                <LineVertical size={20} weight="thin" />
                <Timer size={20} weight="thin" />
                <Text style={styles.moviedetails}> {moviedetail.Runtime}</Text>
                <LineVertical size={20} weight="thin" />
                <FilmReel size={20} weight="thin" />
                <Text style={styles.moviedetails}> {moviedetail.Genre}</Text>
            </View>

            <View style={{
                padding: 15,
            }}>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginBottom: 10,
                    marginTop: 10
                }}>Description</Text>
                <Text>{moviedetail.Plot}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    moviedetails: {
        fontWeight: "bold",
        opacity: 0.4
    }
})
