/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
    reactStrictMode: true,
    env: {
        AUTH_API: process.env.AUTH_API,
    },
};

module.exports = nextConfig;
