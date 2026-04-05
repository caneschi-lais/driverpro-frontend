import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import RegisterPage from './pages/RegisterPage';
import DriverDashboardPage from './pages/DriverDashboardPage';
import BookingRequestsPage from './pages/BookingRequestsPage';
import CalculatorPage from './pages/CalculatorPage';
import DriverAgendaPage from './pages/DriverAgendaPage';
import CarRegistrationPage from './pages/CarRegistrationPage';
import DriverHistoryPage from './pages/DriverHistoryPage';
import DriverSettingsPage from './pages/DriverSettingsPage';
import PassengerDashboardPage from './pages/PassengerDashboardPage';
import NewBookingPage from './pages/NewBookingPage';
import PassengerAgendaPage from './pages/PassengerAgendaPage';
import PassengerHistoryPage from './pages/PassengerHistoryPage';

export default function App() {
  //const [currentScreen, setCurrentScreen] = useState<string>('Login');
  const [currentScreen, setCurrentScreen] = useState<string>('PassengerDashboard');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      {currentScreen === 'Login' && <LoginPage navigate={setCurrentScreen} />}
      {currentScreen === 'Register' && <RegisterPage navigate={setCurrentScreen} />}
      {currentScreen === 'Forgot' && <ForgotPasswordPage navigate={setCurrentScreen} />}
      {currentScreen === 'DriverDashboard' && <DriverDashboardPage navigate={setCurrentScreen} />}
      {currentScreen === 'BookingRequests' && <BookingRequestsPage navigate={setCurrentScreen} />}
      {currentScreen === 'Calculator' && <CalculatorPage navigate={setCurrentScreen} />}
      {currentScreen === 'DriverAgenda' && <DriverAgendaPage navigate={setCurrentScreen} />}
      {currentScreen === 'CarRegistration' && <CarRegistrationPage navigate={setCurrentScreen} />}
      {currentScreen === 'DriverHistory' && <DriverHistoryPage navigate={setCurrentScreen} />}
      {currentScreen === 'DriverSettings' && <DriverSettingsPage navigate={setCurrentScreen} />}
      {currentScreen === 'PassengerDashboard' && <PassengerDashboardPage navigate={setCurrentScreen} />}
      {currentScreen === 'NewBooking' && <NewBookingPage navigate={setCurrentScreen} />}
      {currentScreen === 'PassengerAgenda' && <PassengerAgendaPage navigate={setCurrentScreen} />}
      {currentScreen === 'PassengerHistory' && <PassengerHistoryPage navigate={setCurrentScreen} />}
    </SafeAreaView>
  );
}