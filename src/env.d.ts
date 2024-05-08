/// <reference types="vite/client" />

declare interface ImportMetaEnv {
    VITE_NAME: string
    VITE_CORE_BASEURL: string
    VITE_CORE_ORIGIN: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
