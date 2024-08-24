import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
  return (
    <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' /> 
    </Stack>
  );
}
