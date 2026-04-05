import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DriverHeaderProps {
    title: string;
    subtitle?: string;
    showBackButton?: boolean;
    onBackPress?: () => void;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    onRightPress?: () => void;
}

export function DriverHeader({ title, subtitle, showBackButton, onBackPress, rightIcon, onRightPress }: DriverHeaderProps) {
    return (
        <View className="flex-row justify-between items-center bg-primary pt-12 pb-6 px-6 rounded-b-3xl shadow-sm z-10">

            <View className="flex-row items-center">
                {showBackButton && (
                    <TouchableOpacity onPress={onBackPress} className="mr-3 p-1">
                        <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                )}
                <View>
                    {subtitle && <Text className="text-white text-sm opacity-90">{subtitle}</Text>}
                    <Text className="text-white text-2xl font-bold">{title}</Text>
                </View>
            </View>

            {rightIcon && (
                <TouchableOpacity
                    className="bg-primary-light p-2 rounded-full"
                    onPress={onRightPress}
                >
                    <Ionicons name={rightIcon} size={24} color="#FDD835" />
                </TouchableOpacity>
            )}

        </View>
    );
}