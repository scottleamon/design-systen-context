# Design System Workbench

This project is a preview and workbench environment for the Design System context.

## Design Context
The "Source of Truth" for design rules, tokens, and components is located in the [**`.design-system-context/`**](./.design-system-context/) folder. 

This folder is self-contained and can be shared across different project repositories to maintain a consistent AI context.

## Workbench Features
- **Documentation Viewer**: Renders the markdown files from the context folder.
- **Component Preview**: (Internal) testing ground for design system implementations.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) (or the port specified in the console) to view the documentation.

## Deployment
This project is configured for deployment to Vercel. Ensure you point the Vercel project to this repository root.
