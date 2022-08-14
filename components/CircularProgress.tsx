import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animated, { Easing, EasingNode, interpolate, multiply, useAnimatedProps, useSharedValue, Value, withTiming } from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg';
import { wp } from '../services/helper'


type CircularProgressProps = {
    progress: number
}


const SIZE = wp(70);
const STROKE_WIDTH = 40
const RADIUS = (SIZE - STROKE_WIDTH) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const AnimatedCircle = Animated.createAnimatedComponent(Circle)


const CircularProgress = (props: CircularProgressProps) => {

    const progress = useSharedValue(0)


    useEffect(() => {
        progress.value = withTiming(props.progress, { duration: 1000, easing: Easing.linear })
    }, [props.progress])


    const animatedProps = useAnimatedProps(() => {

        const alpha = interpolate(progress.value, [0, 100], [0, Math.PI * 2])

        const strokeDashOffset = alpha * RADIUS
        return {
            strokeDashoffset: strokeDashOffset
        }

    })





    return (
        <View >
            <Svg  >
                <Circle
                    stroke="#DDD"
                    fill="none"
                    cx={SIZE / 2}
                    cy={SIZE / 2}
                    r={RADIUS}
                    strokeWidth={STROKE_WIDTH}
                />


                <AnimatedCircle
                    stroke="blue"
                    fill="none"
                    cx={SIZE / 2}
                    cy={SIZE / 2}
                    r={RADIUS}
                    strokeWidth={STROKE_WIDTH}
                    strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}

                    animatedProps={animatedProps}
                />
            </Svg>
        </View>
    );
};

export default CircularProgress;


