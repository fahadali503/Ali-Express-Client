import React, { useState } from 'react';


interface IProps {
    handleAddRootCategory: (value: string) => void
}

export const AdminAddRootCategory = ({ handleAddRootCategory }: IProps) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.length > 0) {
            handleAddRootCategory(text);
            setText('')
        }
    }

    return <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Root Category</h1>
            <p className="mt-4 text-gray-500">
                Add Root Category!(This is the base category)
            </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            <div>
                <label htmlFor="email" className="sr-only">Root Category</label>
                <div className="relative">
                    <input
                        type="text"
                        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                        placeholder="Enter Root Category"
                        onChange={e => setText(e.target.value)}
                        value={text}
                    />
                </div>
            </div>
            <div>
                <button disabled={text.length < 1} type="submit" className="w-full block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg">
                    Add Root Category
                </button>
            </div>
        </form>
    </div>
};
