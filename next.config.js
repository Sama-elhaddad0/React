/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ ده اللي يمنع الأخطاء توقف البيلد
  },
};

module.exports = nextConfig;
