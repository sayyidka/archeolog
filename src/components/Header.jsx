import React from 'react'
import Github from './Github'
import hieroglyph from "../assets/hieroglyph.png"

function Header() {
    return (
        <header className="flex justify-between items-center">
            <div className="flex items-center">
                <img src={hieroglyph} alt="hieroglyph-logo" className="h-10 w-10" />
                <h1 className="text-xl font-bold text-slate-900">
                    Archeolog
                </h1>
            </div>
            <a
                className="flex max-w-fit items-center justify-around space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100"
                href="#"
                target="_blank"
                rel="noreferrer"
            >
                <Github />
                <p>Star on GitHub</p>
            </a>
        </header>
    )
}

export default Header