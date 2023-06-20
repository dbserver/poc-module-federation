
import { useState } from "react";
import styles from "./index.module.scss";


interface DrawerProps {
    children: React.ReactNode
}

export function Drawer({ children }: DrawerProps) {
    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    }

    return (
        <>
            <button onClick={handleDrawer}>Open</button >
            <div className={`${styles.drawer} ${open && styles.open}`}>
                {children}
            </div >
        </>
    )
}