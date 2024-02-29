import { StyleSheet, View} from "react-native";
import FotoPerfil from "../instagram/src/assets/perfil.png";
import InfoProfile from "./src/components/InfoProfile";

export default function App(){
    return (
        <View style={styles.container}>
            <InfoProfile
            image = {FotoPerfil}
            publi = {135}
            followers = {2200}
            following = {890}
            descriptions="Mota"/>
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