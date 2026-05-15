# FitCV - AI Resume Gap Analyzer 🚀

**Submission for the Shortcut Asia Internship Challenge 2026**

FitCV is a smart, frontend-focused web application designed to help candidates align their skills with their dream roles. By analyzing a user's resume against a target Job Description (JD), FitCV highlights validated skills, exposes missing requirements, and provides actionable strategic advice.

## 🛠 Tech Stack

* **Frontend Framework:** React (initialized via Vite for speed and optimized builds)
* **Language:** TypeScript (for strict data typing and enterprise-level reliability)
* **Styling:** Tailwind CSS (for a clean, responsive, and commercial-grade UI/UX)

## ✨ Key Features & Architecture

* **Defensive UI/UX:** The interface utilizes React state management to prevent invalid API calls (e.g., the analyze button remains disabled until both text areas are populated).
* **Visual Data Parsing:** Transforms complex AI text outputs into highly digestible, color-coded visual cues (Green for matches, Red for gaps).
* **Mocked Data Strategy (Hackathon approach):** Given the shortened 1-week build period, the AI analysis engine currently utilizes a mocked JSON payload to guarantee a flawless, testable demonstration of the user flow and component architecture. The system defines a strict `MatchResult` TypeScript interface, making it 100% ready to plug into a real LLM endpoint (like Gemini or OpenAI API) with zero frontend structural changes.

---

## 💻 How to Run the Project Locally

Follow these steps to get the FitCV development server running on your machine.

### Prerequisites
Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your computer.

### Step-by-Step Setup

1. **Open your terminal** and navigate into the project folder (if you just cloned the repository):
   ```bash
   cd fitcv

2. **Install all dependencies**:
    Run the following command to download React, TypeScript, Tailwind CSS, and other required packages.
    ```bash
    npm install

3. **Start the development server**:
    ```bash
    npm run dev

4. **View the Application**:
Once the server boots up, Vite will display a local server link in your terminal.
Simply Ctrl + Click the link (usually http://localhost:5173) or copy and paste it into your web browser.
