import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as React from "react";
import { Dimensions, FlatList, TextInput as RNTextInput, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const screenHeight = Dimensions.get("window").height;

const chatData = [
  {
    id: 1,
    name: "John Smith",
    message: "Auto reply sent: Thank you for your message...",
    time: "2 min",
    status: "Auto",
    statusColor: "#22C55E",
    dotColor: "#22C55E",
    phone: "+1 234 567 8901",
    avatar: require("@/assets/images/profile.png"),
  },
  {
    id: 2,
    name: "Sarah Johnson",
    message: "Hi, I need information about your services",
    time: "5 min",
    status: "Pending",
    statusColor: "#F59E42",
    dotColor: "#F59E42",
    phone: "+1 234 567 8902",
    avatar: require("@/assets/images/profile.png"),
  },
  {
    id: 3,
    name: "Mike Wilson",
    message: "Auto reply sent: We'll get back to you soon",
    time: "12 min",
    status: "Auto",
    statusColor: "#22C55E",
    dotColor: "#22C55E",
    phone: "+1 234 567 8903",
    avatar: require("@/assets/images/profile.png"),
  },
  {
    id: 4,
    name: "Emma Davis",
    message: "Can you help me with pricing?",
    time: "18 min",
    status: "Replied",
    statusColor: "#64748B",
    dotColor: "#CBD5E1",
    phone: "+1 234 567 8904",
    avatar: require("@/assets/images/profile.png"),
  },
  {
    id: 5,
    name: "Alex Brown",
    message: "Auto reply sent: Thanks for contacting us!",
    time: "25 min",
    status: "Auto",
    statusColor: "#22C55E",
    dotColor: "#22C55E",
    phone: "+1 234 567 8905",
    avatar: require("@/assets/images/profile.png"),
  },
  {
    id: 6,
    name: "Lisa Garcia",
    message: "Looking for bulk pricing options",
    time: "1h",
    status: "Pending",
    statusColor: "#F59E42",
    dotColor: "#F59E42",
    phone: "+1 234 567 8906",
    avatar: require("@/assets/images/profile.png"),
  },
  {
    id: 7,
    name: "David Miller",
    message: "Auto reply sent: We appreciate your interest",
    time: "2h",
    status: "Auto",
    statusColor: "#22C55E",
    dotColor: "#22C55E",
    phone: "+1 234 567 8907",
    avatar: require("@/assets/images/profile.png"),
  },
  // Add more for demo
];

const instagramChatData = [
  {
    id: 101,
    name: "Emily Clark",
    message: "Hi! Can you tell me more about your services?",
    time: "1 min",
    status: "Pending",
    statusColor: "#F59E42",
    dotColor: "#F59E42",
    phone: "@emilyclark",
    avatar: require("@/assets/images/profile.png"),
  },
  {
    id: 102,
    name: "Michael Lee",
    message: "Auto reply sent: Thank you for reaching out!",
    time: "3 min",
    status: "Auto",
    statusColor: "#22C55E",
    dotColor: "#22C55E",
    phone: "@michaellee",
    avatar: require("@/assets/images/profile.png"),
  },
  {
    id: 103,
    name: "Sophia Turner",
    message: "Can I get a quote for my business?",
    time: "7 min",
    status: "Replied",
    statusColor: "#64748B",
    dotColor: "#CBD5E1",
    phone: "@sophiaturner",
    avatar: require("@/assets/images/profile.png"),
  },
  {
    id: 104,
    name: "James Kim",
    message: "Auto reply sent: We'll get back to you soon.",
    time: "15 min",
    status: "Auto",
    statusColor: "#22C55E",
    dotColor: "#22C55E",
    phone: "@jameskim",
    avatar: require("@/assets/images/profile.png"),
  },
  {
    id: 105,
    name: "Olivia Brown",
    message: "Looking for partnership opportunities.",
    time: "22 min",
    status: "Pending",
    statusColor: "#F59E42",
    dotColor: "#F59E42",
    phone: "@oliviabrown",
    avatar: require("@/assets/images/profile.png"),
  },
  {
    id: 106,
    name: "William Scott",
    message: "Auto reply sent: Thanks for your message!",
    time: "35 min",
    status: "Auto",
    statusColor: "#22C55E",
    dotColor: "#22C55E",
    phone: "@williamscott",
    avatar: require("@/assets/images/profile.png"),
  },
  {
    id: 107,
    name: "Ava Martinez",
    message: "Can you help me with pricing?",
    time: "1h",
    status: "Replied",
    statusColor: "#64748B",
    dotColor: "#CBD5E1",
    phone: "@avamartinez",
    avatar: require("@/assets/images/profile.png"),
  },
];

export default function ChatScreen() {
  const [tab, setTab] = React.useState("WhatsApp");
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  
  const filteredChats = (tab === "WhatsApp" ? chatData : instagramChatData).filter(
    c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={["top", "bottom"]}>
      {/* Header with gradient */} 
        <View style={styles.headerBox}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar.Icon icon="robot" size={36} color="#fff" style={{ backgroundColor: "#5D5FEF", marginRight: 12 }} />
            <View>
              <Text style={styles.headerTitle}>Auto DM</Text>
              <Text style={styles.headerSubtitle}>Responder</Text>
            </View>
          </View>
          <View style={styles.headerIconsRow}>
            <TouchableOpacity style={styles.headerIconBtn}>
              <MaterialCommunityIcons name="bell-outline" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconBtn} onPress={() => { router.push('/settings')}}>
              <MaterialCommunityIcons name="cog-outline" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View> 
      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statsCol}>
          <Text style={styles.statsNumber}>127</Text>
          <Text style={styles.statsLabel}>Total Chats</Text>
        </View>
        <View style={styles.statsCol}>
          <Text style={[styles.statsNumber, { color: '#22C55E' }]}>23</Text>
          <Text style={styles.statsLabel}>Active</Text>
        </View>
        <View style={styles.statsCol}>
          <Text style={[styles.statsNumber, { color: '#2563EB' }]}>89</Text>
          <Text style={styles.statsLabel}>Auto Replies</Text>
        </View>
      </View>
      {/* Tabs */}
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[styles.tabBtn, tab === "WhatsApp" && styles.tabBtnActive]}
          onPress={() => setTab("WhatsApp")}
          activeOpacity={0.8}
        >
          <View style={[styles.tabIconWrap, tab === "WhatsApp" ? styles.tabIconWrapWA : styles.tabIconWrapInsta]}>
            <MaterialCommunityIcons name="whatsapp" size={20} color="#25D366" />
          </View>
          <Text style={[styles.tabLabel, tab === "WhatsApp" && styles.tabLabelActive]}>WhatsApp</Text>
          <View style={[styles.tabCount, tab === "WhatsApp" ? styles.tabCountWA : styles.tabCountInactive]}>
            <Text style={[styles.tabCountText, tab === "WhatsApp" && styles.tabCountTextActive]}>74</Text>
          </View>
          {tab === "WhatsApp" && <View style={styles.tabUnderlineWA} />}
        </TouchableOpacity>
        {/* Divider */}
        <View style={styles.tabDivider} />
        <TouchableOpacity
          style={[styles.tabBtn, tab === "Instagram" && styles.tabBtnActive]}
          onPress={() => setTab("Instagram")}
          activeOpacity={0.8}
        >
          <View style={[styles.tabIconWrap, tab === "Instagram" ? styles.tabIconWrapInsta : styles.tabIconWrapWA]}>
            <MaterialCommunityIcons name="instagram" size={20} color="#C13584" />
          </View>
          <Text style={[styles.tabLabel, tab === "Instagram" && styles.tabLabelActive]}>Instagram</Text>
          <View style={[styles.tabCount, tab === "Instagram" ? styles.tabCountInsta : styles.tabCountInactive]}>
            <Text style={[styles.tabCountText, tab === "Instagram" && styles.tabCountTextActive]}>53</Text>
          </View>
          {tab === "Instagram" && <View style={styles.tabUnderlineInsta} />}
        </TouchableOpacity>
      </View>
      {/* Search */}
      <View style={styles.searchBox}>
        <MaterialCommunityIcons name="magnify" size={20} color="#9CA3AF" style={{ marginRight: 6 }} />
        <RNTextInput
          style={styles.searchInput}
          placeholder="Search chats..."
          placeholderTextColor="#9CA3AF"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      {/* Chat List */}
      <FlatList
        data={filteredChats}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.chatCard}>
            <Avatar.Image size={52} source={item.avatar} style={styles.avatarImg} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatTime}>{item.time}</Text>
              </View>
              <Text style={styles.chatMsg} numberOfLines={1} ellipsizeMode="tail">{item.message}</Text>
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}>
                <View style={[styles.statusBadge, { backgroundColor: item.statusColor }]}> 
                  <Text style={styles.statusBadgeText}>{item.status}</Text>
                </View>
                <Text style={styles.chatPhone}>{item.phone}</Text>
              </View>
            </View>
            <View style={[styles.dot, { backgroundColor: item.dotColor }]} />
          </View>
        )}
        style={{ flex: 1, marginHorizontal: 20, marginTop: 8, marginBottom: 8, maxHeight: screenHeight * 1 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 12,
    backgroundColor: "#6366F1"
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
    letterSpacing: 0.1,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#E0E7FF',
    marginTop: -2,
    fontWeight: '400',
  },
  headerIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerIconBtn: {
    marginHorizontal: 2,
    padding: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 18,
    marginBottom: 10,
  },
  statsCol: {
    alignItems: 'center',
    flex: 1,
  },
  statsNumber: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#222',
    marginBottom: 2,
  },
  statsLabel: {
    color: '#6B6B6B',
    fontSize: 13,
    fontWeight: '500',
  },
  tabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 4,
    height: 48,
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 0,
    backgroundColor: 'transparent',
    position: 'relative',
    height: 40,
  },
  tabBtnActive: {
    backgroundColor: '#fff',
    shadowColor: '#5D5FEF',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    zIndex: 2,
  },
  tabIconWrap: {
    borderRadius: 8,
    padding: 3,
    marginRight: 6,
  },
  tabIconWrapWA: {
    backgroundColor: '#E9FDF2',
  },
  tabIconWrapInsta: {
    backgroundColor: '#F7E9F9',
  },
  tabLabel: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#6B6B6B',
    marginRight: 4,
  },
  tabLabelActive: {
    color: '#222',
  },
  tabCount: {
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 2,
    marginLeft: 2,
    minWidth: 28,
    alignItems: 'center',
  },
  tabCountWA: {
    backgroundColor: '#22C55E',
  },
  tabCountInsta: {
    backgroundColor: '#C13584',
  },
  tabCountInactive: {
    backgroundColor: '#E5E7EB',
  },
  tabCountText: {
    color: '#6B6B6B',
    fontWeight: 'bold',
    fontSize: 13,
  },
  tabCountTextActive: {
    color: '#fff',
  },
  tabDivider: {
    width: 1,
    height: 28,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 2,
    borderRadius: 1,
  },
  tabUnderlineWA: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 0,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#22C55E',
  },
  tabUnderlineInsta: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 0,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#C13584',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 4,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  searchInput: {
    height: 38,
    fontSize: 15,
    color: '#222',
    backgroundColor: 'transparent',
    borderWidth: 0,
    flex: 1,
  },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    padding: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1,
  },
  avatarImg: {
    backgroundColor: '#F3F4F6',
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
    marginRight: 8,
  },
  chatTime: {
    color: '#6B6B6B',
    fontSize: 12,
    marginLeft: 'auto',
    fontWeight: '500',
  },
  chatMsg: {
    color: '#6B6B6B',
    fontSize: 14,
    marginTop: 2,
  },
  statusBadge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginRight: 6,
    minWidth: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBadgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  chatPhone: {
    color: '#9CA3AF',
    fontSize: 13,
    marginLeft: 2,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginLeft: 10,
    alignSelf: 'center',
  },
}); 