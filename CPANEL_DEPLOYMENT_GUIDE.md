# cPanel Deployment Guide for Dr. Roofing FL

## Files to Upload

All the files you need to upload are in the `dist` folder. These files have been built and optimized for production.

## Step-by-Step Deployment Instructions

### 1. Access Your cPanel
- Log in to your cPanel account
- Your cPanel URL is usually: `yourdomain.com/cpanel` or `yourdomain.com:2083`

### 2. Open File Manager
- In cPanel, click on **File Manager** (usually under "Files" section)
- Navigate to `public_html` folder (this is where your website files go)

### 3. Clear Existing Files (if any)
- If there are existing files in `public_html`, you can:
  - Select all files and delete them, OR
  - Create a backup folder and move old files there

### 4. Upload Your Website Files

**Option A: Using File Manager Upload**
1. Click the **Upload** button in File Manager
2. Select ALL files from your `dist` folder:
   - `index.html`
   - `.htaccess` (important for React Router)
   - The `assets` folder (contains CSS and JS)
   - All image files from the `public` folder
3. Wait for upload to complete

**Option B: Using ZIP Upload (Faster for many files)**
1. On your computer, compress the contents of the `dist` folder into a ZIP file
2. In cPanel File Manager, click **Upload**
3. Upload the ZIP file
4. After upload, right-click the ZIP file and select **Extract**
5. Delete the ZIP file after extraction

### 5. Verify File Structure

Your `public_html` folder should look like this:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
├── logo_without_backround.png
├── ChatGPT_Image_Mar_1,_2026,_10_22_33_PM.png
├── flat_roofing.jpeg
├── metal_roofing.jpg
├── shingle_roofing.jpeg
└── tile_roofing.jpeg
```

### 6. Set File Permissions

Make sure files have correct permissions:
- **Folders**: 755
- **Files**: 644
- **.htaccess**: 644

To set permissions:
1. Right-click on a file/folder
2. Select "Change Permissions"
3. Set the appropriate number

### 7. Test Your Website

1. Visit your domain: `https://yourdomain.com`
2. Test all pages and navigation:
   - Home page
   - Fort Lauderdale Roofing
   - Hollywood Roofing
   - Hallandale Beach Roofing
   - Miramar Roofing
   - Pembroke Pines Roofing
3. Test the quote form - submit a test quote

### 8. Important: FormSubmit Email Activation

**CRITICAL STEP**: The first time someone submits the contact form, FormSubmit will send a confirmation email to **drroofingfl@gmail.com**.

1. Check the inbox for drroofingfl@gmail.com
2. Look for an email from FormSubmit
3. Click the activation link in that email
4. After activation, all future form submissions will be delivered automatically

## Troubleshooting

### Problem: Pages show 404 errors when refreshing
**Solution**: Make sure the `.htaccess` file is uploaded and has correct permissions (644)

### Problem: Images not showing
**Solution**: Make sure all image files from the `public` folder are in the root of `public_html`

### Problem: Website looks broken or unstyled
**Solution**: Make sure the `assets` folder was uploaded completely with all CSS and JS files

### Problem: Quote form doesn't work
**Solution**:
1. Make sure you activated FormSubmit (check step 8 above)
2. Test the form again after activation
3. Check spam folder for the confirmation email

### Problem: Need to use a subdomain or subfolder
If your site should be at `subdomain.yourdomain.com`:
- Use the subdomain's folder instead of `public_html`

If your site should be at `yourdomain.com/roofing`:
- Create a `roofing` folder inside `public_html`
- Upload all files there
- Update the base URL in the `.htaccess` file: change `RewriteBase /` to `RewriteBase /roofing/`

## SSL Certificate (HTTPS)

For security and SEO, you should enable SSL:
1. In cPanel, go to **SSL/TLS Status**
2. If you have AutoSSL enabled, it will automatically install a free SSL certificate
3. Check the box next to your domain and click "Run AutoSSL"
4. Wait a few minutes for the certificate to install

## Domain Setup

Make sure your domain is pointing to your hosting:
- **Nameservers**: Should be set to your hosting provider's nameservers
- **DNS**: Wait 24-48 hours for DNS propagation if you just changed nameservers

## Files Summary

### What's in the dist folder:
- **index.html**: Main HTML file (entry point)
- **.htaccess**: Server configuration for React Router and caching
- **assets/**: Optimized CSS and JavaScript files
- **Images**: All your roofing images and logos

### Important Notes:
- The website uses Supabase for the backend (already configured)
- Email sending uses FormSubmit (no server-side code needed)
- All environment variables are built into the JavaScript files
- No database or PHP required on your hosting

## Need Help?

If you encounter issues:
1. Check the browser console for errors (F12 → Console tab)
2. Verify all files uploaded correctly
3. Check file permissions
4. Contact your hosting provider's support if needed

---

**Your website is now ready to go live!** 🎉
