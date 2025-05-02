import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="index" options={{ title: 'Tela inicial' }} />
      <Stack.Screen name="sobre" options={{ title: 'Sobre' }} /> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'flip' }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
