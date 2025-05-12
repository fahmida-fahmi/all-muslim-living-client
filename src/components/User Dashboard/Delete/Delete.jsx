import  { useState } from 'react';
import useBiodatasInfo from '../../Hooks/useBioData';

const Delete = () => {
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [biodatas] = useBiodatasInfo()
    const firstBiodata = biodatas || null;
    console.log(firstBiodata)
    const id = biodatas?._id || null;
    if (firstBiodata!== null ) {
        // If biodatas is an array, get the first element
        const { _id } = biodatas;
        return _id
    }

    
    // console.log(biodatas,_id);
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this biodata?");
      
        if (confirmDelete) {
          try {
            const response = await fetch(`https://all-muslim-living-server.onrender.com/biodatas/${id}`, {
              method: 'DELETE',
            });
      
            if (response.ok) {
              console.log('Biodata deleted');
              alert('Biodata deleted successfully!');
              // Optionally, refetch the biodata list or update UI state
            } else {
              const errorData = await response.json();
              alert(`Failed to delete: ${errorData.message || 'Unknown error'}`);
            }
          } catch (error) {
            console.error('Error deleting biodata:', error);
            alert('An error occurred while deleting.');
          }
        } else {
          alert('Please confirm before deleting.');
        }
      };
      

    
    return (
        <div className='flex flex-col items-center'>
          {
            firstBiodata ? 
            <section className=''>
                <h2 className="text-xl font-semibold text-gray-700 mb-2 py-3">Delete Biodata</h2>
                <hr className="mb-4" />
                <p className="text-sm text-gray-600 mb-4">
                    If it is temporary you can hide it from the sidebar menu. This action will be permanently deleted your biodata.
                </p>
                <div className="flex items-start space-x-2 mb-6">
                    <input
                        type="checkbox"
                        checked={confirmDelete}
                        onChange={() => setConfirmDelete(!confirmDelete)}
                        className="mt-1"
                    />
                    <label className="text-sm text-gray-700">
                        I understand and would like to delete this biodata.
                    </label>
                </div>
                <button
                    onClick={() => handleDelete(id)}
                    className="w-48 py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-700 to-pink-500 shadow-lg hover:opacity-90 transition"
                >
                    Delete Biodata
                </button>
            </section>
            :
            <h1 className='text-red-400 text-2xl font-semibold py-3'>
                No biodata found to delete. Please create a biodata first.
            </h1>
            // )
          }
            
        </div>
    );
};

export default Delete;