import React from "react";
import "./style.scss";
import { isString } from "lodash";

const ReadMore: React.FC<{
    address: string;
    children: string;
}> = ({ children, address }) => {
    const text = children;

    return (
        <p className="text ">
            {isString(text) && text.slice(0, 500)}
            {text.trim().length > 500 && <span>...</span>}
        </p>
    );
};

export default ReadMore;
