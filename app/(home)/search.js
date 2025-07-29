import { Link } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Srch() {
    const [input, setinput] = useState("");
    const [data, setdata] = useState([])
   const [loading,setloading]=useState(false)
    function onpresssearch() {
       setloading(true);
       if(!input.trim()) return;
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9fab0ce9&s=${input}`).then(
            function (value) {
                value.json().then(function (response) {
                    setdata(response?.Search)
                    setloading(false)
                })
            }
        )
        .catch(function(err){
            
             setdata([])
        })

    }
    return (
        <View>

            <View style={{
                flexDirection: "row",
                marginTop:60
            }}>

                <TextInput style={{
                    borderWidth: 2,
                    borderColor: "grey",
                    margin: 10,
                    flex: 1,
                    borderRadius: 50
                }} onChangeText={setinput} placeholder="search movies..." value={input}>
                </TextInput>

                <TouchableOpacity style={{
                    margin: 10
                }} onPress={onpresssearch}>
                    <Text style={{
                        fontSize: 35
                    }}>🔍</Text></TouchableOpacity>
            </View>

            {
                loading && <ActivityIndicator size={"large"}/>
            }

            <FlatList
            
            numColumns={2}
            contentContainerStyle={{
                gap:10,
                marginHorizontal:"auto"
            }}
              
                data={data}
                renderItem={function ({ item }) {
                    return <TouchableOpacity style={{
                        margin: 10,
                        width: 150,

                    }}>

                    

                          <Link href={`/Moviedetail/${item.imdbID}`}>
                                       <View>
                       
                                           <Image src={item.Poster} style={{
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

                                    }}>{item.Title} - {item.Year}</Text>
                                </View>

                                <Text style={{
                                }}>Description - {item.Type}</Text>
                            </View>

                        </View>
                    </TouchableOpacity >
                }} />
        </View>
    )
}