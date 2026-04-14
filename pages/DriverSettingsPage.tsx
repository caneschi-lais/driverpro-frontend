import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SettingsMenuItem } from '../components/SettingsMenuItem';
import { Avatar } from '../components/Avatar';

interface Props {
    navigate: (screen: string) => void;
}

export default function DriverSettingsPage({ navigate }: Props) {
    return (
        <SafeAreaView className="flex-1 bg-background">

            {/* Fundo Azul Superior */}
            <View className="bg-primary pt-12 pb-16 px-4 rounded-b-[40px] shadow-sm relative">
                <View className="flex-row items-center justify-between">
                    <TouchableOpacity onPress={() => navigate('DriverDashboard')} className="p-2">
                        <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <Text className="text-white text-xl font-bold">Perfil</Text>
                    <View style={{ width: 40 }} /> {/* Espaçador para centralizar o texto */}
                </View>
            </View>

            {/* Foto de Perfil */}
            <View className="items-center -mt-12 mb-6">
                <View className="relative">
                    <Avatar size="xl" />
                    <TouchableOpacity className="absolute bottom-0 right-0 bg-accent w-8 h-8 rounded-full items-center justify-center border-2 border-background-paper shadow-sm">
                        <Ionicons name="camera" size={16} color="#1A237E" />
                    </TouchableOpacity>
                </View>
                <Text className="text-2xl font-bold text-primary mt-3">João Motorista</Text>
                <View className="bg-status-success/20 px-3 py-1 rounded-full mt-1 flex-row items-center">
                    <Ionicons name="checkmark-circle" size={14} color="#15803D" />
                    <Text className="text-green-700 text-xs font-bold ml-1">Conta Verificada</Text>
                </View>
            </View>

            {/* Menu de Configurações */}
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>

                <Text className="text-surface-muted font-bold mb-3 uppercase tracking-wider text-xs">Conta e Veículo</Text>

                <SettingsMenuItem
                    iconName="person-outline"
                    title="Meus Dados"
                    subtitle="joao.motorista@email.com"
                    onPress={() => navigate('EditProfile')}
                />

                <SettingsMenuItem
                    iconName="car-sport-outline"
                    title="Dados do Veículo"
                    subtitle="Onix - ABC1D23"
                    onPress={() => navigate('CarRegistration')}
                />

                <SettingsMenuItem
                    iconName="cash-outline"
                    title="Preço por KM"
                    subtitle="Atualmente: R$ 3,50/km"
                    onPress={() => navigate('EditPrice')}
                />

                <Text className="text-surface-muted font-bold mb-3 mt-4 uppercase tracking-wider text-xs">Preferências</Text>

                <SettingsMenuItem
                    iconName="calendar-outline"
                    title="Períodos Indisponíveis"
                    subtitle="Bloqueie datas na sua agenda"
                    onPress={() => navigate('DriverAgenda')}
                />

                <SettingsMenuItem
                    iconName="notifications-outline"
                    title="Notificações"
                    subtitle="Sons e vibração"
                    onPress={() => console.log('Configurar Notificações')}
                />

                <SettingsMenuItem
                    iconName="information-circle-outline"
                    title="Sobre o Sistema"
                    subtitle="Versão 1.0.0"
                    onPress={() => console.log('Sobre o App')}
                />

                <View className="mt-6">
                    <SettingsMenuItem
                        iconName="log-out-outline"
                        title="Sair da Conta"
                        isDestructive={true}
                        onPress={() => navigate('Login')}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}