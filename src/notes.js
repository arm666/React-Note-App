import React from 'react'
import { motion } from "framer-motion"

function Notes({ note, colorL, index }) {

    return (
        <div>
            <motion.div key={index + index} className='notes' style={{ background: colorL[index % colorL.length] }}
                layout
                transition={{
                    layoutX: { duration: 0.3 },
                    layoutY: { delay: 0.2, duration: 0.3 },
                }}
                initial={{ y: '-50px', opacity: 0 }}
                animate={{ y: '0px', opacity: 1 }}
            >
                <motion.div
                    className='notes-inner'
                    layout
                    transition={{ duration: 1 }}
                    initial={{ y: '-50px', opacity: 0 }}
                    animate={{ y: '0px', opacity: 1 }}
                >
                    <div className='title'>{note.title}</div>
                    <div className='desc'>{note.desc}</div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Notes
