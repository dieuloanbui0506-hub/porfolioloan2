# Step-by-Step Deployment & Backup Guide

This guide walks you through deploying your portfolio online with **GitHub**, **Vercel**, and backing up contact messages with **Firebase Firestore**.

---

## Part 1: Save & Sync Code to GitHub

You have two easy ways to upload your code to GitHub:

### Option A: Using GitHub Web Interface (No software installation required)
1. Go to [github.com](https://github.com) and log in.
2. Click the **`+`** icon in the top right corner and select **New repository**.
3. Repository name: `my-portfolio` (or `bui-dieu-loan-portfolio`).
4. Set visibility to **Public** (or **Private**). Do not check "Add a README" since we already have one. Click **Create repository**.
5. On the next screen, click the link: **"uploading an existing file"**.
6. Drag and drop all your files and the `assets` folder from `c:\Users\Asus\Desktop\My Porfolio`:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `assets/` (`profile.jpg` and `Bui_Dieu_Loan_CV.pdf`)
7. Click **Commit changes**. Your code is now safely backed up on GitHub!

### Option B: Using GitHub Desktop / Git CLI
1. Download & install [GitHub Desktop](https://desktop.github.com/).
2. Click **File -> Add Local Repository** and choose `c:\Users\Asus\Desktop\My Porfolio`.
3. Click **Publish repository** to sync it directly to your GitHub account.

---

## Part 2: Deploy to Vercel (Free 24/7 Hosting)

Once your code is on GitHub, Vercel connects automatically and redeploys whenever you make updates.

1. Go to [vercel.com](https://vercel.com) and click **Sign Up** (choose **Continue with GitHub**).
2. On your Vercel Dashboard, click **Add New... -> Project**.
3. Under **Import Git Repository**, find your `my-portfolio` repository and click **Import**.
4. Project Configuration:
   - **Framework Preset**: Leave as `Other` (plain HTML/CSS/JS).
   - **Root Directory**: `./` (default).
5. Click **Deploy**.
6. Within 10–20 seconds, your site will be live at a public URL (e.g., `https://bui-dieu-loan-portfolio.vercel.app`) with free SSL (HTTPS) and high-speed global CDN!

---

## Part 3: Firebase to Backup Form Submissions / Inquiries

You can backup and store every contact form submission directly in a cloud database (**Firebase Firestore**) so you never lose an inquiry, even if an email lands in spam.

### 1. Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/) and sign in with your Google account.
2. Click **Add project** (name it e.g., `dieu-loan-portfolio`).
3. (Optional) Disable Google Analytics or leave it default, then click **Create project**.

### 2. Enable Firestore Database
1. In the left menu under **Build**, click **Firestore Database**.
2. Click **Create database**.
3. Choose location (e.g., `asia-southeast1` for Singapore/Vietnam low latency).
4. For security rules, select **Start in production mode** (or test mode for 30 days testing).
5. Click **Create**.

### 3. Add Web App & Get Config Keys
1. In Project Overview, click the **Web icon** (`</>`) to register a web app.
2. App nickname: `portfolio-web`.
3. Firebase will show your `firebaseConfig` snippet:
   ```javascript
   const firebaseConfig = {
     apiKey: "...",
     authDomain: "...",
     projectId: "...",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "..."
   };
   ```
4. Copy these keys into your project configuration.

### 4. Firestore Security Rule (Allowing Public Contact Submissions)
In Firestore -> **Rules** tab, set:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /inquiries/{inquiryId} {
      allow create: if request.resource.data.name != "" 
                    && request.resource.data.email != "";
      allow read, update, delete: if false; // Only you can view via Firebase Console
    }
  }
}
```
Now every inquiry is securely backed up in your Firebase Console dashboard under the `inquiries` collection, in addition to sending to your email!
