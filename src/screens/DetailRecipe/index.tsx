import { getColor, tailwind } from '@base/tailwind';
import Container from '@components/atoms/Container';
import { RootStackParamList, ScreenNavigationProp, ScreenRouteProp } from '@utils/constants/routes';
import React, { useRef, useState } from 'react'
import { Text, Image, TouchableWithoutFeedback, StyleSheet, ActivityIndicator, Dimensions, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import Ionicons from 'react-native-vector-icons/Ionicons';
import View from '@components/atoms/TailwindText';
import VideoRN from 'react-native-video'
import Video from 'react-native-video';
import CardBottomInfo from '@components/molecules/CardBottomInfo';


type DetailRecipeProps<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

const DetailRecipeScreen: React.FC<DetailRecipeProps<`recipe-info`>> = ({ navigation, route, ...props }) => {

  const feed = route.params.feed
  let videoRef = useRef<Video | null>(null).current
  const BANNER_HEIGHT = 400
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(true)
  const [isVideoPaused, setIsVideoPaused] = useState<boolean>(false)
  const { width: screenWidth } = Dimensions.get("screen")
  const _onBackPress = () => {
    navigation.goBack()
  }


  const _onVideoReady = () => {
    setIsVideoLoading(false)
  }


  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={_onBackPress}>
        <View className="absolute z-50 mt-10 ml-4 p-2 bg-black bg-opacity-40 rounded-2xl">
          <Ionicons name="ios-chevron-back" size={24} color={getColor('white')} />
        </View>
      </TouchableWithoutFeedback>
      <ScrollView>
        <View className="z-0">
          <SharedElement id={`shared.${feed.content.details.id}.image`} style={{ zIndex: 0, position: "relative" }}>
            {isVideoLoading && (
              <>
                <Image
                  source={{
                    uri: feed.display.images[0],
                    height: BANNER_HEIGHT,
                    width: screenWidth,
                  }}
                  style={{
                    position: 'absolute',
                    zIndex: 10
                  }}
                />
                <View className="absolute bg-black flex justify-center items-center w-full h-full z-20 bg-opacity-40">
                  <ActivityIndicator size="large" />
                </View>
              </>
            )}
            {!!feed.content.videos ? (
              <TouchableOpacity
                style={{ height: BANNER_HEIGHT, width: screenWidth }}
                activeOpacity={.8}
                onPress={() => setIsVideoPaused(!isVideoPaused)}
              >
                <VideoRN source={{ uri: feed.content.videos.videoUrls.ios }}   // Can be a URL or a local file.
                  ref={(ref) => {
                    videoRef = ref
                  }}                                      // Store reference
                  // onBuffer={this.onBuffer}                // Callback when remote video is buffering
                  // onError={this.videoError}               // Callback when video cannot be loaded
                  paused={isVideoPaused}
                  onReadyForDisplay={_onVideoReady}
                  repeat
                  resizeMode="cover"
                  fullscreen={true}
                  style={[styles.backgroundVideo, { height: BANNER_HEIGHT }]}
                />
              </TouchableOpacity>
            ) : (
              <Image
                onLoad={() => setIsVideoLoading(false)}
                source={{
                  uri: feed.display.images[0],
                  height: BANNER_HEIGHT
                }} />
            )}
          </SharedElement>
        </View>
        <Container className=" bg-white pb-20">
          <CardBottomInfo feed={feed} bigTitle noCutDesc/>
        </Container>
      </ScrollView>
    </React.Fragment>
  )
}

export default DetailRecipeScreen


var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});