import { useRouter } from 'expo-router';
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, IconButton, Switch, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ConnectAccountScreen() {
  const [waConnected, setWaConnected] = React.useState(false);
  const [igConnected, setIgConnected] = React.useState(true);
  const [waAuto, setWaAuto] = React.useState(false);
  const [igAuto, setIgAuto] = React.useState(true);
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={["top", "bottom"]}>
      <View style={styles.headerRow}>
        <IconButton icon="arrow-left" size={24} onPress={() => router.back()} style={styles.backIcon} />
        <Text style={styles.headerTitle}>Auto DM Responder</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Connect Your Accounts</Text>
        <Text style={styles.sectionSubtitle}>Link your messaging accounts to enable automatic responses.</Text>
        {/* WhatsApp Card */}
        <Card style={styles.accountCard} elevation={0}>
          <View style={styles.accountRow}>
            <Avatar.Icon icon="whatsapp" size={40} color="#25D366" style={{ backgroundColor: '#E9FDF2' }} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.accountTitle}>WhatsApp Business</Text>
              <Text style={styles.accountDesc}>Connect via WhatsApp Business API</Text>
            </View>
            <View style={styles.statusBadgeBox}>
              <Text style={[styles.statusBadge, { backgroundColor: '#F3F4F6', color: '#6B6B6B' }]}>Not Connected</Text>
            </View>
          </View>
          <Button
            mode="contained"
            style={styles.connectBtn}
            contentStyle={{ height: 44 }}
            labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
            onPress={() => setWaConnected(true)}
            disabled={waConnected}
            color="#22C55E"
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>🔌 Connect WhatsApp</Text>
          </Button>
        </Card>
        {/* Instagram Card */}
        <Card style={styles.accountCard} elevation={0}>
          <View style={styles.accountRow}>
            <Avatar.Icon icon="instagram" size={40} color="#C13584" style={{ backgroundColor: '#F7E9F9' }} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.accountTitle}>Instagram Business</Text>
              <Text style={styles.accountDesc}>Connect via Meta OAuth</Text>
            </View>
            <View style={styles.statusBadgeBox}>
              <Text style={[styles.statusBadge, { backgroundColor: '#D1FADF', color: '#22C55E' }]}>Connected</Text>
            </View>
          </View>
          <View style={styles.igUserRow}>
            <Avatar.Image size={32} source={require("@/assets/images/profile.png")} />
            <Text style={styles.igUserText}>@yourbusiness</Text>
            <Button mode="text" style={styles.disconnectBtn} labelStyle={styles.disconnectLabel} onPress={() => setIgConnected(false)}>
              Disconnect
            </Button>
          </View>
        </Card>
        {/* Auto-Responder Status */}
        <Card style={styles.statusCard} elevation={0}>
          <Text style={styles.statusTitle}>Auto-Responder Status</Text>
          <View style={styles.statusRow}>
            <Avatar.Icon icon="whatsapp" size={28} color="#25D366" style={{ backgroundColor: '#E9FDF2' }} />
            <Text style={styles.statusText}>WhatsApp Auto-Response</Text>
            <Switch value={waAuto} onValueChange={setWaAuto} color="#5D5FEF" />
          </View>
          <View style={styles.statusRow}>
            <Avatar.Icon icon="instagram" size={28} color="#C13584" style={{ backgroundColor: '#F7E9F9' }} />
            <Text style={styles.statusText}>Instagram Auto-Response</Text>
            <Switch value={igAuto} onValueChange={setIgAuto} color="#5D5FEF" />
          </View>
        </Card>
      </View>
      <View style={styles.footerBox}>
        <Button
          mode="contained"
          style={styles.continueBtn}
          contentStyle={{ height: 48 }}
          labelStyle={{ fontSize: 18 }}
          onPress={() => { router.push("/connected-platform")}}
        >
          Continue to Setup
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#fff',
  },
  backIcon: {
    marginLeft: 4,
    marginRight: 0,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222',
    marginRight: 32,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 8,
    marginBottom: 2,
    textAlign: 'left',
  },
  sectionSubtitle: {
    fontSize: 15,
    color: '#6B6B6B',
    textAlign: 'left',
    marginBottom: 18,
  },
  accountCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 16,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  accountTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
    marginBottom: 2,
  },
  accountDesc: {
    fontSize: 14,
    color: '#6B6B6B',
    marginBottom: 2,
  },
  statusBadgeBox: {
    alignItems: 'flex-end',
    minWidth: 90,
  },
  statusBadge: {
    fontWeight: 'bold',
    fontSize: 13,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    overflow: 'hidden',
    textAlign: 'center',
  },
  connectBtn: {
    width: '100%',
    borderRadius: 10,
    marginTop: 8,
    backgroundColor: '#22C55E',
  },
  igUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 2,
  },
  igUserText: {
    marginLeft: 8,
    fontWeight: '600',
    fontSize: 15,
    color: '#222',
    flex: 1,
  },
  disconnectBtn: {
    marginLeft: 8,
    borderRadius: 8,
    paddingHorizontal: 0,
    minWidth: 0,
  },
  disconnectLabel: {
    color: '#6B6B6B',
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  statusCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 16,
  },
  statusTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
    marginBottom: 8,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: '#222',
  },
  footerBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    alignItems: 'center',
  },
  continueBtn: {
    width: '100%',
    borderRadius: 10,
    marginTop: 8,
    backgroundColor: '#5D5FEF',
  },
}); 