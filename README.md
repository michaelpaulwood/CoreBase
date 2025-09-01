# FoundationJS

**A clean, production-ready Next.js 14 boilerplate with Firebase integration**

Built for developers who want to ship fast without the setup headaches. Get from idea to deployment in minutes, not hours.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10-orange)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)](https://tailwindcss.com/)

## ✨ Features ✅ All Implemented

- **🚀 Next.js 14** - App Router, Server Components, and all the latest features ✅
- **🔥 Firebase Integration** - Authentication, Firestore, and ready for more ✅
- **🎨 Tailwind CSS** - Utility-first CSS with mobile-first responsive design ✅
- **📱 Mobile-First** - Looks great on every device out of the box ✅
- **🔐 Authentication Ready** - Email/password and Google OAuth configured ✅
- **⚡ TypeScript** - Full type safety throughout the entire stack ✅
- **🛡️ Error Handling** - Comprehensive error boundaries and user feedback ✅
- **🔔 Toast Notifications** - User feedback system included ✅
- **⏳ Loading States** - Skeleton screens and loading indicators ✅
- **📦 Component Library** - Reusable UI components ready to extend ✅

## 🚀 Quick Start

1. **Clone and install**
```bash
git clone https://github.com/michaelpaulwood/foundationjs.git my-new-app
cd my-new-app
npm install
```

2. **Set up Firebase**
```bash
# Copy environment file
cp .env.example .env.local

# Edit .env.local with your Firebase config
```

3. **Run development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) and you're ready to build! 🎉

## 📋 Detailed Setup

### Firebase Configuration

1. **Create Firebase Project**
   - Visit [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Note your project ID

2. **Enable Authentication**
   - Go to Authentication → Sign-in method
   - Enable Email/Password
   - Enable Google (optional, but recommended)
   - Configure OAuth consent screen if using Google

3. **Set up Firestore**
   - Go to Firestore Database
   - Create database in production mode
   - Update security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

4. **Get Configuration**
   - Go to Project Settings → General
   - Scroll to "Your apps" section
   - Copy configuration values to `.env.local`

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your Firebase config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 🏗️ Project Structure

```
foundationjs/
├── src/app/                    # Next.js App Router
│   ├── (auth)/auth/           # Authentication pages
│   ├── dashboard/             # Protected dashboard
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── components/               
│   ├── ui/                   # Reusable UI components
│   │   ├── button.tsx        # Button component
│   │   ├── input.tsx         # Form input component
│   │   ├── loading.tsx       # Loading states
│   │   ├── toast.tsx         # Toast notifications
│   │   └── error-boundary.tsx # Error handling
│   └── layout/               # Layout components
│       ├── navigation.tsx    # Navigation bar
│       └── footer.tsx        # Footer with attribution
├── hooks/
│   └── useAuth.tsx           # Authentication context
├── lib/
│   ├── firebase.ts           # Firebase configuration
│   ├── auth.ts               # Authentication functions
│   ├── db.ts                 # Firestore helpers
│   └── utils.ts              # Utility functions
├── types/
│   └── user.ts               # TypeScript interfaces
└── public/                   # Static assets
```

## 📱 Pages Included

### Landing Page (`/`)
- Hero section with clear value proposition
- Feature highlights
- Call-to-action buttons
- Responsive design

### Authentication (`/auth`)
- Email/password login and signup
- Google OAuth integration
- Password reset functionality
- Form validation and error handling

### Dashboard (`/dashboard`)
- Protected route (authentication required)
- User profile display
- Settings and logout functionality
- Extensible for your app's main features

## 🧱 Component Library

### UI Components
- **Button** - Multiple variants, sizes, loading states
- **Input** - Labels, validation, error states
- **Loading** - Spinners, overlays, skeleton screens
- **Toast** - Success, error, warning, info notifications
- **Error Boundary** - Graceful error handling

### Layout Components
- **Navigation** - Responsive nav with user state
- **Footer** - Attribution and tech stack display

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy! 

### Other Platforms

This app works on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📦 Extending the Boilerplate

### Adding New Features
1. Create components in `components/`
2. Add pages in `src/app/`
3. Update types in `types/`
4. Add database functions in `lib/db.ts`

### Adding Authentication Providers
1. Enable provider in Firebase Console
2. Add provider logic to `lib/auth.ts`
3. Update UI in auth components

### Styling Customization
- Edit `tailwind.config.ts` for design system
- Modify `src/app/globals.css` for global styles
- Update component styles as needed

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Form Handling**: Native React (no external deps)
- **Icons**: Heroicons (via SVG)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

MIT License - feel free to use this for personal and commercial projects.

## 👨‍💻 Credits

Built by [Michael Wood](https://github.com/michaelpaulwood) with [Claude Code](https://claude.ai/code)

---

**Ready to build something amazing?** Clone this repo and start shipping! 🚢
