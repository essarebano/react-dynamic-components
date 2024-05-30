/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTHOR_NAME: string
}

interface ImportMeta {
  readonly env: ImportMeta
}
