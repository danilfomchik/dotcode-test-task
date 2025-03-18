# Strong Junior Front-End Developer Test Tasks

This repository contains two test tasks completed for a Strong Junior Front-End Developer position.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Task 1: Interactive Workspace](#task-1-interactive-workspace)
- [Task 2: WebSocket-based Bitcoin Transactions](#task-2-websocket-based-bitcoin-transactions)
- [Code Style Guide](#code-style-guide)

## Project Overview

This repository contains two separate projects:

1. **Interactive Workspace** – A grid-based drag-and-resize UI for blocks.
2. **WebSocket-based Bitcoin Transactions** – A real-time Bitcoin transaction tracker.

Each project is structured as a separate module with its own logic and dependencies.

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- WebSockets (Blockchain API for real-time transactions)
- Local Storage (for state persistence in Task 1)

## Installation

To run the projects locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/danilfomchik/dotcode-test-task
    ```
2. Navigate to the project directory:
    ```bash
    cd dotcode-test-task
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Task 1: Interactive Workspace

### Features:

- Draggable and resizable blocks: Five blocks can be moved and resized on a grid-based layout (10px increments).
- Z-index control: Clicking a block moves it to the front.
- Delete functionality: Users can remove a block.
- Reset functionality: A "Reset" button restores the initial state.
- Persistent state: Layout is saved and restored after page refresh.

### Implementation Details:

- React with TypeScript for strict typing.
- Redux for state management.
- Local Storage for persistence.
- React Draggable and Resizable components for interactivity using react-rnd.

## Task 2: WebSocket-based Bitcoin Transactions

### Features:

- Real-time transaction updates using Blockchain WebSocket API.
- Live transaction list displaying incoming Bitcoin transactions.
- Total received transactions sum calculation.
- Controls:
    - "Start" button subscribes to transaction updates.
    - "Stop" button unsubscribes but keeps the current list.
    - "Reset" button clears the list and resets the total.

### Implementation Details:

- WebSockets for real-time data streaming.
- React and Redux for UI updates and state management.
- Efficient data handling with React useEffect and WebSocket event listeners.
- Optimized rendering using memoization.

## Code Style Guide

This project follows modern front-end best practices:

### General Rules

- Consistent formatting using Prettier.
- ESLint enforced rules to maintain clean code.
- TypeScript strict mode enabled to ensure type safety.

### Naming Conventions

- **Components**: `PascalCase` (e.g., `TransactionList.tsx`).
- **Functions and variables**: `camelCase` (e.g., `fetchBitcoinData`).
- **Constants**: `UPPER_CASE_SNAKE_CASE` (e.g., `API_URL`).

### Folder Structure

```plaintext
/src
  /components  # Reusable UI components
  /pages       # Page-level components
  /store       # Redux store and slices
  /utils       # Helper functions
  /hooks       # Custom React hooks
```

### Best Practices

- Use functional components and hooks.
- Avoid unnecessary re-renders (React.memo, useCallback, useMemo).
- Ensure accessibility (ARIA attributes, semantic HTML).

---

## Author

Fomenko Daniil – Front-End Developer

If you have any questions, feel free to reach out!
