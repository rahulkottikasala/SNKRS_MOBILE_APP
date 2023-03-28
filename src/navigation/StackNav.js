
import { createStackNavigator } from '@react-navigation/stack'
import CardDetails from '../screen/CardDetails'
import Cart from '../screen/Cart'
import Category from '../screen/Category'
import ForgotPassword from '../screen/ForgotPassword'
import Home from '../screen/Home'
import Login from '../screen/Login'
import Payment from '../screen/Payment'
import Profile from '../screen/Profile'
import Register from '../screen/Register'
import SplashScreen from '../screen/SplashScreen'
import Start from '../screen/Start'
import ViewDetails from '../screen/ViewDetails'
import Wishlist from '../screen/Wishlist'
import TabBar from './TabBar'

const Stack = createStackNavigator()
export const MyStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    <Stack.Screen name="Forgot" component={ForgotPassword} options={{ headerShown: false }} />
    <Stack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }} />
    {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
    <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
    <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }} />
    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    <Stack.Screen name="ViewDetails" component={ViewDetails} options={{ headerShown: false }} />
    <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
    <Stack.Screen name="CardDetails" component={CardDetails} options={{ headerShown: false }} />
    <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
  </Stack.Navigator>
)
