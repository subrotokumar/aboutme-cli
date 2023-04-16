import { FC } from "react";
import { help } from "../helper"

const Help: FC = () => {
    return (
        <div>
            {help.map(item => {
                return (
                    <div className="line">
                        <p className="keyword">{item.at(0)}</p>
                        <p className="info">{item.at(1)}</p>
                    </div>
                );
            })}

        </div>
    );
}

export default Help;