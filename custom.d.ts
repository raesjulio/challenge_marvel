
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
interface ImportMetaEnv {
    readonly VITE_API_KEY_PUBLIC: string
    readonly VITE_API_KEY_SECRET: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }