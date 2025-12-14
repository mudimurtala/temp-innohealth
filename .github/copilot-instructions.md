# Copilot Instructions for temp-innohealth

## Project Overview
- **Framework:** React 18 + TypeScript, Vite, TailwindCSS
- **Purpose:** Demo and prototype UI components and workflows for innoHealthTechnologies
- **Structure:**
  - `src/components/`: Reusable UI components (e.g., `Profile`, `Footer`, `Navbar`, `ui/Button`)
  - `src/day6/`: Feature demos (e.g., `CarouselDemo`, `FormWithDate`, `SummaryChart`)
  - `src/lib/utils.ts`: Utility functions (e.g., `cn` for class merging)

## Key Patterns & Conventions
- **Styling:**
  - Uses TailwindCSS with custom tokens (`brand`, `danger`, `success`) in `tailwind.config.cjs`
  - Use the `cn` utility for merging class names, especially in component props
- **Component Variants:**
  - Use `class-variance-authority` (CVA) for variant-based styling (see `ui/Button.tsx`)
- **Forms:**
  - Use `react-hook-form` for form state management (see `FormWithDate.tsx`)
  - Use `sonner` for toast notifications
- **Charts:**
  - Use `recharts` for data visualization (see `SummaryChart.tsx`)
- **Carousel:**
  - Use `embla-carousel-react` for carousels (see `CarouselDemo.tsx`)

## Developer Workflows
- **Start Dev Server:** `npm run dev`
- **Build for Production:** `npm run build`
- **Preview Build:** `npm run preview`
- **Type Checking:** Strict TypeScript settings (`tsconfig.json`)
- **No explicit test setup** (add tests if needed)

## Integration & External Dependencies
- All dependencies are managed via `package.json`
- No backend/API integration in this repo (UI only)
- All data is local/stateful (see `App.tsx` for data flow)

## Examples
- **Button with variants:**
  ```tsx
  <Button variant="danger" size="lg">Delete</Button>
  ```
- **Form submission with toast:**
  See `FormWithDate.tsx` for pattern
- **Adding new UI components:**
  Place in `src/components/` or `src/components/ui/` and follow existing patterns

## References
- Main entry: `src/App.tsx`
- Tailwind config: `tailwind.config.cjs`
- Utility: `src/lib/utils.ts`

---
For new features, follow the established component and styling patterns. Keep code modular and prefer composition over inheritance. If unclear, review similar files in `src/components/` or `src/day6/`.
