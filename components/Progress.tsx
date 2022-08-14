import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    interpolateColor,
} from 'react-native-reanimated';
import React, { useEffect } from 'react';
import { View, } from "react-native"

function Progress({ progress, color = "green" }) {
    const width = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {


        return {
            width: width.value + "%",
            // width: widthPercent,
            backgroundColor: color
        };
    });

    useEffect(() => {
        width.value = withTiming(progress, {
            duration: 500,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        })
    }, [progress])

    return (


        <View style={{ height: 10, marginTop: 20, backgroundColor: "#DDD", width: "100%" }} >
            <Animated.View style={[{ height: "100%", }, animatedStyle]} />
        </View>
    );
}

export default Progress;