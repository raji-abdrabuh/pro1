/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ضروري لـ GitHub Pages
  trailingSlash: true, // مهم لتجنب مشاكل الروابط
  basePath: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
  images: {
    unoptimized: true // مطلوب للتصدير الثابت
  },

  
};

export default nextConfig;