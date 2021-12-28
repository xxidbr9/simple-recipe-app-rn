import React, { useMemo } from 'react'
import View from '@components/atoms/TailwindText'
import Text from '@components/atoms/TailwindView'
import moment from 'moment'
import abbreviateNumber from '@utils/helpers/numberKFormater';
import FeIcon from 'react-native-vector-icons/Feather';
import MaIcon from 'react-native-vector-icons/MaterialIcons';
import AntdIcon from 'react-native-vector-icons/AntDesign'
import roundedNumber from '@utils/helpers/roundedNumber';
import { Feed } from '@utils/interfaces/list';
import { getColor } from '@base/tailwind';

type CardBottomInfoProps = {
  feed: Feed
  bigTitle?: boolean
  noCutDesc?: boolean
}

const CardBottomInfo: React.FC<CardBottomInfoProps> = (props) => {
  const { feed } = props
  const cutDesc = feed.seo.web['meta-tags'].description.split(/[\.\,]/)[0]
  const desc = useMemo(() => props.noCutDesc ? feed.seo.web['meta-tags'].description : cutDesc, [])
  return (
    <View className="">
      <Text className={`mt-4 font-bold ${props.bigTitle ? "text-lg" : ""}`}>
        {feed.display.displayName}
      </Text>
      <Text className="text-gray-500 text-sm mt-1">
        {desc}
      </Text>
      <View className={`${props.bigTitle ? "mt-4" : "mt-2"} flex flex-row`}>
        <View className="flex flex-row items-center">
          <FeIcon name="heart" size={16} color={getColor('gray-400')} />
          <Text className="ml-2 text-gray-400">
            {abbreviateNumber(feed.content.yums.count)}
          </Text>
        </View>
        <View className="ml-4 flex flex-row items-center">
          <MaIcon name="timer" size={16} color={getColor('gray-400')} />
          <Text className="ml-2 text-gray-400">
            {moment.utc(feed.content.details.totalTimeInSeconds * 1000).format("m")} Menit
          </Text>
        </View>
        <View className="ml-4 flex flex-row items-center">
          <AntdIcon name="staro" size={16} color={getColor('gray-400')} />
          <Text className="ml-2 text-gray-400">
            {feed.content.reviews.averageRating?.toFixed(2)} • ({roundedNumber(feed.content.reviews.totalReviewCount)} review)
          </Text>
        </View>
      </View>
    </View>
  )
}

export default CardBottomInfo
