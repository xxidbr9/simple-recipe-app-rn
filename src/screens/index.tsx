import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ROUTES, { deeplinkConfig } from '@utils/constants/routes';
import HomeScreen from './Home';
import DetailRecipe from './DetailRecipe';
import OkScreen from './Ok';
import Text from '@components/atoms/TailwindView';
import SearchScreen from './Search';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

const MainStack = createSharedElementStackNavigator()

export default function RootNavigation() {
  return (
    <NavigationContainer linking={{
      prefixes: ['recipeapp://'],
      config: deeplinkConfig,
    }}
      fallback={<Text>Loading...</Text>}
    >
      <MainStack.Navigator
        initialRouteName={ROUTES.HOME_SCREEN}
        screenOptions={{
          headerShown: true
        }}

      >
        <MainStack.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen}
          options={{
            headerShown: false,

            // animation: 'fade',
          }} />
        <MainStack.Screen
          name={ROUTES.SEARCH_SCREEN}
          component={SearchScreen}
          options={{
            // animation: 'fade',
            presentation: 'card',
            headerShown: false,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress
              }
            }),

            // animationEnabled: false,
          }}

          sharedElements={() => {
            return [{
              id: `shared.search`,
              animation: 'fade',
              resize: 'stretch',
            }];
          }}
        />
        <MainStack.Screen
          name={ROUTES.DETAIL_RECIPE_SCREEN}
          component={DetailRecipe}
          options={{
            headerShown: false,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress,
                zIndex:0
              }
            }),

          }}

          sharedElements={(route, otherRoute, showing) => {
            const { feed } = route.params;
            return [{
              id: `shared.${feed.content.details.id}.image`,
              animation: 'fade',
              resize: 'stretch',
            }];
          }}



        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

