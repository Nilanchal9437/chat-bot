import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const chats = Array.from({ length: 22 }).map((_, i) =>
  i % 2 === 0
    ? {
        id: i + 1,
        name: "John Smith",
        message: "Thanks for the quick response!",
        time: `${2 + i}m ago`,
        platform: "WhatsApp",
        avatar: require("@/assets/images/profile.png"),
        icon: "whatsapp",
        iconColor: "#25D366",
      }
    : {
        id: i + 1,
        name: "Sarah Wilson",
        message: "Great service! 👍",
        time: `${5 + i}m ago`,
        platform: "Instagram",
        avatar: require("@/assets/images/profile.png"),
        icon: "instagram",
        iconColor: "#C13584",
      }
);

function TabIcon({
  name,
  color,
  focused,
}: {
  name: string;
  color: string;
  focused: boolean;
}) {
  if (name === "Home")
    return (
      <MaterialCommunityIcons name="home" size={26} color="#5D5FEF" />
    );
  if (name === "Chats")
    return (
      <MaterialCommunityIcons
        name="message-text"
        size={26}
        color="#A1A1AA"
      />
    );
  if (name === "Settings")
    return (
      <MaterialCommunityIcons name="cog" size={26} color="#A1A1AA" />
    );
  return null;
}

export default function ConnectedPlatformScreen() {
  const [tab, setTab] = React.useState("Home");
  const screenHeight = Dimensions.get("window").height;
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff" }}
      edges={["top", "bottom"]}
    >
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTitle}>Auto DM</Text>
          <Text style={styles.headerSubtitle}>Responder</Text>
        </View>
        <Image
          source={require("@/assets/images/profile.png")}
          style={styles.headerIcon}
        />
      </View>
      <View style={styles.divider} />
      {/* Connected Platforms */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>Connected Platforms</Text>
        <View style={styles.platformsRow}>
          <View
            style={[
              styles.platformCard,
              { backgroundColor: "#E9FDF2", borderColor: "#B6F4D3" },
            ]}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar.Icon
                icon="whatsapp"
                size={36}
                color="#25D366"
                style={{ backgroundColor: "#fff" }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.platformName}>WhatsApp</Text>
                <Text style={styles.platformStatusWA}>Connected</Text>
              </View>
              <View style={styles.platformDotWA} />
            </View>
          </View>
          <View
            style={[
              styles.platformCard,
              { backgroundColor: "#F7E9F9", borderColor: "#E5D4FA" },
            ]}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar.Icon
                icon="instagram"
                size={36}
                color="#C13584"
                style={{ backgroundColor: "#fff" }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.platformName}>Instagram</Text>
                <Text style={styles.platformStatusIG}>Connected</Text>
              </View>
              <View style={styles.platformDotIG} />
            </View>
          </View>
        </View>
      </View>
      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statsCardBlue}>
          <Text style={styles.statsNumberBlue}>247</Text>
          <Text style={styles.statsLabel}>Auto Replies</Text>
        </View>
        <View style={styles.statsCardOrange}>
          <Text style={styles.statsNumberOrange}>18</Text>
          <Text style={styles.statsLabel}>Active Chats</Text>
        </View>
      </View>
      {/* Recent Chats */}
      <View style={styles.sectionBox}>
        <View style={styles.recentHeaderRow}>
          <Text style={styles.sectionTitle}>Recent Chats</Text>
          <TouchableOpacity onPress={() => { router.push("/chat")}}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.chatCard}>
              <Avatar.Image size={40} source={item.avatar} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.chatName}>{item.name}</Text>
                  <Text style={styles.chatTime}>{item.time}</Text>
                </View>
                <Text style={styles.chatMsg}>{item.message}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 2,
                  }}
                >
                  <Avatar.Icon
                    icon={item.icon}
                    size={18}
                    color={item.iconColor}
                    style={{ backgroundColor: "#fff" }}
                  />
                  <Text style={styles.chatPlatform}>{item.platform}</Text>
                </View>
              </View>
            </View>
          )}
          style={{ maxHeight: screenHeight * 0.5 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/* Bottom Tabs */}
      <View style={styles.tabBar}>
        {["Home", "Chats", "Settings"].map((tabName) => (
          <TouchableOpacity
            key={tabName}
            style={styles.tabItem}
            onPress={() => {
              setTab(tabName);
              if (tabName === "Chats") {
                router.push("/chat");
              } else if (tabName === "Settings") {
                router.push("/settings");
              }
            }}
          >
            <TabIcon name={tabName} color="#6B6B6B" focused={tab === tabName} />
            <Text
              style={[
                styles.tabLabel,
                tab === tabName && { color: "#5D5FEF", fontWeight: "bold" },
              ]}
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#222",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6B6B6B",
    marginTop: -2,
    marginBottom: 2,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EEF0FF",
  },
  divider: {
    height: 1,
    backgroundColor: "#F3F4F6",
    marginBottom: 8,
  },
  sectionBox: {
    marginHorizontal: 20,
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#222",
    marginBottom: 8,
  },
  platformsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  platformCard: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    marginHorizontal: 4,
    padding: 12,
    minWidth: 140,
  },
  platformName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
  },
  platformStatusWA: {
    color: "#22C55E",
    fontWeight: "bold",
    fontSize: 14,
  },
  platformStatusIG: {
    color: "#A259C6",
    fontWeight: "bold",
    fontSize: 14,
  },
  platformDotWA: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#22C55E",
    marginLeft: "auto",
    marginRight: 2,
    marginTop: 2,
  },
  platformDotIG: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#A259C6",
    marginLeft: "auto",
    marginRight: 2,
    marginTop: 2,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 8,
  },
  statsCardBlue: {
    flex: 1,
    backgroundColor: "#F1F5FF",
    borderRadius: 14,
    alignItems: "center",
    padding: 18,
    marginRight: 8,
  },
  statsCardOrange: {
    flex: 1,
    backgroundColor: "#FFF7ED",
    borderRadius: 14,
    alignItems: "center",
    padding: 18,
    marginLeft: 8,
  },
  statsNumberBlue: {
    color: "#2563EB",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 2,
  },
  statsNumberOrange: {
    color: "#F59E42",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 2,
  },
  statsLabel: {
    color: "#6B6B6B",
    fontSize: 14,
    fontWeight: "600",
  },
  recentHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  viewAll: {
    color: "#5D5FEF",
    fontWeight: "bold",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  chatCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F3F4F6",
    padding: 12,
    marginBottom: 10,
  },
  chatName: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#222",
    marginRight: 8,
  },
  chatTime: {
    color: "#6B6B6B",
    fontSize: 12,
    marginLeft: "auto",
  },
  chatMsg: {
    color: "#222",
    fontSize: 14,
    marginTop: 2,
  },
  chatPlatform: {
    color: "#6B6B6B",
    fontSize: 13,
    marginLeft: 4,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingBottom: 8,
    marginTop: "auto",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  tabLabel: {
    fontSize: 13,
    color: "#6B6B6B",
    marginTop: -4,
  },
});
