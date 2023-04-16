import { FC } from "react";
import { social } from "../helper"

const Social: FC = () => {
    return (
        <div>
            {social.map(item => {
                return (
                    <div className="line">
                        <p className="keyword header">{item.at(0)}:</p>
                        <p className="info">
                            <a href={item.at(1)} target="_blank">
                                {item.at(1)?.substring(8)}
                            </a>
                        </p>
                    </div>
                );
            })}

        </div>
    );
}

export default Social;