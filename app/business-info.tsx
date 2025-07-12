import { useRouter } from "expo-router";
import * as React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const defaultHours = [
  { day: "Monday", from: "9:00 AM", to: "5:00 PM" },
  { day: "Tuesday", from: "9:00 AM", to: "5:00 PM" },
  { day: "Wednesday", from: "9:00 AM", to: "5:00 PM" },
  { day: "Thursday", from: "9:00 AM", to: "5:00 PM" },
  { day: "Friday", from: "9:00 AM", to: "5:00 PM" },
  { day: "Saturday", from: "9:00 AM", to: "5:00 PM" },
  { day: "Sunday", from: "9:00 AM", to: "5:00 PM" },
];

const visibleDays = 3;

const timeOptions = ["8:00 AM", "9:00 AM", "10:00 AM", "5:00 PM", "6:00 PM"];

export default function BusinessInfoScreen() {
  const [businessName, setBusinessName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [additional, setAdditional] = React.useState("");
  const [hours, setHours] = React.useState(defaultHours);
  const [showAllDays, setShowAllDays] = React.useState(false);
  const router = useRouter();
  const [dropdown, setDropdown] = React.useState<{ idx: number; key: 'from' | 'to' } | null>(null);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff" }}
      edges={["top", "bottom"]}
    >
      <View style={styles.headerRow}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => router.back()}
          style={styles.backIcon}
        />
        <Text style={styles.headerTitle}>Business Info</Text>
        <View style={{ width: 24 }} />
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={{ ...styles.container, flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.infoText}>
            Tell us about your business so our AI can respond accurately to
            customer inquiries.
          </Text>
          <Text style={styles.inputLabel}>Business Name*</Text>
          <TextInput
            mode="outlined"
            placeholder="Enter your business name"
            value={businessName}
            onChangeText={setBusinessName}
            style={styles.input}
            outlineColor="#E5E7EB"
            activeOutlineColor="#5D5FEF"
          />
          <Text style={styles.inputLabel}>Location / Address*</Text>
          <TextInput
            mode="outlined"
            placeholder="Enter your business address"
            value={address}
            onChangeText={setAddress}
            style={styles.input}
            outlineColor="#E5E7EB"
            activeOutlineColor="#5D5FEF"
          />
          <Text style={styles.inputLabel}>Working Hours*</Text>
          <View style={styles.workingHoursBox}>
            {(showAllDays ? hours : hours.slice(0, visibleDays)).map((h, idx) => (
              <View key={h.day} style={styles.workingHourRow}>
                <Text style={styles.workingHourDay}>{h.day}</Text>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    style={styles.workingHourPicker}
                    onPress={() => setDropdown({ idx, key: 'from' })}
                  >
                    <Text style={styles.workingHourPickerText}>{h.from}</Text>
                    <Text style={styles.pickerIcon}>▼</Text>
                  </TouchableOpacity>
                  {dropdown && dropdown.idx === idx && dropdown.key === 'from' && (
                    <View style={styles.dropdownBox}>
                      {timeOptions.map((time) => (
                        <TouchableOpacity
                          key={time}
                          style={styles.dropdownItem}
                          onPress={() => {
                            setHours(prev => prev.map((item, i) => i === idx ? { ...item, from: time } : item));
                            setDropdown(null);
                          }}
                        >
                          <Text style={styles.dropdownText}>{time}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>
                <Text style={{ marginHorizontal: 4 }}>to</Text>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    style={styles.workingHourPicker}
                    onPress={() => setDropdown({ idx, key: 'to' })}
                  >
                    <Text style={styles.workingHourPickerText}>{h.to}</Text>
                    <Text style={styles.pickerIcon}>▼</Text>
                  </TouchableOpacity>
                  {dropdown && dropdown.idx === idx && dropdown.key === 'to' && (
                    <View style={styles.dropdownBox}>
                      {timeOptions.map((time) => (
                        <TouchableOpacity
                          key={time}
                          style={styles.dropdownItem}
                          onPress={() => {
                            setHours(prev => prev.map((item, i) => i === idx ? { ...item, to: time } : item));
                            setDropdown(null);
                          }}
                        >
                          <Text style={styles.dropdownText}>{time}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            ))}
            {!showAllDays ? (
              <TouchableOpacity
                onPress={() => setShowAllDays(true)}
                style={styles.showMoreDaysRow}
              >
                <Text style={styles.showMoreDaysText}>▼ Show more days</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setShowAllDays(false)}
                style={styles.showMoreDaysRow}
              >
                <Text style={styles.showMoreDaysText}>▲ Show less days</Text>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.inputLabel}>
            Website or Booking Link (Optional)
          </Text>
          <TextInput
            mode="outlined"
            placeholder="https://yourbusiness.com"
            value={website}
            onChangeText={setWebsite}
            style={styles.input}
            outlineColor="#E5E7EB"
            activeOutlineColor="#5D5FEF"
          />
          <Text style={styles.inputLabel}>Additional Business Info</Text>
          <TextInput
            mode="outlined"
            placeholder={
              "Anything else you'd like us to know about your business?"
            }
            value={additional}
            onChangeText={setAdditional}
            style={[styles.input, { minHeight: 70 }]}
            outlineColor="#E5E7EB"
            activeOutlineColor="#5D5FEF"
            multiline
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.footerRow}>
        <Button
          mode="outlined"
          style={styles.backBtn}
          labelStyle={{ color: "#222", fontWeight: "bold", fontSize: 16 }}
          onPress={() => router.back()}
        >
          Back
        </Button>
        <Button
          mode="contained"
          style={styles.continueBtn}
          contentStyle={{ height: 48 }}
          labelStyle={{ fontSize: 18 }}
          onPress={() => { router.push("/connect-account")}}
        >
          Continue
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: "#fff",
  },
  backIcon: {
    marginLeft: 4,
    marginRight: 0,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#222",
    marginRight: 32,
  },
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  infoText: {
    fontSize: 15,
    color: "#6B6B6B",
    marginBottom: 18,
    marginTop: 2,
    textAlign: "left",
  },
  inputLabel: {
    fontSize: 14,
    color: "#222",
    marginBottom: 4,
    fontWeight: "600",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#F9FAFB",
    fontSize: 16,
    marginBottom: 2,
  },
  workingHoursBox: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    marginTop: 2,
  },
  workingHourRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  workingHourDay: {
    width: 80,
    fontWeight: "bold",
    color: "#222",
    fontSize: 15,
  },
  workingHourPicker: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "ios" ? 8 : 4,
    backgroundColor: "#fff",
    minWidth: 80,
    alignItems: "center",
  },
  workingHourPickerText: {
    color: "#222",
    fontSize: 15,
  },
  pickerIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -8 }],
    fontSize: 12,
    color: '#6B6B6B',
  },
  showMoreDaysRow: {
    marginTop: 2,
    marginBottom: 2,
  },
  showMoreDaysText: {
    color: "#5D5FEF",
    fontWeight: "bold",
    fontSize: 14,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    backgroundColor: "#fff",
  },
  backBtn: {
    flex: 1,
    borderRadius: 10,
    marginRight: 8,
    borderColor: "#E5E7EB",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  continueBtn: {
    flex: 2,
    borderRadius: 10,
    marginLeft: 8,
    backgroundColor: "#5D5FEF",
  },
  dropdownBox: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    zIndex: 10,
    elevation: 3,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownText: {
    fontSize: 15,
    color: '#222',
  },
});
