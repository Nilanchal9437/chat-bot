import { useRouter } from 'expo-router';
import * as React from "react";
import { Image, Linking, StyleSheet, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Surface,
  Text,
  useTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={["top", "bottom"]}>
      <Surface style={[styles.container, { backgroundColor: "#fff", flex: 1 }]} elevation={0}>
        <Text style={styles.logoText}>AutoRespond</Text>
        <Text style={styles.title}>Welcome to AutoRespond</Text>
        <Text style={styles.subtitle}>
          Automate your responses on WhatsApp & Instagram while you&apos;re away.
        </Text>
        <Card style={styles.imageCard} elevation={0}>
          <Image
            source={require("@/assets/images/home/banner.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </Card>
        <View style={styles.platformTitle}>
          <Text style={styles.featuresTitle}>Two Platforms</Text>
        </View>
        <View style={styles.platformsRow}>
          <Card style={styles.platformCard} elevation={0}>
            <View style={styles.platformContent}>
              <Avatar.Icon
                size={36}
                icon="whatsapp"
                color="#25D366"
                style={{ backgroundColor: "#E9FDF2" }}
              />
              <Text style={styles.platformText}>WhatsApp</Text>
            </View>
          </Card>
          <Card
            style={[styles.platformCard, { borderColor: "#E5D4FA" }]}
            elevation={0}
          >
            <View style={styles.platformContent}>
              <Avatar.Icon
                size={36}
                icon="instagram"
                color="#C13584"
                style={{ backgroundColor: "#F7E9F9" }}
              />
              <Text style={[styles.platformText, { color: "#A259C6" }]}> 
                Instagram
              </Text>
            </View>
          </Card>
        </View>
        <View style={styles.featuresSection}>
          <Text style={styles.featuresTitle}>Key Features</Text>
          <View style={styles.featureRow}>
            <Avatar.Icon
              size={32}
              icon="clock-outline"
              color={theme.colors.primary}
              style={styles.featureIcon}
            />
            <View>
              <Text style={styles.featureTitle}>Auto Reply</Text>
              <Text style={styles.featureDesc}>
                Respond to messages automatically
              </Text>
            </View>
          </View>
        </View>
        <Button
          mode="contained"
          style={styles.getStartedBtn}
          contentStyle={{ height: 48 }}
          labelStyle={{ fontSize: 18 }}
          onPress={() => router.push('/login')}
        >
          Get Started
        </Button>
        <Text style={styles.termsText}>
          By continuing, you agree to our{" "}
          <Text style={styles.link} onPress={() => Linking.openURL("#")}> 
            Terms of Service
          </Text>{" "}
          &{" "}
          <Text style={styles.link} onPress={() => Linking.openURL("#")}> 
            Privacy Policy
          </Text>
        </Text>
      </Surface>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 32,
    alignItems: "center",
  },
  logoText: {
    color: "#5D5FEF",
    fontWeight: "bold",
    fontSize: 22,
    alignSelf: "flex-start",
    marginBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B6B6B",
    marginTop: 8,
    marginBottom: 18,
    alignSelf: "flex-start",
  },
  imageCard: {
    width: "100%",
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 200,
    // borderRadius: 18,
  },
  platformsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  platformCard: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D6F5E6",
    backgroundColor: "#F7FEFB",
    paddingVertical: 12,
    alignItems: "center",
  },
  platformContent: {
    alignItems: "center",
  },
  platformText: {
    marginTop: 8,
    fontWeight: "600",
    fontSize: 16,
    color: "#25D366",
  },
  featuresSection: {
    width: "100%",
    marginBottom: 5,
  },
  platformTitle: {
    width: "100%",
    marginBottom: 10,
    marginTop: "auto"
  },
  featuresTitle: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
    color: "#222",
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  featureIcon: {
    backgroundColor: "#DBEAFE",
    marginRight: 12,
  },
  featureTitle: {
    fontWeight: "600",
    fontSize: 16,
    color: "#222",
  },
  featureDesc: {
    color: "#6B6B6B",
    fontSize: 14,
  },
  getStartedBtn: {
    width: "100%",
    borderRadius: 10,
    marginTop: 8,
    backgroundColor: "#5D5FEF",
  },
  termsText: {
    fontSize: 12,
    color: "#6B6B6B",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  link: {
    color: "#5D5FEF",
    textDecorationLine: "underline",
  },
});
