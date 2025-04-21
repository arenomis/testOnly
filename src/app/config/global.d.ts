/*
* Для работы ts с модульным ксс
* */

declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames;
    export = classNames;
}

/*
* Для работы с файлами
* */

declare module '*.png';
declare module '*.svg' {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.gif';
declare module '*.woff';
declare module '*.woff';
declare const __PLATFORM__: 'mobile' | 'desktop';