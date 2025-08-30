// @ts-nocheck
// import CookieManager from '@react-native-cookies/cookies';
import { useRouter } from "expo-router";
import * as React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import InstagramLogin from "react-native-instagram-login";
import { Avatar, Button, Card, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  const insRef = React.useRef(null);
  const [token, setToken] = React.useState(null);

  console.log("Redirect URI:", token);

  const onClear = () => {
  //   CookieManager.clearAll()
  // .then((success) => {
  //   console.log('CookieManager.clearAll =>', success);
  //   setToken(null);
  // });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff" }}
      edges={["top", "bottom"]}
    >
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
          <Image
            source={require("@/assets/images/login/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Auto DM Responder</Text>
          <Text style={styles.subtitle}>For WhatsApp & Instagram</Text>

          <View style={{ marginTop: 32, width: "100%" }}>
            <Text style={styles.sectionTitle}>Welcome back</Text>
            <Text style={styles.sectionSubtitle}>
              Log in to your account to manage your auto responses
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => onClear()}>
              <Text style={styles.forgot}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", marginTop: 24 }}>
            <Text style={styles.inputLabel}>Email address</Text>
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
          <View style={{ width: "100%", marginTop: 12 }}>
            <View style={styles.passwordRow}>
              <Text style={styles.inputLabel}>Password</Text>
              <TouchableOpacity onPress={() => router.push("/forget-password")}>
                <Text style={styles.forgot}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              mode="outlined"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              left={<TextInput.Icon icon="lock-outline" />}
              right={
                <TextInput.Icon
                  icon={showPassword ? "eye-off-outline" : "eye-outline"}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              style={styles.input}
              outlineColor="#E5E7EB"
              activeOutlineColor="#5D5FEF"
              secureTextEntry={!showPassword}
            />
          </View>
          <Button
            mode="contained"
            style={styles.loginBtn}
            contentStyle={{ height: 48 }}
            labelStyle={{ fontSize: 18 }}
            onPress={() => {
              router.push("/choose-plan");
            }}
          >
            Log in
          </Button>
          <View style={{ width: "100%", marginTop: 32 }}>
            <Text style={styles.sectionTitle}>Two Platforms</Text>
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
                onPress={() => insRef.current.show()}
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
          </View>
          <View style={styles.signupRow}>
            <Text style={styles.signupText}>Don&apos;t have an account?</Text>
            <TouchableOpacity onPress={() => router.replace("/signup")}>
              <Text style={styles.signupLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <InstagramLogin
        ref={insRef}
        appId={`${process.env.INSTAGRAM_APP_ID}`}
        appSecret={`${process.env.INSTAGRAM_APP_SECRET}`}
        redirectUrl="https://auth.expo.io/@nilanchal/chat-bot-app"
        scopes={[
          "instagram_business_basic",
          "instagram_business_manage_messages",
        ]}
        onLoginSuccess={(token: any) => setToken(token)}
        onLoginFailure={(data: any) => console.log(data)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 24,
    minHeight: "100%",
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 16,
    marginTop: 12,
    marginBottom: 18,
    alignSelf: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 15,
    color: "#6B6B6B",
    textAlign: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 2,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#6B6B6B",
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
  passwordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgot: {
    color: "#5D5FEF",
    fontWeight: "600",
    fontSize: 13,
  },
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
  platformsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 12,
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
  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 18,
  },
  signupText: {
    color: "#6B6B6B",
    fontSize: 14,
    marginRight: 4,
  },
  signupLink: {
    color: "#5D5FEF",
    fontWeight: "bold",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
