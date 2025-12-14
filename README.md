<<<<<<< HEAD

=======
# Chatbot Integration Guide

This directory contains a standalone Chatbot component ready to be integrated into another React application (specifically one using Tailwind CSS).

## Prerequisites

Ensure your project has the following dependencies installed:

```bash
npm install framer-motion lucide-react react-markdown clsx tailwind-merge class-variance-authority @radix-ui/react-slot
```

## Integration Steps

1. **Copy Files**: Copy the entire `chatbot-integration` folder (or its contents) into your project's `src` directory (e.g., `src/chatbot`).

2. **Environment Variables**:
   The chatbot uses OpenRouter API. You need to add your API key to your project's environment variables (e.g., `.env.local`):

   ```env
   VITE_OPENROUTER_API_KEY=your_api_key_here
   ```
   
   *Note: If you are using Next.js, change `import.meta.env.VITE_OPENROUTER_API_KEY` to `process.env.NEXT_PUBLIC_OPENROUTER_API_KEY` in `components/Chatbot.tsx`.*

3. **Add the Chatbot Component**:
   Import and place the `<Chatbot />` component anywhere in your app (it uses fixed positioning, so it will appear in the bottom right corner).

   ```tsx
   import { Chatbot } from './chatbot/components/Chatbot';

   // ... inside your component
   return (
     <>
       {/* Other components */}
       <Chatbot />
     </>
   );
   ```

4. **Tailwind Configuration**:
   Ensure your `tailwind.config.js` or `tailwind.config.ts` is set up to scan the new files for classes.

   ```js
   content: [
     "./src/**/*.{js,ts,jsx,tsx}",
     // Add path to chatbot files if outside src
   ],
   ```

## Customization

You can customize the chatbot by passing props:

```tsx
<Chatbot 
  title="My Assistant"
  greeting="Hello! How can I help you?"
  placeholder="Ask me anything..."
  systemPrompt="You are a helpful assistant..."
/>
```

- **Prompt**: Edit `configs/chatbot-prompt.ts` to change the default system prompt.
- **Styling**: The component uses Tailwind CSS classes. You can modify them in `components/Chatbot.tsx` and `components/ui/*.tsx`.
>>>>>>> 220dbf0 (Chatboot)
