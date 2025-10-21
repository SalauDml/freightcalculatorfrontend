# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 freight rate calculator application that helps trucking industry professionals (owners, fleet managers, dispatchers) calculate freight rates and operating costs. The app features a multi-step onboarding wizard and an advanced rate calculator.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Application Structure

The application uses **Next.js 15 App Router** with client-side rendering for interactive components. The main entry point is `app/page.js`, which implements a step-based wizard using conditional rendering based on the current step state.

### State Management Pattern

**No global state management library is used.** State is managed entirely through React's `useState` at the page level and passed down as props through the component tree. The main page (`app/page.js`) controls:
- `step`: Current wizard step (1-5)
- `barvalue`: Progress bar percentage
- Props are passed down to Step components: `{barvalue, setBarvalue, step, setStep}`

### Multi-Step Wizard Flow

The application has two main user flows:

1. **Initial Setup Wizard (Steps 1-5)**:
   - Step 1: User type selection (Owner/Fleet/Dispatcher)
   - Step 2: Profile creation (name, email, phone, company)
   - Step 3: Cost per mile calculator (vehicle type, fixed/variable costs)
   - Step 4: Vehicle information
   - Step 5: Completion/achievements

2. **Advanced Rate Calculator** (`components/RateCalc/Ratecalc.jsx`):
   - Independent multi-stage form (Location → Load Details → Service → Conditions)
   - Uses its own `stage` state, separate from the main wizard steps
   - Progress indicator shows completion through 4 stages

### Component Organization

Components are organized by feature in the `components/` directory:
- `Step1/`, `Step2/`, `Step3/`, `Step4/`, `Step5/`: Wizard step components
- `RateCalc/`: Advanced rate calculator and its sub-components
- `Navbar/`: Global navigation components

### Path Aliases

The project uses `@/*` path alias (configured in `jsconfig.json`) for imports:
```javascript
import Component from "@/components/Step1/Step1";
```

### Styling

- **Tailwind CSS v4** with PostCSS for styling
- Custom CSS variables defined in `app/globals.css` for theming
- Geist Sans and Geist Mono fonts loaded via `next/font/google`
- Heavy use of Tailwind's arbitrary values and custom classes for progress bars
- Dynamic classes based on state (e.g., conditional styling for selected buttons)

### Key Patterns

**Client Components**: Most components use `"use client"` directive since the app relies on interactivity and useState hooks.

**Navigation**: Step navigation is handled through:
- Forward navigation: Button clicks that increment step and update progress bar
- Backward navigation: "Back to previous Step" buttons that decrement step

**Form Handling**: Forms currently don't have submission logic - buttons use `onClick` handlers to navigate between steps rather than form `onSubmit`.

**Icon Library**: React Icons (`react-icons`) is used extensively throughout the app for UI icons.

## Important Notes

- The application appears to be on the `RateCalc` branch based on git status
- No backend/API integration is currently implemented
- No form validation is present
- Step 4 and Step 5 content is not fully visible in the reviewed files
- The Rate Calculator tracks "Searches Used: 0/5" but this limit isn't enforced in code yet

## File Naming Conventions

- Main step components: `Step[N].jsx` (e.g., `Step1.jsx`, `Step2.jsx`)
- Sub-components: Feature-prefixed (e.g., `Step2formcomponent.jsx`, `Ratecalclocation.jsx`)
- Use PascalCase for component files

## Meta Prompt
