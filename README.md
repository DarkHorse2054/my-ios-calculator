# 📱 iOS-Inspired Web Calculator

A sleek, responsive, and fully functional web-based calculator designed to mimic the elegant user interface and experience of the iOS calculator app.

[Image of an iPhone calculator app UI]

---

## ✨ Features

* **iOS Aesthetic:** Clean design, subtle gradients, rounded buttons, and a color palette inspired by Apple's iconic calculator.
* **Basic Arithmetic:** Supports addition, subtraction, multiplication, and division.
* **Functionality:** Includes 'All Clear' (AC), 'Change Sign' (+/-), and 'Percentage' (%) functions.
* **Responsive Layout:** (Optional - add if you make it truly responsive) Adapts to various screen sizes, providing a consistent experience across devices.
* **Intuitive Interaction:** Smooth button press animations and clear display updates.

---

## 🛠️ Technologies Used

* **HTML5:** For the structural layout of the calculator.
* **CSS3:** For styling and creating the iOS-like visual design.
* **JavaScript (ES6+):** For all the calculator's core logic and interactivity.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser to view and use this calculator.

### Installation

1.  **Clone the repository (if hosted on GitHub):**
    ```bash
    git clone [https://github.com/your-username/iOS-Calculator.git](https://github.com/your-username/iOS-Calculator.git)
    ```
    (Replace `your-username` with your GitHub username and `iOS-Calculator.git` with your repository name.)

    **OR, if you downloaded the files directly:**
    Ensure you have the following three files in the same folder:
    * `index.html`
    * `style.css`
    * `script.js`

### Usage

1.  Open the `index.html` file in your preferred web browser (e.g., Chrome, Safari, Firefox).
2.  Start performing calculations!

---

## 📱 Testing on iPhone

You can easily test this calculator on your iPhone using a local server or by hosting it online.

### Option 1: Local Server (Requires iPhone and Mac on the Same Wi-Fi)

1.  **Open Terminal** on your Mac.
2.  **Navigate to your project folder**:
    ```bash
    cd /path/to/your/iOS_Calculator_Folder
    ```
    (You can also type `cd ` and drag your folder into the Terminal window.)
3.  **Start a simple HTTP server**:
    ```bash
    python3 -m http.server
    ```
    This will typically serve the content on `port 8000`.
4.  **Find your Mac's local IP address**:
    * In a new Terminal window: `ipconfig getifaddr en0` (for Wi-Fi)
    * Or via System Settings > Network > Wi-Fi > Details.
5.  **On your iPhone**, open Safari and enter your Mac's IP address followed by `:8000` (e.g., `http://192.168.1.100:8000`).

### Option 2: Host Online (Accessible Anywhere)

For a more permanent and accessible solution, consider using free hosting services for static websites:

* **GitHub Pages:** Upload your files to a public GitHub repository, then enable GitHub Pages in your repository settings.
* **Netlify Drop:** Drag and drop your project folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for instant deployment.
* **Vercel:** Similar to Netlify, Vercel offers quick deployments directly from your project folder or Git repository.

---

## ✍️ Author
Dark Horse

---

## 🤝 Contributing

Contributions are always welcome! If you have suggestions for improvements or new features, please feel free to open an issue or submit a pull request.

---

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---
