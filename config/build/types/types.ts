export interface BuildPaths {
    entry: string,
    html: string,
    output: string
    src: string
}

export interface BuildOptions {
    port: number
    mode: 'development' | 'production'
    platform: 'mobile' | 'desktop',
    paths: BuildPaths,
}