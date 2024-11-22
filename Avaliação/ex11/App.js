import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimalQuestions from './AnimalQuestions';
import VegetalQuestions from './VegetalQuestions';
import FungiQuestions from './FungiQuestions';
import ProtistaQuestions from './ProtistaQuestions';
import MoneraQuestions from './MoneraQuestions';
import ResultadoScreen from './ResultadoScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Animal" component={AnimalQuestions} />
        <Tab.Screen name="Vegetal" component={VegetalQuestions} />
        <Tab.Screen name="Fungi" component={FungiQuestions} />
        <Tab.Screen name="Protista" component={ProtistaQuestions} />
        <Tab.Screen name="Monera" component={MoneraQuestions} />
        <Tab.Screen name="Resultados" component={ResultadoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;