# Project Structure & Organization

## Directory Layout
Follow the Next.js App Router convention (even though this is a context repo, it describes the app).

```
/
├── app/                    # Next.js App Router (Routes)
│   ├── (auth)/             # Auth route group
│   ├── (dashboard)/        # Dashboard route group
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # Shadcn/UI primitives (Button, Card, etc.)
│   ├── shared/             # Reusable composite components (Header, Footer)
│   └── features/           # Feature-specific components (optional)
├── lib/
│   ├── utils.ts            # cn() helper and standard utilities
│   └── constants.ts        # App-wide constants
├── hooks/                  # Custom React hooks
├── public/                 # Static assets
└── styles/
    └── globals.css         # Global CSS and Tailwind directives
```

## Component Colocation
- **UI Primitives:** Must be in `components/ui`.
- **Feature Components:** Group by feature if complex (e.g., `components/billing/PaymentForm.tsx`).
- **Page Components:** Keep `page.tsx` thin. Extract UI into components.

## File Naming
- **Components:** PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- **Utilities:** camelCase (e.g., `formatDate.ts`, `apiClient.ts`)
- **Folders:** kebab-case (e.g., `user-profile`, `settings`) EXCEPT for components folders which *can* be PascalCase if they contain a single component, but kebab-case is safer for Next.js routes.

## Import Aliases
- `@/*` -> `./*` (Root)
- Usage: `import { Button } from "@/components/ui/button"`
