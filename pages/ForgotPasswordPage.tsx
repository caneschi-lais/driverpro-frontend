import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { CustomInput } from '../components/CustomInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    navigate: (screen: 'Login' | 'Register' | 'Forgot') => void;
}

export default function ForgotPasswordPage({ navigate }: Props) {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 px-6 justify-center">

                <Text className="text-3xl font-bold text-primary mb-2 text-center mt-10">Recuperar Senha</Text>
                <Text className="text-gray-600 text-center mb-8 px-4">
                    Digite seu endereço de e-mail para receber um link de redefinição de senha.
                </Text>

                <CustomInput
                    iconName="mail-outline"
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <PrimaryButton title="Enviar Link" onPress={() => console.log('Recuperar')} />

                <TouchableOpacity
                    className="w-full items-center mt-6 flex-row justify-center"
                    onPress={() => navigate('Login')}
                >
                    <Ionicons name="arrow-back" size={16} color="#1A237E" />
                    <Text className="text-primary font-bold ml-2">Voltar para o Login</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}