# KLEANLY Development Build Guide

## 🚀 Quick Start Options

### Option 1: Continue with Expo Go (Limited Notifications)
- ✅ **Current Status**: App is running and functional
- ⚠️ **Limitation**: Push notifications won't work in Expo Go
- ✅ **Local Notifications**: Still work for testing

### Option 2: Create Development Build (Full Functionality)

#### Prerequisites
```bash
# Install EAS CLI globally
npm install -g @expo/cli
npm install -g eas-cli

# Login to Expo account
npx expo login
```

#### Build Commands
```bash
# For Android development build
eas build --platform android --profile development

# For iOS development build (requires Apple Developer account)
eas build --platform ios --profile development

# For local development build
npx expo run:android --device
npx expo run:ios --device
```

#### EAS Build Configuration
Create `eas.json` in the project root:
```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

## 📱 Current App Features

### ✅ Working in Expo Go:
- UI Navigation
- Maps integration
- Order management
- Driver dashboard
- User profiles
- Local notifications
- Analytics (web only)

### ⚠️ Limited in Expo Go:
- Push notifications
- Background location (limited)
- Some native modules

### ✅ Full Functionality in Development Build:
- All push notifications
- Background processing
- Full native module access
- Custom native code

## 🛠️ For Production

1. **Development Build** (Recommended for testing)
2. **Preview Build** (For stakeholders)
3. **Production Build** (For app stores)

## 📚 Resources
- [Development Builds](https://docs.expo.dev/develop/development-builds/introduction/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [Push Notifications](https://docs.expo.dev/push-notifications/overview/)
