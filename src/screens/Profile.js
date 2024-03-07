import { StyleSheet, View} from "react-native";
import FotoPerfil from "../assets/perfil.png";
import InfoProfile from "../components/InfoProfile";
import MyPosts from "../components/MyPosts";

export default function Profile(){
    return (
        <View style={styles.container}>
            <InfoProfile
            image = {FotoPerfil}
            publi = {135}
            followers = {2200}
            following = {890}
            descriptions="Mota"/>
            <MyPosts/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        marginHorizontal:16,
        marginVertical:35,
    },
})