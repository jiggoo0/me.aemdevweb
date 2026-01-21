/** @format */
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  // ข้ามโฟลเดอร์ที่ไม่ต้องการตรวจ
  {
    ignores: [".next/**", "node_modules/**", "public/**"],
  },

  // นำค่าคอนฟิกของ Next.js มาประยุกต์ใช้ใน Flat Config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ตั้งค่ากฎเพิ่มเติม
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  },
];

export default eslintConfig;
