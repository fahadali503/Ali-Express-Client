import React, { useState } from 'react';
import { ICategory } from '../../../../response-types/categories-response.types';

interface IProps {
    updateCategory: (text: string, catId: string) => void;
    category: ICategory;
}
export const AdminEditCategory = ({ updateCategory, category }: IProps) => {
    const [text, setText] = useState(category.title);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text) {
            updateCategory(text, category._id)
        }
    }


    return <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Category</h1>

            <p className="mt-4 text-gray-500">
                Add Category!(This is the sub category of Root Category)
            </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            <div>
                <label htmlFor="email" className="sr-only">Category</label>
                <div className="relative">
                    <input
                        type="text"
                        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                        placeholder="Enter Category"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <button type="submit" className="w-full block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg">
                    Add Category
                </button>
            </div>
        </form>
    </div>
};
