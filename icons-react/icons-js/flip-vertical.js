import * as React from "react";

const IconFlipVertical = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-flip-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1={12} y1={3} x2={12} y2={21} /><polyline points="16 7 16 17 21 17 16 7" /><polyline points="8 7 8 17 3 17 8 7" /></svg>;

export default IconFlipVertical;