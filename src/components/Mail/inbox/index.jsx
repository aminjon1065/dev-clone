import React from 'react';
import {API_APP} from "../../../VARIABLES";
import {ImStarEmpty, ImStarFull} from "react-icons/im";
import {IconContext} from "react-icons";

const Index = ({msg}) => {
    const back_public = 'http://agency.test/'
    return (
        <ul className="list-group p-2">
            {
                msg.map((el) => {
                    return (
                        <li className={`list-group-item d-flex justify-content-between align-items-start ${el.opened ? 'bg-apple-milk' : null}`}
                            key={el.id}>
                            <span>

                                <IconContext.Provider value={{className: el.opened ? "text-warning" : null}}>
                                    {
                                        el.opened
                                            ?
                                            <div>
                                                <ImStarFull/>
                                            </div>
                                            :
                                            <div>
                                                <ImStarEmpty/>
                                            </div>
                                    }

                                </IconContext.Provider>
                            </span>
                            <div className="ms-2 me-auto">

                                <div className="fw-bold">{el.title}</div>
                                {el.description}
                            </div>
                            <span className="badge ">
                                    {
                                        el.files_link.map((img) => {
                                            return (
                                                <img src={back_public + img} alt={img} key={img} width={40}/>

                                            )
                                        })
                                    }
                                </span>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Index;