import React, { ChangeEvent, useRef, useState } from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import plugins from 'suneditor/src/plugins'
import { Input } from '../../../../components/inputs/Input';
import { Text } from '../../../../components/text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { DangerButton } from '../../../../components/buttons/DangerButton';
import { createNewProduct } from '../../../../store/slices/productSlice';
import toast from 'react-hot-toast';

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});

interface IProps {
    handleCreateNewProduct: (data: FormData) => void;
}

export const SellerAddProductForm = ({ handleCreateNewProduct }: IProps) => {
    const [content, setContent] = useState('')
    const [hidden, setHidden] = useState(false)
    const [rootCategory, setRootCategory] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [values, setValues] = useState({ title: '', price: '0', discount: '0', stock: '0' });
    const [images, setImages] = useState<FileList[] | never[]>([]);
    const dispatch = useDispatch();

    const product = useSelector((state: RootState) => state.product.newProduct);
    const { rootCategories, categories, subCategories } = useSelector((state: RootState) => ({ rootCategories: state.categories.rootCategories, categories: state.categories.categories, subCategories: state.categories.subCategories }))

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        dispatch(createNewProduct({ ...product, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { discount, price, stock, title } = values;
        const formData: any = new FormData();

        if (discount && price && stock && title && content && category && rootCategory && images.length > 0) {
            formData.append('title', title);
            formData.append('description', content);
            formData.append('rootCategoryId', rootCategory);
            formData.append('categoryId', category);
            formData.append('subCategoryId', subCategory);
            formData.append('discount', discount);
            formData.append('price', price);
            formData.append('stock', stock);
            images.forEach((img, i) => {
                formData.append(`image-${i}`, img)
            });
            return handleCreateNewProduct(formData)
        } else {
            return toast.error("All fields are required.")
        }
    }

    return <div>
        <div className=''>
            <form onSubmit={handleSubmit}>
                <div className='shadow-md  px-6 py-6 rounded-lg border-t'>
                    <div className='w-11/12'>
                        <Input label='Product Title' handleChange={handleChange} name='title' placeholder='Product Title here..' type={'text'} className='w-full'
                            value={values.title}
                        />
                    </div>
                    <div className='w-11/12 '>
                        <Text title='Product Description' />
                        <SunEditor
                            onChange={val => setContent(val)}
                            setOptions={{
                                plugins: plugins,
                                buttonList: [
                                    ['undo', 'redo'],
                                    ['font', 'fontSize', 'formatBlock'],
                                    ['paragraphStyle', 'blockquote'],
                                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                    ['fontColor', 'hiliteColor', 'textStyle'],
                                    ['removeFormat'],
                                    '/', // Line break
                                    ['outdent', 'indent'],
                                    ['align', 'horizontalRule', 'list', 'lineHeight'],
                                    ['table', 'link', 'image', /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                                    /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                                    ['fullScreen', 'showBlocks', 'codeView'],
                                    ['preview']
                                ]
                            }}
                        />
                    </div>
                </div>

                {/* Product Properties */}
                <div className='shadow-lg rounded-lg   px-4 py-6 my-5'>
                    <div>
                        <Text title='Product Properties' className='underline' />
                        <div className=' px-4 grid grid-cols-3 gap-2'>
                            <div className='w-full'>
                                <Input label='Product Price' handleChange={handleChange} name='price' placeholder='$Price here..' value={`${values.price}`} type={'number'} className='w-full' />
                            </div>
                            <div className='w-full'>
                                <Input label='Product Discount Price' handleChange={handleChange} name='discount' placeholder='$Discount here..(Optional)' value={`${values.discount}`} type={'number'} className='w-full' />
                            </div>
                            <div className='w-full'>
                                <Input label='Stock' handleChange={handleChange} name='stock' placeholder='Stock' type={'number'} className='w-full'
                                    value={`${values.stock}`}
                                />
                            </div>
                            {/* Select Root Category */}
                            <div className='col-span-2'>
                                <Text title='Root Category' />
                                <select className="block w-96 mx-auto text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                    value={rootCategory}
                                    onChange={e => setRootCategory(e.target.value)}
                                >
                                    <option disabled selected >Choose Root Category</option>
                                    {rootCategories.map(c => <option value={c._id} key={c._id}>{c.title}</option>)}
                                </select>
                            </div>

                            {/* if root Category is selected */}
                            <div>
                                <Text title='Category' />
                                {
                                    rootCategory && <select className="block w-52 mx-auto text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                        onChange={e => setCategory(e.target.value)}
                                        value={category}
                                    >
                                        <option disabled selected >Choose Category</option>
                                        {categories.filter(c => c.rootCategory === rootCategory).map(c => <option value={c._id} key={c._id}>{c.title}</option>)}
                                    </select>
                                }
                            </div>

                            {/* if root & category is selected */}
                            <div className='col-span-3 px-5'>
                                <Text title='Product Sub Category (Optional)' className='text-sm font-semibold' />
                                <>
                                    {
                                        (rootCategory && category) && <select className="block w-full mx-auto text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                            onChange={e => setSubCategory(e.target.value)}
                                            value={subCategory}
                                        >
                                            <option disabled selected >Choose Sub Category</option>
                                            {subCategories.filter(c => (c.rootCategory === rootCategory) && (c.category === category)).map(c => <option value={c._id} key={c._id}>{c.title}</option>)}
                                        </select>
                                    }
                                </>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg  rounded-lg  px-4 py-6 my-5'>
                    <Text title='Varient (COMING SOON)' className='text-red-500' />
                </div>
                {/* Images */}
                <div className='my-6  shadow-lg px-4 py-6  rounded-lg border-t'>
                    <fieldset className="w-full space-y-1 text-coolGray-800">
                        <Text title='Product Images' />
                        <div className="flex mx-auto w-1/2">
                            <input type="file" name="files" id="files" className="px-8 py-12 border-2 border-dashed rounded-md border-coolGray-300 text-coolGray-600 bg-coolGray-100" accept="image/*" multiple onChange={e => setImages([...images, e.target.files!])} />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <DangerButton text='Add Product' className='w-full' type='submit' onClick={() => setHidden(!hidden)} />
                </div>
            </form>
        </div>
    </div>;
};
