import  { StyleSheet , View, Text} from 'react-native'
import { COLOR } from '../../const/Color'

export const WelcomeText = ({isDark}) => (
    <View style={styles.welcomeTextContainer}>
  <Text style={[styles.welcomeText, isDark && {color:COLOR.primary}]}>Choose Your {'\n'}<Text style={[styles.welcomeTextShade, isDark && {color:COLOR.secondary_shade}]}>Brand New Sneaker</Text></Text>
    </View>
  )
  
  const styles = StyleSheet.create({
    welcomeTextContainer:{
      width:'100%',
      paddingHorizontal:20,
    },
    welcomeText:{
      fontSize:28, 
      color:COLOR.black,
      fontFamily:"Bold"
    },
    welcomeTextShade:{
      fontSize:24, 
      fontFamily:"SemiBold",
      color:COLOR.grey
    }
  })