import React from 'react';
import Swal from 'sweetalert2';
import useFavLists from '../../Hooks/useFavLists';
import useUsers from '../../Hooks/useUsers';
import femalePic  from '../../../assets/Avater for Stattstics/female.jpg'
import  malePic  from '../../../assets/Avater for Stattstics/male.png'
import { FiDelete } from 'react-icons/fi';
import { MdDelete, MdDeleteForever } from 'react-icons/md';
import { RiDeleteBackLine } from 'react-icons/ri';
import DeleteIcon from '@mui/icons-material/Delete';
import { IoOpenOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import useBiodatasInfo from '../../Hooks/useBioData';
import useIgnoreLists from '../../Hooks/useIgnoreLists';

const IgnoreList = () => {
  const [ignoreLists, refetch] = useIgnoreLists()
  const [userData] = useUsers()
  const [biodatas] = useBiodatasInfo()
  const navigate = useNavigate()

  const userIgnoreLists = ignoreLists

  const deleteBtn = (user) => {
    console.log(user)

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'my-confirm-btn',
        cancelButton: 'my-cancel-btn'
      }
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://all-muslim-living-server.onrender.com/ignoreLists/${user._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch()
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
                confirmButtonText: 'OK',
                customClass: {
                  confirmButton: 'my-confirm-btn'
                }
              })
            }
          })
      }
    })
  }
  return (
    <div className="w-full px-5">
      <div className="">
        <div className="flex items-center mb-6">
          {/* <button className="bg-purple-700 text-white p-2 rounded-full mr-4">
            <span className="material-icons">arrow_back</span>
          </button> */}
          <h1 className="text-3xl font-semibold text-purple-800 text-center flex-grow">Ignore List</h1>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b-gray-400 border-b">
              <tr className='text-center'>
                <th className="px-6 py-3">#</th>
                <th>Biodata Type</th>
                <th className="">Biodata No</th>
                <th className="">Birth Date</th>
                {/* <th className="">Location</th> */}
                <th className="">View Biodata</th>
                <th className="">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userIgnoreLists.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                    No data available
                  </td>
                </tr>
              ) : (
                userIgnoreLists.map((user, index) => (
                  <tr key={user.index} className="border-t text-center">
                    <td className="">{index + 1}</td>
                    <td className='flex items-center justify-center py-4'>
                    {
                    userData?.gender === "female"
                      ?
                      <img className='w-8 border border-red-900 rounded-full ' src={femalePic} alt="Female profile" />
                      :
                      <img className='w-8 border border-red-900 rounded-full' src={malePic} alt='Male Profile' />
                  }
                    </td>
                    <td className="">{user.bioDataId}</td>
                    <td className="4">{user.birthYear}</td>
                    <td className="px-8">
                      <button
                      
                      onClick={() => navigate(`/biodatas/${biodatas[0]?._id}`)}
                        className="text-red-600 hover:underline"
                        title='Go to this biodata / profile'
                        >
                          <IoOpenOutline fontSize={20}/>
                        </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteBtn(user)}
                        className="text-red-600 hover:underline"
                        title='remove from your fav lists'
                        >
                          <DeleteIcon/>
                        </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IgnoreList;
