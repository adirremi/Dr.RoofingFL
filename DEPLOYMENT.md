# How to Deploy to cPanel

## Method 1: File Manager (Easiest)

1. **Log into your cPanel account**
   - Go to your hosting provider's cPanel URL
   - Enter your username and password

2. **Navigate to File Manager**
   - Find and click "File Manager" in cPanel
   - Navigate to `public_html` (or your domain's root directory)

3. **Clear existing files (if any)**
   - Select all existing files in `public_html`
   - Click "Delete" (backup first if needed)

4. **Upload the dist folder contents**
   - Click "Upload" button in File Manager
   - Select ALL files from the `dist` folder:
     - `index.html`
     - `.htaccess`
     - The entire `assets` folder
   - Wait for upload to complete

5. **Set permissions**
   - Select `.htaccess` file
   - Click "Permissions" or "Change Permissions"
   - Set to 644

6. **Visit your website**
   - Go to https://drroofingflorida.com
   - The site should now be live!

---

## Method 2: FTP (Recommended for larger sites)

1. **Get FTP credentials from cPanel**
   - In cPanel, find "FTP Accounts"
   - Create a new FTP account or use existing credentials

2. **Download an FTP client**
   - FileZilla (free): https://filezilla-project.org/
   - Or use any FTP client you prefer

3. **Connect to your server**
   - Host: ftp.drroofingflorida.com (or your server IP)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

4. **Upload files**
   - Navigate to `public_html` on the remote server
   - Delete existing files (backup first!)
   - Upload ALL contents from the `dist` folder:
     - `index.html`
     - `.htaccess`
     - `assets` folder with all files inside

5. **Verify permissions**
   - Right-click `.htaccess`
   - Set permissions to 644

---

## Method 3: cPanel File Manager with ZIP

1. **Create a ZIP file**
   - Zip all contents of the `dist` folder (not the folder itself)

2. **Log into cPanel File Manager**
   - Navigate to `public_html`

3. **Upload ZIP file**
   - Click "Upload"
   - Select your ZIP file
   - Wait for upload to complete

4. **Extract files**
   - Select the uploaded ZIP file
   - Click "Extract"
   - Choose to extract to `public_html`
   - Delete the ZIP file after extraction

5. **Set .htaccess permissions to 644**

---

## Important Notes

### Domain Configuration
- Ensure your domain DNS is pointing to your cPanel server
- Wait 24-48 hours for DNS propagation if you just changed it

### SSL Certificate
- In cPanel, go to "SSL/TLS Status"
- Enable AutoSSL or install a Let's Encrypt certificate
- This is FREE and takes 5 minutes

### Testing
After deployment, test these URLs:
- https://drroofingflorida.com
- https://drroofingflorida.com/hollywood-roofing
- https://drroofingflorida.com/fort-lauderdale-roofing
- https://drroofingflorida.com/pembroke-pines-roofing
- https://drroofingflorida.com/miramar-roofing
- https://drroofingflorida.com/hallandale-beach-roofing

### Troubleshooting

**Problem: Pages show 404 error**
- Solution: Make sure `.htaccess` file is uploaded and has correct permissions (644)

**Problem: CSS/JS not loading**
- Solution: Check that the `assets` folder uploaded correctly
- Clear your browser cache

**Problem: Mixed content warnings**
- Solution: Ensure SSL certificate is installed and HTTPS is working

**Problem: Site not loading at all**
- Solution: Check that files are in `public_html`, not in a subfolder

---

## Files to Upload

From the `dist` folder, upload:
```
index.html
.htaccess
assets/
  ├── index-BA9FP_Xj.css
  └── index-DHwlSs16.js
```

**Total files: 4 items (including assets folder with 2 files inside)**

---

## After Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works between pages
- [ ] Phone number is clickable on mobile
- [ ] SSL certificate is active (https://)
- [ ] No console errors in browser
- [ ] Test on mobile and desktop
- [ ] Submit sitemap to Google Search Console
