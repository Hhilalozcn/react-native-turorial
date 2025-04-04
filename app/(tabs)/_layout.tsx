import React from "react";
import { Stack, Tabs } from "expo-router";

const Tabslayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true,
          headerTitle: "Home",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerShown: true,
          headerTitle: "Create",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          headerTitle: "Profil",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Tabs>
  );
};

export default Tabslayout;
