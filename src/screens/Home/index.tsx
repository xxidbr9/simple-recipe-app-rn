import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const tailwindStyle = require('../../../styles.json');

import View from '@components/atoms/TailwindText'
import Text from '@components/atoms/TailwindView'
import { StatusBar } from 'expo-status-bar'
import { FlatList, Image, Platform, StyleSheet, TouchableOpacity as RNTouchable, TouchableOpacity, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Feed } from '@utils/interfaces/list'
import feedListNetwork from '@network/feed/list'
import { AxiosError } from 'axios'
import tailwind, { getColor } from 'tailwind-rn'
import FeIcon from 'react-native-vector-icons/Feather';
import MaIcon from 'react-native-vector-icons/MaterialIcons';
import AntdIcon from 'react-native-vector-icons/AntDesign'
import abbreviateNumber from '@utils/helpers/numberKFormater';
import roundedNumber from '@utils/helpers/roundedNumber';

import withTailwind from '@utils/hoc/withTailwind'
import moment from 'moment';
import { RouteProp, useNavigation } from '@react-navigation/native';
import ROUTES, { RootStackParamList, ScreenNavigationProp, ScreenRouteProp } from '@utils/constants/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import Animated, { } from 'react-native-reanimated'
import Container from '@components/atoms/Container';
import { SharedElement } from 'react-navigation-shared-element';
import CardBottomInfo from '@components/molecules/CardBottomInfo';

import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

const TWTouchableOpacity = withTailwind(TouchableOpacity)

type HomeScreenProps<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};


const HomeScreen: React.FC<HomeScreenProps<`home`>> = (props) => {
  const { width } = Dimensions.get("screen")
  const max = 10
  const navigation = useNavigation();
  let flatListValue = useRef(new Animated.Value()).current

  const [feeds, setFeeds] = useState<Feed[]>([])
  const [isFeedLoading, setIsFeedLoading] = useState<boolean>(true)
  const [err, setErr] = useState<any>(null)
  useEffect(() => {
    (async () => {
      try {
        const resp = await feedListNetwork()
        const respFeed = resp.data.feed
        setFeeds(respFeed)
      } catch (error) {
        setErr(error)
        console.error(error)
      }
    })
      // ().finally(() => setIsFeedLoading(false))
  }, [])

  const _onSearchPress = () => {
    props.navigation.navigate(ROUTES.SEARCH_SCREEN)
  }

  const _onCardPress = (feed: Feed) => {
    props.navigation.navigate(ROUTES.DETAIL_RECIPE_SCREEN, {
      feed,
    })
  }


  useEffect(() => {

  }, [])

  return (
    <Animated.ScrollView style={[{
      paddingTop: 40,
    }]}
    >
      <StatusBar animated style={"auto"} />
      <Container>
        <TitleHome />
        <SearchBox
          className="my-4"
          onPress={_onSearchPress}
        />
      </Container>

      <Container className="pb-20">
        {!isFeedLoading && (
          // <FlatList
          //   data={feeds}
          //   keyExtractor={(item) => item['tracking-id']}
          //   renderItem={(feed) => (
          //     <CardComponents
          //       feed={feed.item}
          //       key={`feed_${feed.item['tracking-id']}`}
          //       onPress={() => _onCardPress(feed.item)}
          //     />
          //   )}
          // />
          feeds.map((feed) => (
            <CardComponents
              feed={feed}
              key={`feed_${feed['tracking-id']}`}
              onPress={() => _onCardPress(feed)}
            />
          ))
        )}
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonContent
            key={`loading-${index}`}
            containerStyle={{ flex: 1, marginBottom: 24 }}
            isLoading={isFeedLoading}
            layout={[
              { key: 'card-1', width: width - 16 * 2, height: 200, marginBottom: 6 },
              { key: 'title', width: 320, height: 20, marginBottom: 6 },
              { key: 'small-desc', width: 180, height: 20, marginBottom: 6 }
            ]}
          />
        ))}
      </Container>
    </Animated.ScrollView>
  )
}



// Card
type CardComponentsProps = {
  feed: Feed
  onPress: (feed: Feed) => void
}


const CardComponents: React.FC<CardComponentsProps> = (props) => {
  const { feed } = props
  return (
    <TWTouchableOpacity className="my-4" onPress={() => props.onPress(feed)} activeOpacity={.8}>
      {!!feed.content?.videos?.videoUrls?.ios && (
        <View className="absolute z-50 top-4 left-4 bg-pink-200 bg-opacity-80 py-1 px-1 rounded-2xl"><Text className="text-xs text-pink-600 font-medium"> Dengan Video</Text></View>
      )}
      <SharedElement id={`shared.${feed.content.details.id}.image`}>
        <Image
          style={tailwind("rounded-2xl")}
          source={{
            uri: feed.display.images[0],
            height: 200
          }} />
      </SharedElement>
      <CardBottomInfo feed={feed} />
    </TWTouchableOpacity>
  )
}

// TitleHome

type TitleHomeProps = {
  className?: string
}


const TWImage = withTailwind(Image)

const TitleHome: React.FC<TitleHomeProps> = (props) => {
  return (
    <View className={`flex flex-row justify-between items-end ${!!props.className ? props.className : ""}`}>
      <View className="flex flex-col">
        <Text className="text-sm text-gray-600">
          Selama malam
        </Text>
        <Text className="text-xl">
          Barnando
        </Text>
      </View>
      <TWImage
        className="w-16 h-16 rounded-full"
        source={{
          uri: "https://source.unsplash.com/random/2"
        }} />
    </View>
  )
}


// Search
type SearchBoxProps = {
  className?: string
  onPress?: () => void
}

const SearchBox: React.FC<SearchBoxProps> = (props) => {
  const className = !!props.className ? props.className : ''
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      onLongPress={props.onPress}
      delayLongPress={200}
    >
      <SharedElement id={`shared.search`} style={tailwind('w-full z-0')} >
        <View className={`${className} bg-gray-200 py-2 px-4 rounded-xl flex-row items-center`}>
          <FeIcon name="search" color={getColor("gray-500")} />
          <Text className="ml-2 text-xs text-gray-500">Cari resep? seperti pizza ...</Text>
        </View>
      </SharedElement>
    </TouchableOpacity>
  )
}



export default HomeScreen
