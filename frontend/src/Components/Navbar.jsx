import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { LogOut, Search } from 'lucide-react';
  

const Navbar=()=>{

    const { logout, user } = useContext(AuthContext);
    const [search, setSearch] = useState('');

    return (
        <>
              <nav className="border-b-4 border-black bg-white px-6 py-4 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.1)] gap-4">
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2 md:mb-0 shrink-0">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-xl rounded-sm">N</div>
            <h1 className="text-3xl font-black tracking-tighter italic">Kavya<span className="text-[#8B5CF6]">Notes</span></h1>
        </div>

        {/* 2. SEARCH BAR (In Navbar) */}
        <div className="relative w-full max-w-xl mx-auto md:mx-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/50 font-bold w-5 h-5" strokeWidth={3} />
            <input 
                type="text" 
                placeholder="Search..." 
                className="w-full border-2 border-black pl-10 p-2 rounded-full text-base font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-none transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        
        {/* 3. User & Logout Section */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end shrink-0">
            <span className="font-bold bg-[#F3F4F6] px-3 py-1 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hidden sm:block">
                @{user?.name || 'Anon'}
            </span>
            <button 
              onClick={logout} 
              className="bg-[#EF4444] text-white border-2 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-2"
            >
              <LogOut size={18} /> <span className="hidden md:inline">LOGOUT</span>
            </button>
        </div>
      </nav>
        </>
    )
}
      

export default Navbar 