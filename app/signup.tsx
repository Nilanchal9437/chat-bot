import { useRouter } from 'expo-router';
import * as React from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Button, Checkbox, IconButton, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const passwordStrength = (password: string): { score: number; label: string } => {
  if (!password) return { score: 0, label: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score === 0) return { score, label: "" };
  if (score === 1) return { score, label: "Weak" };
  if (score === 2) return { score, label: "Fair" };
  if (score === 3) return { score, label: "Good" };
  if (score === 4) return { score, label: "Strong" };
  return { score, label: "" };
};

export default function SignupScreen() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = React.useState<string[]>([]);
  const [agree, setAgree] = React.useState(false);
  const router = useRouter();
  const strength = passwordStrength(password);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={["top", "bottom"]}>
      <View style={styles.headerRow}>
        <IconButton icon="arrow-left" size={24} onPress={() => router.push("/login")} style={styles.backIcon} />
        <Text style={styles.headerTitle}>Create Account</Text>
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
            <Image source={require("@/assets/images/login/signup.png")} style={styles.topIconImage} />
          </View>
          <Text style={styles.title}>AutoRespond</Text>
          <Text style={styles.subtitle}>Smart DM responses for WhatsApp & Instagram</Text>
          <View style={{ width: "100%", marginTop: 18 }}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              mode="outlined"
              placeholder="Enter your full name"
              value={fullName}
              onChangeText={setFullName}
              left={<TextInput.Icon icon="account-outline" />}
              style={styles.input}
              outlineColor="#E5E7EB"
              activeOutlineColor="#5D5FEF"
            />
          </View>
          <View style={{ width: "100%", marginTop: 12 }}>
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
          <View style={{ width: "100%", marginTop: 12 }}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              mode="outlined"
              placeholder="Create a password"
              value={password}
              onChangeText={setPassword}
              left={<TextInput.Icon icon="lock-outline" />}
              right={<TextInput.Icon icon={showPassword ? "eye-off-outline" : "eye-outline"} onPress={() => setShowPassword(!showPassword)} />}
              style={styles.input}
              outlineColor="#E5E7EB"
              activeOutlineColor="#5D5FEF"
              secureTextEntry={!showPassword}
            />
            <View style={styles.passwordScoreRow}>
              <View style={[styles.passwordScoreBar, { backgroundColor: strength.score > 0 ? '#EF4444' : '#E5E7EB' }]} />
              <View style={[styles.passwordScoreBar, { backgroundColor: strength.score > 1 ? '#F59E42' : '#E5E7EB' }]} />
              <View style={[styles.passwordScoreBar, { backgroundColor: strength.score > 2 ? '#22C55E' : '#E5E7EB' }]} />
              <View style={[styles.passwordScoreBar, { backgroundColor: strength.score > 3 ? '#D1D5DB' : '#E5E7EB' }]} />
              <Text style={styles.passwordScoreLabel}>{strength.label}</Text>
            </View>
          </View>
          <View style={{ width: "100%", marginTop: 18 }}>
            <Text style={styles.inputLabel}>Select Platforms</Text>
            <View style={styles.platformsRow}>
              <TouchableOpacity style={[styles.platformCard, selectedPlatforms.includes('whatsapp') && styles.platformCardSelectedWA]} onPress={() => togglePlatform('whatsapp')}>
                <Avatar.Icon size={36} icon="whatsapp" color="#25D366" style={{ backgroundColor: '#E9FDF2' }} />
                <Text style={styles.platformText}>WhatsApp</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.platformCard, selectedPlatforms.includes('instagram') && styles.platformCardSelectedIG]} onPress={() => togglePlatform('instagram')}>
                <Avatar.Icon size={36} icon="instagram" color="#C13584" style={{ backgroundColor: '#F7E9F9' }} />
                <Text style={[styles.platformText, { color: '#A259C6' }]}>Instagram</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.termsRow}>
            <Checkbox.Android
              status={agree ? 'checked' : 'unchecked'}
              onPress={() => setAgree(!agree)}
              color="#5D5FEF"
            />
            <Text style={styles.termsText}>
              I agree to the
              <Text style={styles.link}>Terms of Service</Text>
              and
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>
          <Button
            mode="contained"
            style={styles.signupBtn}
            contentStyle={{ height: 48 }}
            labelStyle={{ fontSize: 18 }}
            onPress={() => {}}
            disabled={!agree}
          >
            Create Account
          </Button>
          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.replace('/login')}>
              <Text style={styles.loginLink}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    minHeight: '100%',
  },
  topIconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  topIconImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 2,
    marginTop: 2,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B6B6B',
    textAlign: 'center',
    marginBottom: 18,
  },
  inputLabel: {
    fontSize: 14,
    color: '#222',
    marginBottom: 4,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },
  passwordScoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 2,
  },
  passwordScoreBar: {
    width: "20%",
    height: 5,
    borderRadius: 2,
    marginRight: 4,
  },
  passwordScoreLabel: {
    marginLeft: 8,
    fontSize: 13,
    color: '#6B6B6B',
    fontWeight: '600',
  },
  platformsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  platformCard: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D6F5E6',
    backgroundColor: '#F7FEFB',
    paddingVertical: 12,
    alignItems: 'center',
  },
  platformCardSelectedWA: {
    borderColor: '#25D366',
    backgroundColor: '#E9FDF2',
  },
  platformCardSelectedIG: {
    borderColor: '#A259C6',
    backgroundColor: '#F7E9F9',
  },
  platformText: {
    marginTop: 8,
    fontWeight: '600',
    fontSize: 16,
    color: '#25D366',
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: "auto", 
    width: '100%',
  },
  termsText: {
    fontSize: 13,
    color: '#6B6B6B',
    marginLeft: 2,
    flexWrap: 'wrap',
    flex: 1,
  },
  link: {
    color: '#5D5FEF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
  signupBtn: {
    width: '100%',
    borderRadius: 10,
    marginTop: 2,
    backgroundColor: '#5D5FEF',
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  loginText: {
    color: '#6B6B6B',
    fontSize: 14,
    marginRight: 4,
  },
  loginLink: {
    color: '#5D5FEF',
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
}); 