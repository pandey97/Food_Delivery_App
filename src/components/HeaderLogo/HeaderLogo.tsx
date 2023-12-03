import React from "react";
import { Image, View } from "react-native";
import { Images } from "../../themes";
import styles from "./styles";

const HeaderLogo = () => {
    return(
        <View style={styles.container}>
            <Image source={Images.logo_02} style={styles.logo}/>
        </View>
    )
};

export default HeaderLogo;