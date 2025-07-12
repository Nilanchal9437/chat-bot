import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import * as React from "react";
import {
    ScrollView,
    StyleSheet,
    Switch,
    TouchableOpacity,
    View,
} from "react-native";
import { Avatar, Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const [waConnected, setWaConnected] = React.useState(true);
  const [igConnected, setIgConnected] = React.useState(false);
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff" }}
      edges={["top", "bottom"]}
    >
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Settings</Text>
        <Avatar.Image
          size={36}
          source={require("@/assets/images/profile.png")}
          style={styles.headerAvatar}
        />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 90 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Connected Accounts */}
        <Text style={styles.sectionTitle}>Connected Accounts</Text>
        <View style={styles.accountCard}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.accountIconWrapWA}>
              <MaterialCommunityIcons
                name="whatsapp"
                size={22}
                color="#25D366"
              />
            </View>
            <Text style={styles.accountName}>WhatsApp</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.accountStatusConnected}>Connected</Text>
            <Switch
              value={waConnected}
              onValueChange={setWaConnected}
              trackColor={{ false: "#E5E7EB", true: "#22C55E" }}
              thumbColor={waConnected ? "#fff" : "#fff"}
            />
          </View>
        </View>
        <View style={styles.accountCard}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.accountIconWrapIG}>
              <MaterialCommunityIcons
                name="instagram"
                size={22}
                color="#C13584"
              />
            </View>
            <Text style={styles.accountName}>Instagram</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.accountStatusNotConnected}>Not connected</Text>
            <Switch
              value={igConnected}
              onValueChange={setIgConnected}
              trackColor={{ false: "#E5E7EB", true: "#C13584" }}
              thumbColor={igConnected ? "#fff" : "#fff"}
            />
          </View>
        </View>
        {/* Subscription */}
        <Text style={styles.sectionTitle}>Subscription</Text>
        <LinearGradient
          colors={["#6366F1", "#9333EA"]}
          start={{ x: 0, y: 0.5 }}        // left center
          end={{ x: 1, y: 0.5 }}     
          style={styles.planCard}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.planCardTitle}>Current Plan</Text>
            <MaterialCommunityIcons
              name="crown"
              size={22}
              color="#FFD600"
              style={{ marginRight: 2 }}
            />
          </View>
          <Text style={styles.planName}>Pro Plan</Text>
          <Text style={styles.planPrice}>$9.99/month</Text>
          <View style={styles.nextBillingBox}>
            <Text style={styles.nextBillingText}>
              Next billing: Jan 15, 2024
            </Text>
          </View>
        </LinearGradient>
        <View style={styles.featuresCard}>
          <Text style={styles.featuresTitle}>Plan Features</Text>
          <View style={styles.featureRow}>
            <MaterialCommunityIcons name="check" size={18} color="#22C55E" />
            <Text style={styles.featureText}>Unlimited auto responses</Text>
          </View>
          <View style={styles.featureRow}>
            <MaterialCommunityIcons name="check" size={18} color="#22C55E" />
            <Text style={styles.featureText}>Custom message templates</Text>
          </View>
          <View style={styles.featureRow}>
            <MaterialCommunityIcons name="check" size={18} color="#22C55E" />
            <Text style={styles.featureText}>Advanced scheduling</Text>
          </View>
          <View style={styles.featureRow}>
            <MaterialCommunityIcons name="check" size={18} color="#22C55E" />
            <Text style={styles.featureText}>Priority support</Text>
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Button
            mode="contained"
            style={styles.loginBtn}
            contentStyle={{ height: 48 }}
            labelStyle={{ fontSize: 18 }}
            onPress={() => {}}
          >
            Manage Subscription
          </Button>
        </View>
      </ScrollView>
      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabBarItem}
          onPress={() => router.replace("/connected-platform")}
        >
          <MaterialCommunityIcons
            name="home"
            size={26}
            color="#A1A1AA"
          />
          <Text style={styles.tabBarLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabBarItem}
          onPress={() => router.replace("/chat")}
        >
          <MaterialCommunityIcons
            name="message-text"
            size={26}
            color="#A1A1AA"
          />
          <Text style={styles.tabBarLabel}>Chats</Text>
        </TouchableOpacity>
        <View style={[styles.tabBarItem, styles.tabBarItemActive]}>
          <MaterialCommunityIcons
            name="cog"
            size={26}
            color="#5D5FEF"
          />
          <Text style={[styles.tabBarLabel, styles.tabBarLabelActive]}>
            Settings
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: "100%",
    borderRadius: 10,
    marginTop: 24,
    backgroundColor: "#5D5FEF",
    shadowColor: "#5D5FEF",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#18181B",
  },
  headerAvatar: {
    backgroundColor: "#6366F1",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#18181B",
    marginHorizontal: 20,
    marginTop: 18,
    marginBottom: 8,
  },
  accountCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FAFAFA",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginHorizontal: 20,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  accountIconWrapWA: {
    backgroundColor: "#E9FDF2",
    borderRadius: 8,
    padding: 5,
    marginRight: 10,
  },
  accountIconWrapIG: {
    backgroundColor: "#F7E9F9",
    borderRadius: 8,
    padding: 5,
    marginRight: 10,
  },
  accountName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#18181B",
  },
  accountStatusConnected: {
    color: "#22C55E",
    fontWeight: "bold",
    fontSize: 13,
    marginRight: 8,
  },
  accountStatusNotConnected: {
    color: "#A1A1AA",
    fontWeight: "bold",
    fontSize: 13,
    marginRight: 8,
  },
  planCard: {
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 10,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    backgroundColor: "#5D5FEF",
  },
  planCardTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 8,
  },
  planName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 2,
    marginBottom: 2,
  },
  planPrice: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 10,
  },
  nextBillingBox: {
    backgroundColor: "#FFFFFF33",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    alignSelf: "flex-start",
    marginTop: 2,
    width: "100%"
  },
  nextBillingText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },
  featuresCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginHorizontal: 20,
    marginTop: 16,
    padding: 16,
  },
  featuresTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#18181B",
    marginBottom: 10,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },
  featureText: {
    fontSize: 15,
    color: "#18181B",
    marginLeft: 8,
  },
  tabBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    height: 64,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    paddingBottom: 10,
  },
  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 6,
  },
  tabBarItemActive: {
    // No extra background, just icon color
  },
  tabBarLabel: {
    fontSize: 12,
    color: "#A1A1AA",
    marginTop: 2,
    fontWeight: "bold",
  },
  tabBarLabelActive: {
    color: "#5D5FEF",
  },
});
