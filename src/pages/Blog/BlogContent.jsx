import { Document, Page, Text } from '@react-pdf/renderer';
import React from 'react';

const BlogContent = () => {
    return (
        <Document>
            <Page>

            {/* <Text>Hello world</Text> */}
        
        <>

            <div className='mt-14 my-container'>
                {/* q.1 */}
                <div className=' p-5 rounded'>
                    <h3 className='text-xl font-semibold'><Text>Q.1 Differences between uncontrolled and controlled components ?</Text></h3>
                    <div className='ml-3 mt-3'>
                        <p ><Text>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.</Text>
                        </p>

                    </div>
                </div>

                {/* q.2 */}
                <div className=' p-5 mt-8 rounded'>
                    <h3 className='text-xl font-semibold'><Text>Q.2 How to validate React props using PropTypes ?</Text></h3>
                    <div className='ml-3 mt-3'>
                        <p><Text>In react we can pass data from one component to another using props. It is possible that a component can receives wrong type of props, it can cause bug and unexpected errors. Since JavaScript dos'nt have a built-in type checking method, so many people use TypeScript and Flow. However React has an internal mechanism for props validation called PropTYpes.</Text></p>
                        <p className='font-bolder mt-1'><Text>ProTypes: </Text></p>
                        <p><Text> We can define specific types for pros of a component. If the received props are not same as our defined types then it will show a error. Lets we want to check props types of a component called PizzaCard for that we can do like this:</Text>
                            <br />
                            <div className='mt-1'><Text>{`PizzaCard.PropTypes = {`}</Text></div>
                            <div><Text>{`name: PropType.string,`}</Text></div>
                            <div><Text>{`image: PropType.string,`}</Text></div>
                            <div><Text>{`desc: PropType.string.isRequired`}</Text></div>
                            <div><Text>{`price: PropType.oneOfType([PropType.number,PropType.string]).isRequired`}</Text></div>
                            <div><Text>{`});`}</Text></div>
                        </p>

                    </div>
                </div>
                {/* q.3 */}
                <div className=' p-5 mt-8 rounded'>
                    <h3 className='text-xl font-semibold'><Text>Q.3 What is the difference between nodejs and express js.</Text></h3>
                    <div className='ml-3 mt-3'>
                        <p className='font-semibold mt-2 '><text>Node.js: </text></p>
                        <p><Text>Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. NodeJS is not a framework and it’s not a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.
                        </Text></p>
                        <p className='font-semibold mt-2 '><Text>Express.js: </Text></p>
                        <p><Text>Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.
                        </Text></p>
                        <p className='mt-3'><Text>So we can say that Node.js is a platform for building applications which are server-side  made using JavaScript. And express.js is a framework based on Node.js which is used for building web-application using Node.js event-driven architecture.</Text></p>

                    </div>
                </div>

                {/* q.4 */}
                <div className=' p-5 mt-8 rounded'>
                    <h3 className='text-xl font-semibold'><Text>Q.4 What is a custom hook, and why will you create a custom hook?</Text></h3>
                    <div className='ml-3 mt-3'>
                        <p><Text>Custom hooks are those hooks that are made by us not by React.
                            When we have some common lines of code that need to be used by multiple components, then instead of writing the same code in every component we can extract those codes and make a custom hook. And replace those codes with our custom-made code. </Text></p>
                    </div>
                </div>



            </div >
        </>
        </Page>
        </Document>
    );
};

export default BlogContent;