# Novacrust Labs - Frontend Assessment

A modern crypto checkout experience built with Next.js 15, TypeScript, and shadcn/ui. This application demonstrates a production-ready implementation of an embeddable crypto-to-cash conversion widget.

## 📸 Demo

**Live Demo:** [Your Vercel/Netlify URL]  
**Video Walkthrough:** [Your Loom/Jam.dev URL]

## 📋 Project Overview

This project implements a crypto payment checkout flow that can be embedded on any website (similar to Stripe Checkout). The implementation focuses on:

- Clean, maintainable code architecture
- Type-safe development with TypeScript
- Responsive design across all devices
- Production-ready form handling and validation
- Smooth animations and user experience

### Implemented Pages

1. **Main Conversion Widget** (`/`)

   - Crypto to cash conversion interface
   - Multi-currency support (ETH, BTC, USDT variants)
   - Wallet provider selection (Metamask, Rainbow, WalletConnect)
   - Payment method selection
   - Real-time form validation
   - Coming soon placeholders for future features

2. **Success Page** (`/success`)
   - Transaction confirmation with animation
   - Transaction ID display with copy-to-clipboard
   - Navigation back to home

## 🚀 Tech Stack

- **Framework:** [Next.js 15.3.8](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS 3.4](https://tailwindcss.com/)
- **Font:** [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Data Fetching:** [TanStack Query (React Query)](https://tanstack.com/query)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)
- **Validation:** [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📦 Getting Started

### Prerequisites

- Node.js 18 or higher
- Yarn (recommended) or npm

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd novacrust-labs

# Install dependencies
yarn

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
# Create production build
yarn build

# Start production server
yarn start
```

## 🏗️ Project Structure

```
novacrust-labs/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── success/
│   │   └── page.tsx
│   ├── globals.css
│   ├── apiService/
│   ├── provider/
│   ├── queryHandler/
│   └── utils/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── popover.tsx
│   │   ├── sonner.tsx
│   │   ├── label.tsx
│   │   ├── tabs.tsx
│   │   └── form.tsx
│   └── widget/
│       ├── conversion-form.tsx
│       ├── currency-input.tsx
│       ├── wallet-selector.tsx
│       └── payment-method-select.tsx
├── lib/
│   ├── constants/
│   │   ├── currencies.ts
│   │   └── wallets.ts
│   ├── validations/
│   │   └── conversion-schema.ts
│   │   └── coming-soon-schema.ts
│   └── utils.ts
├── store/
├── hooks/
├── types/
├── config/
└── public/
```

## ✨ Key Features Implemented

### Core Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Component-based architecture with shadcn/ui
- ✅ Advanced form state management with React Hook Form
- ✅ Schema validation with Zod
- ✅ TypeScript type safety throughout
- ✅ Clean, maintainable code structure

### Bonus Features

- ✅ Comprehensive reusable component library
- ✅ Advanced form validation with custom error handling
- ✅ Loading states with skeleton loaders
- ✅ Error boundaries and error handling
- ✅ Accessibility best practices (ARIA, keyboard navigation)
- ✅ Copy-to-clipboard functionality
- ✅ Smooth animations and transitions
- ✅ Code splitting and optimization

### Available Scripts

```bash

yarn dev                    # Run dev server with hot reload
yarn build                  # Production build
yarn start                  # Start production server


yarn lint                   # Run ESLint
yarn lint-fix              # Fix ESLint issues automatically
yarn format                # Format code with Prettier
yarn check-format          # Check Prettier formatting
yarn check-lint            # Check ESLint standards
yarn check-types           # TypeScript type checking
yarn test-all              # Run all checks + build


yarn prepare               # Setup Husky git hooks
```

### Pre-commit Hooks (Husky)

Automatically enforced on every commit:

- ✅ Prettier formatting check
- ✅ ESLint standards enforcement
- ✅ TypeScript type validation
- ✅ Build verification

## 🎯 Design Decisions & Trade-offs

### Component Architecture

- **Decision:** Used shadcn/ui as the foundation
- **Rationale:** Provides accessible, customizable components with full code ownership
- **Trade-off:** More initial setup than a traditional library, but complete control

### State Management Strategy

- **Decision:** Redux Toolkit for global state + React Query for server state
- **Rationale:** Clear separation between client and server state management
- **Trade-off:** Slightly more complexity, but better scalability

### Form Handling

- **Decision:** React Hook Form + Zod validation
- **Rationale:** Performance-focused with type-safe validation
- **Benefits:**
  - Uncontrolled components for better performance
  - Type-safe validation schemas
  - Easy integration with UI components

### Styling Approach

- **Decision:** TailwindCSS with custom design tokens
- **Rationale:** Utility-first CSS with component-level customization
- **Implementation:** CVA (Class Variance Authority) for component variants

## 🔄 User Flow

```
1. Landing Page (/)
   ↓
2. Select conversion type (Crypto to cash)
   ↓
3. Enter amount and select currencies
   ↓
4. Choose wallet provider (Metamask, Rainbow, etc.)
   ↓
5. Select payment method (Bank Transfer, etc.)
   ↓
6. Submit conversion
   ↓
7. Success page with transaction ID (/success)
   ↓
8. Option to return home
```

## 📚 Resources

- [Figma Design](https://www.figma.com/design/FRfbMHys4JINX4V9qBxgbf/Frontend-Assessment?node-id=0-1)
