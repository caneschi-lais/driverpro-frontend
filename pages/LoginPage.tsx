import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { CustomInput } from '../components/CustomInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    navigate: (screen: 'Login' | 'Register' | 'Forgot') => void;
}

export default function LoginPage({ navigate }: Props) {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 justify-center items-center px-6">

                <View className="items-center mb-10 mt-10">
                    <Ionicons name="car-sport" size={80} color="#1A237E" />
                    <Text className="text-3xl font-bold text-primary mt-2">DriverPro</Text>
                </View>

                <CustomInput
                    iconName="mail-outline"
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <CustomInput
                    iconName="lock-closed-outline"
                    placeholder="Senha"
                    secureTextEntry
                />

                <TouchableOpacity
                    className="w-full items-end mb-6"
                    onPress={() => navigate('Forgot')}
                >
                    <Text className="text-primary font-medium">Esqueceu a senha?</Text>
                </TouchableOpacity>

                <PrimaryButton title="Entrar" onPress={() => navigate('DriverDashboard')} />

                <TouchableOpacity
                    className="mt-auto mb-10"
                    onPress={() => navigate('Register')}
                >
                    <Text className="text-gray-600">
                        Não tem uma conta? <Text className="text-primary font-bold">Cadastre-se</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}