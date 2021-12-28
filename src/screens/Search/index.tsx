import Container from '@components/atoms/Container';
import Text from '@components/atoms/TailwindView';
import ROUTES, { RootStackParamList, ScreenNavigationProp, ScreenRouteProp } from '@utils/constants/routes';
import React, { useEffect, useRef } from 'react'
import { TextInput, SafeAreaView, TextInputComponent, Touchable, TouchableWithoutFeedback } from 'react-native'
import tailwind from 'tailwind-rn';
import FeIcon from 'react-native-vector-icons/Feather';
import View from '@components/atoms/TailwindText';
import { getColor } from '@base/tailwind';
import { SharedElement } from 'react-navigation-shared-element';
import Ionicons from 'react-native-vector-icons/Ionicons';


type SearchScreenProps<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

const SearchScreen: React.FC<SearchScreenProps<`search`>> = (props) => {

  const { navigation } = props
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const _onBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={{marginTop:50}}>
      <Container className="flex flex-row items-center justify-between">
      {/* <Ionicons name="ios-chevron-back" size={24} color={getColor('black opacity-40')} /> */}
        <SharedElement id={`shared.search`} style={tailwind('w-10/12')}>
          <View className={`bg-gray-200 py-2 px-4 rounded-xl flex-row items-center`}>
            <FeIcon name="search" color={getColor("gray-500")} />
            <TextInput placeholder="Cari resep? seperti pizza ...." ref={inputRef} style={[tailwind('ml-2 text-xs text-gray-500')]} />
          </View>
        </SharedElement>
        <TouchableWithoutFeedback onPress={_onBack}>
          <View className="flex items-center justify-center w-2/12">
            <Text className="text-blue-500 text-base">
              Batal
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </Container>
    </SafeAreaView>
  )
}

export default SearchScreen
