import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchGroups } from '../../store/slice/GroupSlice';
import { useNavigate } from 'react-router-dom';


const AllGroupCategories = () => {
    const { groups, loading, error } = useSelector((state) => state.groups);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchGroups());
    }, [dispatch]);
    useEffect(() => {
        if (groups && groups.length > 0) {
            setCategories(groups.map(group => ({
                name: group.title,
                image: group.image_url,
                groupId:group._id,
            })));
        }
    }, [groups]);
    // Filter categories based on the search term
    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-[#f7f0e6] pt-24">
            <div className="w-[75%] mx-auto">
                <h1 className="text-6xl text-primary  text-center font-bold mb-4 pb-4 font-overpass">All Group Categories</h1>
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-5 border border-gray-300 rounded mb-4 w-full text-2xl outline-none"
                />
                {
                    (filteredCategories.length===0) && (
                        <h1 className="text-4xl text-center mt-7 font-semibold">No groups found</h1>
                    )
                }
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredCategories.map((category, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded shadow cursor-pointer"
                        onClick={()=>{navigate(`/groups/visit/${category.groupId}`)}}
                        >
                            <img src={category.image} alt={category.name} className="w-full h-[30vh] object-cover mb-2" />
                            <h2 className="text-2xl text-center pt-2 font-semibold">{category.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default AllGroupCategories;