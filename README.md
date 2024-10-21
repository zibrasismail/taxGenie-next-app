# TaxGenie

TaxGenie is a web application designed to simplify tax management for individuals and small businesses. It provides an intuitive dashboard for tracking income, expenses, and tax obligations.

## Features

- User authentication (login/register)
- Dashboard overview of financial metrics
- Transaction management
- Tax performance analysis
- CSV upload for bulk data entry
- Responsive design for mobile and desktop

## Tech Stack

- Next.js 13+ (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Environment Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tax-genie.git
   cd tax-genie
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add any necessary environment variables:
   ```
   NEXT_PUBLIC_API_URL=your_api_url_here
   ```

4. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains the main application pages and layouts
- `components/`: Reusable React components
- `lib/`: Utility functions and shared logic
- `public/`: Static assets
- `styles/`: Global styles and Tailwind CSS configuration
