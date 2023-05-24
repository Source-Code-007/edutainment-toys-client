import blogBG from '../../assets/img/discount.jpg'
const Blog = () => {
    return (
        <section className='bg-cover bg-center bg-slate-800 bg-blend-overlay' style={{backgroundImage: `url(${blogBG})`}} >
            <div className="min-h-[calc(100vh-72px)] flex justify-center items-center">
                <div className='max-w-7xl mx-10 md:mx-auto space-y-4 5/6 md:w-3/6'>
                    <div className="collapse collapse-plus rounded-lg" style={{ background: '#0b1315' }}>
                        <input type="checkbox" />
                        <div className="collapse-title text-primary-content">
                            01. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </div>
                        <div className="collapse-content border-t border-t-gray-500 text-primary-content">
                            <p className='p-5 text-gray-400'>
                                Access tokens and refresh tokens are used to authenticate users and grant them access to resources.
                                <br />
                                <br />
                                <span className="font-bold text-lg text-gray-200">Access Token</span> are short-lived and are used to make authenticated requests to a resource server.
                                <br />
                                <br />
                                <span className="font-bold text-lg text-gray-200">Refresh tokens</span> are longer-lived and can be used to obtain new access tokens when the old ones expire. We should store them in HTTP only cookie. But we also store them in local storage or session storage.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus rounded-lg" style={{ background: '#0b1315' }}>
                        <input type="checkbox" />
                        <div className="collapse-title text-primary-content">
                            02. Compare SQL and NoSQL databases?
                        </div>
                        <div className="collapse-content border-t border-t-gray-500 text-primary-content">
                            <p className='p-5 text-gray-400'>
                                <span className="font-bold text-lg text-gray-200">SQL Database:</span> SQL Database are relational database that store data in tables. Each table has a column and rows.
                                <br />
                                <br />
                                <span className="font-bold text-lg text-gray-200">NoSQL Database:</span> NoSQL Database are non relational database that store data in a variety of formats. Some common NoSQL data models include key-value stores, document databases, and graph databases. NoSQL database do not use SQL.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus rounded-lg" style={{ background: '#0b1315' }}>
                        <input type="checkbox" />
                        <div className="collapse-title text-primary-content">
                            03. What is express js? What is Nest JS??
                        </div>
                        <div className="collapse-content border-t border-t-gray-500 text-primary-content">
                            <p className='p-5 text-gray-400'>
                                <span className="font-bold text-lg text-gray-200">Express JS:</span> Express js is a minimal and flexible framework of Node js that provides a robust set of features for building web applications.<br />
                                <br />
                                <span className="font-bold text-lg text-gray-200">Nest JS</span> Nest.js is a framework built on top of Express.js that provides a more opinionated and structured approach to building web applications.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus rounded-lg" style={{ background: '#0b1315' }}>
                        <input type="checkbox" />
                        <div className="collapse-title text-primary-content">
                            04. What is MongoDB aggregate and how does it work?
                        </div>
                        <div className="collapse-content border-t border-t-gray-500 text-primary-content">
                            <p className='p-5 text-gray-400'>
                                <span className="font-bold text-lg text-gray-200">MongoDB</span> aggregation is a process of processing and transforming data in a MongoDB database. It allows to manipulate and transform data within the database using a set of pipeline stages. Each stage in the aggregation pipeline performs a specific operation on the input documents and passes the transformed output to the next stage. The stages can include operations like filtering, sorting, grouping, projecting, and more.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Blog;