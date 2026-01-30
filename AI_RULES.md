# AI Rules for STADA AC Application

This document outlines the core technologies used in this project and provides guidelines for using specific libraries to maintain consistency and best practices.

## Tech Stack Overview

*   **Frontend Framework**: React (v18) for building interactive user interfaces.
*   **Language**: TypeScript for type safety and improved code quality.
*   **Build Tool**: Vite for a fast development experience and optimized builds.
*   **Styling**: Tailwind CSS for utility-first styling, ensuring responsive and consistent designs.
*   **UI Components**: shadcn/ui, built on Radix UI primitives, for accessible and customizable UI components.
*   **Routing**: React Router DOM for declarative navigation within the application.
*   **Icons**: Lucide React for a comprehensive set of customizable SVG icons.
*   **Data Fetching/State Management**: React Query for efficient server state management and data fetching.
*   **Form Handling**: React Hook Form for robust and flexible form management, paired with Zod for schema validation.
*   **Animations**: Framer Motion for declarative and performant animations and transitions.
*   **Notifications**: Sonner for elegant and accessible toast notifications.

## Library Usage Rules

To ensure consistency and maintainability, please adhere to the following rules when developing:

*   **UI Components**:
    *   **Prioritize shadcn/ui**: Always use components from `src/components/ui` (shadcn/ui) when available.
    *   **Custom Components**: If a required component is not available in shadcn/ui or needs significant custom logic, create a new component in `src/components/` using Tailwind CSS for styling.
    *   **No Direct shadcn/ui Modification**: Never modify the files within `src/components/ui` directly. If a shadcn/ui component needs a different appearance or behavior, wrap it in a new custom component.
*   **Styling**:
    *   **Tailwind CSS Only**: All styling must be done using Tailwind CSS utility classes. Avoid inline styles or separate CSS files for individual components. Global styles are managed in `src/index.css` and `src/App.css`.
    *   **Responsive Design**: Always ensure designs are responsive using Tailwind's responsive prefixes (e.g., `md:`, `lg:`).
*   **Routing**:
    *   **React Router DOM**: Use `react-router-dom` for all client-side navigation. Keep route definitions in `src/App.tsx`.
    *   **NavLink**: Use the custom `NavLink` component from `src/components/NavLink.tsx` for navigation links to handle active states correctly.
*   **Icons**:
    *   **Lucide React**: Use icons exclusively from the `lucide-react` library.
*   **State Management**:
    *   **React Query**: For managing server-side data and complex asynchronous operations, use `@tanstack/react-query`.
    *   **React Hooks**: For local component state, use React's built-in `useState` and `useReducer` hooks.
*   **Form Handling**:
    *   **React Hook Form & Zod**: Use `react-hook-form` for all form logic and `zod` for defining form schemas and validation.
*   **Animations**:
    *   **Framer Motion**: For any complex or interactive animations, utilize `framer-motion`. For simple transitions (e.g., hover effects), Tailwind's built-in transition classes are sufficient.
*   **Notifications**:
    *   **Sonner**: Use `sonner` for displaying toast notifications to the user.
*   **Utility Functions**:
    *   **`src/lib/utils.ts`**: Place general utility functions (like `cn` for combining Tailwind classes) in `src/lib/utils.ts`.
*   **File Structure**:
    *   Adhere to the established directory structure: `src/pages` for main views, `src/components` for reusable UI elements, `src/hooks` for custom React hooks, and `src/assets` for static media.
    *   New components should always be created in their own files within `src/components/`.