// Navigation types

type StackNavigationProp =
  import('@react-navigation/native-stack').StackNavigationProp;

type PrimaryStackParamList = {
  VerifyAccount: {};
  Splash: undefined;
  Home: undefined;
};

type SplashNavigationProp = StackNavigationProp<
  PrimaryStackParamList,
  'Splash'
>;

type VehiclesListNavigationProp = StackNavigationProp<
  PrimaryStackParamList,
  'VehiclesList'
>;

type TreeFilterNavigationProp = StackNavigationProp<
  PrimaryStackParamList,
  'TreeFilter'
>;
