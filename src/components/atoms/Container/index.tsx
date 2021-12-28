import React from 'react'
import View from '@components/atoms/TailwindText'

// Container

type ContainerProps = {
  className?: string
}
const Container: React.FC<ContainerProps> = (props) => {
  return (
    <View className={`px-4 ${!!props.className ? props.className : ""}`}>
      {props.children}
    </View>
  )
}

export default Container