import React from 'react';
import BlogContent from './BlogContent';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Blog = () => {
    return (
        <>
            <BlogContent></BlogContent>

            <PDFDownloadLink document={<BlogContent />} fileName='blog.pdf'>
                {({ loading }) => (

                    loading ?
                        'Loading please wait'
                        :
                        <button className='mt-20 text-center w-full '><span className='px-3 py-1 font-bold  border rounded'>Generate Pdf</span></button>
                )
                }

            </PDFDownloadLink>
        </>
    );
};

export default Blog;