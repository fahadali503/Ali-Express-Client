import React, { useState } from 'react';
import { ICategory, IRootCategory } from '../../../../response-types/categories-response.types';

interface IProps {
    rootCategories?: IRootCategory[];
    categories?: ICategory[];
    handleAddSubCategory: (text: string, rootCategoryId: string, categoryId: string) => void

}

export const AdminAddSubCategories = ({ handleAddSubCategory, categories, rootCategories }: IProps) => {
    const [text, setText] = useState('');
    const [rootCategory, setRootCategory] = useState<string | null>(null);
    const [category, setCategory] = useState<string | null>(null);

    if (!rootCategories || !categories) {
        return null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text && rootCategory && category) {
            handleAddSubCategory(text.trim(), rootCategory, category);
        }
    }

    return <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Sub Category</h1>

            <p className="mt-4 text-gray-500">
                Add Sub Category!(This is the sub category of the Category)
            </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            <div>
                <select className="block w-52 mx-auto text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    onChange={e => {
                        setRootCategory(e.target.value)
                        setCategory(null)
                    }}
                >
                    <option disabled selected >Choose Root Category</option>
                    {rootCategories.map(c => <option value={c._id} key={c._id}>{c.title}</option>)}
                </select>
                {
                    rootCategory && <select className="block mt-4 w-52 mx-auto text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        onChange={e => setCategory(e.target.value)}
                        value={category || ""}
                    >
                        <option value={''} selected >Choose Category</option>
                        {categories.filter(c => c.rootCategory === rootCategory).map(c => <option value={c._id} key={c._id}>{c.title}</option>)}
                    </select>
                }
            </div>
            <div>
                <label htmlFor="email" className="sr-only">Sub Category</label>
                <div className="relative">
                    <input
                        type="text"
                        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                        placeholder="Enter Sub Category"
                        onChange={e => setText(e.target.value)}
                        value={text}
                    />
                </div>
            </div>
            <div>
                <button type="submit" className="w-full block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg">
                    Add Sub Category
                </button>
            </div>
        </form>
    </div>
};
