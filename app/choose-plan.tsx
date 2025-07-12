import { useRouter } from 'expo-router';
import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Badge, Button, Card, IconButton, RadioButton, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const plans = [
  {
    key: 'wa',
    title: 'WhatsApp Auto DM',
    desc: 'Automate responses for WhatsApp messages',
    price: 10,
    icon: 'whatsapp',
    color: '#25D366',
    bg: '#E9FDF2',
  },
  {
    key: 'ig',
    title: 'Instagram Auto DM',
    desc: 'Automate responses for Instagram DMs',
    price: 10,
    icon: 'instagram',
    color: '#C13584',
    bg: '#F7E9F9',
  },
  {
    key: 'both',
    title: 'WhatsApp + Instagram',
    desc: 'Automate responses for both platforms',
    price: 20,
    icon: null, // will use body.png
    color: '#5D5FEF',
    bg: '#EEF0FF',
    best: true,
  },
];

export default function ChoosePlanScreen() {
  const [selected, setSelected] = React.useState('both');
  const router = useRouter();
  const selectedPlan = plans.find(p => p.key === selected);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={["top", "bottom"]}>
      <View style={styles.headerRow}>
        <IconButton icon="arrow-left" size={24} onPress={() => router.back()} style={styles.backIcon} />
        <Text style={styles.headerTitle}>Choose Your Plan</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Select Your Channels</Text>
        <Text style={styles.sectionSubtitle}>Choose the platforms you want to automate responses for</Text>
        <RadioButton.Group onValueChange={setSelected} value={selected}>
          {plans.map((plan, idx) => (
            <TouchableOpacity
              key={plan.key}
              activeOpacity={0.8}
              onPress={() => setSelected(plan.key)}
              style={{ width: '100%' }}
            >
              <Card
                style={[
                  styles.planCard,
                  selected === plan.key ? styles.planCardSelected : styles.planCardUnselected,
                  selected === plan.key && plan.best && styles.planCardBest,
                ]}
                elevation={0}
              >
                <View style={styles.planRow}>
                  {plan.icon ? (
                    <View style={[styles.planIcon, { backgroundColor: plan.bg }]}> 
                      <Avatar.Icon icon={plan.icon} color={plan.color} size={28} style={{ backgroundColor: 'transparent' }} />
                    </View>
                  ) : (
                    <View style={[styles.planIcon, { backgroundColor: plan.bg }]}> 
                      <Image source={require("@/assets/images/choose-your-plan/logo.png")} style={{ width: 28, height: 28, resizeMode: 'contain' }} />
                    </View>
                  )}
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.planTitle, selected === plan.key && { color: '#222' }]}>{plan.title}</Text>
                    <Text style={styles.planDesc}>{plan.desc}</Text>
                  </View>
                  <View style={{ alignItems: 'flex-end', minWidth: 70 }}>
                    <Text style={styles.planPrice}>${plan.price}</Text>
                    <Text style={styles.planPerMonth}>/month</Text>
                  </View>
                  <RadioButton value={plan.key} color="#5D5FEF" uncheckedColor="#D1D5DB" />
                </View>
                {plan.best && (
                  <Badge style={styles.bestValueBadge}>BEST VALUE</Badge>
                )}
              </Card>
            </TouchableOpacity>
          ))}
        </RadioButton.Group>
        <View style={styles.allPlansBox}>
          <Text style={styles.allPlansTitle}>All plans include:</Text>
          <Text style={styles.allPlansItem}>• Unlimited auto responses</Text>
          <Text style={styles.allPlansItem}>• AI-Powered message templates</Text>
          <Text style={styles.allPlansItem}>• 24/7 customer support</Text>
          <Text style={styles.allPlansItem}>• Cancel or change plan anytime</Text>
        </View>
      </View>
      <View style={styles.footerBox}>
        <Text style={styles.selectedPlanText}>Selected plan: <Text style={styles.selectedPlanPrice}>${selectedPlan?.price}</Text> <Text style={styles.selectedPlanPerMonth}>/month</Text></Text>
        <Button
          mode="contained"
          style={styles.paymentBtn}
          contentStyle={{ height: 48 }}
          labelStyle={{ fontSize: 18 }}
          onPress={() => { router.push("/business-info")}}
        >
          Proceed to Payment
        </Button>
        <Text style={styles.paymentNote}>You can upgrade or downgrade your plan anytime from your account settings</Text>
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
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: 15,
    color: '#6B6B6B',
    textAlign: 'center',
    marginBottom: 18,
  },
  planCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 12,
    position: 'relative',
  },
  planCardSelected: {
    borderColor: '#5D5FEF',
    backgroundColor: '#F5F7FF',
  },
  planCardUnselected: {
    borderColor: '#E5E7EB',
    backgroundColor: '#fff',
  },
  planCardBest: {
    borderWidth: 2,
    borderColor: '#5D5FEF',
    marginBottom: 14,
  },
  planRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  planIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  planTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
    marginBottom: 2,
  },
  planDesc: {
    fontSize: 14,
    color: '#6B6B6B',
    marginBottom: 2,
  },
  planPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222',
    textAlign: 'right',
  },
  planPerMonth: {
    fontSize: 12,
    color: '#6B6B6B',
    textAlign: 'right',
  },
  bestValueBadge: {
    position: 'absolute',
    top: -14,
    right: 16,
    backgroundColor: '#22C55E',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    zIndex: 2,
    elevation: 2,
  },
  allPlansBox: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  allPlansTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
    marginBottom: 4,
  },
  allPlansItem: {
    fontSize: 14,
    color: '#6B6B6B',
    marginBottom: 2,
  },
  footerBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    alignItems: 'center'
  },
  selectedPlanText: {
    fontSize: 16,
    color: '#222',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  selectedPlanPrice: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18,
  },
  selectedPlanPerMonth: {
    color: '#6B6B6B',
    fontSize: 14,
  },
  paymentBtn: {
    width: '100%',
    borderRadius: 10,
    marginTop: 8,
    backgroundColor: '#5D5FEF',
  },
  paymentNote: {
    fontSize: 12,
    color: '#6B6B6B',
    textAlign: 'center',
    marginTop: 8,
  },
}); 