import React, { useRef, } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { FiLink } from 'react-icons/fi';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import femalePic from "../../assets/Avater for Stattstics/female.jpg";
import malePic from "../../assets/Avater for Stattstics/male.png";
// import { useParams } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import BiodataDownload from './Download/BioDataDownload';
// import { Link } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import useUsers from '../Hooks/useUsers';
import { BiCopy } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


const SidebarCard = ({ generalInfo, _id }) => {
    const biodataRef = useRef();
    const [userData] = useUsers()
    console.log(userData?.email);
    const navigate = useNavigate();

    // function for handle fav list
    const handleFavList = () => {
        if (!userData || !userData.email) {
            alert("Please log in first to add to favorites.");
            // Optionally redirect to login page:
            navigate('/login');
            return;
        }

        const userInfo = {
            bioDataId: bioDataId,
            biodataType: biodataType,
            birthYear: birthYear.split('-')[0],
            email: userData.email, // logged-in user's email
        };

        fetch('https://all-muslim-living-server.onrender.com/favLists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Added to Fav Lists!");

            })
            .catch(err => {
                console.error(err);
                toast.error("Failed to add to Fav Lists.");
            });
    };


    // function for handle ignore list

    const handleIgnoreList = () => {
        if (!userData || !userData.email) {
            toast.error("Please log in first to add to ignore lists.");
            navigate('/login');
            return;
        }

        const userInfo = {
            bioDataId: bioDataId,
            biodataType: biodataType,
            birthYear: birthYear.split('-')[0],
            email: userData?.email,
        };

        fetch('https://all-muslim-living-server.onrender.com/ignoreLists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Added to IgnoreLists!");
            })
            .catch(err => {
                console.error(err);
                toast.error("Failed to add to IgnoreLists.");
            });
    };


    // function for handle download biodata
    const handleDownload = () => {
        const element = biodataRef.current;

        const opt = {
            margin: 0.5,
            filename: 'biodata.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    };

    // function for handle copy biodata link
    const handleCopyLink = () => {
        const biodataLink = `${window.location.origin}/biodata/${_id}`;
        console.log('hello');

        navigator.clipboard.writeText(biodataLink)
            .then(() => {
                // Optional: success feedback
                toast.success("Link copied to clipboard!");
            })
            .catch((err) => {
                toast.error("Failed to copy the link.");
                console.error("Clipboard copy failed:", err);
            });
    };

    console.log(generalInfo);
    const { bioDataId, biodataType, maritalStatus, birthYear, height, complexion, weight, bloodGroup, nationality } = generalInfo

    const info = [
        { label: 'Biodata Type', value: `${biodataType}'s Biodata` },
        { label: 'Marital Status', value: maritalStatus },
        { label: 'Birth Year', value: birthYear.split('-')[0] },
        { label: 'Height', value: height },
        { label: 'Complexion', value: complexion },
        { label: 'Weight', value: weight },
        { label: 'Blood Group', value: bloodGroup },
        { label: 'Nationality', value: nationality },
    ];

    return (
        <div className="text-white">
            <div className='bg-emerald-900 rounded-xl p-8 shadow-lg'>

                <div className="flex flex-col items-center mb-4">
                    <div className="w-24 h-24 bg-white rounded-full mb-2 flex items-center justify-center">
                        <img
                            src={generalInfo.biodataType == 'Female' ? femalePic : malePic}
                            alt="Profile Picture"
                            className="w-16 h-16"
                        />
                    </div>
                    <h2 className="text-lg font-semibold text-center">Biodata No : <span className="text-white">AIL-{generalInfo.bioDataId}</span></h2>
                </div>

                <div className="text-sm">
                    {info.map((item, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-2 py-1 border-b border-white/10"
                        >
                            <span className="font-medium border-y r p-2 border-gray-400">{item.label}</span>
                            <span className='border-y border-l p-2 border-gray-400' >{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between mt-4 gap-2">
                <button
                    onClick={handleFavList}
                    className="flex-1 bg-white text-green-600 border border-green-500 py-1 rounded-full flex items-center justify-center gap-1 hover:bg-green-50">
                    <AiOutlineCheckCircle size={18} />
                    FavList
                </button>
                <button
                    onClick={handleIgnoreList}
                    className="flex-1 bg-white text-red-600 border border-red-500 py-1 rounded-full flex items-center justify-center gap-1 hover:bg-red-50">
                    <AiOutlineCloseCircle size={18} />
                    IGNORE
                </button>
            </div>

            {/* copy the biodata link */}

            <div className="mt-3">
                <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center justify-center gap-1 bg-gradient-to-r from-emerald-900 to-lime-400 text-white py-3 rounded-full hover:opacity-90">
                    <FiLink size={18} />
                    Copy Biodata Link
                    <ToastContainer
                        position="bottom-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition={Bounce}
                    />
                </button>
            </div>

            {/* download the biodata  */}

            <div className="mt-3 pb-5">
                <button
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center gap-1 bg-gradient-to-r from-emerald-900 to-lime-400 text-white py-3 rounded-full hover:opacity-90">
                    <FileDownloadOutlinedIcon size={18} />
                    Download Biodata
                </button>
                {/* Rendered but hidden component for PDF */}
                <div style={{ display: 'none' }}>
                    <div ref={biodataRef}>
                        <BiodataDownload /> {/* Pass props as needed */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SidebarCard;
