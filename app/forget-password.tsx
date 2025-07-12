import { useRouter } from "expo-router";
import * as React from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Text,
  TextInput,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgetPasswordScreen() {
  const [email, setEmail] = React.useState("");
  const router = useRouter();

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
        <Text style={styles.headerTitle}>Reset Password</Text>
        <View style={{ width: 24 }} />
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topIconBox}>
            <Image
              source={require("@/assets/images/forget-password/logo.png")}
              style={styles.topIconImage}
            />
          </View>
          <Text style={styles.title}>Auto DM Responder</Text>
          <Text style={styles.subtitle}>WhatsApp & Instagram Automation</Text>
          <View style={styles.lockCircle}>
            <Avatar.Icon
              icon="lock-outline"
              size={50}
              style={{ backgroundColor: "#E5E7EB" }}
              color="#5D5FEF"
            />
          </View>
          <Text style={styles.forgotTitle}>Forgot Password?</Text>
          <Text style={styles.forgotDesc}>
            No worries! Enter your email address and we&apos;ll send you a reset
            link.
          </Text>
          <View style={{ width: "100%", marginTop: 18 }}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              left={<TextInput.Icon icon="email-outline" />}
              style={styles.input}
              outlineColor="#E5E7EB"
              activeOutlineColor="#5D5FEF"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <Button
            mode="contained"
            style={styles.resetBtn}
            contentStyle={{ height: 48 }}
            labelStyle={{ fontSize: 18, fontWeight: "bold" }}
            icon="send"
            onPress={() => {}}
          >
            Send Reset Link
          </Button>
          <View style={styles.orRow}>
            <Divider style={{ flex: 1, backgroundColor: "#E5E7EB" }} />
            <Text style={styles.orText}>or</Text>
            <Divider style={{ flex: 1, backgroundColor: "#E5E7EB" }} />
          </View>
          <TouchableOpacity
            onPress={() => router.replace("/login")}
            style={styles.backToSignInRow}
          >
            <Text style={styles.backToSignInLink}>
              <Text style={{ fontSize: 16 }}>{"\u2190"}</Text> Back to Sign In
            </Text>
          </TouchableOpacity>
          <View style={styles.footerRow}>
          <Avatar.Icon
                  size={25}
                  icon="whatsapp"
                  color="#25D366"
                  style={{ backgroundColor: "#FFF" }}
                />
            
            <Text style={styles.footerWhatsapp}>WhatsApp</Text>
            <Text style={styles.footerDot}>•</Text>
            <Avatar.Icon
              size={25}
              icon="instagram"
              color="#C13584"
              style={{ backgroundColor: "#FFF" }}
            />
            <Text style={styles.footerInstagram}>Instagram</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
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
    paddingTop: 12,
    minHeight: '100%',
  },
  topIconBox: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 18,
  },
  topIconImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    marginBottom: 2,
    marginTop: 2,
  },
  subtitle: {
    fontSize: 15,
    color: "#9CA3AF",
    textAlign: "center",
    marginBottom: 18,
  },
  lockCircle: {
    marginBottom: 12,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  forgotTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginTop: 8,
    marginBottom: 2,
    textAlign: "center",
  },
  forgotDesc: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
    marginBottom: 8,
  },
  inputLabel: {
    fontSize: 14,
    color: "#222",
    marginBottom: 4,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#F9FAFB",
    fontSize: 16,
  },
  resetBtn: {
    width: "100%",
    borderRadius: 10,
    marginTop: 18,
    backgroundColor: "#5D5FEF",
    shadowColor: "#5D5FEF",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  orRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 18,
  },
  orText: {
    marginHorizontal: 8,
    color: "#9CA3AF",
    fontSize: 14,
  },
  backToSignInRow: {
    width: "100%",
    alignItems: "center",
    marginBottom: 8,
  },
  backToSignInLink: {
    color: "#5D5FEF",
    fontWeight: "bold",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 12,
  },
  footerWhatsapp: {
    color: "#9CA3AF",
    fontWeight: "bold",
    fontSize: 14,
  },
  footerDot: {
    color: "#9CA3AF",
    marginHorizontal: 8,
    fontSize: 14,
  },
  footerInstagram: {
    color: "#9CA3AF",
    fontWeight: "bold",
    fontSize: 14,
  },
});
