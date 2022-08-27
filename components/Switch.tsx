

import { colors } from '@theme';
import React, { useEffect } from 'react';
import { Button, TouchableOpacity, View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    interpolateColor,
} from 'react-native-reanimated';

interface SwitchProps {
    value?: boolean
}

const SWITCH_WIDTH = 35
const THUMB_SIZE = 20


function Switch(props: SwitchProps) {
    const sharedValue = useSharedValue(0);

    const style = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(sharedValue.value, { duration: 200, }) }],
        };
    });
    const lineStyle = useAnimatedStyle(() => ({ backgroundColor: sharedValue.value === 0 ? "#DDD" : colors.PURPLE, }))

    useEffect(() => {
        sharedValue.value = props.value ? SWITCH_WIDTH : 0
    }, [props.value])

    const onPress = () => {
        sharedValue.value = sharedValue.value !== 0 ? 0 : SWITCH_WIDTH - THUMB_SIZE
    }

    return (
        <TouchableOpacity activeOpacity={1} style={{ justifyContent: "center", width: SWITCH_WIDTH, }} onPress={onPress} >
            <Animated.View style={[{ width: "100%", backgroundColor: colors.PURPLE, height: 2, position: "absolute" }, lineStyle]} />

            <Animated.View style={[
                {

                    width: THUMB_SIZE, height: THUMB_SIZE,
                    borderRadius: THUMB_SIZE / 2, backgroundColor: colors.PURPLE,
                }, style]} />

        </TouchableOpacity>
    );
}



export default Switch;
