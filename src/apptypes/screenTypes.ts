import { RootStackParamList } from "./rootStackParams";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//Home page props
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

//Detail page props
export type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;