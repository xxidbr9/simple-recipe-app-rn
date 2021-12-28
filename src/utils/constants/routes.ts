import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Feed } from "@utils/interfaces/list";

export type ScreenNavigationProp<
  T extends keyof RootStackParamList
  > = StackNavigationProp<RootStackParamList, T>;

export type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

const HOME_SCREEN = 'home' as const
const DETAIL_RECIPE_SCREEN = 'recipe-info' as const
const OK_SCREEN = 'ok' as const
const SEARCH_SCREEN = 'search' as const




export type RootStackParamList = {
  [HOME_SCREEN]: undefined,
  [DETAIL_RECIPE_SCREEN]: {
    feed: Feed
  }
  [OK_SCREEN]: undefined,
  [SEARCH_SCREEN]: undefined,
};

const ROUTES = {
  HOME_SCREEN,
  DETAIL_RECIPE_SCREEN,
  OK_SCREEN,
  SEARCH_SCREEN
}



export default ROUTES


// Linking
export const deeplinkConfig = {
  screens: {
    [ROUTES.HOME_SCREEN]: {
      path: ROUTES.HOME_SCREEN,
    },
    [ROUTES.DETAIL_RECIPE_SCREEN]: {
      path: `${ROUTES.DETAIL_RECIPE_SCREEN}/:id`,
      parse: {
        id: (id: any) => `${id}`
      }
    },
    [ROUTES.OK_SCREEN]: {
      path: ROUTES.OK_SCREEN
    },
    [ROUTES.SEARCH_SCREEN]: {
      path: ROUTES.SEARCH_SCREEN
    }
  }
}