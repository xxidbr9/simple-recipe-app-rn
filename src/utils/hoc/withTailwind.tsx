import * as React from "react";
import { StyleProp, TextStyle, View } from "react-native";
import tailwind from "tailwind-rn";

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

type ComponentWithTailwindProps = {
  className?: string,
  style?: StyleProp<TextStyle>
}

const withTailwind = <P extends object>(Component: React.ComponentType<P>):React.FC<P & ComponentWithTailwindProps> => {
  const ComponentTailwind: React.FC<P & ComponentWithTailwindProps> = (props) => {
    const classes = props.className
      ? Array.isArray(props.className)
        ? props.className.flat().filter(Boolean).join(" ")
        : props.className
      : "";

    return <Component style={[tailwind(classes), props.style && props.style]} {...props} >{props.children}</Component>
  }

  ComponentTailwind.displayName = `withTailWind(${getDisplayName(
    Component
  )})`;

  return ComponentTailwind

}

export default withTailwind
