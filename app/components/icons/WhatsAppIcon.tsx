import * as React from "react";

export type WhatsAppIconProps = React.SVGProps<SVGSVGElement>;

export function WhatsAppIcon({ width = 24, height = 24, ...props }: WhatsAppIconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden={props["aria-label"] ? undefined : true}
            {...props}
        >
            <path
                d="M12 21a9 9 0 0 0 7.74-13.6A9 9 0 1 0 4.05 19.5L3 22l2.6-1.02A8.95 8.95 0 0 0 12 21Z"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinejoin="round"
            />
            <path
                d="M9.2 8.4c.3-.7.6-.8 1.2-.8h.5c.2 0 .5 0 .7.5l.7 1.7c.1.3.1.5 0 .7l-.4.5c-.2.2-.2.4 0 .7.5 1.1 1.4 2 2.5 2.5.3.2.5.2.7 0l.5-.4c.2-.2.4-.1.7 0l1.7.7c.5.2.5.5.5.7v.5c0 .6-.1.9-.8 1.2-.7.3-2.1.3-3.7-.4-1.5-.7-3.2-2.1-4.3-4.3-.7-1.6-.7-3-.4-3.7Z"
                stroke="currentColor"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

