import React, { useState } from 'react'

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState();
    const [isOpen, setIsOpen] = useState();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setIsOpen(false); 
    };

return (
    <div className="flex flex-col items-center mt-10">
            <button 
                onClick={toggleMenu} 
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                تغییر زبان
            </button>

            {isOpen && (
                <div className="mt-2 bg-white border border-gray-300 rounded shadow-md">
                    <button 
                        onClick={() => changeLanguage('fa')} 
                        className="block w-full text-left p-2 hover:bg-gray-200"
                    >
                        فارسی
                    </button>
                    <button 
                        onClick={() => changeLanguage('en')} 
                        className="block w-full text-left p-2 hover:bg-gray-200"
                    >
                        English
                    </button>
                </div>
        
            
            )}

{/* <div className='mt-4'> <h1 className='text-lg font-bold'> {language === 'fa'?} </h1></div> */}
    
            </div>
    
)
}

export default LanguageSwitcher
