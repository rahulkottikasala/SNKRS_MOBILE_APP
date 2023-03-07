import  { StyleSheet , View, Text} from 'react-native'
import { COLOR } from '../../const/Color'

export const WelcomeText = () => (
    <View style={styles.welcomeTextContainer}>
  <Text style={styles.welcomeText}>Choose Your {'\n'}<Text style={styles.welcomeTextShade}>Brand New Sneaker</Text></Text>
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