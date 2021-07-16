import React, { useState } from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import SlidingPane from "react-sliding-pane";
import Link from "next/link"

import styles from "./MobileMenu.module.scss"

const MobileMenu = ({ links }) => {
    const [paneOpen, setPaneOpen] = useState(false);

    return (
        <>
            <div onClick={() => {
                console.log("Open")
                setPaneOpen(true)
            }}>
                <MenuIcon fontSize="large" />
            </div>
            <SlidingPane
                closeIcon={<div>x</div>}
                isOpen={paneOpen}
                title="Hey, it is optional pane title.  I can be React component too."
                from="right"
                width="300px"
                onRequestClose={() => {
                    console.log("Closed")
                    setPaneOpen(false)
                }}
            >
                <div className={styles.linkGroup}>
                    {links.map((link, index) => {
                        return (
                            <Link
                                key={index}
                                className={styles.link}
                                // activeClassName={MenuStyle.active_link}
                                href={link.path}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </SlidingPane>
        </>
    )
}

export default MobileMenu
