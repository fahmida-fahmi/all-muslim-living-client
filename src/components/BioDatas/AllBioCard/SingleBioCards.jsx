import React from 'react';
import femalePic from '../../../assets/Avater for Stattstics/female.jpg';
import malePic from '../../../assets/Avater for Stattstics/male.png';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Card, CardContent, Skeleton } from '@mui/material';
import useLoading from '../../Hooks/useLoading';

const SingleBioCards = ({ biodatasInfo }) => {
  const [loading] = useLoading();
  const { _id, generalInfo, occupationIncome } = biodatasInfo;

  const presentYear = new Date().getFullYear();
  const birthYear = generalInfo?.birthYear?.split('-')[0];
  const age = birthYear ? presentYear - parseInt(birthYear) : 'N/A';

  return (
    <Card className="bg-white shadow-md rounded-lg p-5 hover:shadow-2xl transition-shadow duration-300">
      <div className="lg:flex  md:block md:justify-between   md:grid-cols-4 md:items-center ">
        {/* Avatar */}
        <div className="flex justify-center md:justify-center">
          <CardContent 
          className="p-0"
          sx={{
            padding: '0px', // overrides last-child padding too
            '&:last-child': {
              paddingBottom: '0px',
            }
          }}
          >
            {loading ? (
              <Skeleton animation="wave" variant="circular" width={64} height={64} />
            ) : (
              <img
                className="lg:w-20 md:w-16 w-16 lg:h-20 md:h-14 h-16 rounded-full border border-red-950 p-0"
                src={generalInfo.biodataType === 'Female' ? femalePic : malePic}
                alt="Profile"
                
              />
            )}
          </CardContent>
        </div>

        {/* Info */}
        <div className="md:col-span-2 text-center md:text-left text-sm py-4">
          {loading ? (
            <>
              <Skeleton animation="wave" height={20} width="100%" />
              <Skeleton animation="wave" height={20} width="40%" />
              <Skeleton animation="wave" height={20} width="50%" />
              <Skeleton animation="wave" height={20} width="70%" />
            </>
          ) : (
            <>
              <h3 className="text-emerald-700 font-bold">AIL - {generalInfo.bioDataId}</h3>
              <p>Age - <span className="text-gray-500">{age}</span></p>
              <p>Height - <span className="text-gray-500">{generalInfo.height}</span></p>
              {generalInfo.biodataType === 'Female' ? (
                <p>Complexion - <span className="text-gray-500">{generalInfo.complexion}</span></p>
              ) : (
                <p>Occupation - <span className="text-gray-500">{occupationIncome.occupation}</span></p>
              )}
            </>
          )}
        </div>

        {/* View Button */}
        <div className="flex justify-center md:justify-end">
          {!loading && (
            <Link
              to={`/biodatas/${_id}`}
              className="border py-1 px-3 text-emerald-600 border-emerald-500 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 text-sm flex items-center"
            >
              Biodata <KeyboardDoubleArrowRightIcon fontSize="small" />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default SingleBioCards;
