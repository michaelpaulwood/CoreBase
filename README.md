# CoreBase

**A modern, production-ready Next.js 14 boilerplate with Firebase integration and professional design system**

Built for developers who want to ship fast with beautiful, consistent design. Get from idea to deployment in minutes with a professional UI that doesn't look like "Bootstrap generic".

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10-orange)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)](https://tailwindcss.com/)

## ✨ Features ✅ All Implemented

### 🎨 Modern Design System
- **Custom Design Tokens** - Warm color palette with orange/blue gradients ✅
- **Professional Components** - CoreButton, CoreInput, Card, Badge, and more ✅
- **Smooth Gradients** - Natural section transitions, no harsh lines ✅
- **Mobile Navigation** - Floating card design with backdrop blur ✅
- **Responsive Typography** - Clamp-based scaling for all devices ✅

### 🚀 Technical Foundation
- **Next.js 14** - App Router, Server Components, and latest features ✅
- **Firebase Authentication** - Email/password with secure user management ✅
- **TypeScript** - Full type safety throughout the entire stack ✅
- **Tailwind CSS** - Custom configuration with design system integration ✅
- **Mobile-First** - Professional responsive design across all devices ✅

### 🔧 Production Features  
- **Interactive Demo** - Functional "View Demo" with guided tour ✅
- **Error Handling** - Comprehensive error boundaries and user feedback ✅
- **Loading States** - Professional spinners and transitions ✅
- **Form Validation** - Controlled inputs with real-time validation ✅
- **Component Library** - Extensible UI system ready for any project ✅

## 🚀 Quick Start

1. **Clone and install**
```bash
git clone https://github.com/michaelpaulwood/CoreBase.git my-new-app
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
   - Note: Google OAuth has been removed from this version

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
CoreBase/
├── src/app/                    # Next.js App Router
│   ├── (auth)/auth/           # Authentication pages
│   ├── dashboard/             # Protected dashboard
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── components/               
│   ├── ui/                   # Reusable UI components
│   │   ├── design-system.tsx # Complete design system components
│   │   ├── faq.tsx          # FAQ component with animations
│   │   ├── button.tsx       # Legacy button component
│   │   ├── input.tsx        # Legacy form input component  
│   │   ├── loading.tsx      # Loading states
│   │   └── toast.tsx        # Toast notifications
│   └── layout/              # Layout components
│       ├── mobile-nav.tsx   # Floating mobile navigation
│       ├── navigation.tsx   # Desktop navigation bar
│       └── footer.tsx       # Clean footer with attribution
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

### Landing Page (`/`) ✨ Fully Redesigned
- **Modern Hero Section** - Large typography with gradient backgrounds
- **Benefits Grid** - 6-card layout with hover effects and gradient icons  
- **Interactive Steps** - 5-step process with symmetric design
- **Functional FAQ** - Expandable sections with smooth animations
- **Newsletter Signup** - Glass-morphism design integrated with warm gradients
- **Working Demo Button** - Interactive guided tour experience

### Authentication (`/auth`) ✨ Design System Applied  
- **Email/Password Only** - Streamlined authentication (Google removed)
- **Modern Forms** - CoreInput components with proper validation
- **Card-Based Layout** - Professional styling with core shadows
- **Error Handling** - Badge components for user feedback
- **Mobile Responsive** - Consistent with landing page design

### Dashboard (`/dashboard`) ✨ Complete Redesign
- **Protected Route** - Authentication required with loading states
- **User Profile Section** - Avatar, member since, last login details
- **Stats Cards** - Projects, tasks, success rate with gradient icons
- **Quick Actions** - Feature placeholders ready for customization  
- **Professional Navigation** - Sticky header with backdrop blur

## 🧱 Modern Component Library

### Design System Components ✨ New
- **Container** - Max-width wrapper with responsive padding
- **Section** - Background and padding management system  
- **Heading** - Typography scale with responsive clamp() sizing
- **Card** - Consistent cards with core shadows and hover effects
- **Badge** - Colored indicators with success/warning/info variants
- **CoreButton** - Professional buttons with gradients, sizes, loading states
- **CoreInput** - Modern form inputs with labels and validation
- **Step** - Symmetric step cards for process flows

### Interactive Components ✨ New
- **FAQ** - Expandable sections with smooth animations and plus/minus icons
- **MobileNav** - Floating card navigation with backdrop blur and z-index management

### Legacy Components (Still Available)
- **Button** - Original button component (superseded by CoreButton)
- **Input** - Original input component (superseded by CoreInput)  
- **Loading** - Spinner components with size variants
- **Toast** - Notification system for user feedback

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

### Design System Customization ✨ Updated
- **Custom Colors** - Edit warm/primary/secondary palettes in `tailwind.config.ts`
- **Gradient Backgrounds** - Modify core-gradient, warm-gradient, cool-gradient
- **Typography Scale** - Adjust hero, display, heading responsive scales
- **Component Tokens** - Update spacing, shadows, and border-radius systems
- **Global Styles** - Modify `src/app/globals.css` for additional customizations

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript  
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth (Email/Password)
- **Styling**: Tailwind CSS with custom design system

### Design & UI
- **Design System**: Custom warm color palette with professional gradients
- **Components**: Comprehensive component library with consistent styling
- **Typography**: Responsive clamp() scaling across all devices
- **Icons**: Custom SVG icons and gradient elements
- **Animations**: Smooth transitions and hover effects throughout

### Development Experience
- **State Management**: React Context API
- **Form Handling**: Controlled components with real-time validation
- **Utilities**: Custom className utilities with clsx integration  
- **Code Quality**: ESLint configuration and TypeScript throughout

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

MIT License - feel free to use this for personal and commercial projects.

## 🛠️ Development Tools

This project was built using a combination of modern development tools:

- **[Claude Code](https://claude.ai/code)** - AI-powered coding assistant for rapid development
- **[Claude](https://claude.ai)** - AI assistance for planning and architecture decisions  
- **[Cursor](https://cursor.sh/)** - AI-enhanced code editor
- **[GitHub Copilot](https://github.com/features/copilot)** - AI pair programming

## 👨‍💻 Author

Built by [Michael Wood](https://github.com/michaelpaulwood)

---

## 🎯 What Makes CoreBase Different?

✅ **No Generic Bootstrap Look** - Custom design system with warm, professional styling  
✅ **Actually Production Ready** - Every component tested and polished  
✅ **Modern Development Experience** - Latest Next.js 14 with TypeScript throughout  
✅ **Interactive Demo** - Functional demo button so users can try before they build  
✅ **Mobile-First Design** - Professional responsive experience across all devices  
✅ **Complete Documentation** - Everything you need to get started immediately  

**Ready to build something amazing?** Clone this repo and start shipping! 🚢
