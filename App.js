import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button , Text, View} from 'react-native';
import Forms from "./screens/Forms";
import ScrollViewandMap from "./screens/ScrollViewandMap";
import FlatList  from "./screens/FlatList";
import Spinner1 from "./screens/Spinner1";
import Linking from "./screens/Linking";
import Toes from "./screens/Toes";
import PopUp from "./screens/PopUp";
import Alert from "./screens/Alert";
import Animated from "./screens/Animated";
import Switch from "./screens/Switch";
import Picker from "./screens/Picker";
import WebView from "./screens/WebView";
import SectionList from "./screens/SectionList";
import Slider from "./screens/Slider";
import Collapse from "./screens/Collapse";
import Tab from "./screens/Tab";
 

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      
    <Button
      title="Forms"
      onPress={() => navigation.navigate('Forms')}
    />

    <Button
      title="ScrollView and Map"
      onPress={() => navigation.navigate('ScrollView and Map')}
    />

   <Button
      title="Linking"
      onPress={() => navigation.navigate('Linking')}
    />

    <Button
      title="Spinner"
      onPress={() => navigation.navigate('Spinner')}
    />

    <Button
      title="FlatList"
      onPress={() => navigation.navigate('FlatList')}
    />

   <Button
      title="Toes"
      onPress={() => navigation.navigate('Toes')}
    />
    <Button
      title="PopUp"
      onPress={() => navigation.navigate('PopUp')}
    />
     <Button
      title="Alert and Modal"
      onPress={() => navigation.navigate('Alert')}
    />
     <Button
      title="Animated"
      onPress={() => navigation.navigate('Animated')}
    />
     <Button
      title="Switch"
      onPress={() => navigation.navigate('Switch')}
    />
    <Button
      title="Picker and Statusbar"
      onPress={() => navigation.navigate('Picker')}
    />
     <Button
      title="Web View"
      onPress={() => navigation.navigate('WebView')}
    />
     <Button
      title="Section List"
      onPress={() => navigation.navigate('SectionList')}
    />
    <Button
      title="Slider"
      onPress={() => navigation.navigate('Slider')}
    />
    <Button
      title="Collapse"
      onPress={() => navigation.navigate('Collapse')}
    />
    <Button
      title="Tab"
      onPress={() => navigation.navigate('Tab')}
    />
     
     
    </View>
     
    

    
  );
}

 
function ScrollViewAndMapFunction() {
  return (
    <ScrollViewandMap/>
  );
}
  function FlatListFunction() {
    return (
      <FlatList/>
    );
}
function Spinner1Function() {
  return (
    <Spinner1/>
  );
}
function LinkingFunction() {
  return (
    <Linking/>
  );
}
function ToesFunction() {
  return (
    <Toes/>
  );
}
function PopUpFunction() {
  return (
    <PopUp/>
  );
}
function AlertFunction() {
  return (
    <Alert/>
  );
}
function AnimatedFunction() {
  return (
    <Animated/>
  );
}
function SwitchFunction() {
  return (
    <Switch/>
  );
}
function PickerFunction() {
  return (
    <Picker/>
  );
}
function WebViewFunction() {
  return (
    <WebView/>
  );
}
function SectionListFunction() {
  return (
    <SectionList/>
  );
}
function SliderFunction() {
  return (
    <Slider/>
  );
}
function CollapseFunction() {
  return (
    <Collapse/>
  );
}
function TabFunction() {
  return (
    <Tab/>
  );
}
 
 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Forms" component={Forms} />
        <Stack.Screen name="ScrollView and Map" component={ScrollViewAndMapFunction} />
        <Stack.Screen name="FlatList" component={FlatListFunction} />
        <Stack.Screen name="Spinner" component={Spinner1Function} />
        <Stack.Screen name="Linking" component={LinkingFunction} />
        <Stack.Screen name="Toes" component={ToesFunction} />
        <Stack.Screen name="PopUp" component={PopUpFunction} />
        <Stack.Screen name="Alert" component={AlertFunction} />
        <Stack.Screen name="Animated" component={AnimatedFunction} />
        <Stack.Screen name="Switch" component={SwitchFunction} />
        <Stack.Screen name="Picker" component={PickerFunction} />
        <Stack.Screen name="WebView" component={WebViewFunction} />
        <Stack.Screen name="SectionList" component={SectionListFunction} />
        <Stack.Screen name="Slider" component={SliderFunction} />
        <Stack.Screen name="Collapse" component={CollapseFunction} />
        <Stack.Screen name="Tab" component={TabFunction} />
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}