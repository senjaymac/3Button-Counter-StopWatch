/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}