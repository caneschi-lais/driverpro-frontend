import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { CustomInput } from '../components/CustomInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';
import { SegmentedControl } from '../components/SegmentedControl';

interface Props {
    navigate: (screen: 'Login' | 'Register' | 'Forgot') => void;
}

export default function RegisterPage({ navigate }: Props) {
    const [profileType, setProfileType] = useState<'driver' | 'passenger'>('passenger');

    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView contentContainerStyle={{ padding: 24, flexGrow: 1, justifyContent: 'center' }}>

                <Text className="text-3xl font-bold text-primary mb-8 text-center mt-10">Criar Conta</Text>

                <View className="items-center mb-6">
                    <TouchableOpacity className="w-24 h-24 bg-gray-200 rounded-full items-center justify-center border-2 border-dashed border-gray-400">
                        <Ionicons name="camera-outline" size={32} color="#9CA3AF" />
                    </TouchableOpacity>
                </View>

                <CustomInput iconName="person-outline" placeholder="Nome Completo" />
                <CustomInput iconName="mail-outline" placeholder="Email" keyboardType="email-address" />
                <CustomInput iconName="lock-closed-outline" placeholder="Senha" secureTextEntry />
                <CustomInput iconName="call-outline" placeholder="Telefone" keyboardType="phone-pad" />

                <View className="mt-4 mb-8">
                    <Text className="text-primary font-medium mb-2">Eu sou um:</Text>
                    <View className="mt-4 mb-8">
                        <Text className="text-primary font-medium mb-2">Eu sou um:</Text>
                        <SegmentedControl
                            options={['Motorista', 'Passageiro']}
                            selectedValue={profileType === 'driver' ? 'Motorista' : 'Passageiro'}
                            onValueChange={(val) => setProfileType(val === 'Motorista' ? 'driver' : 'passenger')}
                        />
                    </View>
                </View>

                {profileType === 'driver' && (
                    <View className="mb-6">
                        <CustomInput iconName="cash-outline" placeholder="Preço cobrado por km (R$)" keyboardType="numeric" />
                    </View>
                )}

                <PrimaryButton title="Cadastrar" onPress={() => navigate('Login')} />

                <TouchableOpacity
                    className="mt-8 mb-10 items-center"
                    onPress={() => navigate('Login')}
                >
                    <Text className="text-gray-600">
                        Já tem uma conta? <Text className="text-primary font-bold">Faça Login</Text>
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}